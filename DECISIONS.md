# HSP-1 Household Support Application

# Design Decision Document

## 1. Project Goal

The goal of this project is to redesign the HSP-1 Household Support Application so that people can complete the application more easily, including users who rely on keyboards, screen readers, mobile devices, or other assistive technologies.

The redesign should:

- Reduce confusion.
- Improve navigation.
- Clearly explain each question.
- Make required information obvious.
- Provide useful error recovery.
- Reduce cognitive load.
- Make the application feel less overwhelming.
- Preserve the existing application functionality and data flow.

The design should prioritize task completion over visual decoration.

---

## 2. Design Direction

### Decision

Use a **modern government-service design combined with strong visual hierarchy**.

### Reason

The original form contains a large amount of information and can be difficult to understand and navigate.

A government-service visual style provides trust and familiarity, while stronger visual hierarchy helps users understand:

- Where they are.
- What information is required.
- What they need to do next.
- Which sections are complete.
- Where errors need attention.

The design should remain professional, calm, and task-focused rather than looking like a commercial dashboard.

---

## 3. Color System

### Primary

`#12355B`

Used for:

- Government header
- Main headings
- Primary buttons
- Current progress step
- Important navigation elements

### Secondary

`#1F5F8B`

Used for:

- Secondary visual emphasis
- Information boxes
- Links
- Supporting UI elements

### Page Background

`#F4F7FB`

Used as the base page background.

### Cards and Form Surfaces

`#FFFFFF`

Used for:

- Form sections
- Review sections
- Progress containers
- Main application content

Where the current transparent visual design is used, white surfaces may use controlled transparency while retaining sufficient contrast.

### Main Text

`#1F2937`

### Secondary Text

`#64748B`

### Borders

`#D6DEE8`

### Focus

`#3B82F6`

### Error

`#B91C1C`

Used for validation errors and required indicators.

### Success

`#047857`

Used for successful actions and confirmation messages.

### Warning

`#EA580C`

Used only for important warnings.

### Decision

Use a limited and consistent color palette.

### Reason

Too many colors can make a government form harder to understand and can create accessibility problems.

Color should never be the only way of communicating status, errors, completion, or required information.

---

## 4. Background Image and Transparency

### Decision

The application may use the existing background image:

`images/background.jpg`

The background image should provide visual interest without interfering with form readability.

A subtle overlay may be used:

```css
background-image:
    linear-gradient(
        rgba(255, 255, 255, 0.38),
        rgba(255, 255, 255, 0.38)
    ),
    url("../images/background.jpg");