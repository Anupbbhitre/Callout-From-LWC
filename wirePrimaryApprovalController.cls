public with sharing class wirePrimaryApprovalController {
    
    @AuraEnabled
    public static MainWrapper getOppRecords(Integer recLtd) {
        MainWrapper finalWrap = new MainWrapper();
        //finalWrap.isValidUser = false;
        try{
            Id loggedInUserId = UserInfo.getUserId();
            //String wireAllowedUserIds = 'DemoId andd metadeta';
            //if(wireAllowedUserIds != null && wireAllowedUserIds.contains(loggedInUserId)) {
                Opportunity[] oppList = [SELECT Id, Name, AccountId, StageName, CreatedDate FROM Opportunity WHERE StageName = 'Closed Won'];
                List<RecordWrapper> wrapperList = new List<RecordWrapper>();

                for(Opportunity opp : OppList) {
                    RecordWrapper wrap = new RecordWrapper();
                    wrap.OppId = opp.Id;
                    wrap.Name = opp.Name;
                    wrap.StageName = opp.StageName;
                    wrap.AccountId = opp.AccountId;
                    wrapperList.add(wrap);
                }
                finalWrap.Records = wrapperList;
            //}
        } catch(exception e) {
            throw new AuraHandledException(e.getMessage());
        }
         return finalWrap;
    }

    public class MainWrapper{
        //@AuraEnabled public Boolean isValidUser;
        @AuraEnabled public List<RecordWrapper> records;
    }

    public class RecordWrapper {
        @AuraEnabled public String Name      { get; set; }
        @AuraEnabled public String OppId     { get; set; }
        @AuraEnabled public String StageName { get; set; }
        @AuraEnabled public String AccountId { get; set; }
    }

}