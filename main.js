var main = {};


//开始执行
main.init = function(max){
	var one = 0;
	    //每次阅读的时间
    var normalRumTime = max*60;
    while(true){
        var config = main.getConfig();
        //新闻类的列表
        var newsList = config.newsAppList;
		var appNum = newsList.length;
        var j=random(0,13);
		if(one>0){
			j=0;
		}
		for(var i = j;i< appNum;i++){
			main.exec(newsList[i].name,normalRumTime);
		}
		one++;
    }
}

main.getConfig = function(){
	toast("开始获取配置");
	var str = files.read("/sdcard/脚本/autojs/config/config.json")
    str = JSON.parse(str);
    toast("配置获取完成");
    return str;
}

main.exec = function(scriptName,seconds){
	//开始执行
    var startDate = new Date();//开始时间
    var exectuion = engines.execScriptFile("/sdcard/脚本/liruijie/"+scriptName+".js");

    //计时器，检测时间
    var isIExec = true;
	var count = 0;
    while(isIExec){
        //计时
        var runSeconds = ((new Date().getTime()) - startDate.getTime())/1000;
        toast(scriptName+"已执行"+count +"分钟"+engines.all().length);
        if(runSeconds >  seconds){
            isIExec = false; 
        }	 

        sleep(60*1000);//每一分钟检测一次

        //检测当前执行的任务是否已经完成
        //如果发现只有一个进程，则跳转到下一个
        if(engines.all().length < 2){
            isIExec = false; 
            stopCurrent(exectuion);
        }
		count++;
    }
    //停止脚本
    main.stopCurrent(exectuion);
}


main.stopCurrent = function(exectuion){
	var w=device.width,h=device.height;
	toast("执行停止");
    exectuion.getEngine().forceStop();
    sleep(2000);
    back();
    sleep(1000);
    back();
    sleep(1000);
    home();
    sleep(5000);
	click(w*0.35,h*0.98);
	sleep(2000);
	click(w*0.5,h*0.88);
	sleep(2000);
	home();
}
module.exports = main;