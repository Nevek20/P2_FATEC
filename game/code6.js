gdjs.Cutscene4Code = {};
gdjs.Cutscene4Code.localVariables = [];
gdjs.Cutscene4Code.GDCamada1Objects1= [];
gdjs.Cutscene4Code.GDCamada1Objects2= [];
gdjs.Cutscene4Code.GDBack_9595btnObjects1= [];
gdjs.Cutscene4Code.GDBack_9595btnObjects2= [];
gdjs.Cutscene4Code.GDTextoObjects1= [];
gdjs.Cutscene4Code.GDTextoObjects2= [];


gdjs.Cutscene4Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back_btn"), gdjs.Cutscene4Code.GDBack_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cutscene4Code.GDBack_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Cutscene4Code.GDBack_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cutscene4Code.GDBack_9595btnObjects1[k] = gdjs.Cutscene4Code.GDBack_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Cutscene4Code.GDBack_9595btnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene6", true);
}}

}


};

gdjs.Cutscene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cutscene4Code.GDCamada1Objects1.length = 0;
gdjs.Cutscene4Code.GDCamada1Objects2.length = 0;
gdjs.Cutscene4Code.GDBack_9595btnObjects1.length = 0;
gdjs.Cutscene4Code.GDBack_9595btnObjects2.length = 0;
gdjs.Cutscene4Code.GDTextoObjects1.length = 0;
gdjs.Cutscene4Code.GDTextoObjects2.length = 0;

gdjs.Cutscene4Code.eventsList0(runtimeScene);
gdjs.Cutscene4Code.GDCamada1Objects1.length = 0;
gdjs.Cutscene4Code.GDCamada1Objects2.length = 0;
gdjs.Cutscene4Code.GDBack_9595btnObjects1.length = 0;
gdjs.Cutscene4Code.GDBack_9595btnObjects2.length = 0;
gdjs.Cutscene4Code.GDTextoObjects1.length = 0;
gdjs.Cutscene4Code.GDTextoObjects2.length = 0;


return;

}

gdjs['Cutscene4Code'] = gdjs.Cutscene4Code;
