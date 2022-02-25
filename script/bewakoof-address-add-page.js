let data =JSON.parse(localStorage.getItem("Purchase-bewakoof-finally"))
console.log(data)



{
    let coupon ="";
    let totalAmount =0;
    let payingAmount =0;
    let saveAmount =0;
    data.forEach((elem,index)=>{
    let save_amount=Number(elem.cancelprice)-Number(elem.price)
    
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
        console.log(elem.price)
    })
    
    localStorage.setItem("PayMentInProcess",JSON.stringify(payingAmount));
    
    document.getElementById("totalMRP").innerHTML=`₹${totalAmount}`;
    document.getElementById("paying-Amount").innerHTML=`₹ ${payingAmount}`
    document.getElementById("paying-Amount-final").innerHTML=`₹ ${payingAmount}`
    document.getElementById("total-paying-amount").innerHTML=`₹${saveAmount}`
    document.getElementById("big-discount").innerHTML=`-₹ ${saveAmount}`
    }