/* =========================================================
   HSP-1 APP.JS
   Main application controller
   ========================================================= */


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    if (!form) {
        return;
    }


    /* =====================================================
       FORM SUBMISSION
       ===================================================== */

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        /* Validate */
        const valid = validateForm(form);

        if (!valid) {

            showFormStatus(
                "Please correct the highlighted fields before continuing.",
                true
            );

            return;
        }

        /* Save */
        saveCurrentForm();

        /* Success message */
        showFormStatus(
            "Your information has been saved."
        );

        /* Get next page */
        const nextPage = form.dataset.next;

        if (nextPage) {

            window.location.href = nextPage;

        }

    });


    /* =====================================================
       SAVE AND CONTINUE BUTTON
       ===================================================== */

    const continueButton =
        document.querySelector("#continueButton");

    if (continueButton) {

        continueButton.addEventListener("click", () => {

            /* Validate form */
            const valid = validateForm(form);

            if (!valid) {

                showFormStatus(
                    "Please correct the highlighted fields before continuing.",
                    true
                );

                return;
            }

            /* Save current page */
            saveCurrentForm();

            /* Show success message */
            showFormStatus(
                "Your information has been saved."
            );

            /* Get next page */
            const nextPage = form.dataset.next;

            if (nextPage) {

                window.location.href = nextPage;

            } else {

                console.error(
                    "Next page is not specified. Add data-next to the form."
                );

                showFormStatus(
                    "The next page has not been configured.",
                    true
                );

            }

        });

    }


    /* =====================================================
       SAVE AND EXIT BUTTON
       ===================================================== */

    const saveExitButton =
        document.querySelector("#saveExitButton");

    if (saveExitButton) {

        saveExitButton.addEventListener("click", () => {

            /* Save current form */
            saveCurrentForm();

            /* Show message */
            showFormStatus(
                "Your application has been saved."
            );

            /*
             * Change this URL if you have a
             * dedicated save/exit page.
             */
            setTimeout(() => {

                window.location.href = "index.html";

            }, 500);

        });

    }


    /* =====================================================
       CLEAR APPLICATION
       ===================================================== */

    const clearButton =
        document.querySelector(
            "[data-clear-application]"
        );

    if (clearButton) {

        clearButton.addEventListener("click", () => {

            const confirmed =
                window.confirm(
                    "Are you sure you want to clear your saved application? This cannot be undone."
                );

            if (!confirmed) {
                return;
            }

            /* Clear saved data */
            clearApplicationData();

            /* Reset form */
            form.reset();

            /* Update conditional fields */
            if (
                typeof updateConditionalFields ===
                "function"
            ) {

                updateConditionalFields();

            }

            /* Show message */
            showFormStatus(
                "Your saved application has been cleared."
            );

        });

    }


    /* =====================================================
       SAVE BUTTON
       ===================================================== */

    const saveButton =
        document.querySelector(
            "[data-save]"
        );

    if (saveButton) {

        saveButton.addEventListener("click", () => {

            /* Save */
            saveCurrentForm();

            /* Show message */
            showFormStatus(
                "Your information has been saved."
            );

        });

    }


    /* =====================================================
       PAGE INITIALIZATION
       ===================================================== */

    /*
     * Load previously saved data.
     */
    if (
        typeof loadCurrentForm ===
        "function"
    ) {

        loadCurrentForm();

    }


    /*
     * Update conditional fields.
     */
    if (
        typeof updateConditionalFields ===
        "function"
    ) {

        updateConditionalFields();

    }

});


/* =========================================================
   FORM STATUS
   ========================================================= */

function showFormStatus(
    message,
    isError = false
) {

    let status =
        document.querySelector(
            ".form-status"
        );


    /* Create status element if it doesn't exist */
    if (!status) {

        status =
            document.createElement("div");

        status.className =
            "form-status";

        status.setAttribute(
            "role",
            "status"
        );

        status.setAttribute(
            "aria-live",
            "polite"
        );


        const form =
            document.querySelector("form");

        if (form) {

            form.prepend(status);

        }

    }


    /* Set message */
    status.textContent =
        message;


    /* Set status type */
    if (isError) {

        status.style.color =
            "#B91C1C";

    } else {

        status.style.color =
            "#047857";

    }

}


/* =========================================================
   SAVE BEFORE LEAVING PAGE
   ========================================================= */

window.addEventListener(
    "beforeunload",
    () => {

        if (
            typeof saveCurrentForm ===
            "function"
        ) {

            saveCurrentForm();

        }

    }
);