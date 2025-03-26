 // Sample product data
 const products = [
    {
        id: 1,
        name: "Fast Charging Adapter - 18W",
        description: "Quick Charge 3.0 compatible, fast charging for all smartphones with USB-C port.",
        category: "chargers",
        price: 599,
        originalPrice: 799,
        rating: 4.5,
        reviews: 200,
        stock: 10,
        images: [
            "https://m.media-amazon.com/images/I/21y2loTvcCL._SY300_SX300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/512ORJkkAEL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/51mFk4aBJnL._SX679_.jpg"
        ],
        specs: [
            "Output: 5V/3A, 9V/2A, 12V/1.5A",
            "Input: 100-240V, 50/60Hz",
            "Compatible with QC 3.0 devices",
            "Compact and portable design",
            "Over-voltage and over-current protection"
        ]
    },
    {
        id: 2,
        name: "Premium Leather Phone Case",
        description: "Genuine leather case with card slots and magnetic closure for premium protection.",
        category: "cases",
        price: 899,
        originalPrice: 1299,
        rating: 4.2,
        reviews: 150,
        stock: 5,
        images: [
            "https://m.media-amazon.com/images/I/61-+upfmpgL._SX522_.jpg",
            "https://m.media-amazon.com/images/I/71FJfZPF8eL._SX522_.jpg",
            "https://m.media-amazon.com/images/I/71+8JuhDjdL._SX522_.jpg"
        ],
        specs: [
            "Material: Genuine leather",
            "3 card slots + cash pocket",
            "Magnetic closure",
            "Precise cutouts for all ports",
            "Available for all major smartphone models"
        ]
    },
    {
        id: 3,
        name: "Tempered Glass Screen Protector",
        description: "9H hardness tempered glass with oleophobic coating to resist fingerprints.",
        category: "protectors",
        price: 249,
        originalPrice: 399,
        rating: 4.7,
        reviews: 350,
        stock: 20,
        images: [
            "https://m.media-amazon.com/images/I/61AQP4tYRwL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61si4vdgsAL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61Yz3JABj6L._SX679_.jpg"
        ],
        specs: [
            "9H hardness tempered glass",
            "Oleophobic coating",
            "99.9% transparency",
            "Bubble-free installation",
            "Compatible with most screen protectors"
        ]
    },
    {
        id: 4,
        name: "Wireless Bluetooth Earbuds",
        description: "True wireless earbuds with 20hrs playback time and IPX5 water resistance.",
        category: "headphones",
        price: 1499,
        originalPrice: 1999,
        rating: 4.3,
        reviews: 180,
        stock: 8,
        images: [
            "https://m.media-amazon.com/images/I/61+pEvfKgOL._SX522_.jpg",
            "https://m.media-amazon.com/images/I/616-m1SHC+L._SX522_.jpg",
            "https://m.media-amazon.com/images/I/61VmI6KPc3L._SX522_.jpg"
        ],
        specs: [
            "Bluetooth 5.0",
            "20hrs total playback time",
            "IPX5 water resistant",
            "Touch controls",
            "Built-in microphone for calls"
        ]
    },
    {
        id: 5,
        name: "10000mAh Power Bank",
        description: "Slim power bank with dual USB ports and fast charging capability.",
        category: "powerbanks",
        price: 799,
        originalPrice: 999,
        rating: 4.6,
        reviews: 240,
        stock: 0,
        images: [
            "https://m.media-amazon.com/images/I/21O3wS9E52L._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/615WrSMpnHL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71pF7s1LZlL._SX679_.jpg"
        ],
        specs: [
            "Capacity: 10000mAh",
            "Dual USB output ports",
            "Input: Micro USB",
            "LED battery indicator",
            "Slim and portable design"
        ]
    },
    {
        id: 6,
        name: "Braided USB-C Cable",
        description: "Durable nylon braided USB-C cable with fast charging and data transfer.",
        category: "cables",
        price: 199,
        originalPrice: 299,
        rating: 4.4,
        reviews: 120,
        stock: 15,
        images: [
            "https://m.media-amazon.com/images/I/71L4r2qAVTL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71dwlMN1I2L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61rTV3hVaEL._SX679_.jpg"
        ],
        specs: [
            "Length: 1.2m",
            "Nylon braided for durability",
            "Supports fast charging",
            "Data transfer speed up to 480Mbps",
            "Gold-plated connectors"
        ]
    },
    {
        id: 7,
        name: "Car Phone Holder",
        description: "360° rotation car phone mount with strong suction cup and one-hand operation.",
        category: "other",
        price: 349,
        originalPrice: 499,
        rating: 4.1,
        reviews: 90,
        stock: 12,
        images: [
            "https://m.media-amazon.com/images/I/41WkDSIYedL._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/814FNVv-mZL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/81etOaSEYBL._SX679_.jpg"
        ],
        specs: [
            "360° rotation for optimal viewing",
            "Strong suction cup base",
            "One-hand operation",
            "Fits phones 4-6.5 inches",
            "Dashboard or windshield mounting"
        ]
    },
    {
        id: 8,
        name: "Wireless Charging Pad",
        description: "10W fast wireless charging pad with LED indicator and non-slip surface.",
        category: "chargers",
        price: 699,
        originalPrice: 899,
        rating: 4.0,
        reviews: 75,
        stock: 7,
        images: [
            "https://m.media-amazon.com/images/I/41wtW2H5yLL._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/71cjxEP+HJL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71ifKgcHr4L._SX679_.jpg"
        ],
        specs: [
            "10W fast wireless charging",
            "Qi-certified",
            "LED charging indicator",
            "Non-slip silicone surface",
            "Compatible with all Qi-enabled devices"
        ]
    }
];

// Cart functionality
let cart = [];
let currentCategory = 'all';

// DOM elements
const productsContainer = document.getElementById('productsContainer');
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const emptyCart = document.getElementById('emptyCart');
const cartSummary = document.getElementById('cartSummary');
const cartCount = document.getElementById('cartCount');
const subtotal = document.getElementById('subtotal');
const discount = document.getElementById('discount');
const total = document.getElementById('total');
const checkoutBtn = document.getElementById('checkoutBtn');
const continueShopping = document.getElementById('continueShopping');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');
const categories = document.querySelectorAll('.category');
const backBtn = document.getElementById('backBtn');
const filterBtn = document.getElementById('filterBtn');
const couponInput = document.getElementById('couponInput');
const applyCoupon = document.getElementById('applyCoupon');

// Initialize the app
function init() {
    renderProducts();
    setupEventListeners();
}

// Render products based on current category
function renderProducts() {
    productsContainer.innerHTML = '';
    
    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(product => product.category === currentCategory);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.id = product.id;
        
        const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        productCard.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">₹${product.price}</span>
                    <span class="original-price">₹${product.originalPrice}</span>
                    <span class="discount">${discountPercent}% OFF</span>
                </div>
                <div class="product-rating">
                    <div class="stars">
                        ${renderStars(product.rating)}
                    </div>
                    <span class="reviews">(${product.reviews}+)</span>
                </div>
                <div class="stock ${product.stock === 0 ? 'out-of-stock' : ''}">
                    <i class="fas fa-circle"></i>
                    ${product.stock === 0 ? 'Out of Stock' : 'In Stock'}
                </div>
                <button class="add-to-cart" ${product.stock === 0 ? 'disabled' : ''}>
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Add event listeners to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart')) {
                const productId = parseInt(card.dataset.id);
                showProductDetails(productId);
            }
        });
    });
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(button.closest('.product-card').dataset.id);
            addToCart(productId);
        });
    });
}

// Render star rating
function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Show product details modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    modalBody.innerHTML = `
        <div class="product-gallery">
            <img src="${product.images[0]}" alt="${product.name}" class="main-image" id="mainImage">
            <div class="thumbnail-container">
                ${product.images.map((img, index) => `
                    <img src="${img}" alt="Thumbnail ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                `).join('')}
            </div>
        </div>
        <h2 class="product-title">${product.name}</h2>
        <p class="product-description">${product.description}</p>
        
        <div class="product-specs">
            <h4 class="specs-title">Specifications:</h4>
            <ul class="specs-list">
                ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
            </ul>
        </div>
        
        <div class="price-section">
            <span class="modal-price">₹${product.price}</span>
            <span class="modal-original-price">₹${product.originalPrice}</span>
            <span class="modal-discount">${discountPercent}% OFF</span>
        </div>
        
        <div class="rating-section">
            <div class="modal-rating">
                ${product.rating.toFixed(1)} <i class="fas fa-star"></i>
            </div>
            <span class="modal-reviews">${product.reviews}+ Reviews</span>
        </div>
        
        <div class="delivery-section">
            <h4 class="delivery-title">
                <i class="fas fa-truck"></i> Delivery Info
            </h4>
            <p class="delivery-text">
                This item will be delivered along with your repaired device. Estimated delivery: 2-3 business days after device repair completion.
            </p>
        </div>
        
        <div class="action-buttons">
            <button class="buy-now" id="buyNowBtn">
                Buy Now
            </button>
            <button class="add-to-cart-modal" id="addToCartModalBtn">
                Add to Cart
            </button>
        </div>
    `;
    
    // Add event listeners to thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', () => {
            const index = thumb.dataset.index;
            document.getElementById('mainImage').src = product.images[index];
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
    
    // Add event listeners to action buttons
    document.getElementById('addToCartModalBtn').addEventListener('click', () => {
        addToCart(productId);
        productModal.classList.remove('active');
    });
    
    document.getElementById('buyNowBtn').addEventListener('click', () => {
        addToCart(productId);
        productModal.classList.remove('active');
        showCart();
        // In a real app, you would proceed directly to checkout
    });
    
    productModal.classList.add('active');
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock === 0) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
        } else {
            alert('Maximum available quantity reached for this product');
            return;
        }
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: 1,
            stock: product.stock
        });
    }
    
    updateCart();
    showToast(`${product.name} added to cart`);
}

// Update cart UI
function updateCart() {
    // Update cart count
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = itemCount;
    
    // Update cart modal if open
    if (cartModal.classList.contains('active')) {
        renderCartItems();
    }
}

// Render cart items
function renderCartItems() {
    if (cart.length === 0) {
        emptyCart.style.display = 'flex';
        cartSummary.style.display = 'none';
        cartItems.innerHTML = '';
        cartItems.appendChild(emptyCart);
        return;
    }
    
    emptyCart.style.display = 'none';
    cartSummary.style.display = 'block';
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.dataset.id = item.id;
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-price">₹${item.price}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn minus">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" ${item.quantity >= item.stock ? 'disabled' : ''}>+</button>
                </div>
                <div class="remove-item">
                    <i class="fas fa-trash"></i> Remove
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Add event listeners to quantity controls
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.closest('.cart-item').dataset.id);
            updateCartItemQuantity(productId, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.closest('.cart-item').dataset.id);
            updateCartItemQuantity(productId, 1);
        });
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.closest('.cart-item').dataset.id);
            removeFromCart(productId);
        });
    });
    
    // Update cart summary
    updateCartSummary();
}

// Update cart item quantity
function updateCartItemQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    const newQuantity = item.quantity + change;
    
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    if (newQuantity > item.stock) {
        alert('Maximum available quantity reached for this product');
        return;
    }
    
    item.quantity = newQuantity;
    updateCart();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update cart summary
function updateCartSummary() {
    const subtotalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const discountAmount = 0; // Would be calculated from coupons in a real app
    const totalAmount = subtotalAmount - discountAmount;
    
    subtotal.textContent = `₹${subtotalAmount.toLocaleString()}`;
    discount.textContent = `-₹${discountAmount.toLocaleString()}`;
    total.textContent = `₹${totalAmount.toLocaleString()}`;
}

// Show cart modal
function showCart() {
    renderCartItems();
    cartModal.classList.add('active');
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = 'var(--primary-color)';
    toast.style.color = 'white';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '4px';
    toast.style.zIndex = '1000';
    toast.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    toast.style.animation = 'fadeIn 0.3s, fadeOut 0.3s 2.7s';
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Cart icon click
    cartIcon.addEventListener('click', showCart);
    
    // Close cart modal
    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });
    
    // Continue shopping button
    continueShopping.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });
    
    // Close product modal
    closeModal.addEventListener('click', () => {
        productModal.classList.remove('active');
    });
    
    // Category selection
    categories.forEach(category => {
        category.addEventListener('click', () => {
            categories.forEach(c => c.classList.remove('active'));
            category.classList.add('active');
            currentCategory = category.dataset.category;
            renderProducts();
        });
    });
    
    // Back button
    backBtn.addEventListener('click', () => {
        // In a real app, this would navigate back
        console.log('Back button clicked');
    });
    
    // Filter button
    filterBtn.addEventListener('click', () => {
        // In a real app, this would open filter options
        console.log('Filter button clicked');
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        // In a real app, this would proceed to checkout
        alert('Proceeding to checkout');
    });
    
    // Apply coupon button
    applyCoupon.addEventListener('click', () => {
        const couponCode = couponInput.value.trim();
        if (couponCode) {
            // In a real app, this would validate the coupon
            alert(`Coupon "${couponCode}" applied! (Demo only)`);
        } else {
            alert('Please enter a coupon code');
        }
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.classList.remove('active');
        }
    });
}

// Initialize the app
init();