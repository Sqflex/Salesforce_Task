import { LightningElement, track, wire } from 'lwc';
import FIRST_NAME_FIELD from '@salesforce/schema/DataObj__c.FirstName__c';
import RECORD_DATE_FIELD from '@salesforce/schema/DataObj__c.RecordDate__c';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
const COLUMNS = [
    { label: 'First Name', fieldName: FIRST_NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Recorded Date', fieldName: RECORD_DATE_FIELD.fieldApiName, type: 'date' },
    { label: "Delete Record", type:"button", typeAttributes: {
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
}