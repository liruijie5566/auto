"auto"
var w=device.width,h=device.height;
checkOpen("惠头条");
Signin();
while(true){
		sleep(300);
		//click("资讯");
		var suiji=random(0,1)
		if(suiji==1){
			click(w*0.1,h*0.9);
			sleep(500);
			gestures([600,[300,400],[300,800]]);
			sleep(random(2000,4000));
			click(w*0.5,h*0.6);
			for(var j=0;j<12;j++){
				click("展开全文");
				sleep(random(1000,2000));
				checkapp();
				swipe(w/2,h*0.6,w/2,h*0.4,random(800,1200));
				sleep(random(1000,2000));
			}
		}else{
			click(w*0.3,h*0.9);
			sleep(1000);
			gestures([600,[300,400],[300,800]]);
			sleep(random(2000,4000));
			click(w*0.5,h*0.3);
			sleep(random(60000,80000));
		}
		checkapp();
		back();
		sleep(1000);
		//click("刷新");
		sleep(random(2000,4000));
	}
function Signin(){
	//UITextClick("我的");
	//id("iv_red_packet").findOne().click();
	sleep(500);
	click(w*0.7,h*0.9);
	sleep(1500);
	click(w*0.5,h*0.2);
	sleep(3000);
	back();
	sleep(500);
	click(w*0.1,h*0.9);
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
	//id("img_close").findOne().click();
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
	if(currentPackage()!="com.cashtoutiao"){
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