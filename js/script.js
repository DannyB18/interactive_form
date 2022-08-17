const nameInput = document.getElementById("name");
const otherJobInputField = document.getElementById("other-job-role");
const roleSelector = document.getElementById("title");
const shirtColorSelector = document.getElementById("color");
const shirtDesignSelector = document.getElementById("design");


//Basic Info
nameInput.focus();
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
        if ( optionTheme !== shirtDesignSelector.value ) {
            option.hidden = true;
        } else if ( optionTheme === shirtDesignSelector.value ) {
            option.hidden = false;
        }
    })
})


// Activity Registration
const activitiesField = document.getElementById('activities');
const totalCostDisplay = document.getElementById('activities-cost');
const activities = document.querySelectorAll('#activities input');
let totalCost = 0;

const getChecked = (arr) => {
    let checked = [];
    arr.forEach(checkbox => {
        if(checkbox.checked) {
            checked.push(checkbox);
        }
    });
    return checked;
}

    //Checks selected activity price and adds amount to total
activitiesField.addEventListener('change', (e) => {
    const activity = e.target;
    const activityCost = +activity.dataset.cost;
    activity.checked ? totalCost += activityCost : totalCost -= activityCost;
    totalCostDisplay.innerText = `Total: $${totalCost}`;


    console.log(activities[1].dataset.dayAndTime);
    console.log(getChecked(activities));

});


// Payment Info
const paymentField = document.getElementById('activities');





const scheduleActivities = () => {
    // const attending = 
    let checked = [];
};

