/* =========================================================
   HSP-1 VALIDATION.JS
   Accessible form validation
   ========================================================= */


/* Show error */

function showFieldError(field, message) {

    field.classList.add("input-error");

    field.setAttribute(
        "aria-invalid",
        "true"
    );

    let errorElement = document.getElementById(
        `${field.id}-error`
    );

    if (!errorElement) {

        errorElement = document.createElement("span");

        errorElement.id = `${field.id}-error`;

        errorElement.className = "error-message";

        field.insertAdjacentElement(
            "afterend",
            errorElement
        );
    }

    errorElement.textContent = message;

    errorElement.style.display = "block";

    field.setAttribute(
        "aria-describedby",
        errorElement.id
    );
}


/* Remove error */

function clearFieldError(field) {

    field.classList.remove("input-error");

    field.removeAttribute("aria-invalid");

    const errorElement = document.getElementById(
        `${field.id}-error`
    );

    if (errorElement) {

        errorElement.textContent = "";

        errorElement.style.display = "none";
    }
}


/* Validate individual field */

function validateField(field) {

    clearFieldError(field);

    /* Required field */

    if (
        field.required &&
        !field.value.trim()
    ) {

        showFieldError(
            field,
            "This field is required."
        );

        return false;
    }


    /* Email */

    if (
        field.type === "email" &&
        field.value.trim()
    ) {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(field.value)) {

            showFieldError(
                field,
                "Enter a valid email address."
            );

            return false;
        }
    }


    /* Phone */

    if (
        field.type === "tel" &&
        field.value.trim()
    ) {

        const phonePattern =
            /^[0-9+\-\s()]{7,20}$/;

        if (!phonePattern.test(field.value)) {

            showFieldError(
                field,
                "Enter a valid phone number."
            );

            return false;
        }
    }


    /* Number */

    if (
        field.type === "number" &&
        field.value !== ""
    ) {

        const value = Number(field.value);

        if (Number.isNaN(value)) {

            showFieldError(
                field,
                "Enter a valid number."
            );

            return false;
        }

        if (
            field.min !== "" &&
            value < Number(field.min)
        ) {

            showFieldError(
                field,
                `Enter a number of at least ${field.min}.`
            );

            return false;
        }
    }


    return true;
}


/* Validate complete form */

function validateForm(form) {

    const fields = form.querySelectorAll(
        "input, select, textarea"
    );

    let valid = true;

    let firstInvalidField = null;

    fields.forEach((field) => {

        /* Skip hidden fields */

        if (
            field.offsetParent === null &&
            !field.required
        ) {
            return;
        }

        if (!validateField(field)) {

            valid = false;

            if (!firstInvalidField) {
                firstInvalidField = field;
            }
        }
    });


    /* Move focus to first error */

    if (
        !valid &&
        firstInvalidField
    ) {

        firstInvalidField.focus();

    }


    return valid;
}


/* Live validation */

document.addEventListener("blur", (event) => {

    const field = event.target;

    if (
        field.matches(
            "input, select, textarea"
        )
    ) {

        validateField(field);

    }

}, true);