// all data tranfer recieve

let data =JSON.parse(localStorage.getItem("cart-add-page"))
console.log(data)

let purchase_cart=JSON.parse(localStorage.getItem("Purchase-bewakoof-finally"))||[];

function addtoBag()
{
    if(size_select=="M"||size_select=="L"||size_select=="XL"||size_select=="XXL")
    {
        let purchase_cart_temp ={
            image:data.image,
            price:data.price,
            cancelprice:data.canceledprice,
            size:size_select
        }
        purchase_cart.push(purchase_cart_temp)
        localStorage.setItem("Purchase-bewakoof-finally",JSON.stringify(purchase_cart)) 
    }
    else
    {
        alert("Please Select The Size For Add To Cart")
    }
    setTimeout(()=>{window.location.reload()},100)
}


document.querySelector("#topbuttons>:nth-child(7)").innerHTML="";
document.querySelector("#topbuttons>:nth-child(7)").innerHTML=data.name;

document.querySelector("#product-name-append").innerHTML="";
document.querySelector("#product-name-append").innerHTML=data.name;

document.querySelector("#rating-product>:nth-child(6)").innerHTML="";
// document.querySelector("#rating-product>:nth-child(6)").innerHTML=data.rating;
document.querySelector("#rating-product>:nth-child(6)").innerHTML="from product page"

document.getElementById("product-sale-price").innerHTML=""
document.getElementById("product-sale-price").innerHTML=`₹ ${data.price}`;

document.getElementById("product-cutoff-price").innerHTML="";
document.getElementById("product-cutoff-price").innerHTML=`₹ ${data.canceledprice}`;

let save_discount =Number(data.canceledprice)-Number(data.price);
let percentage_save =((save_discount/(Number(data.canceledprice)))*100).toFixed(0);
// console.log(percentage_save)
document.getElementById("product-save%-price").innerHTML="";
document.getElementById("product-save%-price").innerHTML=`(${percentage_save}% )`;

document.getElementById("mainImg").innerHTML="";
document.getElementById("mainImg").src=`${data.image}`;



document.querySelector("#thumb1>div>img").src=data.image1;
document.querySelector("#thumb2>div>img").src=data.image2;
document.querySelector("#thumb3>div>img").src=data.image3;
document.querySelector("#thumb4>div>img").src=data.image4;
document.querySelector("#thumb5>div>img").src=data.image5;


// To get images in the mainBox
{
    document.getElementById("thumb1").addEventListener("click",imgSlide1)
    function imgSlide1(){
        document.getElementById("thumb1").style.border="2px solid cadetblue"
        document.getElementById("thumb2").style.border="2px solid transparent"
        document.getElementById("thumb3").style.border="2px solid transparent"
        document.getElementById("thumb4").style.border="2px solid transparent"
        document.getElementById("thumb5").style.border="2px solid transparent"

        document.getElementById('mainImg').setAttribute("src",`${data.image1}`);
    }

    document.getElementById("thumb2").addEventListener("click",imgSlide2)
    function imgSlide2(){
        document.getElementById("thumb1").style.border="2px solid transparent"
        document.getElementById("thumb2").style.border="2px solid cadetblue"
        document.getElementById("thumb3").style.border="2px solid transparent"
        document.getElementById("thumb4").style.border="2px solid transparent"
        document.getElementById("thumb5").style.border="2px solid transparent"
        document.getElementById('mainImg').setAttribute("src",`${data.image2}`);
    }

    document.getElementById("thumb3").addEventListener("click",imgSlide3)
    function imgSlide3(){
        document.getElementById("thumb1").style.border="2px solid transparent"
        document.getElementById("thumb2").style.border="2px solid transparent"
        document.getElementById("thumb3").style.border="2px solid cadetblue"
        document.getElementById("thumb4").style.border="2px solid transparent"
        document.getElementById("thumb5").style.border="2px solid transparent"
        document.getElementById('mainImg').setAttribute("src",`${data.image3}`);
    }

    document.getElementById("thumb4").addEventListener("click",imgSlide4)
    function imgSlide4(){
        document.getElementById("thumb1").style.border="2px solid transparent"
        document.getElementById("thumb2").style.border="2px solid transparent"
        document.getElementById("thumb3").style.border="2px solid transparent"
        document.getElementById("thumb5").style.border="2px solid transparent"
        document.getElementById("thumb4").style.border="2px solid cadetblue"
        document.getElementById('mainImg').setAttribute("src",`${data.image4}`);
    }

    document.getElementById("thumb5").addEventListener("click",imgSlide5)
    function imgSlide5(){
        document.getElementById("thumb5").style.border="2px solid cadetblue"
        document.getElementById("thumb1").style.border="2px solid transparent"
        document.getElementById("thumb2").style.border="2px solid transparent"
        document.getElementById("thumb3").style.border="2px solid transparent"
        document.getElementById("thumb4").style.border="2px solid transparent"
        document.getElementById('mainImg').setAttribute("src",`${data.image5}`);
    } 

}


{
    let count=0;

document.getElementById("SAVE-EXTRA-WITH-4-OFFERS").addEventListener("click",(e)=>{
    e.preventDefault()
    count+=1
    if(count==1)
    {
    document.getElementById("SAVE-EXTRA-WITH-4-OFFERS2").style.display="block"
    document.querySelector("#SAVE-EXTRA-WITH-4-OFFERS>span").innerHTML=""
    document.querySelector("#SAVE-EXTRA-WITH-4-OFFERS>span").innerHTML="-";
    
    }
    else if(count==2)
    {
        document.getElementById("SAVE-EXTRA-WITH-4-OFFERS2").style.display="none"
        document.querySelector("#SAVE-EXTRA-WITH-4-OFFERS>span").innerHTML=""
        document.querySelector("#SAVE-EXTRA-WITH-4-OFFERS>span").innerHTML="+";
        count=0;
    }
    
})

}
{

let count=0
document.getElementById("product-details-hidden1").addEventListener("click",(e)=>{
    e.preventDefault()
    count+=1
    if(count==1)
    {
    document.getElementById("product-details-hidden2").style.display="block"
    document.querySelector("#product-details-hidden1>span").innerHTML=""
    document.querySelector("#product-details-hidden1>span").innerHTML="-";
    }
    else if(count==2)
    {
        document.getElementById("product-details-hidden2").style.display="none"
        document.querySelector("#product-details-hidden1>span").innerHTML=""
        document.querySelector("#product-details-hidden1>span").innerHTML="+";
        count=0;
    }
})
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ₹
// product-different-size

let size_select=null;
document.querySelector("#product-different-size>:nth-child(2)").addEventListener("click",(e)=>{
    e.preventDefault();
    size_select="M"
    console.log(size_select)
})
document.querySelector("#product-different-size>:nth-child(3)").addEventListener("click",(e)=>{
    e.preventDefault();
    size_select="L"
    console.log(size_select)
})
document.querySelector("#product-different-size>:nth-child(4)").addEventListener("click",(e)=>{
    e.preventDefault();
    size_select="XL"
    console.log(size_select)
})
document.querySelector("#product-different-size>:nth-child(5)").addEventListener("click",(e)=>{
    e.preventDefault();
    size_select="XXL"
    console.log(size_select)
})


