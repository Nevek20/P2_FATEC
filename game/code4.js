gdjs.Cutscene2Code = {};
gdjs.Cutscene2Code.localVariables = [];
gdjs.Cutscene2Code.GDCamada1Objects1= [];
gdjs.Cutscene2Code.GDCamada1Objects2= [];
gdjs.Cutscene2Code.GDBack_9595btnObjects1= [];
gdjs.Cutscene2Code.GDBack_9595btnObjects2= [];
gdjs.Cutscene2Code.GDTextoObjects1= [];
gdjs.Cutscene2Code.GDTextoObjects2= [];


gdjs.Cutscene2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back_btn"), gdjs.Cutscene2Code.GDBack_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cutscene2Code.GDBack_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.Cutscene2Code.GDBack_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cutscene2Code.GDBack_9595btnObjects1[k] = gdjs.Cutscene2Code.GDBack_9595btnObjects1[i];
        ++k;
    }
}
gdjs.Cutscene2Code.GDBack_9595btnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene3", true);
}}

}


};

gdjs.Cutscene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cutscene2Code.GDCamada1Objects1.length = 0;
gdjs.Cutscene2Code.GDCamada1Objects2.length = 0;
gdjs.Cutscene2Code.GDBack_9595btnObjects1.length = 0;
gdjs.Cutscene2Code.GDBack_9595btnObjects2.length = 0;
gdjs.Cutscene2Code.GDTextoObjects1.length = 0;
gdjs.Cutscene2Code.GDTextoObjects2.length = 0;

gdjs.Cutscene2Code.eventsList0(runtimeScene);
gdjs.Cutscene2Code.GDCamada1Objects1.length = 0;
gdjs.Cutscene2Code.GDCamada1Objects2.length = 0;
gdjs.Cutscene2Code.GDBack_9595btnObjects1.length = 0;
gdjs.Cutscene2Code.GDBack_9595btnObjects2.length = 0;
gdjs.Cutscene2Code.GDTextoObjects1.length = 0;
gdjs.Cutscene2Code.GDTextoObjects2.length = 0;


return;

}

gdjs['Cutscene2Code'] = gdjs.Cutscene2Code;
