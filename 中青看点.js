"auto"
var w=device.width,h=device.height;
checkOpen("中青看点");
//id("iv_close").findOne().click();
Signin();
while(true){
		sleep(300);
		var suiji=random(0,1)
		if(suiji==1){
			id("tv_home_tab").findOne().click();
			sleep(1000);
			id("tv_home_tab").findOne().click();
			sleep(random(2000,4000));
			click(w*0.5,h*0.3);
			for(var j=0;j<12;j++){
				click("查看全文，奖励更多");
				sleep(random(1000,2000));
				checkapp();
				swipe(w/2,h*0.6,w/2,h*0.4,random(800,1200));
				sleep(random(1000,2000));
			}
		}else{
			id("tv_video_tab").findOne().click();
			sleep(1000);
			gestures([600,[300,400],[300,800]]);
			sleep(random(2000,4000));
			click(w*0.5,h*0.3);
			sleep(random(3000,5000));
			click(w*0.5,h*0.3);
			sleep(30000,40000);
		}
		checkapp();
		back();
		sleep(1000);
	}
//签到
function Signin(){
	//id("iv_close").findOne().click();
	sleep(1000);
	//UITextClick("我的");
	//id("iv_red_packet").findOne().click();
	click(w*0.9,h*0.9);
	sleep(1500);
	id("tv_sign").findOne().click();
	sleep(2500);
	UITextClick("签到领红包");
	sleep(500);
	back();
	sleep(500);
	back();
	sleep(500);
	id("tv_home_tab").findOne().click();
}
//打开app校验
function checkOpen(appName){
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
	//back();
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
	if(currentPackage()!="cn.youth.news"){
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