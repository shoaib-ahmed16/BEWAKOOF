let number =JSON.parse(localStorage.getItem("bewakoof-new-user-number"))
// let number2 =JSON.parse(localStorage.getItem("mobile_direct"))

document.getElementById("mobile").value=number;


let signup_arr =JSON.parse(localStorage.getItem("bewakoof-sign-in-details"))||[]
// let signup_arr=[] //toclear the local storage we use this array
// just for transfering the data to the local storage 
let signUp = document.querySelector("#form").addEventListener("submit",(e)=>{
e.preventDefault()
// alert("good going")

let signUpDetails ={
name:form.name.value,
mobile:form.mobile.value,
email:form.email.value,
password:form.password.value
}
console.log(signUpDetails)
if(signUpDetails.name !="")
{
// alert("name save")
document.getElementById("hidden-name-error").style.display="none"
setTimeout(()=>{if(signUpDetails.mobile.length ==10)
    {
        // alert("number save")
        document.getElementById("hidden-mobile-error").style.display="none"
        setTimeout(()=>{if(signUpDetails.email.includes("@"))
        {
            document.getElementById("hidden-email-error").style.display="none";
            if(signUpDetails.password !="" && signUpDetails.password.length >=6)
            // alert("save password")
            // let mobile_direct=signUpDetails.mobile
            // localStorage.setItem("mobile_direct",JSON.stringify(mobile_direct))
            signup_arr.push(signUpDetails)
            // console.log()
            localStorage.setItem("bewakoof-sign-in-email",JSON.stringify(signUpDetails.email))
            localStorage.setItem("bewakoof-sign-in-details",JSON.stringify(signup_arr))
            alert(`${signUpDetails.name} Register Successfully`)
            setTimeout(()=>{
                window.location.href="/bewkoof-login-with-otp-page.html"
            },1000)

        }
        else{
            document.getElementById("hidden-email-error").style.display="block"
            document.getElementById("hidden-email-error").innerHTML="Mobile is required"
            document.getElementById("hidden-email-error").style.color="red"
        }},100)
    }
    else
    {
        document.getElementById("hidden-mobile-error").style.display="block"
        document.getElementById("hidden-mobile-error").innerHTML="Mobile is required"
        document.getElementById("hidden-mobile-error").style.color="red"
    }},100)
}
else
{
document.getElementById("hidden-name-error").style.display="block"
document.getElementById("hidden-name-error").innerHTML="First Name is required"
document.getElementById("hidden-name-error").style.color="red"
// document.getElementById("hidden-name-error").style.fontFamily="Segoe UI"
}

})