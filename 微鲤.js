var util = require("./autojs/util.js");
util.check();
var w=device.width,h=device.height;
checkOpen("微鲤看看");
checkapp();
var sign = 0;
while(true){
		sleep(300);
		//click(w*0.3,h*0.9);
		//sleep(1000);
		click(w*0.34,h*0.9);
		sleep(random(3000,5000))
		click(w*0.5,h*0.25);
		for(var j=0;j<12;j++){
			click("展开查看全文");
			sleep(random(1000,2000));
			checkapp();
			swipe(w/2,h*0.6,w/2,h*0.4,random(800,1200));
			sleep(random(1000,2000));
			click("知道了");
			click("收下啦");
		}
		sleep(1000);
		checkapp();
		back();
		sleep(1000);
		if(sign==0){
			Signin();
			sign++;
		}
		sleep(random(2000,4000));
	}
function Signin(){
	click(w*0.9,h*0.9);
	sleep(5000);
	back();
	sleep(3500);
	//id("act_close_image").findOne().click();
	//back();
	//sleep(500);
	click(w*0.87,h*0.19);
	//click("签到");
	sleep(5500);
	click(w*0.5,h*0.29);
	sleep(1000);
	back();
	sleep(2000);
	click(w*0.34,h*0.9);
	sleep(2000);
	click("热点");
	//click(w*0.2,h*0.9);
}
//打开app校验
function checkOpen(appName){
	
	if(getPackageName(appName)==null){
		toast("手机上未安装"+appName+"软件，结束！");
		exit();
	}
	//打开应用
    app.launchApp(appName);

    //如果存在提示，则点击允许
    var loop = 0;
    while(loop < 5){
        loop++;
        UITextClick("允许");
    }
	//防止app卡顿等待10秒
	sleep(15000);
	click(w*0.5,h*0.66);
	sleep(2000);
	click(w*0.5,h*0.66);
	sleep(1000);
	back();
	toast("开始运行");
	sleep(2000);
	click(w*0.2,h*0.9);
	sleep(2000);
	click("热点");
	sleep(2000);
}

//通过UI文本点击
function UITextClick(textContent){
	var uiele = text(textContent).findOnce();
    if(uiele){
        uiele.click();
    }
    sleep(1000);
}
	
//校验
function checkapp(){
	if(currentPackage()!="cn.weli.story"){
		toast("结束"); 
		exit();
		}
	}
	
//广告置顶视频校验
function check(parent){
    if(parent.childCount()==0){
		if(parent.text()=="\u5e7f\u544a"||(parent.text()=="\u7f6e\u9876"||parent.text()=="\u89c6\u9891")){
			return true;
			return false;
		}	
	}
    for(var i=0;i<parent.childCount();i++){
       if(check(parent.child(i)))
		   return true;
    }
    return false;
}