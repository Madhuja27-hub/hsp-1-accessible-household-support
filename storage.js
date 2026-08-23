/* =========================================================
   HSP-1 STORAGE.JS
   Handles localStorage for the complete application
   ========================================================= */

const HSP_STORAGE_KEY = "hsp1_application";

/* Get complete application data */

function getApplicationData() {
    const saved = localStorage.getItem(HSP_STORAGE_KEY);

    if (!saved) {
        return {};
    }

    try {
        return JSON.parse(saved);
    } catch (error) {
        console.error("Unable to read saved application:", error);
        return {};
    }
}


/* Save complete application data */

function saveApplicationData(data) {
    try {
        localStorage.setItem(
            HSP_STORAGE_KEY,
            JSON.stringify(data)
        );

        return true;
    } catch (error) {
        console.error("Unable to save application:", error);
        return false;
    }
}


/* Save the current page's form */

function saveCurrentForm() {
    const form = document.querySelector("form");

    if (!form) {
        return;
    }

    const application = getApplicationData();

    const fields = form.querySelectorAll(
        "input, select, textarea"
    );

    fields.forEach((field) => {

        if (!field.name) {
            return;
        }

        /* Checkbox */

        if (field.type === "checkbox") {
            application[field.name] = field.checked;
        }

        /* Radio */

        else if (field.type === "radio") {

            if (field.checked) {
                application[field.name] = field.value;
            }

        }

        /* Normal input */

        else {
            application[field.name] = field.value;
        }
    });

    saveApplicationData(application);
}


/* Load saved data into the current form */

function loadCurrentForm() {

    const form = document.querySelector("form");

    if (!form) {
        return;
    }

    const application = getApplicationData();

    Object.keys(application).forEach((name) => {

        const fields = form.querySelectorAll(
            `[name="${CSS.escape(name)}"]`
        );

        fields.forEach((field) => {

            if (field.type === "checkbox") {

                field.checked = Boolean(
                    application[name]
                );

            }

            else if (field.type === "radio") {

                field.checked =
                    field.value === application[name];

            }

            else {

                field.value = application[name];

            }
        });
    });
}


/* Clear complete application */

function clearApplicationData() {

    localStorage.removeItem(HSP_STORAGE_KEY);

}


/* Check whether saved application exists */

function hasSavedApplication() {

    return localStorage.getItem(
        HSP_STORAGE_KEY
    ) !== null;

}


/* Save automatically whenever user changes a field */

document.addEventListener("input", () => {
    saveCurrentForm();
});

document.addEventListener("change", () => {
    saveCurrentForm();
});


/* Load saved information */

document.addEventListener("DOMContentLoaded", () => {
    loadCurrentForm();
});