const nameInputField = document.getElementById("name");
const otherJobInputField = document.getElementById("other-job-role");
const roleSelector = document.getElementById("title");
const shirtColorSelector = document.getElementById("color");
const shirtDesignSelector = document.getElementById("design");

nameInputField.focus();
otherJobInputField.style.display = 'none';

roleSelector.addEventListener("change", (e) => {
    const option = e.target;
    if (option.tagName === "SELECT" && option.value === "other") {
        otherJobInputField.style.display = 'initial';
    }
});

shirtColorSelector.disabled = true;
shirtDesignSelector.addEventListener("change", (e) => {
    shirtColorSelector.disabled = false;
    if (shirtDesignSelector.value = "js puns") {

    } else if (shirtDesignSelector.value = "heart hs") {

    }
})
