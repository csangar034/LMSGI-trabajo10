const fs        = require('fs');
const xmllint   = require("xmllint");

const xml_file    = "feed.xml";
const schema_file = "rss-2.0.xsd";

// Se lee el fichero XML
fs.readFile(xml_file, 'utf-8', (error, xml) => {
    if(error){
        throw error;
    }

    // Se lee el fichero XML Schema
    fs.readFile(schema_file, 'utf-8', (error, schema) => {
        if(error){
            throw error;
        }

        // Se configuran las opciones para la librería xmllint
        var opts = {
            xml: xml,
            schema: schema
        }

        // Se valida el fichero:
        // - Si no hay errores => XML válido
        // - Si no => XML no válido
        if (!xmllint.validateXML(opts).errors) {
            console.log(xml_file + " VÁLIDO contra " + schema_file);
        }else{
            console.log(xml_file + " NO VÁLIDO contra " + schema_file);
            console.log("Más info:");
            console.log(xmllint.validateXML(opts).errors)
        }
    });
});


