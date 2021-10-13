"use strict";
var comunasPorRegion = {
    Metropolitana: ["Santiago", "Cerrillos", "Ñuñoa", "Independencia", "Providencia"],
    Valparaiso: ["Valparaíso", "Viña del Mar", "CasaBlanca", "Concón", "Puchuncaví"]
};
var region = document.getElementById("region");
var comuna = document.getElementById("comuna");
function comRegion(value) {
    if (value.length == 0) {
        comuna.innerHTML = "<option></option>";
    }
    else {
        var opcionesDeComunas = "";
        var idCiudad = void 0;
        for (idCiudad in comunasPorRegion[value]) {
            opcionesDeComunas += "<option>" + comunasPorRegion[value][idCiudad] + "</option>";
        }
        comuna.innerHTML = opcionesDeComunas;
    }
}
