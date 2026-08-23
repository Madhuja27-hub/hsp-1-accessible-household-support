/* =========================================================
   HSP-1 CONDITIONAL-FIELDS.JS
   Handles fields that appear based on user selections
   ========================================================= */


/*
Example HTML:

<input
    type="radio"
    name="has_job"
    value="yes"
    data-controls="employment-fields"
>

<input
    type="radio"
    name="has_job"
    value="no"
    data-controls="employment-fields"
>

<div
    id="employment-fields"
    class="conditional-field"
    hidden
>
    ...
</div>
*/


function updateConditionalFields() {

    const controls = document.querySelectorAll(
        "[data-controls]"
    );

    controls.forEach((control) => {

        const targetId =
            control.dataset.controls;

        const target =
            document.getElementById(targetId);

        if (!target) {
            return;
        }


        let shouldShow = false;


        /* Radio */

        if (control.type === "radio") {

            shouldShow =
                control.checked &&
                (
                    control.value === "yes" ||
                    control.value === "true" ||
                    control.value === "1"
                );

        }


        /* Checkbox */

        else if (control.type === "checkbox") {

            shouldShow =
                control.checked;

        }


        /* Select */

        else if (control.tagName === "SELECT") {

            shouldShow =
                control.value === "yes" ||
                control.value === "true" ||
                control.value === "1";

        }


        /* Show */

        if (shouldShow) {

            target.hidden = false;

            target.classList.add("show");

        }


        /* Hide */

        else {

            target.hidden = true;

            target.classList.remove("show");

            /*
             * Clear hidden fields so old values
             * are not accidentally submitted.
             */

            const hiddenFields =
                target.querySelectorAll(
                    "input, select, textarea"
                );

            hiddenFields.forEach((field) => {

                if (
                    field.type === "radio" ||
                    field.type === "checkbox"
                ) {

                    field.checked = false;

                }

                else {

                    field.value = "";

                }

                field.removeAttribute(
                    "aria-invalid"
                );

            });
        }
    });
}


/* Update when user changes an answer */

document.addEventListener("change", (event) => {

    if (
        event.target.matches(
            "[data-controls]"
        )
    ) {

        updateConditionalFields();

    }

});


/* Initial state */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateConditionalFields();

    }
);