document.getElementById('add-btn').addEventListener('click',function(){
    let product=document.getElementById('Product').value;
    const quantity=document.getElementById('quantity').value;    
    document.getElementById('Product').value='';
    document.getElementById('quantity').value='';
    const cartObject=cartItem()
    cartObject[product]=quantity;
    // console.log(cartObject)
    const cartObjectString= JSON.stringify(cartObject)
     localStorage.setItem('cart',cartObjectString)
})



function cartItem(){
        let cart={}
        let loadCart=localStorage.getItem('cart');
        // console.log(loadCart)
        if(loadCart)
        {
            cart=JSON.parse(loadCart);
        }
        return cart 
    }
   
document.getElementById('view-btn').addEventListener('click',function(){
    
    cart=cartItem();
    console.log(cart)
    let objectLength = Object.keys(cart).length
    console.log(objectLength)
    if(objectLength!=0){
         let p=document.getElementById('noText');
        p.textContent=``
        let ul=document.getElementById('cart-item');
        ul.innerHTML=``
       
        for(let item in cart){
        let ul=document.getElementById('cart-item');
        let li=document.createElement('li');
        li.textContent=`${item} : ${cart[item]}`;
        ul.appendChild(li);
        console.log(item, cart[item])
    }
    }
    else{
        let p=document.getElementById('noText');
        p.innerText=`You have nothing in your cart !!!`
    }
    
})
document.getElementById('clear-Cart').addEventListener('click',function(){
    localStorage.removeItem('cart')
    let ul=document.getElementById('cart-item');
    ul.style.display = "none";
})