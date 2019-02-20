auto.waitFor();
app.launchApp("刷宝");
//waitForActivity("com.coloros.recents.RecentsActivity");   //等到进入视频页面
sleep(10000);
back();
var w=device.width,h=device.height;
Signin();
while(true){
    sleep(random(4450,5160));
    //scrollDown(1);
   // swipe(w/2,h*0.7,w/2,h*0.2,1200);
   //className(android.widget.ImageView).id(image_view).findOne().click();
    swipe(random(480,500),h*0.7+random(10,20),random(680,710),h*0.4+random(10,30),random(210,235));
    sleep(random(4930,11660));
    //var c=random(0,1);
    //if(c==1){
		//click(940,1010,1030,1090);
		//click(w/2,h/2);
		//click(w/2,h/2);
    //}
    sleep(random(920,1610));
}
//签到
function Signin(){
	//UITextClick("任务");
	//id("ll_tap").findOne().click();
	click(w*0.7,h*0.9);
	sleep(1500);
	id("imgClose").findOne().click();
	sleep(2500);
	UITextClick("立即签到");
	sleep(500);
	back();
	sleep(500);
	click(w*0.2,h*0.9);
}
//通过UI文本点击
function UITextClick(textContent){
	var uiele = text(textContent).findOnce();
    if(uiele){
        uiele.click();
    }
    sleep(1000);
}
//className(android.widget.ImageView).id(image_view).findOne().click();



