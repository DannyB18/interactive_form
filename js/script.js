const nameInputField = document.getElementById("name");
const otherJobInputField = document.getElementById("other-job-role");
const roleSelector = document.getElementById("title");

nameInputField.focus();
otherJobInputField.style.display = 'none';

roleSelector.addEventListener("change", (e) => {
    const option = e.target;
    if (option.tagName === "SELECT" && option.value === "other") {
        otherJobInputField.style.display = 'initial';
    }
});