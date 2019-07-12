var util = require("./autojs/util.js");
util.check();
util.checkOpen("有看头-热点新闻","1");
sleep(8000);
util.Click(0.5,0.58);
sleep(1000);
util.UITextClick("取消");
sleep(1000);
back();
sleep(1000);
util.checkapp(getPackageName("有看头-热点新闻"));
Signin();
while(true){
		util.Click(0.1,0.9);
		sleep(random(3000,4000));
		util.Click(0.5,0.3);
		sleep(random(2000,3000));
		for(var i=0;i<12;i++){
			click("查看全文");
			sleep(random(1000,2000));
			util.checkapp(getPackageName("有看头-热点新闻"));
			util.swipe();
			sleep(random(1000,2000));
		}
		click("继续阅读");
		back();
		sleep(1000);
	}
function Signin(){
	util.Click(0.5,0.9);
	sleep(4500);
	util.Click(0.1,0.9);
	sleep(2000);
}
function checkContent(parent){
	if(parent.childCount()==0){
		if(parent.text()=="\u5e7f\u544a"||parent.text()=="\u4e13\u9898"||parent.text()=="\u7f6e\u9876")
			return true;
		}
    for(var i=0;i<parent.childCount();i++){
        if(checkContent(parent.child(i)))return true;
    }
    return false;
}