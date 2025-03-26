// Toggle profile dropdown menu
function toggleDropdown() {
    document.getElementById("profileDropdown").classList.toggle("show");
}

// Toggle navigation dropdown menu
function toggleDropdownMenu() {
    document.getElementById("navDropdown").classList.toggle("show");
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    // Close profile dropdown if clicked outside
    if (!event.target.matches('.dropdown-toggle-profile') && !event.target.closest('.dropdown-profile')) {
        var profileDropdown = document.getElementById("profileDropdown");
        if (profileDropdown && profileDropdown.classList.contains('show')) {
            profileDropdown.classList.remove('show');
        }
    }

    // Close navigation dropdown if clicked outside
    if (!event.target.matches('.dropdown-toggle-nav') && !event.target.closest('.dropdown-nav')) {
        var navDropdown = document.getElementById("navDropdown");
        if (navDropdown && navDropdown.classList.contains('show')) {
            navDropdown.classList.remove('show');
        }
    }
}

// Simulate active tracking (progress bar)
let currentStep = 3;
const steps = document.querySelectorAll('.progress-step');

function updateProgress() {
    if (currentStep < steps.length) {
        // Reset all steps
        steps.forEach((step, index) => {
            step.classList.remove('active', 'completed');
            if (index + 1 < currentStep) {
                step.classList.add('completed');
                step.innerHTML = '<i class="fas fa-check"></i>';
            } else if (index + 1 === currentStep) {
                step.classList.add('active');
                step.textContent = currentStep;
            } else {
                step.textContent = index + 1;
            }
        });

        currentStep++;

        // If reached end, reset
        if (currentStep > steps.length) {
            currentStep = 1;
        }
    }
}

// Update progress every 3 seconds for demo
setInterval(updateProgress, 3000);
