var comunasPorRegion:any = {
    Metropolitana: ["Santiago","Cerrillos","Ñuñoa","Independencia","Providencia"],
    Valparaiso: ["Valparaíso","Viña del Mar","CasaBlanca","Concón","Puchuncaví"]
}

let region:any = document.getElementById("region");
let comuna:any = document.getElementById("comuna");

function comRegion(value:any) {
    if(value.length==0) {
        comuna.innerHTML = "<option></option>";
    }    
    else {
        var opcionesDeComunas = "";
        let idCiudad:any;
        for(idCiudad in comunasPorRegion[value]) {
            opcionesDeComunas+="<option>"+comunasPorRegion[value][idCiudad]+"</option>";
        }
        comuna.innerHTML = opcionesDeComunas;
    }
}

