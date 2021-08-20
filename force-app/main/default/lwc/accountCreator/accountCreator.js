import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import DATAOBJ from '@salesforce/schema/DataObj__c';
import FIRST_NAME_FIELD from '@salesforce/schema/DataObj__c.FirstName__c';
import RECORD_DATE_FIELD from '@salesforce/schema/DataObj__c.RecordDate__c';
export default class AccountCreator extends LightningElement {
    objectApiName = DATAOBJ;
    fields = [FIRST_NAME_FIELD, RECORD_DATE_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}