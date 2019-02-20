"auto"
function getConfig(){
    toast("开始获取配置");
	var str = files.read("/sdcard/脚本/liruijie/config.json")
    str = JSON.parse(str);
    toast("配置获取完成");
    return str;
}
function updateScript(scriptName){
    toast("检测脚本更新");
    var storage = storages.create("version");
    var scriptVersion = storage.get(scriptName);

    var config = getConfig();
    var newsAppList = config.newsAppList;
    for(var i = 0; i< newsAppList.length;i++){
        var thisScript = newsAppList[i];
        var name = thisScript.name;
        var version = thisScript.version;
        
        if(scriptName == name && version != scriptVersion){
            toast("检测开始更新");
            var path = "/sdcard/脚本/liruijie/"+scriptName+".js";
            var scriptContent = http.get("https://raw.githubusercontent.com/RyanPro/autojs_script/master/"+scriptName+".js").body.string();
            files.write(path,scriptContent);
            storage.put(scriptName,version);
            toast("检测更新完成");
            return true;
        }
        toast("检测无需更新");
        return false;
    }
}