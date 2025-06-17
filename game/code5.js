gdjs.Cutscene3Code = {};
gdjs.Cutscene3Code.localVariables = [];
gdjs.Cutscene3Code.GDCamada1Objects1= [];
gdjs.Cutscene3Code.GDCamada1Objects2= [];
gdjs.Cutscene3Code.GDBack_9595btnObjects1= [];
gdjs.Cutscene3Code.GDBack_9595btnObjects2= [];
gdjs.Cutscene3Code.GDTextoObjects1= [];
gdjs.Cutscene3Code.GDTextoObjects2= [];


gdjs.Cutscene3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back_btn"), gdjs.Cutscene3Code.GDBack_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cutscene3Code.GDBack_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Cutscene3Code.GDBack_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cutscene3Code.GDBack_9595btnObjects1[k] = gdjs.Cutscene3Code.GDBack_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Cutscene3Code.GDBack_9595btnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene5", true);
}}

}


};

gdjs.Cutscene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cutscene3Code.GDCamada1Objects1.length = 0;
gdjs.Cutscene3Code.GDCamada1Objects2.length = 0;
gdjs.Cutscene3Code.GDBack_9595btnObjects1.length = 0;
gdjs.Cutscene3Code.GDBack_9595btnObjects2.length = 0;
gdjs.Cutscene3Code.GDTextoObjects1.length = 0;
gdjs.Cutscene3Code.GDTextoObjects2.length = 0;

gdjs.Cutscene3Code.eventsList0(runtimeScene);
gdjs.Cutscene3Code.GDCamada1Objects1.length = 0;
gdjs.Cutscene3Code.GDCamada1Objects2.length = 0;
gdjs.Cutscene3Code.GDBack_9595btnObjects1.length = 0;
gdjs.Cutscene3Code.GDBack_9595btnObjects2.length = 0;
gdjs.Cutscene3Code.GDTextoObjects1.length = 0;
gdjs.Cutscene3Code.GDTextoObjects2.length = 0;


return;

}

gdjs['Cutscene3Code'] = gdjs.Cutscene3Code;
