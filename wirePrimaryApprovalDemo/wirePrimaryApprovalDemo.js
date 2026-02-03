import { LightningElement } from 'lwc';
import getOppRecords from "@salesforce/apex/wirePrimaryApprovalController.getOppRecords"
import { ShowToastEvent } from "lightning/platformShowToastEvent";

const FunndedOppColumns = [
    {
        label: "Opportunity Name",
        fieldName: "oppLink",
        sortable: "true",
        type: "url",
        typeAttributes: { label: { fieldName: "Name" }, target: "_blank" }
    },
    { label: "Name", fieldName: "Name", type: "text", cellAttributes: { alignment: 'left' }, },
    { label: "StageName", fieldName: "StageName", type: "text", cellAttributes: { alignment: 'left' },},
    { label: "AccountId", fieldName: "AccountId", type: "text", cellAttributes: { alignment: 'left' }, }
]

    
export default class WirePrimaryApprovalDemo extends LightningElement {
    isValidUser = true;
    FunndedOppColumns = FunndedOppColumns;
    recordLimit = 1000;
    isLoading = false;
    listOfOpportunity = [];

    connectedCallback() {
        this.isLoading = true;
        this.loadOpportunityRecords(this.recordLimit);
    }

    loadOpportunityRecords(oppRecordLmt) {
        const fetchRecord = getOppRecords;
        fetchRecord({ recLtd: oppRecordLmt })
            .then((data) => {
                this.listOfOpportunity = data.records.map((record) => {
                    return {
                        id: record.OppId,
                        oppLink: `/${record.OppId}`,
                        Name: record.Name,
                        StageName: record.StageName,
                        AccountId: record.AccountId
                    };
                });
                console.log('new data -- ', JSON.stringify(this.listOfOpportunity));
                this.isLoading = false;
            })
            .catch((error) => {
                this.isLoading = false;
                this.showToast(
                    'Error',
                    error?.body?.message || 'Something went wrong',
                    'error',
                    'sticky'
                );
            });
    }

    showToast(title, message, variant, mode) {
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant,
                mode
            })
        );
    }


}