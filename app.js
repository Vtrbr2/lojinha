// Products Data
const products = [
    {
        id: 1,
        name: "Cimento Portland 50kg",
        category: "Construção",
        subcategory: "Cimento",
        price: 45.00,
        originalPrice: 55.00,
        rating: 4.5,
        stock: 45,
        sold: 15,
        discount: 18,
        description: "Cimento Portland CP-II de alta qualidade para construção",
        image: "https://picsum.photos/seed/cement/400/400"
    },
    {
        id: 2,
        name: "Tubo PVC 100mm 6m",
        category: "Construção",
        subcategory: "PVC e Tubos",
        price: 38.00,
        originalPrice: 45.00,
        rating: 4,
        stock: 30,
        sold: 10,
        discount: 15,
        description: "Tubo PVC esgoto 100mm com 6 metros",
        image: "https://picsum.photos/seed/pvc/400/400"
    },
    {
        id: 3,
        name: "Enxada Cabo Longo",
        category: "Jardim",
        subcategory: "Ferramentas",
        price: 28.00,
        originalPrice: 35.00,
        rating: 5,
        stock: 25,
        sold: 15,
        discount: 20,
        description: "Enxada profissional com cabo de madeira reforçado",
        image: "https://picsum.photos/seed/hoe/400/400"
    },
    {
        id: 4,
        name: "Ração Premium Cães 15kg",
        category: "Pets",
        subcategory: "Ração Cães",
        price: 120.00,
        originalPrice: 150.00,
        rating: 5,
        stock: 40,
        sold: 20,
        discount: 20,
        description: "Ração premium para cães adultos de todas as raças",
        image: "https://picsum.photos/seed/dogfood/400/400"
    },
    {
        id: 5,
        name: "Conjunto Ferramentas 50 Peças",
        category: "Construção",
        subcategory: "Ferramentas",
        price: 89.00,
        originalPrice: 110.00,
        rating: 4.5,
        stock: 20,
        sold: 10,
        discount: 19,
        description: "Kit completo com 50 ferramentas para uso doméstico",
        image: "https://picsum.photos/seed/toolset/400/400"
    },
    {
        id: 6,
        name: "Brinquedo Educativo Blocos",
        category: "Brinquedos",
        subcategory: "Educativos",
        price: 45.00,
        originalPrice: 60.00,
        rating: 5,
        stock: 50,
        sold: 30,
        discount: 25,
        description: "Blocos de montar educativos para crianças 3+",
        image: "https://picsum.photos/seed/blocks/400/400"
    },
    {
        id: 7,
        name: "Mangueira Jardim 30m",
        category: "Jardim",
        subcategory: "Irrigação",
        price: 55.00,
        originalPrice: 70.00,
        rating: 4,
        stock: 35,
        sold: 15,
        discount: 21,
        description: "Mangueira reforçada de 30 metros para irrigação",
        image: "https://picsum.photos/seed/hose/400/400"
    },
    {
        id: 8,
        name: "Areia Ensacada 20kg",
        category: "Construção",
        subcategory: "Materiais",
        price: 18.00,
        originalPrice: 22.00,
        rating: 4,
        stock: 60,
        sold: 20,
        discount: 18,
        description: "Areia fina lavada ensacada 20kg",
        image: "https://picsum.photos/seed/sand/400/400"
    },
    {
        id: 9,
        name: "Comedouro Automático Pet",
        category: "Pets",
        subcategory: "Acessórios",
        price: 95.00,
        originalPrice: 120.00,
        rating: 5,
        stock: 25,
        sold: 10,
        discount: 21,
        description: "Comedouro automático programável para pets",
        image: "https://picsum.photos/seed/feeder/400/400"
    },
    {
        id: 10,
        name: "Carrinho de Mão Reforçado",
        category: "Jardim",
        subcategory: "Ferramentas",
        price: 150.00,
        originalPrice: 180.00,
        rating: 5,
        stock: 15,
        sold: 5,
        discount: 17,
        description: "Carrinho de mão com estrutura reforçada",
        image: "https://picsum.photos/seed/wheelbarrow/400/400"
    },
    {
        id: 11,
        name: "Pá de Jardinagem",
        category: "Jardim",
        subcategory: "Ferramentas",
        price: 22.00,
        originalPrice: 28.00,
        rating: 4,
        stock: 40,
        sold: 20,
        discount: 21,
        description: "Pá de jardinagem com cabo ergonômico",
        image: "https://picsum.photos/seed/shovel/400/400"
    },
    {
        id: 12,
        name: "Bola Futebol Infantil",
        category: "Brinquedos",
        subcategory: "Esportivos",
        price: 35.00,
        originalPrice: 45.00,
        rating: 4.5,
        stock: 45,
        sold: 25,
        discount: 22,
        description: "Bola de futebol tamanho infantil",
        image: "https://picsum.photos/seed/ball/400/400"
    },
    {
        id: 13,
        name: "Ração Gatos Premium 10kg",
        category: "Pets",
        subcategory: "Ração Gatos",
        price: 85.00,
        originalPrice: 100.00,
        rating: 5,
        stock: 35,
        sold: 15,
        discount: 15,
        description: "Ração premium para gatos adultos",
        image: "https://picsum.photos/seed/catfood/400/400"
    },
    {
        id: 14,
        name: "Massa Corrida 25kg",
        category: "Construção",
        subcategory: "Acabamento",
        price: 42.00,
        originalPrice: 52.00,
        rating: 4,
        stock: 30,
        sold: 15,
        discount: 19,
        description: "Massa corrida para acabamento interno",
        image: "https://picsum.photos/seed/plaster/400/400"
    },
    {
        id: 15,
        name: "Regador 10 Litros",
        category: "Jardim",
        subcategory: "Irrigação",
        price: 25.00,
        originalPrice: 32.00,
        rating: 4.5,
        stock: 40,
        sold: 20,
        discount: 22,
        description: "Regador plástico resistente 10L",
        image: "https://picsum.photos/seed/watercan/400/400"
    }
];

// State Management
let cart = [];
let currentFilter = null;

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderProducts();
    startCountdown();
    updateCartBadge();
}

// Event Listeners Setup
function setupEventListeners() {
    // Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenu = document.getElementById('closeMenu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', closeMenuHandler);
    menuOverlay.addEventListener('click', closeMenuHandler);

    function closeMenuHandler() {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Search Toggle
    const searchToggle = document.getElementById('searchToggle');
    const searchBar = document.getElementById('searchBar');

    searchToggle.addEventListener('click', () => {
        searchBar.classList.toggle('active');
    });

    // Category Toggles
    const categoryToggles = document.querySelectorAll('.category-toggle');
    categoryToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const categoryId = this.getAttribute('data-category');
            const submenu = document.getElementById(categoryId);
            
            this.classList.toggle('active');
            submenu.classList.toggle('active');
        });
    });

    // Modal
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');

    modalOverlay.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Render Products
function renderProducts() {
    renderNewProducts();
    renderDealOfDay();
    renderBestRated();
    renderTrends();
}

function renderNewProducts() {
    const container = document.getElementById('newProducts');
    const newProducts = products.slice(0, 4);
    container.innerHTML = newProducts.map(product => createProductCard(product)).join('');
    attachProductListeners(container);
}

function renderDealOfDay() {
    const container = document.getElementById('dealOfDay');
    const dealProduct = products[3]; // Ração Premium
    container.innerHTML = createDealCard(dealProduct);
    
    const addToCartBtn = container.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(dealProduct);
    });
}

function renderBestRated() {
    const container = document.getElementById('bestRated');
    const bestRated = products.filter(p => p.rating === 5).slice(0, 4);
    container.innerHTML = bestRated.map(product => createProductCard(product)).join('');
    attachProductListeners(container);
}

function renderTrends() {
    const container = document.getElementById('trends');
    const trends = products.slice(5, 9);
    container.innerHTML = trends.map(product => createProductCard(product)).join('');
    attachProductListeners(container);
}

// Create Product Card
function createProductCard(product) {
    const stars = createStars(product.rating);
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <span class="discount-badge">-${product.discount}%</span>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-value">(${product.rating})</span>
                </div>
                <div class="product-prices">
                    <span class="current-price">R$ ${product.price.toFixed(2)}</span>
                    <span class="original-price">R$ ${product.originalPrice.toFixed(2)}</span>
                </div>
                <button class="add-to-cart" data-product-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i> Adicionar
                </button>
            </div>
        </div>
    `;
}

// Create Deal Card
function createDealCard(product) {
    const stars = createStars(product.rating);
    const stockPercentage = (product.sold / (product.stock + product.sold)) * 100;
    
    return `
        <div class="deal-image">
            <img src="${product.image}" alt="${product.name}">
            <span class="discount-badge">-${product.discount}%</span>
        </div>
        <div class="deal-info">
            <span class="product-category">${product.category}</span>
            <h3>${product.name}</h3>
            <div class="product-rating">
                <div class="stars">${stars}</div>
                <span class="rating-value">(${product.rating})</span>
            </div>
            <p class="deal-description">${product.description}</p>
            <div class="stock-info">
                <div class="stock-label">
                    <span>Já Vendidos: ${product.sold}</span>
                    <span>Disponível: ${product.stock}</span>
                </div>
                <div class="stock-bar">
                    <div class="stock-fill" style="width: ${stockPercentage}%"></div>
                </div>
            </div>
            <div class="deal-prices">
                <span class="current-price">R$ ${product.price.toFixed(2)}</span>
                <span class="original-price">R$ ${product.originalPrice.toFixed(2)}</span>
            </div>
            <button class="add-to-cart" data-product-id="${product.id}">
                <i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho
            </button>
        </div>
    `;
}

// Create Stars Rating
function createStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star empty"></i>';
        }
    }
    return stars;
}

// Attach Product Listeners
function attachProductListeners(container) {
    const productCards = container.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const productId = parseInt(card.getAttribute('data-product-id'));
        const product = products.find(p => p.id === productId);
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.add-to-cart')) {
                openProductModal(product);
            }
        });
        
        const addToCartBtn = card.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product);
        });
    });
}

// Open Product Modal
function openProductModal(product) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    const stars = createStars(product.rating);
    const stockPercentage = (product.sold / (product.stock + product.sold)) * 100;
    
    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-details">
                <span class="product-category">${product.category}</span>
                <h2>${product.name}</h2>
                <div class="product-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-value">(${product.rating})</span>
                </div>
                <p class="deal-description">${product.description}</p>
                <div class="stock-info">
                    <div class="stock-label">
                        <span>Já Vendidos: ${product.sold}</span>
                        <span>Disponível: ${product.stock}</span>
                    </div>
                    <div class="stock-bar">
                        <div class="stock-fill" style="width: ${stockPercentage}%"></div>
                    </div>
                </div>
                <div class="deal-prices">
                    <span class="current-price">R$ ${product.price.toFixed(2)}</span>
                    <span class="original-price">R$ ${product.originalPrice.toFixed(2)}</span>
                </div>
                <button class="add-to-cart" onclick="addToCartFromModal(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Add to Cart from Modal
window.addToCartFromModal = function(productId) {
    const product = products.find(p => p.id === productId);
    addToCart(product);
};

// Add to Cart
function addToCart(product) {
    cart.push(product);
    updateCartBadge();
    showToast(`${product.name} adicionado ao carrinho!`);
}

// Update Cart Badge
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    badge.textContent = cart.length;
}

// Show Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Countdown Timer
function startCountdown() {
    // Set countdown to 7 days from now
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 7);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = '<h3>Promoção Encerrada!</h3>';
        }
    }
    
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Search Functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    // In a real implementation, this would filter and display results
    console.log('Searching for:', searchTerm);
});