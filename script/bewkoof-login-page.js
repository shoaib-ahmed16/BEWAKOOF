

let login_arr =JSON.parse(localStorage.getItem("bewakoof-sign-in-details"))||[];
console.log(login_arr)
let Continue = document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()

    let data_number=document.querySelector("form>#input").value;
    // console.log(data_number)
    if(login_arr.length==0)
    {
        localStorage.setItem("bewakoof-new-user-number",JSON.stringify(data_number))
        // alert("array is empty")
        window.location.href="/bewakoof-sign-up-page.html"
    }
    else
    {
        for(let i=0;i<login_arr.length;i++)
        {
            if(data_number==login_arr[i].mobile)
            {
                // alert("I am taking this number to login page")
                localStorage.setItem("bewakoof-sign-in-email",JSON.stringify(login_arr[i].email))
                localStorage.setItem("bewakoof-new-user-number",JSON.stringify(data_number))
                window.location.href="/bewkoof-login-with-otp-page.html"
            }
            else if(i==login_arr.length-1)
            {
                if(data_number!=login_arr[login_arr.length-1].mobile)
                {
                // alert("I am taking this number to Sign-in page")
                localStorage.setItem("bewakoof-new-user-number",JSON.stringify(data_number))
                window.location.href="/bewakoof-sign-up-page.html"
                }
            }
        }
    }

})
// gamil.com link
document.getElementById("link-to-gamil").addEventListener("click",(e)=>{
e.preventDefault();
window.location.href="https://accounts.google.com/o/oauth2/v2/auth/identifier?client_id=140947639712-ukpgitufo1i1gc6nmd8o1l14tcu72nt2.apps.googleusercontent.com&scope=email%20profile%20openid&response_type=token&redirect_uri=https%3A%2F%2Fwww.bewakoof.com%2Flogin%2Fgoogle&flowName=GeneralOAuthFlow"
})

// facebook.com link

document.getElementById("link-to-facbook").addEventListener("click",(e)=>{
e.preventDefault();
window.location.href="https://www.facebook.com/"
})


