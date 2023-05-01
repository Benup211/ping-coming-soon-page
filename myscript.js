function checkemail()
{
    var validRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var email_val=document.getElementById("pingemail").value;
    if(!(email_val==''))
    {
        if(!(email_val.match(validRegex)))
        {
            document.getElementById("validity").innerHTML="Please provide a valid email address";
            document.getElementById("pingemail").style.borderColor="hsl(354, 100%, 66%)";
        }
        else
        {
            document.getElementById("validity").innerHTML="";
            document.getElementById("pingemail").style.borderColor="";
            alert("Email submitted");
            document.getElementById("pingemail").value="";
        }

    }
    else
    {
        document.getElementById("validity").innerHTML="Whoops! It looks like you forgot to add your email";
        document.getElementById("pingemail").style.borderColor="hsl(354, 100%, 66%)";
    }
}