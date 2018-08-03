angular.module("myApp.tool").factory("toolService", function(){
    var tools = [{
        name: "hammer",
        price: 12.99
    },{
        name: "pressure washer",
        price: 199.99
    }];
    
    
    tools.addTool = function (tool) {
        tools.push(tool);
    }

    tools.getTools = function () {
        return tools;
    }
    
    return tools;
})