gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDStart_9595BtnObjects1= [];
gdjs.MenuCode.GDStart_9595BtnObjects2= [];
gdjs.MenuCode.GDFogoObjects1= [];
gdjs.MenuCode.GDFogoObjects2= [];
gdjs.MenuCode.GDLogoObjects1= [];
gdjs.MenuCode.GDLogoObjects2= [];
gdjs.MenuCode.GDOpt_9595btnObjects1= [];
gdjs.MenuCode.GDOpt_9595btnObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start_Btn"), gdjs.MenuCode.GDStart_9595BtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDStart_9595BtnObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDStart_9595BtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDStart_9595BtnObjects1[k] = gdjs.MenuCode.GDStart_9595BtnObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDStart_9595BtnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Opt_btn"), gdjs.MenuCode.GDOpt_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOpt_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOpt_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOpt_9595btnObjects1[k] = gdjs.MenuCode.GDOpt_9595btnObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDOpt_9595btnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Opções", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "soft-piano-72454.mp3", false, 15, 0.75);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDStart_9595BtnObjects1.length = 0;
gdjs.MenuCode.GDStart_9595BtnObjects2.length = 0;
gdjs.MenuCode.GDFogoObjects1.length = 0;
gdjs.MenuCode.GDFogoObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDOpt_9595btnObjects1.length = 0;
gdjs.MenuCode.GDOpt_9595btnObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDStart_9595BtnObjects1.length = 0;
gdjs.MenuCode.GDStart_9595BtnObjects2.length = 0;
gdjs.MenuCode.GDFogoObjects1.length = 0;
gdjs.MenuCode.GDFogoObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDOpt_9595btnObjects1.length = 0;
gdjs.MenuCode.GDOpt_9595btnObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
