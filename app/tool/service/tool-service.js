angular.module("myApp.tool").factory("toolService", function(){
    var tools = [{
        id: 0,
        name: "hammer",
        price: 12.99,
        image: "https://findicons.com/files/icons/2166/oxygen/48/tool.png"
    },{
        id: 1,
        name: "screw driver",
        price: 1.99,
        image: "https://findicons.com/files/icons/2166/oxygen/48/screwdriver.png"
    }, {
        id: 2,
        name: "wrench",
        price: 2.95,
        image: "https://findicons.com/files/icons/2475/simpleshots_icon_collection/48/tool.png"
    }];
    
    
    tools.addTool = function (tool) {
        tools.push(tool);
    }

    tools.getTools = function () {
        return tools;
    }
    
    return tools;
})