
// let cartwin = document.querySelector('.cart-icon');
// let whole_cart_window = document.querySelector('.whole-cart-window');

let total_cnt = [5, 5, 5, 5, 5, 5, 5  ] ; 
let item_cnt_cart = [0,1,2,3,4,5  ] ; 
let item_cost = [200 ,30 ,50 , 23,234, 4  ] ; 


console.log( total_cnt) ; 
console.log( item_cnt_cart) ; 
console.log( item_cost ) ; 



// cartwin.addEventListener('click' ,()=>{
//     whole_cart_window.classList.toggle('hide') ;
//     console.log('inside' ) ;

// })
//////////////////////////////////////////
// if cnt= 0 
function updateCart( id ){
    console.log('inside ' , id  ) ; 
    let cartWrapper = document.querySelector('.cart-wrapper') ;
    let cartItem =  document.createElement('div' )  ; 

    // cartWrapper.innerHTML  = "" ;
    cartItem.classList.add('cart-item' ) ;
    cartItem.id = id ; 
    
    
    let sub_tot = item_cnt_cart[id ] * item_cost[id ] ; 


    console.log("tot " ,sub_tot , item_cnt_cart[id]  , item_cost[id]  )  ; 

    cartItem.innerHTML =  `
        <img src="images/${id}.jpg">
        <div class="details">
            <h4>Item Name</h4>
            <p> 
                <!-- <span class="quantity"> quantity: 1 </span>   -->
                <div class="card-btn-cart" >
                    <button class="minusBtnc">-</button>
                    <span class="cartQuantity">${item_cnt_cart[id]} </span>
                    <button class="plusBtnc">+</button>
                
                </div>            
                <span class="price">Subtotal: $23.44 </span>  
            </p>
        </div> 

    
    `



    cartWrapper.append( cartItem)   ; 

    console.log(cartItem.innerHTML ) ; 
    console.log(cartItem.getAttribute('class') ) ; 
}

updateCart(1);
updateCart(3);



// cart event  

let  mbtnc  =  document.querySelectorAll('.minusBtnc') ;
let  pbtnc  =  document.querySelectorAll('.plusBtnc') ;

console.log(mbtnc) ;
for(let i= 0 ;i < mbtnc.length ; i++  ) {
    console.log(i)  ;
    mbtnc[i].addEventListener('click' ,()=>{
        console.log("- clilcked "   ) ; 
        let par_div = mbtnc[i].parentElement.parentElement.parentElement  ;
        let prod_id = par_div.getAttribute('id')  ;  
        console.log(  par_div.getAttribute('id')  ) ; 
        delItemCart(par_div , prod_id  )  ; 
    })
}
for(let i= 0 ;i < pbtnc.length ; i++  ) {
    console.log(i)  ;
    pbtnc[i].addEventListener('click' ,()=>{
        console.log("+ clilcked "   ) ; 

        let par_div = pbtnc[i].parentElement.parentElement.parentElement  ;
        let prod_id = par_div.getAttribute('id')  ; 
        addItemCart(par_div ,prod_id  ) ; 
    })
}







//let total_cnt = [5, 5, 5, 5, 5, 5, 5  ] ; 
// let item_cnt_cart = [0,1,2,3,4,5  ] ; 
// let item_cost = [200 ,30 ,50 , 23,234, 4  ] ; 

function addItemCart( par_div  , prod_id   )  {
    // let x = par_div.getElementsByClassName('.details') ;
    let x = par_div.childNodes[3].childNodes[4].childNodes[3];
    // x = x.getElementsByClassName('.cartQuantity') ; 
    console.log(par_div );

    console.log(x.innerText) ;
    if(parseInt( x.innerText)+1 <= total_cnt[prod_id] ){
        x.innerHTML  = parseInt( x.innerText)+1 ;

    }
}

function delItemCart( par_div  , prod_id )  {
    // let x = par_div.getElementsByClassName('.details') ;
    let x = par_div.childNodes[3].childNodes[4].childNodes[3];
    // x = x.getElementsByClassName('.cartQuantity') ; 
    console.log(x.innerText) ;
    if(parseInt( x.innerText)-1 >=  1  ){
        x.innerHTML  = parseInt( x.innerText) -1  ;

    }

}
// returns div of cart id 
function get_div_cart(prod_id)  {

    let x =  document.querySelector('.cart-wrapper') ;
    x = x.childNodes ;
    console.log(x) ;
    let  prod1 = -1; 
    for(let i= 1 ;i<x.length ; i+=2   ) {
        console.log(i, " paisi  : " , x[i]) ; 
    
        if(x[i].getAttribute('id') == prod_id  ){
            prod1= x[i] ;
            break ;
        }
    }
    console.log(prod1) ;
    if(prod1 != -1 )console.log(prod1.getAttribute('id') ) ;
    return prod1 ; 
} 

let div_cart =  get_div_cart(2 )  ; 
console.log(" logging " , div_cart   )  ; 
