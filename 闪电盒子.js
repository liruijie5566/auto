var util = require("./autojs/util.js");
util.check();
util.checkOpen("闪电盒子","1");
var suiji=0;
while(true){
		sleep(300);
		//click("资讯");
		sleep(500);
		util.Click(0.1,0.9);
		sleep(random(2000,3000));
		util.Click(0.5,0.4);
		sleep(random(1000,2000));
		for(var j=0;j<12;j++){
			sleep(random(1000,2000));
			util.checkapp("c.l.a");
			util.swipe();
			sleep(random(1000,2000));
		}
	    suiji++;
		util.checkapp("c.l.a");
		back();
		sleep(random(1000,2000));
		if(suiji>2){
			util.Click(0.95,0.7);
			suiji=0;
			sleep(2000);
			back();
			sleep(1000);
		}
	}
