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

