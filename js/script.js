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

// Gets status of each activity (selected or not selected by user)
const getActivityStatus = (arr) => {
    let unselected = [];
    let selected = [];
    arr.forEach(activity => activity.checked ? selected.push(activity) : unselected.push(activity));
    let status = {
        unselected,
        selected
    }
    return status;
}
const activityStatus = () => getActivityStatus(activities);

// Disables activities if they take place during a selected activity's time slot.
const disableConflicts = () => {
    let filledTimeSlots =  [];
    activityStatus().selected.forEach(activity => {
        const timeSlot = activity.dataset.dayAndTime;
        filledTimeSlots.push(timeSlot);
    })
    activityStatus().unselected.forEach(activity => {
        const timeSlot = activity.dataset.dayAndTime;
        if (filledTimeSlots.includes(timeSlot)) {
            activity.disabled = true;
            activity.parentElement.style.backgroundColor = "#ccc";
        } else {
            activity.disabled = false;
            activity.parentElement.style.backgroundColor = "initial";
        }
    })
};

    //Checks selected activity price and adds amount to total
activitiesField.addEventListener('change', (e) => {
    const activity = e.target;
    const activityCost = +activity.dataset.cost;
    activity.checked ? totalCost += activityCost : totalCost -= activityCost;
    totalCostDisplay.innerText = `Total: $${totalCost}`;
    activityStatus();
    disableConflicts();
});


// Payment Info
const paymentField = document.getElementById('activities');




// activities.forEach(activity => {
//     if (activity.hasAttribute('data-day-and-time')) {

//         filledSlots.includes(activity.dataset.dayAndTime) ? activity.disabled = true : activity.disabled = false;
//     }
// })