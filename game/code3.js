gdjs.Cutscene1Code = {};
gdjs.Cutscene1Code.localVariables = [];
gdjs.Cutscene1Code.GDCamada1Objects1= [];
gdjs.Cutscene1Code.GDCamada1Objects2= [];
gdjs.Cutscene1Code.GDBack_9595btnObjects1= [];
gdjs.Cutscene1Code.GDBack_9595btnObjects2= [];
gdjs.Cutscene1Code.GDTextoObjects1= [];
gdjs.Cutscene1Code.GDTextoObjects2= [];


gdjs.Cutscene1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back_btn"), gdjs.Cutscene1Code.GDBack_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cutscene1Code.GDBack_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Cutscene1Code.GDBack_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cutscene1Code.GDBack_9595btnObjects1[k] = gdjs.Cutscene1Code.GDBack_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Cutscene1Code.GDBack_9595btnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene2", true);
}}

}


};

gdjs.Cutscene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cutscene1Code.GDCamada1Objects1.length = 0;
gdjs.Cutscene1Code.GDCamada1Objects2.length = 0;
gdjs.Cutscene1Code.GDBack_9595btnObjects1.length = 0;
gdjs.Cutscene1Code.GDBack_9595btnObjects2.length = 0;
gdjs.Cutscene1Code.GDTextoObjects1.length = 0;
gdjs.Cutscene1Code.GDTextoObjects2.length = 0;

gdjs.Cutscene1Code.eventsList0(runtimeScene);
gdjs.Cutscene1Code.GDCamada1Objects1.length = 0;
gdjs.Cutscene1Code.GDCamada1Objects2.length = 0;
gdjs.Cutscene1Code.GDBack_9595btnObjects1.length = 0;
gdjs.Cutscene1Code.GDBack_9595btnObjects2.length = 0;
gdjs.Cutscene1Code.GDTextoObjects1.length = 0;
gdjs.Cutscene1Code.GDTextoObjects2.length = 0;


return;

}

gdjs['Cutscene1Code'] = gdjs.Cutscene1Code;
