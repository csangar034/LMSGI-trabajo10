const fs = require("fs");
const RSS = require("rss");

const FILENAME = "feed.xml";

const articles = [
    {
        title: "La matanza de Bucha muestra la barbarie de la guerra de Putin",
        description: "Ucrania denuncia una de las mayores masacres en Europa desde la II Guerra Mundial en esta localidad cercana a Kiev, que tras la salida de las tropas rusas ha enterrado a 280 civiles",
        url: "https://elpais.com/internacional/2022-04-04/la-matanza-de-bucha-muestra-al-mundo-el-horror-de-la-guerra-de-putin.html"
    },
    {
        title: "Así son los soldados de la Z: brutalizados, mal pagados y adoctrinados en la supremacía rusa",
        description: "El horror de la retirada rusa: fosas comunes, ejecución de civiles atados y mujeres rapadas al estilo nazi",
        url: "https://www.elmundo.es/internacional/2022/04/03/6249d213fc6c83e5168b456f.html"
    },
    {
        title: "Jornada 39, invasión de Ucrania | Europa redoblará las sanciones a Rusia tras Bucha",
        description: "Moscú ha negado las acusaciones, que atribuye a \"provocaciones\" de Ucrania. Varios periodistas han documentado la presencia de cuerpos maniatados en la zona",
        url: "https://www.elconfidencial.com/mundo/2022-04-03/ultima-hora-directo-guerra-rusia-ucrania_3402525/"
    },
    {
        title: "Ucrania acusa a Rusia de \"una masacre\" en Bucha y Occidente sentencia que Putin comete \"crímenes de guerra\"",
        description: "La invasión rusa de Ucrania es el horror. Y lo es por imágenes como las que ha dejado el paso de las tropas de Vladimir Putin por la ciudad de Bucha, en la región de Kiev, donde se acumulan decenas de cadáveres de civiles y de soldados, algunos de ellos en fosas comunes.",
        url: "https://www.20minutos.es/noticia/4980507/0/ucrania-masacre-rusia-bucha-ataques-sanciones-muertos-guerra/"
    },
    {
        title: "Ucrania - Rusia, última hora de la guerra | Hallan más de 400 civiles muertos en territorios liberados cerca de Kiev",
        description: "Ucrania cumple este lunes 40 días de guerra entre denuncias por parte de Ucrania y de la comunidad internacional de las \"atrocidades\" cometidas contra la población civil en Bucha. Aseguran que se han producido \"ejecuciones sumarias\" en la zona y la fiscalía ucraniana afirma que se han hallado los cadáveres de 400 civiles.",
        url: "https://www.rtve.es/noticias/20220404/ucrania-rusia-guerra-directo-ultima-hora-noticias/2327143.shtml"
    }
];

const feed = new RSS({
    title: "ComunicAlberti: última hora sobre la guerra entre Rusia y Ucrania",
    link: "http://www.comunicalberti.es",
    description: "Canal de contenidos dedicado al seguimiento sobre la guerra entre Rusia y Ucrania"
});

for(const article of articles){
    feed.item({
        title: article.title,
        description: article.description,
        date: article.publishedDate
    });
}

const xml = feed.xml({indent: true});
fs.writeFileSync(FILENAME, xml);