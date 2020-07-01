function validation()
  {
	var name1=document.forms["myform"]["fname"].value;
	var regex=/^[a-zA-Z]+$/;
	if(name1=="")
	{
		alert("Please fill the first name field");
		return false;
	}
	if((name1.length<=2) || (name1>20))
	{
		alert("**user length must be between 2 and 20 in first name field**");
		return false;
	}
	if(!name1.match(regex))
	{
		alert("**Only characters are allowed in first name field**");
		return false;
	}
	var name2=document.forms["myform"]["sname"].value;
	if(name2=="")
	{
		alert("Please fill the last name field");
		return false;
	}
	if((name2.length<=2) || (name2>20))
	{
		alert("**user length must be between 2 and 20 in last name field**");
		return false;
	}
	if(!name2.match(regex))
	{
		alert("**Only characters are allowed in last name field**");
		return false;
	}
	var email=document.forms["myform"]["e-mail"].value;
	if(email=="")
	{
		alert("Please enter email");
		return false;
	}
	if (email.indexOf('@')<=0) 
	{
		alert("** Please enter valid email id **");
		return false;
	}
	if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.'))
	{
		alert("**Invalid email**");
		return false;
	}
	var phone=document.forms["myform"]["mobile-number"].value;
	if(phone=="")
	{
		alert("Please enter your mobile-number");
		return false;
	}
	if(phone.length!=10)
	{
		alert("**mobile-number must be 10 digits**");
		return false;
	}
	if(isNaN(phone))
	{
		alert("**mobile-number must be digits not characters**");
		return false;
	}
	var pass1=document.forms["myform"]["pwd"].value;
	if(pass1=="")
	{
		alert("**Please fill the password field**");
		return false;
	}
	if(pass1.length<=5 || pass1.length>=20)
	{
		alert("**password must be between 5 to 10 characters**");
		return false;
	}
	var pass2=document.forms["myform"]["pwd1"].value;
	if(pass2=="")
	{
		alert("**Please Re-type Your password**");
		return false;
	}
	if(pass2.length<=5 || pass2.length>=20)
	{
		alert("**password must be between 5 to 10 characters**");
		return false;
	}
	if(pass1!=pass2)
	{
		alert("!! INVALID PASSWORD !! **Please re-check Your password**");
		return false;
	}
    var gender=document.myform.sex;
     if ((gender[0].checked==false) && (gender[1].checked==false) && (gender[2].checked==false)) 
     {
     	alert("**Please Select Gender**");
     	return false;
     }
     var branch=document.myform.branch;
     if(branch.value=="default")
     {
     	alert("**Please Select Your Stream**");
     	return false;
     }
     var address=document.forms["myform"]["address"].value;
     if(address=="")
     {
     	alert("**Please enter address**");
     	return false;
     }
     var termscon=document.myform.tc;
     if((termscon[0].checked==false) && (termscon[1].checked==false))
     {
     	alert("**Agree or Disagree to terms and condition**");
     	return false;
     }
     return true;
}