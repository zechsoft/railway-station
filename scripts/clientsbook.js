// Function to toggle the dropdown
function toggleDropdownMenu() {
    var dropdown = document.getElementById("navDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Function to close the dropdown if the user clicks outside
window.onclick = function(event) {
    var dropdown = document.getElementById("navDropdown");
    var toggleButton = document.querySelector('.dropdown-toggle');
    
    // Close the dropdown if the click is outside the dropdown or toggle button
    if (!dropdown.contains(event.target) && event.target !== toggleButton) {
        dropdown.style.display = "none";
    }
}


function nextSection(currentSection) {
    document.getElementById('section-' + currentSection).classList.remove('active');
    document.getElementById('section-' + (currentSection + 1)).classList.add('active');
    
    // If moving to final confirmation section, animate progress bar
    if (currentSection + 1 === 5) {
        setTimeout(function() {
            document.querySelector('.tracker-progress').style.width = '25%';
        }, 500);
    }
}

function prevSection(currentSection) {
    document.getElementById('section-' + currentSection).classList.remove('active');
    document.getElementById('section-' + (currentSection - 1)).classList.add('active');
}

function toggleIssue(element) {
    element.classList.toggle('selected');
}

function selectService(element) {
    // Remove selected class from all service options
    document.querySelectorAll('.service-option').forEach(function(option) {
        option.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    element.classList.add('selected');
}

function selectDate(element) {
    // Remove selected class from all date items
    document.querySelectorAll('.date-item').forEach(function(item) {
        item.classList.remove('selected');
    });
    
    // Add selected class to clicked date
    element.classList.add('selected');
}

function selectTime(element) {
    // Remove selected class from all time slots
    document.querySelectorAll('.time-slot').forEach(function(slot) {
        slot.classList.remove('selected');
    });
    
    // Add selected class to clicked time slot
    element.classList.add('selected');
}

function selectPayment(element) {
    // Remove selected class from all payment methods
    document.querySelectorAll('.payment-method').forEach(function(method) {
        method.classList.remove('selected');
    });
    
    // Add selected class to clicked payment method
    element.classList.add('selected');
}