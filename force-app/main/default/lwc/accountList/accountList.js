import { LightningElement, track, wire } from 'lwc';
import {deleteRecord} from 'lightning/uiRecordApi';
import {refreshApex} from '@salesforce/apex';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import FIRST_NAME_FIELD from '@salesforce/schema/DataObj__c.FirstName__c';
import RECORD_DATE_FIELD from '@salesforce/schema/DataObj__c.RecordDate__c';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
const COLUMNS = [
    { label: 'First Name', fieldName: FIRST_NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Recorded Date', fieldName: RECORD_DATE_FIELD.fieldApiName, type: 'date' },
    { label: "Delete Record", type:"button", onclick: '{handleDeleteAction}', typeAttributes: {
        iconName: 'utility:delete',
        label: 'Delete Record',
        name: 'Delete Record',
        disabled: false
       }}
];
export default class AccountList extends LightningElement {
    columns = COLUMNS;
    @wire(getAccounts)
    accounts;
    @track recordId;

    handleDeleteAction(event){
        this.recordId = event.target.value;
        console.log(this.recordId);
        
        deleteRecord(this.recordId).then(() =>{
 
            const toastEvent = new ShowToastEvent({
                title:'Record Deleted',
                message:'Record deleted successfully',
                variant:'success',
            })
            this.dispatchEvent(toastEvent);
     
            return refreshApex(this.accounts);
        })
    }
}