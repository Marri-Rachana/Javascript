function validate()
{
	var username=document.forms["myform1"]["fname"].value;
	var regex=/^[a-zA-Z]+$/;
	if(username=="")
	{
		alert("Please fill the  username");
		username.focus();
		return false;
	}
	if((username.length<=2) || (username>20))
	{
		alert("**user length must be between 2 and 20 in username  field**");
		return false;
	}
	if(!username.match(regex))
	{
		alert("**Only characters are allowed in username field**");
		return false;
	}
	var pass1=document.forms["myform1"]["pwd"].value;
	if(pass1=="")
	{
		alert("**Please fill the password field**");
		return false;
	}
	return true;
}