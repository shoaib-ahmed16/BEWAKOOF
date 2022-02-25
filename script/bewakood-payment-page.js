
document.getElementById("HDFC").style.cursor="Pointer"
document.getElementById("hide-HDFC").style.cursor="Pointer"
document.getElementById("hide-SBI").style.cursor="Pointer";
document.getElementById("SBI").style.cursor="Pointer";
document.getElementById("hide-AXIS").style.cursor="Pointer";
document.getElementById("AXIS").style.cursor="Pointer";
document.getElementById("hide-KOTAK").style.cursor="Pointer";
document.getElementById("KOTAK").style.cursor="Pointer";
document.getElementById("hide-ICICI").style.cursor="Pointer";
document.getElementById("ICICI").style.cursor="Pointer";
document.getElementById("paytm-pay").style.cursor="Pointer"
document.getElementById("hide-paytm").style.cursor="Pointer"
document.getElementById("hide-Phonepay").style.cursor="Pointer";
document.getElementById("Phonepay-pay").style.cursor="Pointer";
document.getElementById("hide-amazon").style.cursor="Pointer";
document.getElementById("amazon-pay").style.cursor="Pointer";
document.getElementById("hide-Mobiwik").style.cursor="Pointer";
document.getElementById("Mobiwik-pay").style.cursor="Pointer";
document.getElementById("hide-Freecharge").style.cursor="Pointer";
document.getElementById("Freecharge-pay").style.cursor="Pointer";
document.getElementById("cards").style.cursor="pointer"
document.getElementById("wallet").style.cursor="pointer"
document.getElementById("Upi").style.cursor="pointer"
document.getElementById("upi-pay").style.cursor="pointer"
document.getElementById("netBanking").style.cursor="pointer"
document.getElementById("CashOndelivery").style.cursor="pointer"
document.getElementById("button-debit").style.cursor="pointer"
document.getElementById("paymentdone").style.cursor="pointer"
document.getElementById("verify-upi").style.cursor="pointer"
document.getElementById("enter-cash-det").style.cursor="pointer"


 // PAYMENT AMOUNT
 let paise_aagya =JSON.parse(localStorage.getItem("PayMentInProcess"))
 document.getElementById("paisa-doo").innerHTML=`: ₹${paise_aagya}`;
 document.getElementById("finalAmount").innerHTML=`₹${paise_aagya}`;
 let final_pay =Number(paise_aagya)+30;
 document.getElementById("total-payable").innerHTML=`₹${final_pay}`;
 
 // option click functionality

 
 // 1.Debit card
 {
 
 let count =0
 
 document.getElementById("cards").addEventListener("click",(e)=>{
     e.preventDefault()
     count+=1
     if(count==1)
     {
         document.getElementById("enter-card-det").style.display="block";
         document.getElementById("cards").style.borderLeft="5px solid cadetblue";
         document.getElementById("cards").style.borderRight="5px solid transparent";
         document.getElementById("cards").style.backgroundColor="white"


     }
     else if(count==2)
     {
         document.getElementById("enter-card-det").style.display="none";
         document.getElementById("cards").style.borderLeft="5px solid transparent";
         document.getElementById("cards").style.borderRight="1px solid silver";
         document.getElementById("cards").style.backgroundColor="rgba(0, 0, 0, 0.192)"
         count=0;
     }
 })
 }


 // 2.wallet pay

 {
 
 let count =0
 
 document.getElementById("wallet").addEventListener("click",(e)=>{
     e.preventDefault()
     count+=1
     if(count==1)
     {
         document.getElementById("enter-wallet-det").style.display="block";
         document.getElementById("wallet").style.borderLeft="5px solid cadetblue";
         document.getElementById("wallet").style.borderRight="5px solid transparent";
         document.getElementById("wallet").style.backgroundColor="white"


     }
     else if(count==2)
     {
         document.getElementById("enter-wallet-det").style.display="none";
         document.getElementById("wallet").style.borderLeft="5px solid transparent";
         document.getElementById("wallet").style.borderRight="1px solid silver";
         document.getElementById("wallet").style.backgroundColor="rgba(0, 0, 0, 0.192)"
         count=0;
     }
 })
 }

 // 3.UPI pay
 {
 
 let count =0
 
 document.getElementById("Upi").addEventListener("click",(e)=>{
     e.preventDefault()
     count+=1
     if(count==1)
     {
         document.getElementById("enter-upi-det").style.display="block";
         document.getElementById("Upi").style.borderLeft="5px solid cadetblue";
         document.getElementById("Upi").style.borderRight="5px solid transparent";
         document.getElementById("Upi").style.backgroundColor="white"

     }
     else if(count==2)
     {
         document.getElementById("enter-upi-det").style.display="none";
         document.getElementById("Upi").style.borderLeft="5px solid transparent";
         document.getElementById("Upi").style.borderRight="1px solid silver";
         document.getElementById("Upi").style.backgroundColor="rgba(0, 0, 0, 0.192)"
         count=0;
     }
 })
 }
 // upi-pay
 {
 
 let count =0
 
 document.getElementById("upi-pay").addEventListener("click",(e)=>{
     e.preventDefault()
     count+=1
     if(count==1)
     {
         document.getElementById("hide-upi").style.display="block";
         document.querySelector("#upi-pay>:nth-child(3)>div").style.display="block"
     }
     else if(count==2)
     {
         document.getElementById("hide-upi").style.display="none";
         document.querySelector("#upi-pay>:nth-child(3)>div").style.display="none"
         count=0;
     }
 })
 }


 // 4.netbanking
 {
 
 let count =0
 
 document.getElementById("netBanking").addEventListener("click",(e)=>{
     e.preventDefault()
     count+=1
     if(count==1)
     {
         document.getElementById("enter-netbanking-det").style.display="block";
         document.getElementById("netBanking").style.borderLeft="5px solid cadetblue";
         document.getElementById("netBanking").style.borderRight="5px solid transparent";
         document.getElementById("netBanking").style.backgroundColor="white"


     }
     else if(count==2)
     {
         document.getElementById("enter-netbanking-det").style.display="none";
         document.getElementById("netBanking").style.borderLeft="5px solid transparent";
         document.getElementById("netBanking").style.borderRight="1px solid silver";
         document.getElementById("netBanking").style.backgroundColor="rgba(0, 0, 0, 0.192)"
         count=0;
     }
 })
 }

 // 5. cash on delivery
 {
 
 let count =0
 
 document.getElementById("CashOndelivery").addEventListener("click",(e)=>{
     e.preventDefault()
     count+=1
     if(count==1)
     {
         document.getElementById("enter-cash-det").style.display="block";
         document.getElementById("CashOndelivery").style.borderLeft="5px solid cadetblue";
         document.getElementById("CashOndelivery").style.borderRight="5px solid transparent";
         document.getElementById("CashOndelivery").style.backgroundColor="white"

     }
     else if(count==2)
     {
         document.getElementById("enter-cash-det").style.display="none";
         document.getElementById("CashOndelivery").style.borderLeft="5px solid transparent";
         document.getElementById("CashOndelivery").style.borderRight="1px solid silver";
         document.getElementById("CashOndelivery").style.backgroundColor="rgba(0, 0, 0, 0.192)"
         count=0;
     }
 })
 }

 {
 
 let count =0
 
 document.getElementById("cash").addEventListener("click",(e)=>{
     e.preventDefault()
     count+=1
     if(count==1)
     {
         document.getElementById("paymentdone").style.display="block";
         document.querySelector("#cash>:nth-child(3)>div").style.display="block"
     }
     else if(count==2)
     {
         document.getElementById("paymentdone").style.display="none";
         document.querySelector("#cash>:nth-child(3)>div").style.display="none"
         count=0;
     }
 })
 }



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ONLINE PAYMNET

{
let count =0

document.getElementById("paytm-pay").addEventListener("click",(e)=>{
 e.preventDefault()
 count+=1
 if(count==1)
 {
     document.getElementById("hide-paytm").style.display="block";
     document.querySelector("#paytm-pay>:nth-child(3)>div").style.display="block"
 }
 else if(count==2)
 {
     document.getElementById("hide-paytm").style.display="none";
     document.querySelector("#paytm-pay>:nth-child(3)>div").style.display="none"
     count=0;
 }
})
}

{
let count =0

document.getElementById("Phonepay-pay").addEventListener("click",(e)=>{
 e.preventDefault()
 count+=1
 if(count==1)
 {
     document.getElementById("hide-Phonepay").style.display="block";
     document.querySelector("#Phonepay-pay>:nth-child(3)>div").style.display="block"
 }
 else if(count==2)
 {
     document.getElementById("hide-Phonepay").style.display="none";
     document.querySelector("#Phonepay-pay>:nth-child(3)>div").style.display="none"
     count=0;
 }
})
}


{
let count =0

document.getElementById("amazon-pay").addEventListener("click",(e)=>{
 e.preventDefault()
 count+=1
 if(count==1)
 {
     document.getElementById("hide-amazon").style.display="block";
     document.querySelector("#amazon-pay>:nth-child(3)>div").style.display="block"
 }
 else if(count==2)
 {
     document.getElementById("hide-amazon").style.display="none";
     document.querySelector("#amazon-pay>:nth-child(3)>div").style.display="none"
     count=0;
 }
})
}



{
let count =0
document.getElementById("Mobiwik-pay").addEventListener("click",(e)=>{
 e.preventDefault()
 count+=1
 if(count==1)
 {
     document.getElementById("hide-Mobiwik").style.display="block";
     document.querySelector("#Mobiwik-pay>:nth-child(3)>div").style.display="block"
 }
 else if(count==2)
 {
     document.getElementById("hide-Mobiwik").style.display="none";
     document.querySelector("#Mobiwik-pay>:nth-child(3)>div").style.display="none"
     count=0;
 }
})
}


{
let count =0
document.getElementById("Freecharge-pay").addEventListener("click",(e)=>{
 e.preventDefault()
 count+=1
 if(count==1)
 {
     document.getElementById("hide-Freecharge").style.display="block";
     document.querySelector("#Freecharge-pay>:nth-child(3)>div").style.display="block"
 }
 else if(count==2)
 {
     document.getElementById("hide-Freecharge").style.display="none";
     document.querySelector("#Freecharge-pay>:nth-child(3)>div").style.display="none"
     count=0;
 }
})
}


document.getElementById("hide-paytm").addEventListener("click",(e)=>{
 e.preventDefault()
 setTimeout(()=>{
     alert("Thankyou For Placing Order From Bewakoof!")
     setTimeout(()=>{ window.location.href="/index.html"},2000)
 },2000)
})
document.getElementById("hide-Phonepay").addEventListener("click",(e)=>{
 e.preventDefault()
 setTimeout(()=>{
     alert("Thankyou For Placing Order From Bewakoof!")
     setTimeout(()=>{ window.location.href="/index.html"},2000)
 },2000)
})
document.getElementById("hide-amazon").addEventListener("click",(e)=>{
 e.preventDefault()
 setTimeout(()=>{
     alert("Thankyou For Placing Order From Bewakoof!")
     setTimeout(()=>{ window.location.href="/index.html"},2000)
 },2000)
})
document.getElementById("hide-Mobiwik").addEventListener("click",(e)=>{
 e.preventDefault()
 setTimeout(()=>{
     alert("Thankyou For Placing Order From Bewakoof!")
     setTimeout(()=>{ window.location.href="/index.html"},2000)
 })
})
document.getElementById("hide-Freecharge").addEventListener("click",(e)=>{
 e.preventDefault()
 setTimeout(()=>{
     alert("Thankyou For Placing Order From Bewakoof!")
     setTimeout(()=>{ window.location.href="/index.html"},2000)
 },2000)
})
// NETBANKING

{
let count =0
document.getElementById("ICICI").addEventListener("click",(e)=>{
 e.preventDefault()
 count+=1
 if(count==1)
 {
     document.getElementById("hide-ICICI").style.display="block";
     document.querySelector("#ICICI>:nth-child(3)>div").style.display="block"
 }
 else if(count==2)
 {
     document.getElementById("hide-ICICI").style.display="none";
     document.querySelector("#ICICI>:nth-child(3)>div").style.display="none"
     count=0;
 }
})
}

{
let count =0

document.getElementById("AXIS").addEventListener("click",(e)=>{
 e.preventDefault()
 count+=1
 if(count==1)
 {
     document.getElementById("hide-AXIS").style.display="block";
     document.querySelector("#AXIS>:nth-child(3)>div").style.display="block"
 }
 else if(count==2)
 {
     document.getElementById("hide-AXIS").style.display="none";
     document.querySelector("#AXIS>:nth-child(3)>div").style.display="none"
     count=0;
 }
})
}


{
let count =0

document.getElementById("SBI").addEventListener("click",(e)=>{
 e.preventDefault()
 count+=1
 if(count==1)
 {
     document.getElementById("hide-SBI").style.display="block";
     document.querySelector("#SBI>:nth-child(3)>div").style.display="block"
 }
 else if(count==2)
 {
     document.getElementById("hide-SBI").style.display="none";
     document.querySelector("#SBI>:nth-child(3)>div").style.display="none"
     count=0;
 }
})
}



{
let count =0
document.getElementById("HDFC").addEventListener("click",(e)=>{
 e.preventDefault()
 count+=1
 if(count==1)
 {
     document.getElementById("hide-HDFC").style.display="block";
     document.querySelector("#HDFC>:nth-child(3)>div").style.display="block"
 }
 else if(count==2)
 {
     document.getElementById("hide-HDFC").style.display="none";
     document.querySelector("#HDFC>:nth-child(3)>div").style.display="none"
     count=0;
 }
})
}


{
let count =0
document.getElementById("KOTAK").addEventListener("click",(e)=>{
 e.preventDefault()
 count+=1
 if(count==1)
 {
     document.getElementById("hide-KOTAK").style.display="block";
     document.querySelector("#KOTAK>:nth-child(3)>div").style.display="block"
 }
 else if(count==2)
 {
     document.getElementById("hide-KOTAK").style.display="none";
     document.querySelector("#KOTAK>:nth-child(3)>div").style.display="none"
     count=0;
 }
})
}


document.getElementById("hide-ICICI").addEventListener("click",(e)=>{
 e.preventDefault()
 setTimeout(()=>{
     alert("Thankyou For Placing Order From Bewakoof!")
     setTimeout(()=>{ window.location.href="/index.html"},2000)
 },2000)
})
document.getElementById("hide-AXIS").addEventListener("click",(e)=>{
 e.preventDefault()
 setTimeout(()=>{
     alert("Thankyou For Placing Order From Bewakoof!")
     setTimeout(()=>{ window.location.href="/index.html"},2000)
 },2000)
})
document.getElementById("hide-SBI").addEventListener("click",(e)=>{
 e.preventDefault()
 setTimeout(()=>{
     alert("Thankyou For Placing Order From Bewakoof!")
     setTimeout(()=>{ window.location.href="/index.html"},2000)
 },2000)
})
document.getElementById("hide-HDFC").addEventListener("click",(e)=>{
 e.preventDefault()
 setTimeout(()=>{
     alert("Thankyou For Placing Order From Bewakoof!")
     setTimeout(()=>{ window.location.href="/index.html"},2000)
 })
})
document.getElementById("hide-KOTAK").addEventListener("click",(e)=>{
 e.preventDefault()
 setTimeout(()=>{
     alert("Thankyou For Placing Order From Bewakoof!")
     setTimeout(()=>{ window.location.href="/index.html"},2000)
 },2000)
})

document.getElementById("paymentdone").addEventListener("click",(e)=>{
 e.preventDefault()
 setTimeout(()=>{
     alert("Thankyou For Placing Order From Bewakoof!")
     setTimeout(()=>{ window.location.href="/index.html"},2000);
 },2000)
})

document.getElementById("verify-upi").addEventListener("click",(e)=>{
 e.preventDefault()
 setTimeout(()=>{
     alert("Thankyou For Placing Order From Bewakoof!")
     setTimeout(()=>{ window.location.href="/index.html"},2000);

 },2000)
})


document.getElementById("button-debit").addEventListener("click",(e)=>{
 e.preventDefault()
 setTimeout(()=>{
     alert("Thankyou For Placing Order From Bewakoof!")
     setTimeout(()=>{ window.location.href="/index.html"},2000);
 },2000)
})