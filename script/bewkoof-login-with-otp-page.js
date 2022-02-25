// login with password key
document.getElementById("Login-with-password-go").addEventListener("click",(e)=>{
    e.preventDefault()
    window.location.href="/bewkoof-login-with-password-page.html"
    
    })
    
    // otp resend key
    let random_opt =Math.floor(Math.random()*(8878-0)+1111)
    
    document.getElementById("submit-login-page2").addEventListener("click",(e)=>{
    e.preventDefault()
    random_opt =Math.floor(Math.random()*(8878-0)+1111)
    
    setTimeout(()=>{alert(`OTP:${random_opt} to Login in Bewakoof.com!`)},100)
    
    })
    
    
    //OTP verify
    
    
    document.getElementById("final-opt-login").addEventListener("click",(e)=>{
    e.preventDefault()
    let otp1 =document.getElementById("otp1").value;
    let otp2 =document.getElementById("otp2").value;
    let otp3 =document.getElementById("otp3").value;
    let otp4 =document.getElementById("otp4").value;
    // console.log(otp1+otp2+otp3+otp4)
    let otp_check =otp1+otp2+otp3+otp4;
    if(otp_check==random_opt)
    {
        alert("Welcome To Bewakoof!")
    
    setTimeout(()=>{window.location.href="/index.html"},200)
    }
    else
    {
        alert("Invalid OTP Please login with password Or Resend OTP Option")
        window.location.reload();
    }
    
    })
    
    // Show number all ready added to the page
    let number =JSON.parse(localStorage.getItem("bewakoof-new-user-number"))
    document.getElementById("login-2page-number").value="";
    document.getElementById("login-2page-number").value=number;
    
    // let mobile_direct= JSON.parse(localStorage.getItem("mobile_direct"))
    // // document.getElementById("login-2page-number").value="";
    // document.getElementById("login-2page-number").value=mobile_direct;





    // 
    // localStorage.setItem("bewakoof-sign-in-email",JSON.stringify(email_tranasfer))