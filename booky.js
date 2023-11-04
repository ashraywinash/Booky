import {products} from './products.js';
import {cart} from './cart.js';

let mainContainer = document.querySelector('.container');



//Page Render

products.forEach(element => {
    mainContainer.innerHTML += `
    <div class='container-1'>
        <div class="container-1-1">
            <img src='${element.pic}' class='container-1-img'>
        </div>
        <h1>${element.name}</h1>
        <h2>&#x20B9;${element.price}</h2>
        
        <div class="button-div">
            <button class="add-btn" data-product-id="${element.id}" data-sign="-">
                <svg width="100%" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="sub-btn_">
                    <g id="Edit / Add_Minus_Square">
                        <path id="Vector" d="M8 12H16M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </button>
            <a id="${element.id}" class="${element.id}">0</a>
            <button class="add-btn" data-product-id="${element.id}" data-sign="+" data-price="${element.price}">
                <svg width="100%" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="add-btn_">
                    <g id="Edit / Add_Plus_Square">
                        <path id="Vector" d="M8 12H12M12 12H16M12 12V16M12 12V8M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </button>
        </div>
    </div> `
});






let id,price;
let a_bwbtns;
let sign;
let found_item;
let cartContent = document.querySelector(".cart-content")


function handleCart(sign,id,price){

    cartContent.innerHTML = ""
    
    a_bwbtns = document.getElementsByClassName(id)




    //Add a item
    if(sign === '+'){
        cart.forEach(item =>{
            if(item.id === id){
                found_item = item;
                return;
            }

        })

        if(found_item){
            found_item.qty++;
            
            //a_bwbtns.innerHTML = found_item.qty.toString()

            for(let i=0;i<a_bwbtns.length;i++){
                a_bwbtns[i].innerHTML = found_item.qty.toString()
            }

        }else{
            cart.push({
                id: id,
                qty:1,
                price: price,
            })
            
            for(let i=0;i<a_bwbtns.length;i++){
                a_bwbtns[i].innerHTML = '1'
            }

        }

    }else{
        //Remove The item
        cart.forEach(item =>{
            if(item.id === id && item.qty >= 1){
                found_item = item;
                return;
            }

        })

        if(found_item){

            found_item.qty--;
            for(let i=0;i<a_bwbtns.length;i++){
                a_bwbtns[i].innerHTML = found_item.qty.toString()
            }

            
        }

        //Cart cleaner
        if(cart.length >= 1){
            for(let i = 0;i<cart.length;i++){

                if(cart[i]!=='empty'  && cart[i].qty <= 0){
                    cart.splice(i,1)
                }
            }
        }
    }
    cart.forEach(item=>{

        cartContent.innerHTML += `
        <div style="display: flex; flex-direction: row; gap: 5vb;align-items: center;justify-content: space-between;
    " >

        <div style="flex-grow:1;"><h1 width="100px">${item.id}</h1></div>
        <div class="button-div" style="flex-grow:1;">
            <button class="addd-btn" data-product-id="${item.id}" data-sign="-">
                <svg width="100%" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="sub-btn_">
                    <g id="Edit / Add_Minus_Square">
                        <path id="Vector" d="M8 12H16M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </button>
            <a id="${item.id}" class="${item.id}">${item.qty}</a>
            <button class="addd-btn" data-product-id="${item.id}" data-sign="+" data-price="${item.price}">
                <svg width="100%" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="add-btn_">
                    <g id="Edit / Add_Plus_Square">
                        <path id="Vector" d="M8 12H12M12 12H16M12 12V16M12 12V8M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </button>
        </div>
        <div style="flex-grow:1;"><h2>${item.price}</h2></div>
        <div style="flex-grow:1;">
        <h2>${item.price * item.qty}</h2>
        </div>
    </div>`
            
    })
    document.querySelectorAll('.addd-btn').forEach(btn =>{

        btn.addEventListener('click', ()=>{
            sign = btn.dataset.sign;
            id = btn.dataset.productId;
            price = btn.dataset.price
            handleCart(sign,id,price)
    
        })
    
    });

    found_item = undefined


}



document.querySelectorAll('.add-btn').forEach(btn =>{

    btn.addEventListener('click', ()=>{
        sign = btn.dataset.sign;
        id = btn.dataset.productId;
        price = btn.dataset.price
        handleCart(sign,id,price)

    })

});






//Cart Viewer

let viz = false

document.querySelector(".cart-btn").addEventListener('click',()=>{

    let cart_obj = document.getElementById("cart")
    let glass_block = document.getElementById("glass-block")

    glass_block.style.display = "block"
    cart_obj.style.display = "block";

    viz = true
    document.querySelector(".glass-block").classList.add("glass")


})
document.querySelector(".close-btn").addEventListener('click',()=>{
    let cart_obj = document.getElementById("cart")
    cart_obj.style.display = "none";
    let glass_block = document.getElementById("glass-block")
    glass_block.style.display = "none"
    viz = false 
    document.querySelector(".glass-block").classList.remove("glass")
})
