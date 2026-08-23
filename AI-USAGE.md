HSP-1 Household Support Application
## 1. Project Objective

Update and improve the existing HSP-1 Household Support Application website into a modern, accessible government-service application.

The redesign should make a long household assistance form easier to understand and complete while preserving the existing functionality, data flow, JavaScript, validation, accessibility features, and navigation.

The primary design priorities are:

Clarity → Accessibility → Easy completion → Trust → Visual polish

The website should feel like a real public-service application rather than a dashboard or commercial website.

## 2. Existing Project Structure

The existing application contains the following pages:

applicant.html
household.html
income.html
resources.html
review.html

The application uses existing HTML structures, CSS classes, JavaScript functionality, form validation, and navigation.

The existing functionality must be preserved.

Do not replace the project with a completely different architecture.

## 3. AI Development Instructions

When modifying the project:

Use the existing HTML structure.
Keep existing class names.
Keep existing IDs where possible.
Do not remove existing JavaScript.
Do not break form validation.
Do not break page-to-page navigation.
Do not remove correctly implemented ARIA attributes.
Do not remove accessibility features.
Do not change the application's data flow unnecessarily.
Do not introduce unnecessary frameworks.
Do not redesign the application as a dashboard.
Do not add excessive animations or decorative elements.

If an existing implementation contains a visual or accessibility problem, fix it without changing unrelated functionality.

## 4. Visual Design

Use a professional government/public-service visual style.

Primary colors
Primary Blue:       #12355B
Secondary Blue:     #1F5F8B
Page Background:    #F4F7FB
Main Text:          #1F2937
Muted Text:         #64748B
Border:             #D6DEE8
Error:              #B91C1C
Success:            #047857
Focus:              #3B82F6
Warning:            #EA580C

Use strong contrast and readable typography.

Avoid:

Flashy gradients
Excessive icons
Large decorative graphics
Excessive animations
Dashboard-style layouts
Unnecessary visual effects
## 5. Background Image

The application currently uses a background image:

images/background.jpg

The existing background image should remain available.

Use the background image carefully so that it does not interfere with readability.

The application may use a subtle transparent/white overlay:

background-image:
    linear-gradient(
        rgba(255, 255, 255, 0.38),
        rgba(255, 255, 255, 0.38)
    ),
    url("../images/background.jpg");

The transparency must not reduce the readability of:

Headings
Labels
Input text
Help text
Error messages
Buttons
Progress information

Form surfaces should remain sufficiently opaque to maintain good readability against the background.

## 6. Header

Create a professional government-style header.

Display:

Calder County
Department of Household Services

Household Support Application
FORM HSP-1

The header should use the dark blue primary color.

The title should have a clear visual hierarchy.

Do not use excessive decoration.

The header should work correctly on desktop, tablet, and mobile.

## 7. Application Progress

The application uses a multi-step structure.

The progress navigation should clearly communicate the user's position.

Use:

Applicant
   ↓
Household
   ↓
Income
   ↓
Resources
   ↓
Review

If the current project contains additional pages or steps, preserve the existing application structure instead of deleting them.

The current step must be clearly identified.

Completed steps should be visually distinct.

Future steps should appear less prominent.

Do not communicate progress using color alone.

Provide accessible text such as:

Step 2 of 5: Household Information

or the equivalent appropriate to the existing page.

## 8. Main Form Layout

Use a centered application layout.

Recommended structure:

Background
    ↓
Government Header
    ↓
Progress Navigation
    ↓
Main Form Card
    ↓
Form Sections
    ↓
Navigation Buttons
    ↓
Footer

The content should have a comfortable reading width.

Avoid making the form excessively wide.

Use generous spacing between:

Sections
Questions
Labels
Inputs
Help text
Error messages
Buttons
## 9. Form Sections

Use white cards or appropriately opaque light surfaces for major form sections.

Each section should contain:

Section heading
Short explanation
Form controls
Help text where required
Validation messages where required

Do not present the user with a large wall of fields.

Group related questions together logically.

Use:

<section>

where appropriate.

Use:

<fieldset>
<legend>

for related groups of controls.

## 10. Form Controls

Inputs should be comfortable to use.

Maintain:

min-height: 48px;

where appropriate.

Use:

Clear borders
Rounded corners
Readable text
Strong focus indicators
Comfortable padding
Clear labels

Labels should be bold enough to distinguish them from help text.

Do not use placeholder text as the only label.

Maintain proper:

<label for="...">

relationships.

## 11. Required Fields

Clearly identify required fields.

Example:

Full name *

Provide an explanation:

Fields marked with * are required.

Where appropriate, use:

required

in the HTML.

Do not communicate required status using color alone.

## 12. Help Text

Help text should appear directly below the relevant field.

Example:

Date of birth

Enter your date of birth using MM/DD/YYYY.

Help text should be concise.

Where necessary, connect it programmatically using:

aria-describedby

Do not overload the user with unnecessary instructions.

## 13. Radio Buttons and Checkboxes

Make radio buttons and checkboxes comfortable to use.

Use appropriate:

<fieldset>
    <legend>Question</legend>
</fieldset>

structures for groups.

The clickable area should be large enough for both desktop and mobile users.

Do not make users click on a tiny radio button or checkbox.

## 14. Error Handling

Errors must be clear, visible, and actionable.

Avoid:

Invalid input.

Prefer:

Enter your date of birth.

or:

Enter your monthly income.

Error messages should appear close to the relevant control.

Where JavaScript validation already exists, preserve it.

Use appropriate accessibility states such as:

aria-invalid="true"

and:

aria-describedby="error-id"

where appropriate.

Do not remove existing accessible validation functionality.

Errors must not depend on color alone.

## 15. Focus States

All interactive elements must have a visible keyboard focus state.

Use a strong outline such as:

outline: 3px solid #3B82F6;
outline-offset: 3px;

Focus indicators must remain visible against the transparent background and form surfaces.

Do not remove focus outlines unless replacing them with an equally visible accessible focus style.

## 16. Skip Link

Preserve the existing skip link.

Example:

Skip to main content

It should become visible when focused.

Keyboard users should be able to bypass repeated navigation and reach the main form quickly.

## 17. Conditional Fields

Preserve the existing conditional-field functionality.

When a field becomes relevant:

Display the field.

When it becomes irrelevant:

Hide the field.

Hidden conditional fields must not remain keyboard-focusable.

Screen readers should not announce irrelevant hidden content.

Do not break existing JavaScript controlling conditional fields.

## 18. Buttons

Use two main button styles.

Primary
Dark blue background
White text

Examples:

Save & Continue
Review Application
Submit Application
Add Household Member
Add Income
Secondary
White background
Dark blue border
Dark blue text

Examples:

Back
Cancel
Edit

Buttons should have a minimum height of approximately:

48px

Primary actions should be visually stronger than secondary actions.

## 19. Review Page

The review page should feel clear and trustworthy.

Use summary sections containing:

Label                    Value
--------------------------------
Full name                Example User
Date of birth            01/01/2000
Address                  Example Address

Group information according to the application sections.

Each review section should include a clear heading.

Provide descriptive edit links such as:

Edit applicant information
Edit household information
Edit income information

Avoid vague links such as:

Click here

Totals should be visually prominent without becoming overly decorative.

## 20. Confirmation Area

The final confirmation section should clearly explain what the user is confirming.

Use a large, accessible checkbox.

Example:

☐ I confirm that the information provided in this application
   is complete and accurate to the best of my knowledge.

The final submission button should be clearly identifiable:

Submit Application

The user should have an opportunity to review and correct information before submission.

## 21. Responsive Design
Desktop

Use:

Centered content
Comfortable reading width
Two-column fields where appropriate
Large form cards
Clear section spacing
Tablet

Adapt:

Form spacing
Column widths
Header layout
Progress navigation
Mobile

Use:

One-column form fields
Full-width buttons
Stacked sections
Comfortable touch targets
Readable text
Usable progress navigation

Existing mobile breakpoints should be preserved or improved.

## 22. Accessibility

Accessibility takes priority over visual decoration.

Maintain:

Semantic HTML
Correct heading hierarchy
Proper labels
Keyboard navigation
Visible focus indicators
Skip navigation
Screen-reader-only content
ARIA attributes
Accessible validation
Fieldsets and legends
Good contrast
Reduced-motion support
Descriptive buttons and links
Logical reading order

Do not remove existing accessibility features that are correctly implemented.

## 23. Reduced Motion

Preserve reduced-motion support.

Use:

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

Do not introduce unnecessary animations.

## 24. CSS Quality

Clean and organize the CSS.

Use clearly labelled sections such as:

RESET
ACCESSIBILITY
HEADER
LAYOUT
PROGRESS
FORM CONTROLS
FIELDSETS
INFORMATION BOXES
ERROR STATES
BUTTONS
REVIEW
FOOTER
RESPONSIVE DESIGN
REDUCED MOTION

Correct:

Invalid selectors
Invalid CSS properties
Incorrect transition declarations
Duplicate conflicting rules
Broken media queries

Keep existing class names wherever possible.

Do not create unnecessary duplicate classes.

## 25. Existing Class Names

The following existing classes should continue to work:

.site-header
.header-container
.site-title
.site-subtitle
.container
.form-card
.page-container
.page-header
.eyebrow
.step-indicator
.progress-bar
.form-section
.section-heading
.form-row
.form-group
.radio-group
.nested-fieldset
.required
.required-note
.help-text
.info-box
.warning-box
.error-message
.input-error
.conditional-field
.form-actions
.primary-button
.secondary-button
.button-primary
.button-secondary
.household-member
.income-entry
.member-header
.remove-member
.remove-income
.form-status
.income-summary
.summary-amount
.review-section
.review-section-header
.review-list
.review-total
.review-members
.review-member-list
.review-member-card
.confirmation-section
.confirmation-box
.checkbox-label
.success-message
.site-footer
.page-footer
.sr-only
.skip-link

Do not rename these classes unless there is a specific technical reason.

## 26. Existing JavaScript

The existing JavaScript functionality must remain operational.

Do not remove or rewrite JavaScript unnecessarily.

Verify:

Next-page navigation
Previous-page navigation
Form validation
Required-field validation
Conditional fields
Household member addition
Household member removal
Income entry addition
Income entry removal
Income calculations
Review page information
Edit functionality
Confirmation
Final submission
Existing local storage/session behavior if present

Only modify JavaScript if necessary to fix a genuine accessibility or functional problem.

## 27. Required Page Verification

After completing the redesign, verify every existing page:

applicant.html
household.html
income.html
resources.html
review.html

For every page verify:

Page loads correctly.
CSS loads correctly.
Background image loads correctly.
Header displays correctly.
Progress indicator displays correctly.
Form fields work.
Labels remain associated with controls.
Validation works.
Error messages display correctly.
Conditional fields work.
Navigation works.
Back buttons work.
Continue buttons work.
Review information is preserved.
Edit links work.
Submit functionality remains intact.
Keyboard navigation works.
Focus remains visible.
Mobile layout works.

## 28. Final Design Goal

The final HSP-1 application should look and feel like a real government household assistance service.

It should be:

Clear

Accessible

Trustworthy

Readable

Predictable

Responsive

Easy to complete

The application should not look like a flashy dashboard.

The user's task is to complete an important assistance application. Therefore, the interface should reduce stress and cognitive load rather than add visual complexity.

The final priority is:

1. Accessibility
2. Clarity
3. Easy completion
4. Error recovery
5. Trust
6. Visual polish

Do not sacrifice accessibility or existing functionality for visual appearance.

## 29. Final Instruction to the AI

Before finishing the implementation:

Inspect the existing HTML.
Inspect the existing CSS.
Inspect the existing JavaScript.
Preserve existing IDs and class names.
Preserve existing functionality.
Apply the new visual design.
Fix CSS errors and conflicts.
Verify accessibility features.
Verify responsive behavior.
Verify all five current HTML pages.
Test keyboard navigation.
Test form validation.
Test conditional fields.
Test page navigation.
Test the final review and submission flow.

Do not claim the project is complete until the existing application flow continues to work after the redesign.