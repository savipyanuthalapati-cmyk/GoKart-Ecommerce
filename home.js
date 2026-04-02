let products=[];
let productContainer = document.getElementById("productContainer");

function fetchProduct(){
    fetch("https://dummyjson.com/products")
    .then((res)=>{
        return res.json();
    })
    .then((val)=>{
        // console.log(products);
        products = val.products;
        localStorage.setItem("allproducts",
            JSON.stringify(products));
        displayProducts(products);
    });
}

fetchProduct();

function displayProducts(product){
    //console.log(product);
    let output="";
    product.map((v)=>{
       output += `
            <main class="product-card">
            
                <div class="image">
                    <img src="${v.thumbnail}" alt="">
                </div>
            
                <div class="content">
                    <h3>${v.title}</h3>
            
                    <div class="ratingBox">
                        <p class="price">₹ ${Math.round(v.price * 90)}</p>
                        <p class="rating">⭐ ${v.rating}</p>
                    </div>
            
                    <div class="detailBox">
                        <p>Stock: ${v.stock}</p>
                        <button onclick="ViewDetails(${v.id})">View Details</button>
                    </div>
                </div>
            
            </main>`;
    });
    productContainer.innerHTML=output;
}

document.getElementById("searchProduct").addEventListener("input",(e)=>{
    let searchTerm = e.target.value.toLowerCase();
    let filteredProduct = products.filter((v)=>{
        return (
            v.title.toLowerCase().includes(searchTerm)||
            v.category.toLowerCase().includes(searchTerm)
        );
    });
    displayProducts(filteredProduct);
});

function ViewDetails(productID){
    console.log(productID);
    localStorage.setItem("productID",productID);
    window.location.href="../Details/details.html"
    
}