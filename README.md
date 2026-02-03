# Wire Primary Approval – Salesforce Project

## 📖 Overview
Wire Primary Approval is a Salesforce solution designed to manage funded Opportunities that require Primary Queue approval before wire processing.

The application provides:
- Lightning Web Component (LWC) UI for reviewing funded Opportunities
- Approve and Manual/Bypass actions
- Batch Apex callout processing
- Integration-ready architecture for external wire systems

This project follows a scalable Apex + LWC layered design suitable for enterprise Salesforce implementations.

---

## 🚀 Features

✅ Display LCF Wires Funded Opportunities  
✅ Approve records from Primary Queue  
✅ Manual / Bypass approval option  
✅ Batch Apex Callout Integration  
✅ Expandable reusable LWC section  
✅ Error handling with Toast notifications  

---

## 🏗️ Architecture

The project uses a layered architecture:

- **LWC (UI Layer)**
  - `wirePrimaryApprovalDemo`
  - `expandableSection`

- **Controller Layer**
  - `wirePrimaryApprovalController`

- **Service Layer**
  - Approval logic
  - Integration processing

- **Batch Layer**
  - External API callouts

---

## 📂 Project Structure
wire-primary-approval/
│
├── README.md
├── .gitignore
├── sfdx-project.json
├── package.json
│
├── force-app/
│   └── main/
│       └── default/
│
│           ├── classes/
│           │   ├── wirePrimaryApprovalController.cls
│           │   ├── wirePrimaryApprovalController.cls-meta.xml
│           │   │
│           │   ├── WireBatchCallout.cls                // Batch Apex
│           │   ├── WireBatchCallout.cls-meta.xml
│           │   │
│           │   ├── WireIntegrationService.cls          // Callout logic
│           │   ├── WireIntegrationService.cls-meta.xml
│           │   │
│           │   ├── WireApprovalService.cls             // Approval logic
│           │   ├── WireApprovalService.cls-meta.xml
│           │   │
│           │   ├── WireUtility.cls                     // Helper methods
│           │   └── WireUtility.cls-meta.xml
│           │
│           ├── lwc/
│           │   ├── wirePrimaryApprovalDemo/
│           │   │   ├── wirePrimaryApprovalDemo.html
│           │   │   ├── wirePrimaryApprovalDemo.js
│           │   │   ├── wirePrimaryApprovalDemo.js-meta.xml
│           │   │   └── wirePrimaryApprovalDemo.css
│           │   │
│           │   └── expandableSection/
│           │       ├── expandableSection.html
│           │       ├── expandableSection.js
│           │       └── expandableSection.js-meta.xml
│           │
│           ├── objects/              // If custom objects exist
│           ├── layouts/
│           ├── permissionsets/
│           ├── customMetadata/
│           ├── namedCredentials/
│           └── labels/
│
└── scripts/
    ├── deploy.sh
    └── retrieve.sh

## OUTPUT
<img width="1906" height="571" alt="image" src="https://github.com/user-attachments/assets/eec8997a-0b32-4f8c-8ca1-1921d21245c5" />


