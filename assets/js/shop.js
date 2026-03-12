        // Product Data
        const products = [
            { id: 1, name: "Banarasi Silk Saree", category: "textiles", price: 4000, image: "https://prithacrafts.com/wp-content/uploads/2020/12/NTS3737-Pure_Silk_Lined_Banarasi_Saree_Red-111_1000x.jpg", description: "Pure silk Banarasi saree with intricate zari work from Varanasi. A masterpiece of Indian weaving tradition." },
            { id: 2, name: "Rajasthani Blue Pottery Set", category: "handicrafts", price: 3500, image: "https://c9admin.cottage9.com/uploads/2322/image_2023_01_20T09_08_11_450Z-1024x723.png", description: "Handcrafted blue pottery set from Jaipur featuring traditional floral patterns. Set of 6 plates and bowls." },
            { id: 3, name: "Kerala Kasavu Saree", category: "textiles", price: 2999, image: "https://i.pinimg.com/736x/92/98/59/92985968f7390c0e49c91c70de1f7c9c.jpg", description: "Traditional Kerala kasavu saree with golden border, handwoven from premium cotton-silk blend." },
            { id: 4, name: "Madhubani Painting", category: "art", price: 1999, image: "https://i.pinimg.com/originals/cc/7e/27/cc7e2733f44c3716275cae476d3d698d.jpg", description: "Authentic Madhubani folk art painting depicting Hindu mythology. Natural colors on handmade paper." },
            { id: 5, name: "Phulkari Dupatta", category: "textiles", price: 1199, image: "https://craftmagic.in/wp-content/uploads/2019/10/phulkari-chanderi-dupatta-sto201c.jpg", description: "Colorful Punjabi Phulkari embroidery dupatta with geometric patterns. Pure cotton base." },
            { id: 6, name: "Sandalwood Murti", category: "home", price: 999, image: "https://i.etsystatic.com/21417665/r/il/798a0e/3644325494/il_fullxfull.3644325494_79q1.jpg", description: "Hand-carved sandalwood Ganesha murti from Mysore. Intricate details, aromatic sandalwood." },
            { id: 7, name: "Assam Silk Scarf", category: "textiles", price: 1800, image: "https://tse3.mm.bing.net/th/id/OIP.gV4DWHC06zZ5rW05iZsvqgHaJ3?rs=1&pid=ImgDetMain&o=7&rm=3", description: "Luxurious Assam silk scarf with traditional motifs. Soft texture, natural silk fibers." },
            { id: 8, name: "Kathakali Mask", category: "art", price: 789, image: "https://i.pinimg.com/originals/49/9d/2b/499d2b51a668c2f1fb137e9baa8f4a4a.jpg", description: "Traditional Kathakali dance mask from Kerala. Hand-painted wood with vibrant natural colors." },
            { id: 9, name: "Bengali Cotton Saree", category: "textiles", price: 2001, image: "https://m.media-amazon.com/images/I/51aYJahEQmL.jpg", description: "Fine cotton saree with Bengal jamdani work. Light, breathable, perfect for summer." },
            { id: 10, name: "Warli Art Canvas", category: "art", price: 3000, image: "https://paperplanedesign.in/cdn/shop/files/ethnic-indian-warli-wall-art-canvas-painting-for-home-decor-ready-to-hang-art-151823.jpg?v=1715591324&width=1080", description: "Tribal Warli art canvas depicting village life. White rice paste on earth-colored background." },
            { id: 11, name: "Brass Diya Set", category: "home", price: 800, image: "https://img3.exportersindia.com/product_images/bc-full/2022/6/10263678/brass-diya-set-of-4-1654585606-6380540.jpeg", description: "Set of 7 brass diyas for festive decoration. Traditional design, polished finish." },
            { id: 12, name: "Kashmiri Pashmina Shawl", category: "textiles", price: 2500, image: "https://tse1.explicit.bing.net/th/id/OIP.XHgoDEpV6-dnwq9E4Yqx-QHaLH?rs=1&pid=ImgDetMain&o=7&rm=3", description: "Authentic Kashmiri Pashmina shawl with Soz embroidery. Ultra-soft, hand-spun from Himalayan goat wool." },
            { id: 13, name: "Traditional Salwar Suit", category: "textiles", price: 1499, image: "https://media.istockphoto.com/id/1224796628/photo/close-up-view-of-a-mannequin-dressed-in-indian-woman-clothes-salwar-kameez-in-a-retail-display.jpg?s=1024x1024&w=is&k=20&c=ktVCd8vWDj5TxmBTg9QwhuUOjx60KZWbYCektopnxhw=", description: "Complete salwar kameez set with hand embroidery. Available in multiple traditional patterns." },
            { id: 14, name: "Terracotta Jewelry Set", category: "jewelry", price: 1500, image: "https://i.pinimg.com/originals/f6/34/1d/f6341dfa70594b52801c74bc1d53ba2d.jpg", description: "Hand-painted terracotta necklace and earring set. Eco-friendly, rustic appeal." },
            { id: 15, name: "Classical Music CD Collection", category: "art", price: 2000, image: "https://vinayakmusic.com/public/uploads/all/ty0Wf45bOgcyDVKh1tqW82p4KWO0J2CcoaUgzUOP.jpg", description: "Premium collection of Indian classical music featuring Pandit Ravi Shankar, Zakir Hussain, and more." }
        ];

        let cart = [];
        let currentView = 'landing';

        // Initialize
        window.onload = () => {
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'));
                updateCartCount();
            }
        };

        // View Functions
        function showLanding() {
            currentView = 'landing';
            document.getElementById('landingPage').style.display = 'flex';
            document.getElementById('shopPage').style.display = 'none';
            document.getElementById('sellPage').style.display = 'none';
            document.querySelector('.cart-icon').style.display = 'none';
        }

        function showShop() {
            currentView = 'shop';
            document.getElementById('landingPage').style.display = 'none';
            document.getElementById('shopPage').style.display = 'block';
            document.getElementById('sellPage').style.display = 'none';
            document.querySelector('.cart-icon').style.display = 'block';
            renderProducts(products);
        }

        function showSellForm() {
            currentView = 'sell';
            document.getElementById('landingPage').style.display = 'none';
            document.getElementById('shopPage').style.display = 'none';
            document.getElementById('sellPage').style.display = 'block';
            document.querySelector('.cart-icon').style.display = 'none';
        }

        // Product Functions
        function renderProducts(productList) {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = '';
            
            productList.forEach((product, index) => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.style.animation = `fadeInUp 0.6s ease ${index * 0.05}s both`;
                
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <span class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                        <div class="product-price">₹${product.price.toLocaleString('en-IN')}</div>
                        <button class="add-to-cart-btn" onclick="showProductDetails(${product.id})">
                            <i class="fas fa-eye"></i> View Details
                        </button>
                    </div>
                `;
                
                grid.appendChild(card);
            });
        }

        function filterProducts(category) {
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            const filtered = category === 'all' ? products : products.filter(p => p.category === category);
            renderProducts(filtered);
        }

        function searchProducts() {
            const searchTerm = document.getElementById('searchBar').value.toLowerCase();
            const filtered = products.filter(p => 
                p.name.toLowerCase().includes(searchTerm) || 
                p.category.toLowerCase().includes(searchTerm)
            );
            renderProducts(filtered);
        }

        // Cart Functions
        function addToCart(productId, quantity = 1) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({ ...product, quantity });
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            
            // Show success animation
            const btn = event.target;
            btn.innerHTML = '<i class="fas fa-check"></i> Added!';
            btn.style.background = 'linear-gradient(45deg, #06ffa5, #118ab2)';
            
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
                btn.style.background = 'linear-gradient(45deg, #118ab2, #06ffa5)';
            }, 1500);
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
            updateCartCount();
        }

        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            document.getElementById('cartCount').textContent = count;
        }

        function openCart() {
            renderCart();
            document.getElementById('cartModal').classList.add('open');
        }

        function closeCart() {
            document.getElementById('cartModal').classList.remove('open');
        }

        function renderCart() {
            const container = document.getElementById('cartItems');
            const totalContainer = document.getElementById('cartTotal');
            
            if (cart.length === 0) {
                container.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-basket" style="font-size: 3rem; margin-bottom: 15px;"></i><p>Your cart is empty</p></div>';
                totalContainer.style.display = 'none';
                return;
            }
            
            container.innerHTML = '';
            let total = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')} × ${item.quantity}</div>
                        <div style="color: #06ffa5; font-weight: bold;">₹${itemTotal.toLocaleString('en-IN')}</div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                container.appendChild(cartItem);
            });
            
            document.getElementById('cartTotalAmount').textContent = `₹${total.toLocaleString('en-IN')}`;
            totalContainer.style.display = 'block';
        }

        function checkout() {
            if (cart.length === 0) return;
            
            alert(`🎉 Order placed successfully!\n\nThank you for preserving Indian heritage.\nTotal: ₹${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString('en-IN')}\n\nYou will receive order confirmation via email.`);
            cart = [];
            localStorage.removeItem('cart');
            closeCart();
            updateCartCount();
        }

        // Product Detail Functions
        function showProductDetails(productId) {
            const product = products.find(p => p.id === productId);
            const modal = document.getElementById('productModal');
            const body = document.getElementById('productModalBody');
            
            body.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-detail-image">
                <div class="product-detail-info">
                    <h2 class="product-detail-name">${product.name}</h2>
                    <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                    <p class="product-detail-desc">${product.description}</p>
                    <div class="product-detail-price">₹${product.price.toLocaleString('en-IN')}</div>
                    
                    <div class="quantity-selector">
                        <span style="color: #ffd700; font-weight: bold;">Quantity:</span>
                        <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                        <input type="number" class="quantity-input" id="quantityInput" value="1" min="1" max="10">
                        <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                    </div>
                    
                    <button class="add-to-cart-btn" style="font-size: 1.2rem; padding: 15px;" onclick="addToCartFromModal(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            `;
            
            modal.style.display = 'flex';
        }

        function closeProductModal() {
            document.getElementById('productModal').style.display = 'none';
        }

        function changeQuantity(delta) {
            const input = document.getElementById('quantityInput');
            const newValue = Math.max(1, Math.min(10, parseInt(input.value) + delta));
            input.value = newValue;
        }

        function addToCartFromModal(productId) {
            const quantity = parseInt(document.getElementById('quantityInput').value);
            addToCart(productId, quantity);
            closeProductModal();
        }

        // Seller Form
        function submitSellerForm(event) {
            event.preventDefault();
            alert('🎉 Thank you for your interest!\n\nYour seller application has been submitted. Our team will review your details and contact you within 2-3 business days.\n\nWelcome to the Bharatverse family!');
            showLanding();
        }

        // Close modals on outside click
        window.onclick = function(event) {
            const productModal = document.getElementById('productModal');
            if (event.target === productModal) {
                closeProductModal();
            }
        }

        // Initial load
        showLanding();
    
