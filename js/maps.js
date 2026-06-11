// Cerar Contenedor de Mapas
var map = L.map("map").setView([-12.088613,-76.926771],14);

// Enlazar mapas base
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Enlaza WMS 
var peru_mdlm_10_sectores = L.tileLayer.wms("https://geo.munimolina.gob.pe/geoserver/general/wms?",{
						 		Layers 		: "peru_mdlm_10_sectores",
						 		format 		: "image/png",
						 		transparent	: true
}).addTo(map);

var peru_mdlm_10_manzanas =  L.tileLayer.wms("https://geo.munimolina.gob.pe/geoserver/general/wms?",{
						 		Layers 		: "peru_mdlm_10_manzanas",
						 		format 		: "image/png",
						 		transparent	: true
}).addTo(map);

var mdlm_hab_urba  = L.tileLayer.wms("https://geo.munimolina.gob.pe/geoserver/general/wms?",{
						 		Layers 		: "peru_mdlm_10_habilitaciones_urbanas",
						 		format 		: "image/png",
						 		transparent	: true
}).addTo(map);


// Controlador de Capas 

var baseMaps = {
	"OpeenStreetmap" : osm 
};

var wms ={
    "Sectores" : peru_mdlm_10_sectores,
    "Manzanas" : peru_mdlm_10_manzanas,
    "Hab.urbanas" : mdlm_hab_urba
};
L.control.layers(baseMaps,wms).addTo(map);











