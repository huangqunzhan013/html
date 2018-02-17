function checkUser(){
	var username=document.getElementById("username").value;
	var susername=document.getElementById("susername");
	var reg=/^[a-z][a-z0-9]{5}$/i;//用户名的规则：第一位是字母，只有由数字与字母组成，6位。
	if (reg.test(username)) {
		susername.innerHTML="正确".fontcolor("green");
		return true;
	}else{
		susername.innerHTML="第一位必须字母，只有由数字与字母组成，6位。".fontcolor("red");
		return false;
	}
}
function checkPass(){
	var password=document.getElementById("password").value;
	var spassword=document.getElementById("spassword");
	var reg=/^[a-zA-Z0-9]{6,10}$/;
	if (reg.test(password)) {
		spassword.innerHTML="正确".fontcolor("green");
		return true;
	}else{
		spassword.innerHTML="请设置6-10位密码".fontcolor("red");
		return false;
	}
}
function checkRePass(){
	var password=document.getElementById("password").value;
	var repassword=document.getElementById("repassword").value;
	var srepassword=document.getElementById("srepassword");
		if (password.valueOf()==repassword.valueOf()&&repassword!='') {
			// if (repassword.length()>=6&&repassword.length()<=10) {
			//  	srepassword.innerHTML="正确".fontcolor("green");
			// 	return true;
			// }else{
			// 	srepassword.innerHTML="错误".fontcolor("red");
			// 	return false;
			// }
			srepassword.innerHTML="两次密码一致".fontcolor("green");
			return true;
		}else{
			srepassword.innerHTML="两次密码不一致".fontcolor("red");
			return false;
		}
}
function checkEmail(){
	var email=document.getElementById("email").value;
	var semail=document.getElementById("semail");
	var reg=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
	if (reg.test(email)) {
		semail.innerHTML="正确".fontcolor("green");
		return true;
	}else{
		semail.innerHTML="请输入如123456@qq.com的邮箱".fontcolor("red");
		return false;
	}
}
function checkResult(){
	if (checkUser()&&checkPass()&&checkRePass()&&checkEmail()) {
		alert("注册成功");
		return true;
	}else{
		alert("注册失败")
		return false;
		
	}
}


