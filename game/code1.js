gdjs.Op_231_245esCode = {};
gdjs.Op_231_245esCode.localVariables = [];
gdjs.Op_231_245esCode.GDBackGroundObjects1= [];
gdjs.Op_231_245esCode.GDBackGroundObjects2= [];
gdjs.Op_231_245esCode.GDBack_9595btnObjects1= [];
gdjs.Op_231_245esCode.GDBack_9595btnObjects2= [];
gdjs.Op_231_245esCode.GDCreditosObjects1= [];
gdjs.Op_231_245esCode.GDCreditosObjects2= [];
gdjs.Op_231_245esCode.GDControlesObjects1= [];
gdjs.Op_231_245esCode.GDControlesObjects2= [];


gdjs.Op_231_245esCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back_btn"), gdjs.Op_231_245esCode.GDBack_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Op_231_245esCode.GDBack_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Op_231_245esCode.GDBack_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Op_231_245esCode.GDBack_9595btnObjects1[k] = gdjs.Op_231_245esCode.GDBack_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Op_231_245esCode.GDBack_9595btnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Op_231_245esCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Op_231_245esCode.GDBackGroundObjects1.length = 0;
gdjs.Op_231_245esCode.GDBackGroundObjects2.length = 0;
gdjs.Op_231_245esCode.GDBack_9595btnObjects1.length = 0;
gdjs.Op_231_245esCode.GDBack_9595btnObjects2.length = 0;
gdjs.Op_231_245esCode.GDCreditosObjects1.length = 0;
gdjs.Op_231_245esCode.GDCreditosObjects2.length = 0;
gdjs.Op_231_245esCode.GDControlesObjects1.length = 0;
gdjs.Op_231_245esCode.GDControlesObjects2.length = 0;

gdjs.Op_231_245esCode.eventsList0(runtimeScene);
gdjs.Op_231_245esCode.GDBackGroundObjects1.length = 0;
gdjs.Op_231_245esCode.GDBackGroundObjects2.length = 0;
gdjs.Op_231_245esCode.GDBack_9595btnObjects1.length = 0;
gdjs.Op_231_245esCode.GDBack_9595btnObjects2.length = 0;
gdjs.Op_231_245esCode.GDCreditosObjects1.length = 0;
gdjs.Op_231_245esCode.GDCreditosObjects2.length = 0;
gdjs.Op_231_245esCode.GDControlesObjects1.length = 0;
gdjs.Op_231_245esCode.GDControlesObjects2.length = 0;


return;

}

gdjs['Op_231_245esCode'] = gdjs.Op_231_245esCode;
