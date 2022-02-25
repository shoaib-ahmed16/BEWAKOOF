// data receive from add to cart page

let data =JSON.parse(localStorage.getItem("Purchase-bewakoof-finally"))
console.log(data)

//No of items in bag
document.getElementById("item-in-bag").innerHTML=data.length;


{
    //change item to item(s) in my bag item 
    if(data.length ==1 ||data.length==0)
    {
        document.getElementById("change-item-to-items").innerHTML="item"
    }
    else
    {
        document.getElementById("change-item-to-items").innerHTML="item(s)"
    }
}
  

//cancelprice: "2199"
// image: "https://images.bewakoof.com/t320/javinishka-men-s-grey-striped-slim-fit-shirt-452481-1638804002-1.jpg"
// price: "1499"
// size: "L"


{
let coupon ="";
let totalAmount =0;
let payingAmount =0;
let saveAmount =0;
data.forEach((elem,index)=>{
    let outerFrame=document.createElement("div");
    outerFrame.setAttribute("id","item-show");
let firstBanner=document.createElement("div");
    firstBanner.setAttribute("id","bag-banner3");
let secondBanner=document.createElement("div");
    secondBanner.setAttribute("id","bag-banner3-1");
let thirdBanner=document.createElement("div");
    thirdBanner.setAttribute("id","bag-banner3-1-1");
    thirdBanner.innerHTML="Buy 2 For 599 offer available"
let div=document.createElement("div");
        if(data.length==1)
        {
            div.innerHTML="Add 1 more item to avail this offer"
        }
        else
        {
            div.innerHTML="";
        }
let additemdiv=document.createElement("div");
    additemdiv.setAttribute("id","bag-Add-items");
    additemdiv.innerHTML="Add items"
let detailsProducts= document.createElement("div");
    detailsProducts.setAttribute("id","detail-product-to-buy");
    detailsProducts.style.display="flex";
let div2=document.createElement("div");
let nameProductTObuy =document.createElement("div");
    nameProductTObuy.setAttribute("id","product-name-upload-here");
    nameProductTObuy.innerHTML="Light Grey Melange Half Sleeve T-Shirt"
let pricetopay=document.createElement("div")
    pricetopay.setAttribute("id","product-price-upload-here")
    pricetopay.innerHTML=`₹${elem.price}`
let spanPrice=document.createElement("span")
    spanPrice.setAttribute("id","line-through-price")
    spanPrice.innerHTML=`₹${elem.cancelprice}`

let save_amount=Number(elem.cancelprice)-Number(elem.price)

let saveMoney =document.createElement("div")
    saveMoney.setAttribute("id","product-save-upload-here");
    saveMoney.innerHTML=`You saved ₹${save_amount}!`

let thefinaldiv=document.createElement("div")
    thefinaldiv.setAttribute("id","product-image-upload-here")
let img = document.createElement("img")
    img.setAttribute("id","product-image-upload-here-append")
    img.src=`${elem.image}`

let div3 =document.createElement("div")
    div3.setAttribute("id","set-perameter")
let div31 =document.createElement("div")
    div31.setAttribute("id","set-size");
    div31.innerHTML=`Size:${elem.size}`;
let div32 =document.createElement("div")
    div32.setAttribute("id","set-quantity")
    div32.innerHTML=`Qty:1`
let div4 =document.createElement("div")
    div4.setAttribute("id","page-button-remove-wishlist")
    div4.style.display="flex";
let div41 =document.createElement("div")
    div41.setAttribute("id","page-button-remove");
    div41.innerHTML="Remove"
    div41.addEventListener("click",(index)=>{
        // e.preventDefault()
        data.splice(index,1)
        localStorage.setItem("Purchase-bewakoof-finally",JSON.stringify(data));
        window.location.reload();
    })
let div42 =document.createElement("div")
    div42.setAttribute("id","page-button-wishlist");
    div42.innerHTML="Move To Wishlist"

    div3.append(div31,div32)
    div4.append(div41,div42)

    pricetopay.append(spanPrice)
    secondBanner.append(thirdBanner,div)//bannner of buy 2 product

    firstBanner.append(secondBanner,additemdiv) //banner complete

    thefinaldiv.append(img)
    div2.append(nameProductTObuy,pricetopay,saveMoney,div3)
    detailsProducts.append(div2,thefinaldiv)
    outerFrame.append(firstBanner,detailsProducts,div4)
    document.getElementById("append").append(outerFrame)


    if(coupon=="")
    {
        document.getElementById("coupon-offer-discount").style.display="none"
        document.getElementById("hid-coupon").style.display="none"

    }
    else
    {
        document.getElementById("coupon-offer-discount").style.display="block"
        document.getElementById("hid-coupon").style.display="block"
    }

    totalAmount+= Number(elem.cancelprice);
    payingAmount+=Number(elem.price);
    saveAmount+=save_amount;
})

localStorage.setItem("PayMentInProcess",JSON.stringify(payingAmount));

document.getElementById("totalMRP").innerHTML=`₹${totalAmount}`;
document.getElementById("paying-Amount").innerHTML=`₹ ${payingAmount}`
document.getElementById("paying-Amount-final").innerHTML=`₹ ${payingAmount}`
document.getElementById("total-paying-amount").innerHTML=`₹${saveAmount}`
document.getElementById("big-discount").innerHTML=`-₹ ${saveAmount}`
}
