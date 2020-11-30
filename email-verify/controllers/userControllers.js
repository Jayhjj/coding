const common = require('../tools/common')
const verify = require('../tools/verify')
const md5 = require('../tools/crypto')
const UserModel = require('../models/useModel')
const redis = require('../config/db_redis')

const user_regist = async function(){
    const ctx = this
    // console.log(this.body)
    const respondData = {
        
        status:200,
        data:{},
        error:'',
        msg:''
    }
    //检查前端必传的参数(是否传了)
    const is_available = common.check_key_words(['user_email','user_password','user_name'],this,'POST')
        if(is_available == false) return
        const user_email = this.request.body.user_email;
        const user_password = this.request.body.user_password;
        const user_name = this.request.body.user_name;
        console.log(user_email,user_password,user_name);
    
        //邮箱验证
        const is_email = verify.verify_email(user_email)
        if(is_email == false){
            respondData.status = 1000;
            respondData.error = '失败';
            return ctx.body = respondData
        }
        //密码验证
        const is_password = verify.verify_password(user_password)
        const is_enable_length = (user_password.length>6 && user_password.length<16)?true : false
        if(!(is_password && is_enable_length)  ){
            respondData.status = 1001;
            respondData.error = '密码错误';
            return ctx.body = respondData
        }

        try {
            //用户参数
            const userpassword = md5(user_password)
            const userInfo = {
                useremail:user_email,
                username = user_name,
                userpwd = userpassword,
                status:0,
                create_time:Date.now('YYY-MM-DD')
            }
            const newUser = new UserModel(userInfo);
		    newUser.save(function (err, data) {
			if (err) {
				console.log("newGuess.save err-->" + JSON.stringify(err));
				respondData.status = "00001";
				respondData.error = "mongodb system error";
				return res.json(respondData);
			}
			console.log("newGuess.save data -->" + JSON.stringify(data));
			let userEmail = data.useremail;
			let sendEmail = sendUserEmail(userEmail);
			console.log("sendEmail:" + sendEmail);
			respondData.msg = "新用户注册成功 and 激活邮箱发送成功";
			return res.json(respondData);
		});


        } catch (error) {
            
        }
}

//给指定邮箱发送邮件
function sendUserEmail(cnd) {
	console.log("controllers/UserController.js/sendUserEmail start --> " + JSON.stringify(cnd));
	const expiraton = 1800;
	const code = require('crypto').randomBytes(16).toString('hex');
	const codeContent = {
		userEmail: cnd
	};
	redis.set(code, JSON.stringify(codeContent));
	redis.expire(code, expiraton);
	var config_email = {
		host: 'smtp.163.com',
		post: 25, // SMTP 端口
		//secureConnection: true, // 使用 SSL
		auth: {
			user: 'wangweifengyx@163.com',
			//这里密码不是qq密码，是你设置的smtp密码
			pass: 'wwf666'
		}
	};
	var transporter = nodemailer.createTransport(config_email);

	var html = "<div>http://127.0.0.1:3000?code=" + code + "&account=" + cnd + "</div>";
	console.log(html);
	var data = {
		from: 'wangweifengyx@163.com', // 发件地址
		to: cnd, // 收件列表
		subject: 'Hello feng', // 标题

		//text: html // 标题 //text和html两者只支持一种
		html: html // html 内容
	};
	console.log(data);
	transporter.sendMail(data, function (err, info) {
		if (err) {
			return (err);
		}
		console.log(info.response);
		return (info.response);

	});
}

exports.user_regist = user_regist