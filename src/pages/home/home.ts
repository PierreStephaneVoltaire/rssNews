import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,storage: Storage) {
 storage.ready().then(() => {  
 let jsonobj:string=null;
     storage.get('jsonobj').then((val) => {
         jsonobj=val;
       });
     if (jsonobj==null){
         let jsonstring:string=`{
	"news": [{
			"name": "cbc"
			, "logo": "/android_asset/www/assets/images/cbc.jpg"
			, "description": "CBC News is the largest news broadcaster in Canada and has local, regional and national broadcasts and stations.(wikipedia)"
			, "rss": [{
				"category": "general"
				, "feed": [{
					"title": "Top Stories"
					, "link": "http://rss.cbc.ca/lineup/topstories.xml"
			}, {
					"title": "World"
					, "link": "http://rss.cbc.ca/lineup/world.xml"
			}, {
					"title": "Canada"
					, "link": "http://rss.cbc.ca/lineup/canada.xml"
			}, {
					"title": "Politics"
					, "link": "http://rss.cbc.ca/lineup/politics.xml"
			}, {
					"title": "Business"
					, "link": "http://rss.cbc.ca/lineup/business.xml"
			}, {
					"title": "Health"
					, "link": "http://rss.cbc.ca/lineup/health.xml"
			}, {
					"title": "Art &Entertainment"
					, "link": "http://rss.cbc.ca/lineup/arts.xml"
			}, {
					"title": "Technology & Science"
					, "link": "http://rss.cbc.ca/lineup/technology.xml"
			}, {
					"title": "Offbeat"
					, "link": "http://rss.cbc.ca/lineup/offbeat.xml"
			}, {
					"title": "Aboriginal"
					, "link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
			}]
		}, {
				"category": "sport news"
				, "feed": [{
					"title": "sport"
					, "link": "http://rss.cbc.ca/lineup/sports.xml"
			}, {
					"title": "mlb"
					, "link": "http://rss.cbc.ca/lineup/sports-mlb.xml"
			}, {
					"title": "nba"
					, "link": "http://rss.cbc.ca/lineup/sports-nba.xml"
			}, {
					"title": "curling"
					, "link": "http://rss.cbc.ca/lineup/sports-curling.xml"
			}, {
					"title": "cfl"
					, "link": "http://rss.cbc.ca/lineup/sports-cfl.xml"
			}, {
					"title": "nhl"
					, "link": "http://rss.cbc.ca/lineup/sports-nhl.xml"
			}, {
					"title": "soccer"
					, "link": "http://rss.cbc.ca/lineup/sports-soccer.xml"
			}, {
					"title": "figure skating"
					, "link": "http://rss.cbc.ca/lineup/sports-figureskating.xml"
			}]
		}, {
				"category": "regional news"
				, "feed": [{
					"title": "British Columbia"
					, "link": "http://rss.cbc.ca/lineup/topstories.xml"
			}, {
					"title": "Kamloops"
					, "link": "http://rss.cbc.ca/lineup/world.xml"
			}, {
					"title": "Calgary"
					, "link": "http://rss.cbc.ca/lineup/canada.xml"
			}, {
					"title": "Edmonton"
					, "link": "http://rss.cbc.ca/lineup/politics.xml"
			}, {
					"title": "Saskatchewan"
					, "link": "http://rss.cbc.ca/lineup/business.xml"
			}, {
					"title": "Saskatoon"
					, "link": "http://rss.cbc.ca/lineup/health.xml"
			}, {
					"title": "Manitoba"
					, "link": "http://rss.cbc.ca/lineup/arts.xml"
			}, {
					"title": "Thunder Bay"
					, "link": "http://rss.cbc.ca/lineup/technology.xml"
			}, {
					"title": "Offbeat"
					, "link": "http://rss.cbc.ca/lineup/offbeat.xml"
			}, {
					"title": "Sudbury"
					, "link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
			}, {
					"title": "Windsor"
					, "link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
			}, {
					"title": "Kitchener-Waterloo"
					, "link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
			}, {
					"title": "Toronto"
					, "link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
			}, {
					"title": "Hamilton"
					, "link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
			}, {
					"title": "Ottawa"
					, "link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
			}, {
					"title": "Montreal"
					, "link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
			}, {
					"title": "New Brunswick"
					, "link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
			}, {
					"title": "Prince Edward Island"
					, "link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
			}, {
					"title": "Nova Scotia"
					, "link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
			}, {
					"title": "Newfoundland & Labrador"
					, "link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
			}, {
					"title": "North"
					, "link": "http://www.cbc.ca/cmlink/rss-cbcaboriginal"
			}]
		}, {
				"category": "the national"
				, "feed": [{
					"title": "the national"
					, "link": "http://www.cbc.ca/thenational/blog/atom.xml"
			}, {
					"title": "The National - In Depth Reports"
					, "link": "http://rss.cbc.ca/lineup/thenational.xml"
			}, {
					"title": "Wendy Mesley"
					, "link": "http://www.cbc.ca/thenational/indepthanalysis/wendymesley/atom.xml"
			}]
		}]
	}, {
			"name": "Global news"
			, "logo": "/android_asset/www/assets/images/gn.png"
			, "description": "Global News is the news and current affairs division of Global Television Network in Canada, overseeing all local and national news programming on the network's twelve owned-and-operated stations (O&Os)."
			, "rss": [{
				"category": "general"
				, "feed": [{
					"title": "general"
					, "link": "http://globalnews.ca/feed/"
			}, {
					"title": "bc"
					, "link": "http://globalnews.ca/bc/feed/l"
			}, {
					"title": "Calgary"
					, "link": "http://globalnews.ca/calgary/feed/"
			}, {
					"title": "Edmonton"
					, "link": "http://globalnews.ca/edmonton/feed/"
			}, {
					"title": "lethridge"
					, "link": "http://globalnews.ca/lethbridge/feed/"
			}, {
					"title": "reginia"
					, "link": "http://globalnews.ca/regina/feed/"
			}, {
					"title": "saskatoon"
					, "link": "http://globalnews.ca/saskatoon/feed/"
			}, {
					"title": "winnipeg"
					, "link": "http://globalnews.ca/winnipeg/feed/"
			}, {
					"title": "toronto"
					, "link": "http://globalnews.ca/toronto/feed/"
			}, {
					"title": "Montreal"
					, "link": "http://globalnews.ca/montreal/feed/"
			}, {
					"title": "halifax"
					, "link": "http://globalnews.ca/halifax/feed/"
			}, {
					"title": "Okanagan/CHBC News"
					, "link": "http://globalnews.ca/okanagan/feed/"
			}, {
					"title": "AM980 London, Ontario"
					, "link": "http://globalnews.ca/london/feed/"
			}]
		}]
	}, {
			"name": "Yahoo News!"
			, "logo": "/android_asset/www/assets/images/yahoo.png"
			, "description": "Yahoo News originated as an internet-based news aggregator by Yahoo. Articles originally came from news services such as Associated Press, Reuters, Fox News, Al Jazeera, ABC News, USA Today, CNN.com, BBC News, etc."
			, "rss": [{
				"category": "RSS Feeds"
				, "feed": [{
					"title": " All News Releases"
					, "link": "http://apps.shareholder.com/rss/rss.aspx?channels=632&companyid=YHOO&sh_auth=4092020885%2E0%2E0%2E42812%2E4fdf05ea4e32476f50a20b9e041cab52"
			}, {
					"title": " Financial Releases"
					, "link": "http://apps.shareholder.com/rss/rss.aspx?channels=633&companyid=YHOO&sh_auth=4092020885%2E0%2E0%2E42812%2E4fdf05ea4e32476f50a20b9e041cab52"
			}, {
					"title": "General Releases"
					, "link": "http://apps.shareholder.com/rss/rss.aspx?channels=634&companyid=YHOO&sh_auth=4092020885%2E0%2E0%2E42812%2E4fdf05ea4e32476f50a20b9e041cab52"
			}, {
					"title": "All SEC Filings"
					, "link": "http://apps.shareholder.com/rss/rss.aspx?channels=635&companyid=YHOO&sh_auth=4092020885%2E0%2E0%2E42812%2E4fdf05ea4e32476f50a20b9e041cab52"
			}, {
					"title": "Form 4 SEC Filings"
					, "link": "http://apps.shareholder.com/rss/rss.aspx?channels=636&companyid=YHOO&sh_auth=4092020885%2E0%2E0%2E42812%2E4fdf05ea4e32476f50a20b9e041cab52"
			}, {
					"title": "Annual Report and Proxy Filings"
					, "link": "http://apps.shareholder.com/rss/rss.aspx?channels=7530&companyid=YHOO&sh_auth=4092020885%2E0%2E0%2E42812%2E4fdf05ea4e32476f50a20b9e041cab52"
			}]
		}]
	}, {
			"name": "abc news"
			, "logo": "/android_asset/www/assets/images/abc.png"
			, "description": "ABC News is the news division of the American Broadcasting Company (ABC), owned by the Disney Media Networks division of The Walt Disney Company. "
			, "rss": [{
				"category": "ABCNews.com News Feeds"
				, "feed": [{
					"title": "Top Stories"
					, "link": "http://feeds.abcnews.com/abcnews/topstories"
			}, {
					"title": "World Headlines"
					, "link": "http://feeds.abcnews.com/abcnews/internationalheadlines"
			}, {
					"title": "US Headlines"
					, "link": "http://feeds.abcnews.com/abcnews/usheadlines"
			}, {
					"title": "Politics Headlines"
					, "link": "http://feeds.abcnews.com/abcnews/politicsheadlines"
			}, {
					"title": "The Blotter from Brian Ross"
					, "link": "http://feeds.abcnews.com/abcnews/blotterheadlines"
			}, {
					"title": "Cuomo on the Case"
					, "link": "http://feeds.abcnews.com/abcnews/thelawheadlines"
			}, {
					"title": "Money Headlines"
					, "link": "http://feeds.abcnews.com/abcnews/moneyheadlines"
			}, {
					"title": "Technology Headlines"
					, "link": "http://feeds.abcnews.com/abcnews/technologyheadlines"
			}, {
					"title": "Health Headlines"
					, "link": "http://feeds.abcnews.com/abcnews/healthheadlines"
			}, {
					"title": "Entertainment Headlines"
					, "link": "http://feeds.abcnews.com/abcnews/entertainmentheadlines"
			}, {
					"title": "Travel Headlines"
					, "link": "http://feeds.abcnews.com/abcnews/travelheadlines"
			}, {
					"title": "ESPN Sports"
					, "link": "http://feeds.abcnews.com/abcnews/sportsheadlines"
			}, {
					"title": "World News Headlines"
					, "link": "http://feeds.abcnews.com/abcnews/worldnewsheadlines"
			}]
		}]
	},

		{
			"name": "CTV news"
			, "logo": "/android_asset/www/assets/images/ctv.png"
			, "description": "CTV News is the news division of the CTV Television Network in Canada."
			, "rss": [{
					"category": "NATIONAL FEEDS"
					, "feed": [{
						"title": "Top Stories"
						, "link": "http://ctvnews.ca/rss/TopStories"
			}, {
						"title": "World Headlines"
						, "link": "http://www.ctvnews.ca/rss/World"
			}, {
						"title": "Canada Headlines"
						, "link": "http://ctvnews.ca/rss/Canada"
			}, {
						"title": "Politics Headlines"
						, "link": "http://www.ctvnews.ca/rss/Politics"
			}, {
						"title": "Science and tech Headlines"
						, "link": "http://www.ctvnews.ca/rss/SciTech"
			}, {
						"title": "Entertainmennt Headlines"
						, "link": "http://www.ctvnews.ca/rss/CTVNewsEnt"
			}, {
						"title": "Business Headlines"
						, "link": "http://www.ctvnews.ca/rss/business/ctv-news-business-headlines-1.867648"
			}, {
						"title": "Auto Headlines"
						, "link": "http://www.ctvnews.ca/rss/autos/ctv-news-autos-1.867636"
			}]
		}, {
					"category": "SUBSCRIBE TO VIDEO"
					, "feed": [{
						"title": "Video Network"
						, "link": "http://www.ctvnews.ca/rss/video/ctv-news-video-player-for-web-viewing-1.867553"
			}]
		}, {
					"category": "LOCAL NEWS"
					, "feed": [{
							"title": "Atlantic"
							, "link": "http://atlantic.ctvnews.ca/rss/Atlantic"
			}, {
							"title": "Barrie"
							, "link": "http://barrie.ctvnews.ca/rss/ctv-news-barrie-1.1293974"
			}, {
							"title": "Bc"
							, "link": "http://bc.ctvnews.ca/rss/bcnews"
			}, {
							"title": "calgary"
							, "link": "http://calgary.ctvnews.ca/rss/CalgaryNews"
			}, {
							"title": "edmonton"
							, "link": "http://edmonton.ctvnews.ca/rss/EdmontonNews"
			}, {
							"title": "kitchener"
							, "link": "http://kitchener.ctvnews.ca/rss/Kitchener"
			}, {
							"title": "london"
							, "link": "http://london.ctvnews.ca/rss/ctv-news-london-1.1073369"
			}, {
							"title": "Montreal"
							, "link": "http://montreal.ctvnews.ca/rss/MontrealLatest"
			}, {
							"title": "Northern ontario"
							, "link": "http://northernontario.ctvnews.ca/rss/ctv-northern-ontario-latest-news-1.1245445"
			}, {
							"title": "Ottawa"
							, "link": "http://ottawa.ctvnews.ca/rss/ctv-news-ottawa-1.1245493"
			}, {
							"title": "Regina"
							, "link": "http://regina.ctvnews.ca/rss/ReginaNews"
			}, {
							"title": "Saskatoon"
							, "link": "http://saskatoon.ctvnews.ca/rss/Saskatoon"
			}
					 , {
							"title": "Toronto"
							, "link": "http://toronto.ctvnews.ca/rss/Latest"
			}
					 , {
							"title": "Vancouver island"
							, "link": "http://vancouverisland.ctvnews.ca/rss/ctv-vancouver-island-latest-news-1.1245414"
			}
					 , {
							"title": "Windsor"
							, "link": "http://windsor.ctvnews.ca/rss/ctv-news-windsor-1.1073359"
			}
					 , {
							"title": "winnipeg"
							, "link": "http://winnipeg.ctvnews.ca/rss/winnipeg"
			}
					]
		}




			   ]
	},



		{
			"name": "cnn"
			, "logo": "/android_asset/www/assets/images/cnn.png"
			, "description": "The Cable News Network (CNN) is an American basic cable and satellite television news channel owned by the Turner Broadcasting System division of Time Warner"
			, "rss": [{
				"category": "RSS Feeds"
				, "feed": [{
					"title": "Top Stories"
					, "link": "http://rss.cnn.com/rss/cnn_topstories.rss"
			}, {
					"title": "world"
					, "link": "http://rss.cnn.com/rss/cnn_world.rss"
			}, {
					"title": "U.S."
					, "link": "http://rss.cnn.com/rss/cnn_us.rss"
			}, {
					"title": "Business"
					, "link": "http://rss.cnn.com/rss/money_latest.rss"
			}, {
					"title": "Politics"
					, "link": "http://rss.cnn.com/rss/cnn_allpolitics.rss"
			}, {
					"title": "Technology"
					, "link": "http://rss.cnn.com/rss/cnn_tech.rss"
			}, {
					"title": "Health"
					, "link": "http://rss.cnn.com/rss/cnn_health.rss"
			}, {
					"title": "Entertainment"
					, "link": "http://rss.cnn.com/rss/cnn_showbiz.rss"
			}, {
					"title": "Travel"
					, "link": "http://rss.cnn.com/rss/cnn_travel.rss"
			}, {
					"title": "Living"
					, "link": "http://rss.cnn.com/rss/cnn_living.rss"
			}, {
					"title": "Video"
					, "link": "http://rss.cnn.com/rss/cnn_freevideo.rss"
			}, {
					"title": "cnn10"
					, "link": "http://rss.cnn.com/services/podcasting/cnn10/rss.xml"
			}, {
					"title": "most recent"
					, "link": "http://rss.cnn.com/rss/cnn_latest.rss"
			}]
		}]
	}]
}`;
		 
	  storage.set('jsonobj', jsonstring);	 
     }
 
 });
  }

}
