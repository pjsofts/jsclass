const products = [
    {
        name: "iphone",
        price: 2000
    },
    {
        name: "samsung",
        price: 1000
    }
];

const productsDiv = document.getElementById("products");

function showProducts(){
    productsDiv.innerHTML = "";
    products.forEach(product=>{
        const productDiv = document.createElement("div");
        productDiv.textContent = product.name + " " + product.price;
        productsDiv.appendChild(productDiv);
    });
}

showProducts();




function add(){
    console.log("inside add");
    const productName = document.getElementById("product-name");
    const productPrice = document.getElementById("product-price");
    products.push({
        name: productName.value,
        price: productPrice.value
    });
    console.log(products);
    showProducts();
}