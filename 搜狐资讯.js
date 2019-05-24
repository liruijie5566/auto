var util = require("./autojs/util.js");
util.check();
var w=device.width,h=device.height;
checkOpen("搜狐资讯");
sleep(1000);
Signin();
while(true){
		sleep(300);
		var suiji=random(0,8);
		if(suiji>0){
			click(w*0.2,h*0.9);
			sleep(1000);
			click(w*0.27,h*0.12);
			sleep(random(2000,4000))
			click(w*0.2,h*0.5);
			for(var j=0;j<12;j++){
				//click("查看全文，奖励更多");
				sleep(random(1000,2000));
				checkapp();
				util.swipe();
				sleep(random(1000,2000));
			}
			checkapp();
			back();
			sleep(1000);
		}else{
			click(w*0.4,h*0.9);
			sleep(500);
			click(w*0.4,h*0.9);
			sleep(random(2000,4000));
			click(w*0.5,h*0.25);
			sleep(random(20000,30000));
			sleep(1000);
			click(w*0.5,h*0.6);
			sleep(random(60000,70000));
		}
	}
function Signin(){
	click(w*0.8,h*0.9);
	sleep(5000);
	back();
	sleep(2000);
	click(w*0.2,h*0.23);
	//id("act_close_image").findOne().click();
	//back();
	sleep(2000);
	back();
	sleep(2000);
	back();
	sleep(2000);
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
	sleep(10000);
	back();
	toast("开始运行");
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
	if(currentPackage()!="com.sohu.infonews"){
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