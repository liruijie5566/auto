"auto"
var w=device.width,h=device.height;
checkOpen("趣头条");
Signin();
while(true){
		sleep(300);
		var suiji=0;
		
		//id("kj").findOne().click();
		if(suiji==1){
			UITextClick("头条");
			sleep(500);
			//gestures([400,[300,400],[300,1800]]);
			UITextClick("刷新");
			sleep(random(2000,4000));
			click(w*0.5,h*0.6);
			for(var j=0;j<12;j++){
				//click("点击查看全文");
				sleep(random(1000,2000));
				checkapp();
				swipe(w/2,h*0.6,w/2,h*0.4,random(800,1200));
				sleep(random(1000,2000));
			}
		}
		else{
			checkapp();
			sleep(500);
			//click("推荐");
			UITextClick("刷新");
			sleep(1200);
			//gestures([350,[300,400],[300,1400]]);
			sleep(random(2000,4000));
			click(w*0.5,h*0.3);
			sleep(random(50000,60000))
			click(w*0.5,h*0.6);
			sleep(random(50000,60000))
		}
		
		checkapp();
		//back();
		sleep(1000);
	}
//签到
function Signin(){
	UITextClick("任务");
	sleep(1500);
	//UITextClick("签到领红包");
	sleep(200);
	back();
	sleep(500);
	back();
	//UITextClick("头条");
	click(w*0.3,h*0.9);
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
	if(currentPackage()!="com.jifen.qukan"){
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