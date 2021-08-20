public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<DataObj__c> getAccounts() {
        return [
            SELECT FirstName__c, RecordDate__c
            FROM DataObj__c
            WHERE RecordDate__c = null
            WITH SECURITY_ENFORCED
            ORDER BY FirstName__c 
        ];
    }
}