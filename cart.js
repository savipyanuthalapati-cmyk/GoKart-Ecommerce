document.addEventListener("DOMContentLoaded",()=>{
    displayCart()
})
function displayCart(){
    let cartContent=document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice");
    let cart=JSON.parse(localStorage.getItem("cart")) || [];

    cartContent.innerHTML="";
    let totalBill=0;
    if (cart.length==0) {
        cartContent.innerHTML=`<p>Your Cart is Empty..Start Shopping..</p>`
    }
    else{
        cart.map((product,i)=>{
            totalBill +=Math.round(product.price*90);
            let newProd=document.createElement("div");
            newProd.setAttribute("class","prod-info");
            newProd.innerHTML=`<h1>${product.title}</h1>`;

        cartContent.append(newProd);
        });
        totalPrice.innerHTML=`<h1>Your totalBill is -&#8377;${totalBill}</h1>`
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displayCart();
});

function displayCart() {
    let cartContent = document.getElementById("cartContent");
    let totalPrice = document.getElementById("totalPrice");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartContent.innerHTML = "";
    let totalBill = 0;

    if (cart.length === 0) {
        cartContent.innerHTML = `<p class="empty-msg">Your Cart is Empty.. Start Shopping!!!!🐦‍🔥</p>`;
        totalPrice.innerHTML = "";
    } else {
        cart.forEach((product, i) => {
            let convertedPrice = Math.round(product.price * 90);
            totalBill += convertedPrice;

            let newProd = document.createElement("div");
            newProd.setAttribute("class", "prod-info");

        newProd.innerHTML = `
            <div class="img-prod">
                <div class="img">
                    <img src="${product.images[0]}" alt="${product.title}" />
                </div>
            </div>
            <div class="product-details">
                <h2>${product.title}</h2>      
                <p>Availability: ${product.availabilityStatus}</p>        
                <p>Category: ${product.category}</p>
                <p>Return Policy: ${product.returnPolicy}</p>
                <p>Shipping Information: ${product.shippingInformation}</p>
                <p>Stock: ${product.stock}</p>
                <p>Warranty Information: ${product.warrantyInformation}</p>
                <p>
                    Price: 
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    ${product.price.toFixed(2) * 90}
                </p>
            </div>        
           <button onclick="removeItem(${i})">Remove</button>   `;
            cartContent.append(newProd);
        });
        totalPrice.innerHTML = `<h1 class="total-bill-text">Your total bill is: ₹${totalBill}</h1>`;
    }
}

// Function to handle the "Remove" button
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(); // Refresh the list
}