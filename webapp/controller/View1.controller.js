sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("zov.controller.View1", {
        onInit: function () {

        },
        OnPress: function(){
            alert("Helo world");
        }
    });
});
