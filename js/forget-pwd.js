// ／重新获取短信验证码
$('.resend').off('click').on('click',function(){

});
// 查看密码
$('.seePwd').off('click').on('click',function(){
	var pwdOneType = $('.pwd-one').attr('type');
	if (pwdOneType=='password') {
		$('.pwd-one').attr('type','text');
	}else{
		$('.pwd-one').attr('type','password');
	}
});
// ／提交信息
$('.fp-submit').off('click').on('click',function(){
	var tel = $('.tel-num').val(),
		sms = $('.sms-pwd').val(),
		pwdOne = $('.pwd-one').val(),
		pwdTwo = $('.pwd-two').val(),
		msg = new Array(),
		msgT= new Array(),
		msgS= new Array();
		console.log(msg,tel,sms,pwdOne,pwdTwo);			
	
	if (!tel) {msg.push('手机号码')}
	if (!sms) {msg.push('短信验证码')}
	if (!pwdOne) {msg.push('密码')}
	showMsg(msg+'需要填写完整','red');
	
	if (msg.length==0) {
		if (tel.length!=11) {msgT.push('手机号码11位')}
		if (pwdOne.length<6||pwdOne.length>16) {msgT.push('密码位数需要大于6小于16')}
		showMsg(msgT,'red');
		if (msgT.length==0) {
			if (pwdOne!==pwdTwo) {msgS.push('两次密码不一致')}
			showMsg(msgS,'red');
		}
	}
});

function showMsg(msg,color){
	$('#alert-modal').show().css('color',color).text(msg).removeClass().addClass('bounceIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    })
}