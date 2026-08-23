# HSP-1 Accessibility Report

## 1. Overview

The HSP-1 Household Support Application was redesigned with accessibility as a core requirement.

The objective is to make the application usable and understandable for people with different abilities, including:

* Keyboard-only users
* Screen-reader users
* Users with low vision
* Users with color-vision deficiencies
* Users with cognitive or learning difficulties
* Users with motor difficulties
* Users using mobile devices
* Users who prefer reduced motion

The redesign focuses on making the form easier to understand, navigate, complete, review, and correct.

The interface also uses a transparent, glass-style visual design with a background image. Transparency is applied carefully so that form controls, labels, instructions, errors, and navigation remain readable.

---

## 2. Accessibility Goals

The application should allow users to:

1. Understand what each page is asking.
2. Navigate through the application using a keyboard.
3. Identify the current application step.
4. Understand which fields are required.
5. Receive clear and actionable error messages.
6. Correct errors without losing entered information.
7. Use the form with a screen reader.
8. Complete the application on mobile devices.
9. Review their information before submission.
10. Submit the application with confidence.

---

## 3. Semantic HTML

The application uses semantic HTML elements where appropriate.

Examples include:

* `<header>`
* `<main>`
* `<nav>`
* `<section>`
* `<form>`
* `<fieldset>`
* `<legend>`
* `<label>`
* `<button>`
* `<footer>`

### Why this matters

Semantic HTML provides meaningful structure to assistive technologies.

A screen reader can identify headings, navigation areas, form controls, sections, and other page structures more reliably.

---

## 4. Skip Navigation

A skip link is provided near the beginning of the page.

Example:

> Skip to main content

The link is normally hidden but becomes visible when focused with the keyboard.

### Benefit

Keyboard users do not need to repeatedly navigate through the header and progress navigation before reaching the main form.

---

## 5. Keyboard Accessibility

All important interactive elements should be accessible using the keyboard.

Users should be able to:

* Tab through form fields
* Use Shift + Tab to move backward
* Use arrow keys where appropriate for native controls
* Press Enter or Space to activate buttons
* Navigate radio buttons and checkboxes
* Reach navigation controls
* Reach the Submit button without using a mouse

### Focus indicators

Focused controls use a clearly visible outline.

Example:

```css
outline: 3px solid #3b82f6;
outline-offset: 3px;
```

### Benefit

Keyboard users can identify exactly which control is currently active.

---

## 6. Form Labels

Every form control should have a visible and meaningful label.

Example:

```html
<label for="full-name">Full name</label>
<input id="full-name" name="full_name">
```

### Avoid

Using only placeholder text as the field label.

### Reason

Placeholders disappear when the user starts typing and should not replace a proper accessible label.

---

## 7. Required Fields

Required fields are clearly identified.

Example:

> Full name *

A note explains the meaning of the symbol:

> Fields marked with * are required.

The implementation should also use the HTML `required` attribute where appropriate.

Example:

```html
<input
    id="full-name"
    name="full_name"
    required
>
```

This provides programmatic information about required controls.

---

## 8. Fieldsets and Legends

Related radio buttons and checkbox groups should use appropriate grouping.

Example:

```html
<fieldset>
    <legend>Do you have income from a job?</legend>

    <label>
        <input type="radio" name="employment" value="yes">
        Yes
    </label>

    <label>
        <input type="radio" name="employment" value="no">
        No
    </label>
</fieldset>
```

### Benefit

Screen-reader users can understand the question before hearing the individual options.

This is particularly useful for:

* Yes / No questions
* Household relationships
* Income types
* Resource types
* Other related option groups

---

## 9. Clear Error Messages

Validation errors should be specific and actionable.

### Avoid

> Invalid input.

### Prefer

> Enter your date of birth.

Or:

> Enter your date of birth using MM/DD/YYYY.

Errors should appear close to the relevant field.

Where JavaScript validation is used, errors should also be programmatically associated with the relevant form control.

Example:

```html
<input
    id="date-of-birth"
    aria-describedby="date-of-birth-error"
    aria-invalid="true"
>

<span id="date-of-birth-error">
    Enter your date of birth.
</span>
```

---

## 10. Error Identification

The application does not rely on color alone to communicate errors.

An invalid field can use:

* A visible error border
* A clear error message
* `aria-invalid="true"`
* An associated error description
* Appropriate focus behavior

This ensures that users who cannot distinguish colors can still understand the problem.

---

## 11. Focus Management

When validation fails, users should be able to quickly identify the problem.

The implementation should consider moving focus to:

* The first invalid field, or
* A clearly identified error summary

Focus should not be moved unexpectedly during normal form completion.

When users activate a navigation or edit action, focus should remain predictable.

---

## 12. Multi-Step Progress Indicator

The HSP-1 application is divided into **eight steps** to reduce the cognitive burden of completing a long application.

The steps are:

1. Applicant Details
2. Residence
3. Household Composition
4. Income
5. Capital and Resources
6. Expenses
7. Supporting Information
8. Review and Submit

The current step is visually highlighted.

Completed steps are visually distinguishable from future steps.

### Accessibility consideration

Progress information should not depend only on color.

Useful text should communicate the current position, for example:

> Step 2 of 8: Residence

This provides additional context for screen-reader users and users with cognitive difficulties.

---

## 13. Plain Language

The application uses simple and direct language wherever possible.

### Instead of

> Please provide information regarding all individuals currently residing within your household.

### Use

> Who lives with you?

### Instead of

> Indicate the aggregate monthly income received by all household members.

### Use

> What is your household's monthly income?

### Benefit

Plain language reduces cognitive load and helps users understand questions quickly.

---

## 14. Cognitive Accessibility

The application reduces cognitive load by:

* Dividing the application into eight steps
* Grouping related questions
* Using clear headings
* Providing short instructions
* Showing conditional questions only when relevant
* Using predictable navigation
* Avoiding unnecessary decorative elements
* Providing clear error recovery
* Allowing users to review information before submission

The user should not have to remember information from several pages ago.

---

## 15. Conditional Fields

Conditional questions should appear only when they are relevant.

Example:

> Do you have income from a job?

If the user selects **Yes**, relevant employment and income information can be displayed.

If the user selects **No**, irrelevant employer fields remain hidden.

### Accessibility considerations

When fields appear or disappear dynamically:

* Hidden fields should not receive keyboard focus.
* Hidden fields should not be announced by screen readers.
* Newly displayed fields should have meaningful labels.
* Focus should not be unexpectedly moved.
* Dynamically displayed content should remain in a logical reading order.

The CSS implementation uses hidden states for conditional content so that inactive fields can remain unavailable to users until they become relevant.

---

## 16. Color, Contrast, and Transparent Design

The redesigned interface uses a transparent, glass-style visual appearance.

The background image remains visible while form containers, inputs, fieldsets, information boxes, and review sections use semi-transparent backgrounds.

Primary colors include:

```text
Primary blue:       #12355B
Secondary blue:     #1F5F8B
Main text:          #1F2937
Error:              #B91C1C
Success:            #047857
Focus:              #3B82F6
```

### Accessibility consideration

Transparency must not reduce readability.

Text and controls should remain sufficiently contrasted against the background image.

The interface therefore uses:

* Semi-transparent white surfaces
* Dark text
* Strong blue headings
* Visible borders
* Clear focus indicators
* Distinct error states
* Distinct success states

The background image should not contain visual detail that makes important text difficult to read.

### Testing requirement

Contrast should be checked against the actual background image at different viewport sizes because the visible background can change depending on the image position and screen dimensions.

---

## 17. Touch Accessibility

Interactive controls use comfortable sizes.

Buttons use a minimum height of approximately:

> 48px

Checkboxes and radio buttons are also given sufficiently large controls and clickable areas.

### Benefit

This improves usability for:

* Mobile users
* Users with motor difficulties
* Users who have difficulty precisely targeting small controls

---

## 18. Responsive Design

The form adapts to different screen sizes.

### Desktop

* Two-column form fields where appropriate
* Centered content
* Large readable sections
* Spacious form controls

### Mobile

* Single-column fields
* Full-width buttons
* Stacked header content
* Scrollable progress navigation where necessary
* Simplified review layout
* Reduced horizontal complexity

Users should not need to perform unnecessary horizontal scrolling to complete form fields.

---

## 19. Reduced Motion

The application respects the user's reduced-motion preference.

Example:

```css
@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
```

### Benefit

Users who experience discomfort from animation or motion can use the application with minimal visual movement.

---

## 20. Screen Reader Support

The application includes accessibility features such as:

* Semantic headings
* Form labels
* Fieldsets and legends
* Screen-reader-only content
* Meaningful button names
* Accessible error messages
* Logical form order
* Skip navigation
* Progress information
* Programmatic form states

The `.sr-only` class provides visually hidden information that remains available to screen readers.

Example:

```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```

---

## 21. Links and Buttons

Links and buttons should have descriptive names.

### Avoid

> Click here

### Prefer

> Edit household information

### Avoid

> Continue

### Prefer

> Save & Continue to Income

Descriptive names provide users with more context about the action they are about to perform.

---

## 22. Navigation Between Steps

The multi-step application provides predictable navigation.

Users should be able to:

* Continue to the next step
* Return to a previous step
* Correct information
* Understand their current position
* Continue without losing previously entered information

Navigation controls should use descriptive labels where possible.

For example:

> Back to Household

and:

> Save & Continue to Income

are more informative than generic labels alone.

---

## 23. Review and Confirmation

The final review page allows users to verify their information before submission.

The review page should:

* Group information by section
* Clearly display labels and values
* Provide Edit links
* Display totals clearly
* Provide a confirmation checkbox
* Clearly identify the final Submit action

Users should have an opportunity to identify and correct mistakes before the application is submitted.

---

## 24. Accessibility Testing Plan

The application should be tested using multiple methods.

### Keyboard Test

Complete the entire application without using a mouse.

Check:

* Can every interactive control receive focus?
* Is focus visible?
* Is the focus order logical?
* Can users navigate between all eight steps?
* Can users return to previous steps?
* Can users reach the Submit button?
* Can users operate radio buttons and checkboxes?
* Can users interact with conditional fields?

### Screen Reader Test

Test with screen readers such as:

* NVDA
* Windows Narrator
* VoiceOver

Check:

* Page headings
* Form labels
* Required fields
* Radio groups
* Checkbox groups
* Error messages
* Progress information
* Conditional fields
* Navigation controls
* Review page

### Visual Test

Check:

* Text contrast
* Form-control contrast
* Focus indicators
* Error visibility
* Heading hierarchy
* Background readability
* Transparency levels
* Spacing
* Mobile layout
* Zoom behavior

### Responsive Test

Test at:

* Desktop width
* Tablet width
* Mobile width

The application should remain usable at different viewport sizes.

---

## 25. WCAG Alignment

The design is intended to support the four core WCAG principles.

### Perceivable

Information should be presented in ways users can perceive, including appropriate text, structure, labels, contrast, and visual alternatives.

The transparent background design should not interfere with the readability of important information.

### Operable

Users should be able to navigate and operate the application using a keyboard and other input methods.

### Understandable

Questions, instructions, errors, navigation, and form behavior should be predictable and written in plain language.

### Robust

The application should use semantic HTML and accessible form structures that work with browsers and assistive technologies.

---

## 26. Accessibility Success Criteria

* [ ] All form controls have accessible labels.
* [ ] All required fields are clearly identified.
* [ ] Required fields use appropriate HTML validation where applicable.
* [ ] Keyboard navigation works throughout the application.
* [ ] Focus indicators are clearly visible.
* [ ] Skip navigation is available.
* [ ] Heading hierarchy is logical.
* [ ] Radio groups use appropriate fieldset and legend structures.
* [ ] Errors are clearly identified.
* [ ] Errors are not communicated using color alone.
* [ ] Error messages are associated with their relevant controls.
* [ ] Invalid controls use appropriate accessible states.
* [ ] Dynamic fields are accessible.
* [ ] Hidden conditional fields cannot receive focus.
* [ ] Buttons have descriptive names.
* [ ] Progress information identifies the current step.
* [ ] All eight application steps have predictable navigation.
* [ ] The application works on mobile devices.
* [ ] Text remains readable when zoomed.
* [ ] Transparent surfaces maintain readable contrast over the background image.
* [ ] Focus indicators remain visible over transparent backgrounds.
* [ ] Reduced-motion preferences are respected.
* [ ] Users can review their information before submission.
* [ ] Users can correct information before final submission.
* [ ] The final submission action is clearly identified.

---

## 27. Recommended Accessibility Validation

Before considering the application complete, perform a practical accessibility check using:

* Keyboard-only navigation
* NVDA or Windows Narrator
* Browser zoom
* Mobile viewport testing
* Contrast checking
* Form validation testing
* Conditional-field testing
* Error recovery testing

The transparent visual design should be tested using the actual `background.jpg`, not only a plain-color background, because the background image can affect the perceived contrast of text and controls.

---

## 28. Conclusion

The HSP-1 redesign treats accessibility as part of the core user experience.

The objective is not simply to make the form technically accessible. The application should also be understandable, predictable, forgiving, and easy to complete.

The eight-step structure breaks a long application into manageable sections. Clear labels, semantic HTML, keyboard navigation, visible focus indicators, meaningful errors, conditional fields, responsive layouts, and a final review process help users complete the application with greater confidence.

The transparent visual design adds a modern appearance while maintaining readable form surfaces and clear controls.

The final experience should allow users to answer one clear question at a time, understand what is required, recover from mistakes, navigate between steps, review their information, and confidently submit their application.

**Accessibility is successful when users can complete the task independently.**