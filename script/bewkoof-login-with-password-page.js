// Show number allready places in it place

let number =JSON.parse(localStorage.getItem("bewakoof-new-user-number"))
document.getElementById("login-2page-number").value="";
document.getElementById("login-2page-number").value=number
// login with password key
document.getElementById("Login-with-password-go").addEventListener("click",(e)=>{
e.preventDefault()
window.location.href="/bewkoof-login-with-password-page.html"

})

// login to bewakoof

let login_arr =JSON.parse(localStorage.getItem("bewakoof-sign-in-details"));

document.getElementById("final-opt-login").addEventListener("click",(e)=>{
e.preventDefault()
let password =document.getElementById("otp1").value;
    for(let i=0;i<login_arr.length;i++)
    {
        
        if(password==login_arr[i].password)
        {
            alert("Welcome To Bewakoof!")

            setTimeout(()=>{window.location.href="/index.html"},200)
            break;
        }
        else if(i==login_arr.length-1 &&password !=login_arr[login_arr.length-1].password)
        {
            alert("Invalid Password")
            window.location.reload();
        }
    }
})



