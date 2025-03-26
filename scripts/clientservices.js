        // Toggle category selection
        const categoryItems = document.querySelectorAll('.category-item');
        categoryItems.forEach(item => {
            item.addEventListener('click', () => {
                categoryItems.forEach(cat => cat.classList.remove('active'));
                item.classList.add('active');
            });
        });
        
        // Service Detail Modal Functions
        function openServiceDetail(serviceId) {
            document.getElementById('serviceDetailModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // In a real app, you would fetch service details based on serviceId
            // and update the modal content
            
            if (serviceId === 'samsung-battery') {
                document.getElementById('serviceTitle').innerText = 'Samsung Galaxy Battery Replacement';
            } else if (serviceId === 'water-damage') {
                document.getElementById('serviceTitle').innerText = 'Water Damage Repair';
            } else if (serviceId === 'charging-port') {
                document.getElementById('serviceTitle').innerText = 'Charging Port Repair';
            } else {
                document.getElementById('serviceTitle').innerText = 'iPhone 12 Screen Replacement';
            }
        }
        
        function closeServiceDetail() {
            document.getElementById('serviceDetailModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('serviceDetailModal');
        }