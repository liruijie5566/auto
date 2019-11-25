var util = require("./autojs/util.js");
util.check();
util.checkOpen("快手极速版","1");
sleep(8000);
util.checkapp(getPackageName("快手极速版"));
//util.Click(0.3,0.4);
sleep(random(20000,30000));
while(true){
    util.swipeall(0.7,0.2);
    sleep(random(20000,30000));
	util.checkapp(getPackageName("快手极速版"));
}
