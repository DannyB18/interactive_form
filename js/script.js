const nameInputField = document.getElementById("name");
const otherJobInputField = document.getElementById("other-job-role");
const roleSelector = document.getElementById("title");
const shirtColorSelector = document.getElementById("color");
const shirtDesignSelector = document.getElementById("design");


//Basic Info
nameInputField.focus();
otherJobInputField.style.display = 'none';

roleSelector.addEventListener("change", (e) => {
    const option = e.target;
    if (option.tagName === "SELECT" && option.value === "other") {
        otherJobInputField.style.display = 'initial';
    }
});

//T-Shirt Info
shirtColorSelector.disabled = true;

shirtDesignSelector.addEventListener("change", (e) => {

    shirtColorSelector.disabled = false;
    const colorOptions = document.querySelectorAll('#shirt-colors option');

    // Loop through each option in the select element and compare the data-theme to the selected design theme.
    colorOptions.forEach(option => {
        const optionTheme = option.dataset.theme;
        if ( optionTheme !== shirtDesignSelector.value) {
            option.style.display = 'none';
        } else if ( optionTheme === shirtDesignSelector.value) {
            option.style.display = 'initial';
        }
    })

})
