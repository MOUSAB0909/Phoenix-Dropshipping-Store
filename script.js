
document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    fetch('https://ali-express1.p.rapidapi.com/search?query=shoes&page=1&country=US', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '73058c1361mshcbdb83cfcaee91ap176b27jsnc4856c98a376',
            'X-RapidAPI-Host': 'ali-express1.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        data.docs.slice(0, 6).forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.product_main_image_url}" alt="${product.product_title}" />
                <h3>${product.product_title}</h3>
                <p>$${product.app_sale_price}</p>
                <button>Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error loading products:', error));
});
