gdjs.ControlesCode = {};
gdjs.ControlesCode.localVariables = [];
gdjs.ControlesCode.GDBackGroundObjects1= [];
gdjs.ControlesCode.GDBackGroundObjects2= [];
gdjs.ControlesCode.GDBack_9595btnObjects1= [];
gdjs.ControlesCode.GDBack_9595btnObjects2= [];
gdjs.ControlesCode.GDCreditosObjects1= [];
gdjs.ControlesCode.GDCreditosObjects2= [];
gdjs.ControlesCode.GDControlesObjects1= [];
gdjs.ControlesCode.GDControlesObjects2= [];
gdjs.ControlesCode.GDNewSpriteObjects1= [];
gdjs.ControlesCode.GDNewSpriteObjects2= [];


gdjs.ControlesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back_btn"), gdjs.ControlesCode.GDBack_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ControlesCode.GDBack_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.ControlesCode.GDBack_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ControlesCode.GDBack_9595btnObjects1[k] = gdjs.ControlesCode.GDBack_9595btnObjects1[i];
        ++k;
    }
}
gdjs.ControlesCode.GDBack_9595btnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.ControlesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ControlesCode.GDBackGroundObjects1.length = 0;
gdjs.ControlesCode.GDBackGroundObjects2.length = 0;
gdjs.ControlesCode.GDBack_9595btnObjects1.length = 0;
gdjs.ControlesCode.GDBack_9595btnObjects2.length = 0;
gdjs.ControlesCode.GDCreditosObjects1.length = 0;
gdjs.ControlesCode.GDCreditosObjects2.length = 0;
gdjs.ControlesCode.GDControlesObjects1.length = 0;
gdjs.ControlesCode.GDControlesObjects2.length = 0;
gdjs.ControlesCode.GDNewSpriteObjects1.length = 0;
gdjs.ControlesCode.GDNewSpriteObjects2.length = 0;

gdjs.ControlesCode.eventsList0(runtimeScene);
gdjs.ControlesCode.GDBackGroundObjects1.length = 0;
gdjs.ControlesCode.GDBackGroundObjects2.length = 0;
gdjs.ControlesCode.GDBack_9595btnObjects1.length = 0;
gdjs.ControlesCode.GDBack_9595btnObjects2.length = 0;
gdjs.ControlesCode.GDCreditosObjects1.length = 0;
gdjs.ControlesCode.GDCreditosObjects2.length = 0;
gdjs.ControlesCode.GDControlesObjects1.length = 0;
gdjs.ControlesCode.GDControlesObjects2.length = 0;
gdjs.ControlesCode.GDNewSpriteObjects1.length = 0;
gdjs.ControlesCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['ControlesCode'] = gdjs.ControlesCode;
