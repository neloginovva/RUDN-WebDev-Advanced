# Spec: Empty Card Title Guard

## Requirements

- REQ-1: The `NewCardForm` component MUST display an error message when the user submits the form with an empty or whitespace-only title.
- REQ-2: The error message MUST be visible within the `NewCardForm` component, positioned below the input field.
- REQ-3: The error message MUST be cleared when the user enters a non-empty title and submits again successfully.
- REQ-4: Submitting the form with a non-empty title MUST create the card without showing any error message (no regression).

## Scenarios

### Scenario: empty title on submit

**GIVEN** the user is on the board page with the `NewCardForm` visible  
**WHEN** the user leaves the title input empty (or types only spaces) and clicks the "Добавить" button  
**THEN** the card is NOT created  
**AND** an error message is displayed below the input field

### Scenario: whitespace-only title on submit

**GIVEN** the user is on the board page with the `NewCardForm` visible  
**WHEN** the user enters only whitespace characters into the title input and clicks the "Добавить" button  
**THEN** the card is NOT created  
**AND** an error message is displayed below the input field

### Scenario: valid title on submit

**GIVEN** the user is on the board page with the `NewCardForm` visible  
**WHEN** the user enters a non-empty title and clicks the "Добавить" button  
**THEN** the card IS created  
**AND** no error message is displayed  
**AND** the input field is cleared

### Scenario: error cleared after fixing empty title

**GIVEN** the user has submitted an empty title and sees the error message  
**WHEN** the user enters a non-empty title and clicks the "Добавить" button  
**THEN** the card IS created  
**AND** the error message is no longer visible
