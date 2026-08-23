# HSP-1 Plain Language Guidelines

## 1. Purpose

The HSP-1 Household Support Application should use language that is **simple, direct, clear, and easy to understand**.

Users should not need legal, government, or technical knowledge to complete the form.

The language should help users understand:

- What information is needed
- Why the information is needed
- What they should enter
- What they should do next
- How to fix an error
- Where they are in the application

> **Users should spend their time completing the application, not trying to understand the application.**

---

## 2. Plain Language Principles

The form follows these principles:

1. Use common words.
2. Keep sentences short.
3. Ask one question at a time.
4. Use active voice.
5. Avoid unnecessary government terminology.
6. Explain unavoidable terms.
7. Give instructions before users need them.
8. Use specific and helpful error messages.
9. Avoid confusing abbreviations.
10. Make button and navigation labels clear.
11. Keep related information together.
12. Write content that makes sense when read by a screen reader.

---

## 3. Use Simple Words

Prefer familiar words over formal or technical language.

| Avoid | Use |
|---|---|
| Assistance | Help |
| Commence | Start |
| Approximately | About |
| Utilize | Use |
| Individuals | People |
| Household members | People who live with you |
| Residence | Home |
| Additional | More |
| Verify | Check |
| Submit | Send |
| Required | Needed |
| Assistance program | Help program |
| Indicate | Tell us |
| Obtain | Get |
| Inform | Tell |
| Prior to | Before |
| Regarding | About |
| Request | Ask for |

### Example

**Avoid:**

> Please provide information regarding all individuals currently residing within your household.

**Use:**

> **Who lives with you?**

---

## 4. Ask Direct Questions

Questions should be short and direct.

### Avoid

> Please provide information regarding all individuals who currently reside within your household.

### Use

> **Who lives with you?**

If a number is needed:

> **How many people live in your home?**

---

## 5. Ask One Question at a Time

Do not combine several questions into one field.

### Avoid

> Enter your name, date of birth, phone number, and email address.

### Use

**Full name \***

> Enter your full legal name.

**Date of birth \***

> Enter your date of birth.

**Phone number \***

> Enter a phone number where we can reach you.

**Email address**

> Enter your email address.

---

## 6. Explain Why Information Is Needed

When users may wonder why information is being requested, provide a short explanation.

### Example

**Social Security number**

> We use this information to verify your identity and process your application.

### Privacy Information

> We use your information to process your application.

For sensitive information:

> We keep your information private and use it only for purposes allowed by law.

---

## 7. Required Fields

Required fields should be clearly identified.

### Example

> **Full name \***

Explain the symbol once:

> **Fields marked with \* are required.**

Use the HTML `required` attribute where a field is actually required.

Do not rely only on color to communicate that a field is required.

---

## 8. Clear Instructions

Instructions should tell users exactly what to do.

### Avoid

> Please ensure that the information entered below is accurate and complete.

### Use

> Enter your current address.

### Avoid

> In the field provided below, please indicate the amount of income received on a monthly basis.

### Use

> Enter your monthly income.

---

## 9. Error Messages

Error messages should explain:

1. What needs attention.
2. What the user should do.

### Avoid

> Invalid input.

### Use

> Enter your date of birth.

### More Specific

> Enter your date of birth using MM/DD/YYYY.

### Phone Number

> Enter a valid phone number.

### Required Field

> Enter your full name.

Error messages should appear close to the relevant field and should also be available to screen readers.

---

## 10. Do Not Blame the User

Error messages should be helpful and neutral.

### Avoid

> You entered an incorrect value.

### Use

> Enter a valid phone number.

### Avoid

> You failed to complete this field.

### Use

> Enter your phone number.

---

## 11. Button Labels

Buttons should clearly describe the action.

| Avoid | Use |
|---|---|
| Next | Save & Continue |
| Proceed | Continue to Household |
| Finish | Submit Application |
| Modify | Edit |
| Click here | Review your information |
| Continue Process | Continue to Income |
| Complete | Submit Application |

Good button labels reduce uncertainty, especially for screen-reader users.

---

## 12. Navigation Language

Navigation should tell users where they are going.

Use:

- Back
- Save & Continue
- Continue to Household
- Continue to Income
- Continue to Resources
- Review Application
- Edit
- Return to Household Information
- Return to Income
- Submit Application

Avoid vague labels such as:

- Proceed
- Process
- Execute
- Continue Process
- Complete

---

## 13. Headings

Headings should describe the information users are about to provide.

### Avoid

> Section 2

### Use

> About Your Household

### Avoid

> Financial Information

### Use

> Your Income

### Avoid

> Resources

If the term "resources" must be retained:

> **Your Resources**

> Tell us about your savings, property, and other resources.

---

## 14. Help Text

Help text should answer likely questions without creating unnecessary reading.

### Monthly Income

**Monthly income**

> Enter the amount you usually receive each month before taxes.

### Household Members

**Who lives with you?**

> Add everyone who lives in your home, including children.

### Address

**Home address**

> Enter the address where you currently live.

---

## 15. Dates

Use familiar date instructions.

### Avoid

> Date of birth in accordance with the prescribed format.

### Use

**Date of birth**

> Enter as MM/DD/YYYY.

Where possible, use appropriate native date controls and provide a clear accessible label.

---

## 16. Money

Clearly identify the time period.

### Avoid

> Income: $

### Use

> **Monthly income ($)**

Or:

> **How much do you receive each month?**

Example:

> **Monthly income**
>
> `$ [ 1,500.00 ]`

Do not make users guess whether an amount is weekly, monthly, or yearly.

---

## 17. Household Questions

Use language people naturally understand.

### Avoid

> Number of co-residential persons

### Use

> **How many people live in your home?**

### Avoid

> Relationship to applicant

### Use

> **How is this person related to you?**

### Avoid

> Dependent minor

### Use

> **Child under 18**

### Avoid

> Household composition

### Use

> **Who lives with you?**

---

## 18. Conditional Questions

Only show questions that apply to the user's previous answer.

### Example

**Do you have income from a job?**

- Yes
- No

If the user selects **Yes**, display:

**Employer name**

> What is your employer's name?

If the user selects **No**, employer fields should remain hidden.

Conditional fields should:

- Remain hidden until relevant.
- Not receive keyboard focus while hidden.
- Not be announced as available content by screen readers while hidden.
- Become available when the relevant option is selected.
- Not unexpectedly move the user's focus.

---

## 19. Privacy Language

Privacy information should be short and understandable.

### Avoid

> Information furnished herein may be utilized for purposes associated with eligibility determination and program administration.

### Use

> We use your information to process your application.

For sensitive information:

> We keep your information private and use it only for purposes allowed by law.

---

## 20. Confirmation Language

The final confirmation should be easy to understand.

### Avoid

> I hereby certify that all information provided herein is true and correct to the best of my knowledge.

### Use

> **I confirm that the information I provided is true and complete to the best of my knowledge.**

The confirmation checkbox should have a clear, accessible label.

---

## 21. Submission Message

After successful submission, clearly tell the user what happened.

### Example

> **Application submitted**
>
> Your household support application has been submitted successfully.

If a reference number is available:

> **Your application number is HSP-2026-00125.**
>
> Keep this number for your records.

If additional action is required:

> **Next step**
>
> We will contact you if we need more information.

---

## 22. Progress and Step Language

Users should always understand where they are.

Use:

> **Step 2 of 5: About Your Household**

The five application steps are:

1. Applicant
2. Household
3. Income
4. Resources
5. Review

Avoid displaying only:

> Step 2

The current step should be communicated through both visual styling and text.

---

## 23. Review Page Language

The review page should use short, descriptive labels.

### Avoid

> Applicant Information Details

### Use

> **Your Information**

### Avoid

> Household Composition Details

### Use

> **People Who Live With You**

### Avoid

> Financial Resource Summary

### Use

> **Your Income and Resources**

Edit links should describe what will be edited.

### Avoid

> Edit

### Better

> Edit household information

---

## 24. Cognitive Accessibility

Plain language should reduce the amount of information users need to remember.

The application should:

- Ask one question at a time.
- Use clear page headings.
- Use short instructions.
- Group related questions.
- Show only relevant conditional fields.
- Use predictable navigation.
- Keep the current step visible.
- Preserve entered information when validation fails.
- Provide clear error recovery.
- Provide a review page before submission.

---

## 25. Screen Reader Considerations

Plain language also improves screen-reader usability.

Use:

- Descriptive headings
- Meaningful link text
- Clear labels
- Short instructions
- Specific error messages
- Logical question order
- Proper `fieldset` and `legend` structures
- Accessible progress information
- Appropriate `aria-describedby` relationships where needed

### Avoid

> Click here

### Prefer

> Review your household information

### Avoid

> More information

### Prefer

> Learn how to calculate your monthly income

---

## 26. Accessibility and Language

Plain language must work together with accessibility.

A field should provide:

**Label**

> Date of birth \*

**Instruction**

> Enter as MM/DD/YYYY.

**Error**

> Enter your date of birth using MM/DD/YYYY.

Users should not need to interpret colors, icons, or visual positioning to understand what is required.

---

## 27. Avoid Unnecessary Abbreviations

Do not assume users understand government or technical abbreviations.

### Avoid

> Enter your DOB.

### Use

> Enter your date of birth.

### Avoid

> SSN

When appropriate, use:

> Social Security number

---

## 28. Use Active Voice

Prefer active voice because it is easier to understand.

### Avoid

> Your application will be reviewed by the department.

### Prefer

> The department will review your application.

### Avoid

> The information must be provided by the applicant.

### Prefer

> Enter your information.

---

## 29. Avoid Unnecessary Formal Language

The application should sound helpful and professional.

### Avoid

> Kindly furnish the requisite information.

### Use

> Enter the requested information.

### Avoid

> Please indicate whether you possess any financial resources.

### Use

> Do you have savings or property?

---

## 30. Consistent Terminology

Use the same term for the same concept throughout the application.

For example:

- **Home address**, instead of switching between "residence" and "residential address".
- **People who live with you**, instead of several different terms.
- **Monthly income**, instead of switching between "monthly earnings" and "monthly income".
- **Submit Application**, instead of using "Finish" on another page.

Consistency reduces confusion.

---

## 31. Final Language Checklist

Before adding text to the HSP-1 application, check:

- [ ] Is the sentence easy to understand?
- [ ] Can a shorter sentence be used?
- [ ] Am I using common words?
- [ ] Am I asking only one question?
- [ ] Does the user know what to enter?
- [ ] Does the user know why the information is needed?
- [ ] Are instructions close to the relevant field?
- [ ] Does the error message explain how to fix the problem?
- [ ] Does the button clearly describe the action?
- [ ] Is the current step clear?
- [ ] Are headings descriptive?
- [ ] Is terminology consistent across all five pages?
- [ ] Can a screen-reader user understand the text without visual context?
- [ ] Have unnecessary government terms been removed?
- [ ] Have unnecessary abbreviations been avoided?
- [ ] Does the confirmation text clearly explain what the user is agreeing to?
- [ ] Does the submission message clearly explain what happened?

---

## 32. Final Principle

The HSP-1 form should communicate with users the way a helpful person would explain the process.

Instead of:

> "Please provide the requisite information pertaining to your household composition."

Use:

> **"Who lives with you?"**

Instead of:

> "Indicate the aggregate monthly income received by all household members."

Use:

> **"What is your household's monthly income?"**

Instead of:

> "Please furnish the necessary information regarding your residential address."

Use:

> **"What is your home address?"**

Instead of:

> "Please indicate whether you possess financial resources."

Use:

> **"Do you have savings, property, or other resources?"**

---

# Final Goal

**Clarity → Accessibility → Easy Completion → Trust → Visual Polish**

> **Users should spend their time completing the application, not trying to understand the application.**