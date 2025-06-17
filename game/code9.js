gdjs.Cutscene7Code = {};
gdjs.Cutscene7Code.localVariables = [];
gdjs.Cutscene7Code.GDCamada1Objects1= [];
gdjs.Cutscene7Code.GDCamada1Objects2= [];
gdjs.Cutscene7Code.GDBack_9595btnObjects1= [];
gdjs.Cutscene7Code.GDBack_9595btnObjects2= [];
gdjs.Cutscene7Code.GDTextoObjects1= [];
gdjs.Cutscene7Code.GDTextoObjects2= [];


gdjs.Cutscene7Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back_btn"), gdjs.Cutscene7Code.GDBack_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cutscene7Code.GDBack_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Cutscene7Code.GDBack_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cutscene7Code.GDBack_9595btnObjects1[k] = gdjs.Cutscene7Code.GDBack_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Cutscene7Code.GDBack_9595btnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", true);
}}

}


};

gdjs.Cutscene7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cutscene7Code.GDCamada1Objects1.length = 0;
gdjs.Cutscene7Code.GDCamada1Objects2.length = 0;
gdjs.Cutscene7Code.GDBack_9595btnObjects1.length = 0;
gdjs.Cutscene7Code.GDBack_9595btnObjects2.length = 0;
gdjs.Cutscene7Code.GDTextoObjects1.length = 0;
gdjs.Cutscene7Code.GDTextoObjects2.length = 0;

gdjs.Cutscene7Code.eventsList0(runtimeScene);
gdjs.Cutscene7Code.GDCamada1Objects1.length = 0;
gdjs.Cutscene7Code.GDCamada1Objects2.length = 0;
gdjs.Cutscene7Code.GDBack_9595btnObjects1.length = 0;
gdjs.Cutscene7Code.GDBack_9595btnObjects2.length = 0;
gdjs.Cutscene7Code.GDTextoObjects1.length = 0;
gdjs.Cutscene7Code.GDTextoObjects2.length = 0;


return;

}

gdjs['Cutscene7Code'] = gdjs.Cutscene7Code;
