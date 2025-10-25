# Medical-Records-Management-

A medical record managment platform for hospitals, doctors and patients.

# For Local Development:

If you want to preview Mermaid diagrams locally before pushing to GitHub:

VS Code: Install the "Markdown Preview Mermaid Support" extension

# Navigation Flows

### Main Navigation Flow

```mermaid
%%{init: {'themeVariables': { 'fontSize': '40px' }}}%%
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
%%{init: {'themeVariables': { 'fontSize': '40px' }}}%%
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
%%{init: {'themeVariables': { 'fontSize': '100px' }}}%%
flowchart TD
    D[Hospital Admin] --> D1[Dashboard Overview]
    D1 --> D2[Hospital Profile]
    D1 --> D3[Doctors Management]
    D1 --> D4[Patients Management]
    D1 --> D5[Upload Center]
    D1 --> D6[Storage & Logs]
    D1 --> D7[Security & Access]
```
