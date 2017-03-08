
export class Localstorage {

  check(){
    if (typeof(Storage) !== "undefined") {
      var cbc=JSON.parse(localStorage.getItem("names"));

  if(cbc==null){

    var category:string=`{
  	"news": [{
  		"name": "cbc",
  		"logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/CBC_News_Logo.svg/175px-CBC_News_Logo.svg.png",
  		"description":"CBC News is the division of the Canadian Broadcasting Corporation responsible for the news gathering and production of news programs on the corporation's English-language operations, namely CBC Television, CBC Radio, CBC News Network, and CBC.ca. Founded in 1941, CBC News is the largest news broadcaster in Canada and has local, regional and national broadcasts and stations.(wikipedia)",
  		"rss": [{
  			"category": "general",
  			"feed": [{
  				"title": "Top Stories",
  				"link": "http://rss.cbc.ca/lineup/topstories.xml"
  			}, {
  				"title": "World",
  				"link": "http://rss.cbc.ca/lineup/world.xml"
  			}, {
  				"title": "Canada",
  				"link": "http://rss.cbc.ca/lineup/canada.xml"
  			}, {
  				"title": "Politics",
  				"link": "http://rss.cbc.ca/lineup/politics.xml"
  			}, {
  				"title": "Business",
  				"link": "http://rss.cbc.ca/lineup/business.xml"
  			}, {
  				"title": "Health",
  				"link": "http://rss.cbc.ca/lineup/health.xml"
  			}, {
  				"title": "Art &Entertainment",
  				"link": "http://rss.cbc.ca/lineup/arts.xml"
  			}, {
  				"title": "Technology & Science",
  				"link": "http://rss.cbc.ca/lineup/technology.xml"
  			}, {
  				"title": "Offbeat",
  				"link": "http://rss.cbc.ca/lineup/offbeat.xml"
  			}, {
  				"title": "Aboriginal",
  				"link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
  			}]
  		}, {
  			"category": "sport news",
  			"feed": [{
  				"title": "sport",
  				"link": "http://rss.cbc.ca/lineup/sports.xml"
  			}, {
  				"title": "mlb",
  				"link": "http://rss.cbc.ca/lineup/sports-mlb.xml"
  			}, {
  				"title": "nba",
  				"link": "http://rss.cbc.ca/lineup/sports-nba.xml"
  			}, {
  				"title": "curling",
  				"link": "http://rss.cbc.ca/lineup/sports-curling.xml"
  			}, {
  				"title": "cfl",
  				"link": "http://rss.cbc.ca/lineup/sports-cfl.xml"
  			}, {
  				"title": "nhl",
  				"link": "http://rss.cbc.ca/lineup/sports-nhl.xml"
  			}, {
  				"title": "soccer",
  				"link": "http://rss.cbc.ca/lineup/sports-soccer.xml"
  			}, {
  				"title": "figure skating",
  				"link": "http://rss.cbc.ca/lineup/sports-figureskating.xml"
  			}]
  		}, {
  			"category": "regional news",
  			"feed": [{
  				"title": "British Columbia",
  				"link": "http://rss.cbc.ca/lineup/topstories.xml"
  			}, {
  				"title": "Kamloops",
  				"link": "http://rss.cbc.ca/lineup/world.xml"
  			}, {
  				"title": "Calgary",
  				"link": "http://rss.cbc.ca/lineup/canada.xml"
  			}, {
  				"title": "Edmonton",
  				"link": "http://rss.cbc.ca/lineup/politics.xml"
  			}, {
  				"title": "Saskatchewan",
  				"link": "http://rss.cbc.ca/lineup/business.xml"
  			}, {
  				"title": "Saskatoon",
  				"link": "http://rss.cbc.ca/lineup/health.xml"
  			}, {
  				"title": "Manitoba",
  				"link": "http://rss.cbc.ca/lineup/arts.xml"
  			}, {
  				"title": "Thunder Bay",
  				"link": "http://rss.cbc.ca/lineup/technology.xml"
  			}, {
  				"title": "Offbeat",
  				"link": "http://rss.cbc.ca/lineup/offbeat.xml"
  			}, {
  				"title": "Sudbury",
  				"link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
  			}, {
  				"title": "Windsor",
  				"link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
  			}, {
  				"title": "Kitchener-Waterloo",
  				"link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
  			}, {
  				"title": "Toronto",
  				"link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
  			}, {
  				"title": "Hamilton",
  				"link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
  			}, {
  				"title": "Ottawa",
  				"link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
  			}, {
  				"title": "Montreal",
  				"link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
  			}, {
  				"title": "New Brunswick",
  				"link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
  			}, {
  				"title": "Prince Edward Island",
  				"link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
  			}, {
  				"title": "Nova Scotia",
  				"link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
  			}, {
  				"title": "Newfoundland & Labrador",
  				"link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
  			}, {
  				"title": "North",
  				"link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
  			}]
  		}, {
  			"category": "the national",
  			"feed": [{
  				"title": "the national",
  				"link": "http://www.cbc.ca/thenational/blog/atom.xml"
  			}, {
  				"title": "The National - In Depth Reports",
  				"link": "http://rss.cbc.ca/lineup/thenational.xml"
  			}, {
  				"title": "Wendy Mesley",
  				"link": "http://www.cbc.ca/thenational/indepthanalysis/wendymesley/atom.xml"
  			}]
  		}]
  	}, {
  		"name": "Global news",
      "logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Global_News.svg/220px-Global_News.svg.png",
  		"description":"Global News is the news and current affairs division of Global Television Network in Canada, overseeing all local and national news programming on the network's twelve owned-and-operated stations (O&Os).",
  		"rss": [{
  			"category": "general",
  			"feed": [{
  				"title": "general",
  				"link": "http://globalnews.ca/feed/"
  			}, {
  				"title": "bc",
  				"link": "http://globalnews.ca/bc/feed/l"
  			}, {
  				"title": "Calgary",
  				"link": "http://globalnews.ca/calgary/feed/"
  			}, {
  				"title": "Edmonton",
  				"link": "http://globalnews.ca/edmonton/feed/"
  			}, {
  				"title": "lethridge",
  				"link": "http://globalnews.ca/lethbridge/feed/"
  			}, {
  				"title": "reginia",
  				"link": "http://globalnews.ca/regina/feed/"
  			}, {
  				"title": "saskatoon",
  				"link": "http://globalnews.ca/saskatoon/feed/"
  			}, {
  				"title": "winnipeg",
  				"link": "http://globalnews.ca/winnipeg/feed/"
  			}, {
  				"title": "toronto",
  				"link": "http://globalnews.ca/toronto/feed/"
  			}, {
  				"title": "Montreal",
  				"link": "http://globalnews.ca/montreal/feed/"
  			}, {
  				"title": "halifax",
  				"link": "http://globalnews.ca/halifax/feed/"
  			}, {
  				"title": "Okanagan/CHBC News",
  				"link": "http://globalnews.ca/okanagan/feed/"
  			}, {
  				"title": "AM980 London, Ontario",
  				"link": "http://globalnews.ca/london/feed/"
  			}]
  		}]
  	}]
  }`
  ;
  cbc=JSON.parse(category);
    localStorage.setItem("names", category);
  }


  } else {
    console.log("not suported");
  }
  }
  get(){
    var cbc=localStorage.getItem("names");

    return cbc;

  }

}
