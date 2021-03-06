const exportStops = require("efa-export-stops-by-coordinates");

const ENDPOINT_BASE_URL_TEMPLATE = "http://efa.vrr.de/vrrstd/XSLT_COORD_REQUEST?&jsonp=&boundingBox=&boundingBoxLU={minx}%3A{miny}%3AWGS84%5BDD.DDDDD%5D&boundingBoxRL={maxx}%3A{maxy}%3AWGS84%5BDD.DDDDD%5D&coordOutputFormat=WGS84%5BGGZHTXX%5D&type_1=STOP&outputFormat=json&inclFilter=1";

const DISTRICT_CODES = [
	"05762",
	"05774"
];

exportStops(ENDPOINT_BASE_URL_TEMPLATE, 5, 47, 15, 56, DISTRICT_CODES);
