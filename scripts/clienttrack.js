document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const refreshBtn = document.getElementById('refreshBtn');
    const helpBtn = document.getElementById('helpBtn');
    const backBtn = document.getElementById('backBtn');
    const helpModal = document.getElementById('helpModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const contactBtn = document.getElementById('contactBtn');
    const chatBtn = document.getElementById('chatBtn');
    const rescheduleBtn = document.getElementById('rescheduleBtn');
    const bookRepairBtn = document.getElementById('bookRepairBtn');
    const repairView = document.getElementById('repairView');
    const emptyView = document.getElementById('emptyView');
    const repairMessage = document.getElementById('repairMessage');
    const mapSection = document.getElementById('mapSection');
    
    // Toggle Button for Demo Purposes
    let hasRepair = true; // Default state
    
    // Functions
    function refreshStatus() {
        // Simulate refresh with loading animation
        refreshBtn.classList.add('fa-spin');
        
        setTimeout(() => {
            refreshBtn.classList.remove('fa-spin');
            // Show a notification for demo
            showNotification('Status updated!');
        }, 1500);
    }
    
    function toggleRepairView() {
        hasRepair = !hasRepair;
        
        if (hasRepair) {
            repairView.classList.add('active');
            emptyView.classList.remove('active');
        } else {
            repairView.classList.remove('active');
            emptyView.classList.add('active');
        }
    }
    
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.backgroundColor = '#0052CC';
        notification.style.color = 'white';
        notification.style.padding = '12px 24px';
        notification.style.borderRadius = '8px';
        notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        notification.style.zIndex = '1000';
        notification.textContent = message;
        
        // Add to body
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 2500);
    }
    
    // For Demo: Toggle between repair in progress and delivery tracking
    let repairStage = 'repair'; // 'repair' or 'delivery'
    
    function toggleDeliveryTracking() {
        if (repairStage === 'repair') {
            // Update to delivery stage
            repairStage = 'delivery';
            
            // Update progress steps
            const steps = document.querySelectorAll('.progress-step');
            steps[2].querySelector('.step-icon').classList.remove('current');
            steps[2].querySelector('.step-icon').classList.add('completed');
            steps[2].querySelector('.step-icon i').className = 'fas fa-check';
            
            steps[3].querySelector('.step-icon').classList.remove('current');
            steps[3].querySelector('.step-icon').classList.add('completed');
            steps[3].querySelector('.step-icon i').className = 'fas fa-check';
            
            steps[4].querySelector('.step-icon').classList.add('current');
            steps[4].querySelector('.step-time').textContent = 'Mar 24, 2025 - 4:15 PM';
            
            // Show map section and hide repair message
            repairMessage.style.display = 'none';
            mapSection.style.display = 'block';
            
            // Update estimated completion
            document.querySelector('.completion-time-value').textContent = 'Today, 4:50 PM (Delivery)';
            
            showNotification('Your device is out for delivery! Track it live.');
        } else {
            // Reset to repair stage
            repairStage = 'repair';
            
            // Reset progress steps
            const steps = document.querySelectorAll('.progress-step');
            steps[2].querySelector('.step-icon').classList.add('current');
            steps[2].querySelector('.step-icon').classList.remove('completed');
            steps[2].querySelector('.step-icon i').className = 'fas fa-tools';
            
            steps[3].querySelector('.step-icon').classList.remove('completed');
            steps[3].querySelector('.step-icon i').className = 'fas fa-clipboard-check';
            
            steps[4].querySelector('.step-icon').classList.remove('current');
            steps[4].querySelector('.step-time').textContent = 'Pending';
            
            // Show repair message and hide map section
            repairMessage.style.display = 'block';
            mapSection.style.display = 'none';
            
            // Reset estimated completion
            document.querySelector('.completion-time-value').textContent = 'Today, 4:30 PM';
            
            showNotification('Repair status updated');
        }
    }
    
    // Event Listeners
    refreshBtn.addEventListener('click', refreshStatus);
    
    helpBtn.addEventListener('click', function() {
        helpModal.style.display = 'flex';
    });
    
    closeModalBtn.addEventListener('click', function() {
        helpModal.style.display = 'none';
    });
    
    backBtn.addEventListener('click', function() {
        showNotification('Going back to previous page...');
    });
    
    contactBtn.addEventListener('click', function() {
        showNotification('Opening support options...');
    });
    
    chatBtn.addEventListener('click', function() {
        showNotification('Starting live chat...');
    });
    
    rescheduleBtn.addEventListener('click', function() {
        showNotification('Opening reschedule options...');
    });
    
    bookRepairBtn.addEventListener('click', function() {
        toggleRepairView(); // For demo purposes
    });
    
    // Click anywhere outside modal to close
    window.addEventListener('click', function(event) {
        if (event.target === helpModal) {
            helpModal.style.display = 'none';
        }
    });
    
    // For demo: Double-click on repair card to toggle between repair and delivery modes
    document.querySelector('.repair-card').addEventListener('dblclick', toggleDeliveryTracking);
    
    // Initialize: keep repair view as default
    if (hasRepair) {
        repairView.classList.add('active');
        emptyView.classList.remove('active');
    } else {
        repairView.classList.remove('active');
        emptyView.classList.add('active');
    }
});