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

const scheduleActivities = (checked) => {
    const filledSlots = [];
    checked.forEach(input => {
        if (input.hasAttribute('data-day-and-time')) {
            const timeSlot = input.dataset.dayAndTime
            filledSlots.push(timeSlot);
        }
    });
    console.log(filledSlots);
    return filledSlots;
    
};

//This needs to be fixed
// Maybe use a class instead to mark an activity as a conflict
const blockActivities = (filledSlots) => {
    const timeSlots = filledSlots;
    let conflictSlots = [];
    activities.forEach(activity => {
        if (activity.hasAttribute('data-day-and-time')) {
            if (timeSlots.includes(activity.dataset.dayAndTime) && activity.checked === false) {
                conflictSlots.push(activity);
            }
        }
    })
    conflictSlots.forEach(activity => {
        if (timeSlots.includes(activity.dataset.dayAndTime) === true) {
            activity.disabled = true;
            activity.parentElement.style.backgroundColor = '#ccc';
        } else if (timeSlots.includes(activity.dataset.dayAndTime) === false) {
            activity.disabled = false;
            activity.parentElement.style.backgroundColor = 'initial';
        }
    });
};


    //Checks selected activity price and adds amount to total
activitiesField.addEventListener('change', (e) => {
    const activity = e.target;
    const activityCost = +activity.dataset.cost;
    activity.checked ? totalCost += activityCost : totalCost -= activityCost;
    totalCostDisplay.innerText = `Total: $${totalCost}`;

    const checked = getChecked(activities);
    const filledTimeSlots = scheduleActivities(checked);
    blockActivities(filledTimeSlots);
});


// Payment Info
const paymentField = document.getElementById('activities');




// activities.forEach(activity => {
//     if (activity.hasAttribute('data-day-and-time')) {

//         filledSlots.includes(activity.dataset.dayAndTime) ? activity.disabled = true : activity.disabled = false;
//     }
// })