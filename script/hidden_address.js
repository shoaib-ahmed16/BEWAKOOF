let name,number,pincode,city,state,flat,area,landmark,addressType;
    let obj
    function nameAdd(a)
    {
        if(a.keyCode===13)
        {
            name=document.getElementById("input-name").value
        }
    }
   function numberAdd(b)
   {    
       if(b.keyCode===13)
       {
        number=document.getElementById("input-number").value;

       }
   }
    function pinAdd(c)
    {
        if(c.keyCode===13)
        {
            pincode=document.getElementById("input-pincode").value
        }
    }
    function cityAdd(d)
    {
        if(d.keyCode===13)
        {
        city=document.getElementById("input-city").value;
        }
    }
    function stateAdd(e)
    {
        if(e.keyCode===13)
        {
        state=document.getElementById("input-state").value
        }
    }
    function flatAdd(f)
    {
        if(f.keyCode===13)
        {
        flat=document.getElementById("input-flat").value
        }
    }
    function areaAdd(g)
    {
        if(g.keyCode===13)
        {
            area=document.getElementById("input-area").value
        }
    }
    function landMarkAdd(h)
    {
        if(h.keyCode===13)
        {
            landmark=document.getElementById("input-landmark").value
        }
    }

{
let count =0;
    document.getElementById("h").addEventListener("click",(e)=>{
        e.preventDefault()
        count+=1
        document.getElementById("o").style.color="cadetblue"
        document.getElementById("o").style.border="1px solid silver"
        document.getElementById("o").style.background="white"
        document.getElementById("oth").style.color="cadetblue"
        document.getElementById("oth").style.border="1px solid silver"
        document.getElementById("oth").style.background="white"
        if(count==1)
        {
            document.getElementById("h").style.color="white"
            document.getElementById("h").style.border="2px solid cadetblue"
            document.getElementById("h").style.background="cadetblue"
            addressType=document.getElementById("h").innerHTML;

            obj ={
            name,number,pincode,city,state,flat,area,landmark,addressType
            }
            console.log(obj)
        }
        else if(count==2)
        {
            document.getElementById("h").style.color="cadetblue"
            document.getElementById("h").style.border="1px solid silver"
            document.getElementById("h").style.background="white"
            count=0;
        }
    }) 
}
{
let count =0;
    document.getElementById("o").addEventListener("click",(e)=>{
        e.preventDefault()
        count+=1
        document.getElementById("h").style.color="cadetblue"
        document.getElementById("h").style.border="1px solid silver"
        document.getElementById("h").style.background="white"
        document.getElementById("oth").style.color="cadetblue"
        document.getElementById("oth").style.border="1px solid silver"
        document.getElementById("oth").style.background="white"
        if(count==1)
        {
            document.getElementById("o").style.color="white"
            document.getElementById("o").style.border="2px solid cadetblue"
            document.getElementById("o").style.background="cadetblue"
            addressType=document.getElementById("o").innerHTML;

            obj ={
            name,number,pincode,city,state,flat,area,landmark,addressType
            }
            console.log(obj)
        }
        else if(count==2)
        {
            document.getElementById("o").style.color="cadetblue"
            document.getElementById("o").style.border="1px solid silver"
            document.getElementById("o").style.background="white"
            count=0;
        }
    }) 
}
{
let count =0;
    document.getElementById("oth").addEventListener("click",(e)=>{
        e.preventDefault()
        count+=1
        document.getElementById("o").style.color="cadetblue"
        document.getElementById("o").style.border="1px solid silver"
        document.getElementById("o").style.background="white"
        document.getElementById("h").style.color="cadetblue"
        document.getElementById("h").style.border="1px solid silver"
        document.getElementById("h").style.background="white"
        if(count==1)
        {
            document.getElementById("oth").style.color="white"
            document.getElementById("oth").style.border="2px solid cadetblue"
            document.getElementById("oth").style.background="cadetblue"
            addressType=document.getElementById("oth").innerHTML;

            obj ={
            name,number,pincode,city,state,flat,area,landmark,addressType
            }
            console.log(obj)
        }
        else if(count==2)
        {
            document.getElementById("oth").style.color="cadetblue"
            document.getElementById("oth").style.border="1px solid silver"
            document.getElementById("oth").style.background="white"
            count=0;
        }
    }) 
}

   document.getElementById("cross").addEventListener("click",(e)=>{
       e.preventDefault()
       document.getElementById("address-form").style.display="none";
   })

//    address-form
document.getElementById("Change-add-address").addEventListener("click",(e)=>{
    e.preventDefault()
    document.getElementById("address-form").style.display="block";
})