const fs = require("fs");
const Parser = require('rss-parser');

const parser = new Parser();

const FILENAME = "feed.xml";

// Se lee el fichero
fs.readFile(FILENAME, 'utf-8', (error, xml) => {
  if(error){
    throw error;
  }

  (async () => {
    // Si OK, lo parseamos
    let feed = await parser.parseString(xml);

    console.log("***********************");
    console.log("* INFORMACIÓN GENERAL *");
    console.log("***********************");
    console.log(feed.title);
    console.log(feed.description);
    console.log(feed.link);
    console.log("");

    console.log("************");
    console.log("* NOTICIAS *");
    console.log("************");
  
    let cont = 1;
    feed.items.forEach((item) => {
        console.log("Noticia " + cont + ":");
        console.log("--------------------");
        console.log(item.title.toUpperCase());
        console.log(item.content);
        console.log("");
        cont++;
    });
  })();
});
