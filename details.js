document.addEventListener("DOMContentLoaded", () => {
    const productDetails = document.getElementById("productDetails");
    const allproducts = JSON.parse(localStorage.getItem("allproducts"));
    const productID = localStorage.getItem("productID");

    if (!allproducts || !productID) {
        productDetails.innerHTML = "<p>No product data available.</p>";
        return;
    }

    const selectedProduct = allproducts.find((v) => v.id == productID);

    if (!selectedProduct) {
        productDetails.innerHTML = "<p>Product not found.</p>";
        return;
    }

    productDetails.innerHTML = `
        <div id="container">
            <div id="box">
                <div id="box1">
                    <img src="${selectedProduct.thumbnail}" alt="${selectedProduct.title}">
                </div>
                <div id="box2">
                    <h1>${selectedProduct.title}</h1>
                    <p><strong>Description:</strong>${selectedProduct.description}</p>
                    <h3> <strong>Category:</strong>${selectedProduct.category}</h3>
                    <p><strong>Brand:</strong> ${selectedProduct.brand || "NA"}</p>
                    <p><strong>Price:</strong> $${selectedProduct.price}</p>
                    <p><strong>Stock:</strong> ${selectedProduct.stock}</p>
                    <p><strong>Rating:</strong> ⭐ ${selectedProduct.rating}</p>
                    <button class="btn1">Add to Cart</button>
                    <button class="btn2">Back to Home</button>
                </div>
            </div>

            <div class="reviews">
                <h2>Customer Reviews</h2>
                <div id="reviewList"></div>
            </div>
        </div>
    `;
    document.querySelector(".btn2").addEventListener("click",()=>{
        window.location.href="../Home/home.html"
    })
    document.querySelector(".btn1").addEventListener("click",()=>{
        cartProduct(selectedProduct)
    })

    const reviewList = document.getElementById("reviewList");

    const reviews = selectedProduct.reviews || [
        { rating: 5, comment: "Highly impressed!", author: "Alice", date: "Mon Mar 18 2026 10:12:00 GMT+0530" },
        { rating: 3, comment: "It's okay", author: "Bob", date: "Tue Mar 19 2026 11:30:45 GMT+0530" },
        { rating: 2, comment: "Not good", author: "Charlie", date: "Wed Mar 20 2026 09:50:10 GMT+0530" }
    ];

    function getReviewLabel(rating) {
        rating = Number(rating);
        if (rating >= 4) return "Excellent product";
        if (rating === 3) return "Average product";
        return "Poor product";
    }

    // Render all reviews
    reviews.forEach(r => {
        reviewList.innerHTML += `
            <div class="review-item ${r.author === "Saranasah Gowri" ? "highlight" : ""}">
                <p>${"⭐".repeat(r.rating)}</p>
                <p><strong>${getReviewLabel(r.rating)}</strong></p>
                <p>${r.comment}</p>
                <p>By <strong>${r.author || "Anonymous"}</strong> on ${r.date || "Unknown date"}</p>
            </div>
        `;
    });
}); 

function cartProduct(product){
  // console.log(product);
   let cart=JSON.parse(localStorage.getItem("cart")) || [];
   cart.push(product);
   localStorage.setItem("cart",JSON.stringify(cart));
   alert("Product Added to Cart Successfully")  
}

// function cartProduct(product){
//    let cart = JSON.parse(localStorage.getItem("cart")) || [];
//    let exists = cart.find((item)=> item.id === product.id);
//    if(exists){
//        alert("Already in cart 😅");
//        return;
//    }
//    cart.push(product);
//    localStorage.setItem("cart", JSON.stringify(cart));
//    alert("Product Added to Cart Successfully ✅");
// }