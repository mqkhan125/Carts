// Show the Real products.
var products = [
    { name: 'white stool', headline: 'stool of wood', price: '10,000', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D' },
    { name: 'blue chair', headline: 'soft like cloud', price: '30,000', image: 'https://images.unsplash.com/photo-1530653899913-3af1e5fb2865?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGNoYWlyfGVufDB8fDB8fHww' },
    { name: 'skin chair', headline: 'look very old', price: '15,000', image: 'https://images.unsplash.com/photo-1699588772787-1eed3b726e0a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvb2QlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'white chair', headline: 'white like snow', price: '12,000', image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdCUyMGNoYWlyJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D' },
    ,
    
];

function addproduct() {
    var clutter = '';
    products.forEach(function (product, index) {
        clutter += ` <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image lg:w-[20rem] lg:h-[18rem] w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                 <img class ="w-full h-full object-cover" src="${product.image}" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}.</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2"> &#x20AC ${product.price}</h4>
                        </div>
                        <button data-index ="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index = "${index}" class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`
    });
    document.querySelector('.products').innerHTML = clutter;
};
addproduct();

// show the popular products
var popular = [
    { name: 'white Chair', headline: 'white soft chair', price: '10,000', image: 'https://plus.unsplash.com/premium_photo-1681022527718-81786d7873bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'soft chairs', headline: 'look very old', price: '15,000', image: 'https://plus.unsplash.com/premium_photo-1690971631383-326a8b5d8ed7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoYWlyJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'white sofa', headline: 'soft like cloud', price: '30,000', image: 'https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvZmF8ZW58MHx8MHx8fDA%3D' },
    { name: 'red sofa', headline: 'soft like cloud', price: '30,000', image: 'https://images.unsplash.com/photo-1659189336526-afd9a9cc519d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mYSUyMGNoYWlyfGVufDB8fDB8fHww' },
];

function addpopularproducts() {
    var clutter = "";
    popular.forEach(function (product) {
        clutter = clutter + ` <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 md:w-[30%] w-[65%] cursor-pointer flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover" src="${product.image}" alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500"> &#x20AC ${product.price}</h4>
                    </div>
                </div>`
    })
    document.querySelector('.populars').innerHTML = clutter;
}
addpopularproducts();

// on click of products add button add it to the cart.
cart = [];
function addToCart() {
    document.querySelector('.products').addEventListener('click', function (details) {
        if (details.target.classList.contains('add')) {
            cart.push(products[details.target.dataset.index]);
        }
    })
}


function toShowCart() {
    // Show the cart when carticon is clicked
    document.querySelector('.carticon').addEventListener('click', function (details) {
        document.querySelector('.cartexpnd').style.display = 'block';
        
        var clutter = '';
        cart.forEach(function (prod, index) {
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                     <img class='w-full h-full object-fit' src="${prod.image}" />
                    </div>
                    <div>
                        <h3 class="font-semibold">${prod.name}</h3>
                        <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
                    </div>
                </div>`;
        });
        document.querySelector('.cartexpnd').innerHTML = clutter;
    });

    // Hide the cart if clicked outside of the cart or carticon
    document.addEventListener('click', function (details) {
        const cartContainer = document.querySelector('.cartexpnd');
        const cartIcon = document.querySelector('.carticon');

        // Check if click is outside the cart container and cart icon
        if (!cartContainer.contains(details.target) && !cartIcon.contains(details.target)) {
            cartContainer.style.display = 'none';
        }
    });
}
toShowCart();
addToCart();