# Medical-Records-Management-

A medical record managment platform for hospitals, doctors and patients.

# For Local Development:

If you want to preview Mermaid diagrams locally before pushing to GitHub:

VS Code: Install the "Markdown Preview Mermaid Support" extension

# Navigation Flows

### Main Navigation Flow

```mermaid
%%{init: {'themeVariables': { 'fontSize': '30px' }}}%%
flowchart TD
    A[User Lands on Homepage] --> B{User Type}
    B --> C[Public User]
    B --> D[Hospital Admin]
    B --> E[Doctor]
    B --> F[Patient]
    B --> G[Super Admin]
```

### Public User Flow

```mermaid
%%{init: {'themeVariables': { 'fontSize': '30px' }}}%%
flowchart TD
    C[Public User] --> C1[About Us]
    C --> C2[Contact / Support]
    C --> C3[Login Page]
    C --> C4[Register Page]
    C4 --> C4a[Register as Hospital]
    C4 --> C4b[Register as Patient]
```

### Hospital Admin Flow

```mermaid
%%{init: {'themeVariables': { 'fontSize': '60px' }}}%%
flowchart TD
    D[Hospital Admin] --> D1[Dashboard Overview]
    D1 --> D2[Hospital Profile]
    D1 --> D3[Doctors Management]
    D1 --> D4[Patients Management]
    D1 --> D5[Upload Center]
    D1 --> D6[Storage & Logs]
    D1 --> D7[Security & Access]
```

### Doctor Flow

```mermaid
%%{init: {'themeVariables': { 'fontSize': '30px' }}}%%
flowchart TD
    E[Doctor] --> E1[Dashboard Home]
    E1 --> E2[Patient Lookup]
    E2 --> E3[Patient File Page]
    E1 --> E4[Profile Page]
    E1 --> E5[Access Logs]
```

### Patient Flow

```mermaid
%%{init: {'themeVariables': { 'fontSize': '30px' }}}%%
flowchart TD
    F[Patient] --> F1[Patient Home / Overview]
    F1 --> F2[My Profile]
    F1 --> F3[My Medical Records]
    F3 --> F4[Document Viewer]
    F1 --> F5[Notifications Page]
    F1 --> F6[Support / Help Page]
```

### Super Admin Flow

```mermaid
%%{init: {'themeVariables': { 'fontSize': '30px' }}}%%
flowchart TD
    G[Super Admin] --> G1[Admin Dashboard]
    G1 --> G2[Hospital Management]
    G1 --> G3[User Management]
    G1 --> G4[Reports & Logs]
    G1 --> G5[Settings]
```
