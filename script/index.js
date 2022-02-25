document.querySelector("#doubleclick").addEventListener("click",(e)=>{
    e.preventDefault()
    window.location.href="/bewakoof-product-page.html"
    
    // window.location.href="/bewakoof-product-page.html"
    })

let x;
let x2;
let x3;
let x4;
let x5;

// Men categories slider start here

start1()
function start1()
{
    let images_arr =[
"./Home Page/men/1-first-slider/coke-banner-1x1-men-1645196503.jpg",
"./Home Page/men/1-first-slider/clearance-sale-1x1-M-1-1644848474 (1).jpg",
"./Home Page/men/1-first-slider/colorblocked-joggers-men-02-1645187332.jpg",
"./Home Page/men/1-first-slider/tee-party-1x1banner-tee-party-1645170847.jpg",
"./Home Page/men/1-first-slider/coke-banner-1x1-men-1645196503.jpg",
"./Home Page/men/1-first-slider/clearance-sale-1x1-M-1-1644848474 (1).jpg",
"./Home Page/men/1-first-slider/colorblocked-joggers-men-02-1645187332.jpg",
"./Home Page/men/1-first-slider/tee-party-1x1banner-tee-party-1645170847.jpg",
]
 


    let slideshow_img=document.getElementById("Main-slider1")


    let i =0;

    x = setInterval(function (){

        if(i===images_arr.length-2)
        {
            i=0;
        }
        slideshow_img.innerHTML="";

        let img1 = document.createElement("img")
            img1.src=`${images_arr[i]}`
        
        let img2 = document.createElement("img")
            img2.src=`${images_arr[i+1]}`
        
        let img3 = document.createElement("img")
            img3.src=`${images_arr[i+2]}`
        slideshow_img.append(img1,img2,img3)
        i =i+1

        // console.log(images_arr[i])
        // console.log("i:",i)

    },5000)

   
}


start2()
function start2()
{
    let images_arr =[
"./Home Page/men/8-second-slider/style-promotion-jumbo-prints-m-1x1-1645011095.gif",
"./Home Page/men/8-second-slider/1-x-1-banner-men-bottom-1644848471.webp",
"./Home Page/men/8-second-slider/Static-Banner-1-1-Loungewear-Men-1644848477.webp",
"./Home Page/men/8-second-slider/Static-Banner-coupletee--1--1645010500.jpg",
"./Home Page/men/8-second-slider/style-promotion-jumbo-prints-m-1x1-1645011095.gif",
"./Home Page/men/8-second-slider/1-x-1-banner-men-bottom-1644848471.webp",
"./Home Page/men/8-second-slider/Static-Banner-1-1-Loungewear-Men-1644848477.webp",
"./Home Page/men/8-second-slider/Static-Banner-coupletee--1--1645010500.jpg"
]
 


    let slideshow_img=document.getElementById("Main-slider2")


    let i =0;

    x2 = setInterval(function (){

        if(i===images_arr.length-2)
        {
            i=0;
        }
        slideshow_img.innerHTML="";

        let img1 = document.createElement("img")
            img1.src=`${images_arr[i]}`
        
        let img2 = document.createElement("img")
            img2.src=`${images_arr[i+1]}`
        
        let img3 = document.createElement("img")
            img3.src=`${images_arr[i+2]}`
        slideshow_img.append(img1,img2,img3)
        i =i+1

        // console.log(images_arr[i])
        // console.log("i:",i)

    },5000)

   
}


// Men categories slider end here


// Women categories slider start here

start3()
function start3()
{
    let images_arr =[
"./Home Page/women/1-first-slider/coke-banner-1x1-women-1645196503.jpg",
"./Home Page/women/1-first-slider/colorblocked-joggers-women-01-1645107448.jpg",
"./Home Page/women/1-first-slider/tee-party-1x1banner-tee-party-1645170847.jpg",
"./Home Page/women/1-first-slider/clearance-sale-1x1-W-1644848475.webp",
"./Home Page/women/1-first-slider/coke-banner-1x1-women-1645196503.jpg",
"./Home Page/women/1-first-slider/colorblocked-joggers-women-01-1645107448.jpg",
"./Home Page/women/1-first-slider/tee-party-1x1banner-tee-party-1645170847.jpg",
"./Home Page/women/1-first-slider/clearance-sale-1x1-W-1644848475.webp"
]
 


    let slideshow_img=document.getElementById("Main-slider3")


    let i =0;

    x3 = setInterval(function (){

        if(i===images_arr.length-2)
        {
            i=0;
        }
        slideshow_img.innerHTML="";

        let img1 = document.createElement("img")
            img1.src=`${images_arr[i]}`
        
        let img2 = document.createElement("img")
            img2.src=`${images_arr[i+1]}`
        
        let img3 = document.createElement("img")
            img3.src=`${images_arr[i+2]}`
        slideshow_img.append(img1,img2,img3)
        i =i+1

        // console.log(images_arr[i])
        // console.log("i:",i)

    },5000)

   
}


start4()
function start4()
{
    let images_arr =[
    "Home Page/women/8-second-slider/Static-Banner-1-1-Loungewear-Women-2-1645015198.jpg",
    "Home Page/women/8-second-slider/1-x-1-banner-women-bottom-1644848472.webp",
    "Home Page/women/8-second-slider/style-promotion-jumbo-prints-w-1x1-1645011096.gif",
    "Home Page/women/8-second-slider/Static-Banner-coupletee--1--1645010500.jpg",
    "Home Page/women/8-second-slider/Static-Banner-1-1-Loungewear-Women-2-1645015198.jpg",
    "Home Page/women/8-second-slider/1-x-1-banner-women-bottom-1644848472.webp",
    "Home Page/women/8-second-slider/style-promotion-jumbo-prints-w-1x1-1645011096.gif",
    "Home Page/women/8-second-slider/Static-Banner-coupletee--1--1645010500.jpg",
]
 


    let slideshow_img=document.getElementById("Main-slider4")


    let i =0;

    x4 = setInterval(function (){

        if(i===images_arr.length-2)
        {
            i=0;
        }
        slideshow_img.innerHTML="";

        let img1 = document.createElement("img")
            img1.src=`${images_arr[i]}`
        
        let img2 = document.createElement("img")
            img2.src=`${images_arr[i+1]}`
        
        let img3 = document.createElement("img")
            img3.src=`${images_arr[i+2]}`
        slideshow_img.append(img1,img2,img3)
        i =i+1

        // console.log(images_arr[i])
        // console.log("i:",i)

    },5000)

   
}
// Women categories slider end here


// Mobile categories slider start here

start5()
function start5()
{
    let images_arr =[
    "./Home Page/accessories/1-first-slider/Static-Banner-1-1-Zig-Zag-Sliders-1643270403.gif",
    "./Home Page/accessories/1-first-slider/StaticBanner-Anime-men-GIF01-1644590635.webp",
    "./Home Page/accessories/1-first-slider/Mobile-Covers-Static-Banner-720X720px-1642781341.jpg",
    "./Home Page/accessories/1-first-slider/1x1-banner-ACCESSORIES-Backpacks-1643895325.webp",
    "./Home Page/accessories/1-first-slider/Static-Banner-1-1-Zig-Zag-Sliders-1643270403.gif",
    "./Home Page/accessories/1-first-slider/StaticBanner-Anime-men-GIF01-1644590635.webp",
    "./Home Page/accessories/1-first-slider/Mobile-Covers-Static-Banner-720X720px-1642781341.jpg",
    "./Home Page/accessories/1-first-slider/1x1-banner-ACCESSORIES-Backpacks-1643895325.webp",
]
 


    let slideshow_img=document.getElementById("Main-slider5")


    let i =0;

    x4 = setInterval(function (){

        if(i===images_arr.length-2)
        {
            i=0;
        }
        slideshow_img.innerHTML="";

        let img1 = document.createElement("img")
            img1.src=`${images_arr[i]}`
        
        let img2 = document.createElement("img")
            img2.src=`${images_arr[i+1]}`
        
        let img3 = document.createElement("img")
            img3.src=`${images_arr[i+2]}`
        slideshow_img.append(img1,img2,img3)
        i =i+1

        // console.log(images_arr[i])
        // console.log("i:",i)

    },5000)

   
}

// Mobile categories slider end here


{
    let flag1=true
    let flag2=false
    let flag3=false
    if(flag1 ==true)
        {
            document.getElementById("Men-Related-product").style.display="block"
            document.getElementById("Men-section-open").style.borderBottomColor="gold"
            document.getElementById("Mobile-Related-product").style.display="none"
            document.getElementById("Accessories-section-open").style.borderBottomColor="transparent"
            document.getElementById("Women-Related-product").style.display="none"
            document.getElementById("Women-section-open").style.borderBottomColor="transparent"
        }
    // #Men-Related-product,#Women-Related-product,#Mobile-Related-product
    // Men-section-open, Women-section-open, Accessories-section-open
    document.getElementById("Men-section-open").addEventListener("click",()=>
    {
        flag1 =true
        if(flag1 ==true)
        {
            document.getElementById("Men-Related-product").style.display="block"
            document.getElementById("Men-section-open").style.borderBottomColor="gold"
            document.getElementById("Mobile-Related-product").style.display="none"
            document.getElementById("Accessories-section-open").style.borderBottomColor="transparent"
            document.getElementById("Women-Related-product").style.display="none"
            document.getElementById("Women-section-open").style.borderBottomColor="transparent"
            flag1 =false
        }
        // else
        // {
        //     document.getElementById("Men-Related-product").style.display="none"
        //     document.getElementById("Men-section-open").style.borderBottomColor="transparent"
            
        // }
    })

    document.getElementById("Women-section-open").addEventListener("click",()=>
    {
        flag2=true
        if(flag2==true)
        {
            document.getElementById("Women-Related-product").style.display="block"
            document.getElementById("Women-section-open").style.borderBottomColor="gold"
            document.getElementById("Men-Related-product").style.display="none"
            document.getElementById("Men-section-open").style.borderBottomColor="transparent"
            document.getElementById("Mobile-Related-product").style.display="none"
            document.getElementById("Accessories-section-open").style.borderBottomColor="transparent"
            flag2=false;
        }
        // else
        // {
        //     document.getElementById("Women-Related-product").style.display="none"
        //     document.getElementById("Women-section-open").style.borderBottomColor="transparent"
        // }
    })

    document.getElementById("Accessories-section-open").addEventListener("click",()=>
    {
        flag3=true
        if(flag3==true)
        {
            document.getElementById("Mobile-Related-product").style.display="block"
            document.getElementById("Accessories-section-open").style.borderBottomColor="gold"
            document.getElementById("Men-Related-product").style.display="none"
            document.getElementById("Men-section-open").style.borderBottomColor="transparent"
            document.getElementById("Women-Related-product").style.display="none"
            document.getElementById("Women-section-open").style.borderBottomColor="transparent";
            flag3=false;
        }
        // else
        // {
        //     document.getElementById("Mobile-Related-product").style.display="none"
        //     document.getElementById("Accessories-section-open").style.borderBottomColor="transparent"
        // }
    })
}




