import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import {deleteRecord} from 'lightning/uiRecordApi';
import {refreshApex} from '@salesforce/apex';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
 
export default class DeleteContactLwc extends LightningElement {
  @wire (getAccounts) 
  accounts;
  @track recordId;
 
  handleContactDelete(event){
     this.recordId = event.target.value;
     deleteRecord(this.recordId) 
     .then(() =>{
 
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