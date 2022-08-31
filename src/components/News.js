import React, { useState,useEffect} from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
//   articles=[
//     {
//         "source": {
//             "id": "al-jazeera-english",
//             "name": "Al Jazeera English"
//         },
//         "author": "Abid Hussain",
//         "title": "Anger among Khan supporters in Pakistan as legal challenges mount",
//         "description": "Imran Khan’s supporters rally behind him over the government’s actions against the cricketing icon-turned-politician.",
//         "url": "http://www.aljazeera.com/news/2022/8/24/anger-among-khan-supporters-in-pakistan-as-legal-challenges-mount",
//         "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/08/h_57872276.jpg?resize=1720%2C1080",
//         "publishedAt": "2022-08-24T11:04:06Z",
//         "content": "Islamabad, Pakistan As legal cases mount against former Pakistani Prime Minister Imran Khan, his supporters have expressed anger over the governments actions against the cricketing icon-turned-politi… [+4813 chars]"
//     },
//     {
//         "source": {
//             "id": "bbc-sport",
//             "name": "BBC Sport"
//         },
//         "author": "BBC Sport",
//         "title": "Shane Warne memorial - watch & follow updates",
//         "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
//         "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
//         "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
//         "publishedAt": "2022-03-30T08:22:26.498888Z",
//         "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": null,
//         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//         "publishedAt": "2020-04-27T11:41:47Z",
//         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": null,
//         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//         "publishedAt": "2020-03-30T15:26:05Z",
//         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//     }
// ] 
//     articles= [
//     {
//         "source": {
//             "id": "financial-times",
//             "name": "Financial Times"
//         },
//         "author": "Patrick Temple-West, Tabby Kinder",
//         "title": "US and China reach landmark audit inspection deal - Financial Times",
//         "description": "Agreement gives US regulators access to Chinese accounts in effort to keep listings on New York exchanges",
//         "url": "https://www.ft.com/content/a9d18d7e-1e75-49fb-842d-d8554b420553",
//         "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F628287ec-7995-4054-b3f6-e280bed2bf8f.png?source=next-opengraph&fit=scale-down&width=900",
//         "publishedAt": "2022-08-26T14:20:24Z",
//         "content": "Washington and Beijing have reached a landmark agreement that would allow US regulators access to audits of Chinese companies that are listed on American exchanges, in a deal that would halt the thre… [+4440 chars]"
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": null,
//         "title": "Fed Chair Powell's Speech: The Two Words That Could Upend The S&P 500 - Investor's Business Daily",
//         "description": null,
//         "url": "https://news.google.com/__i/rss/rd/articles/CBMiamh0dHBzOi8vd3d3LmludmVzdG9ycy5jb20vbmV3cy9lY29ub215L2ZlZC1jaGFpci1wb3dlbGxzLXNwZWVjaC10aGUtdHdvLXdvcmRzLXRoYXQtY291bGQtdXBlbmQtdGhlLXNwLTUwMC_SAQA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2022-08-26T14:20:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "New York Times"
//         },
//         "author": "Jenny Gross, Rebecca Robbins",
//         "title": "Moderna Sues Pfizer and BioNTech Over Covid Vaccine - The New York Times",
//         "description": "The lawsuit, filed Friday, alleges that the companies’ Covid vaccine violated Moderna’s mRNA patents.",
//         "url": "https://www.nytimes.com/2022/08/26/business/moderna-covid-vaccine-lawsuit.html",
//         "urlToImage": "https://static01.nyt.com/images/2022/08/26/multimedia/26xp-moderna2/26xp-moderna2-facebookJumbo.jpg",
//         "publishedAt": "2022-08-26T14:16:50Z",
//         "content": "Moderna on Friday sued Pfizer and BioNTech, claiming that their Covid vaccine copied its groundbreaking technology.\r\nModerna said in a statement that Pfizer and BioNTech infringed on patents filed be… [+393 chars]"
//     },
//     {
//         "source": {
//             "id": "reuters",
//             "name": "Reuters"
//         },
//         "author": null,
//         "title": "British household energy bills to jump 80% to over $4000 a year - Reuters UK",
//         "description": "British energy bills will jump 80% to an average of 3,549 pounds ($4,188) a year from October, the regulator said on Friday, plunging millions of households into fuel poverty and businesses into jeopardy unless the government steps in.",
//         "url": "https://www.reuters.com/world/uk/british-energy-price-cap-rise-80-3549-pounds-year-2022-08-26/",
//         "urlToImage": "https://www.reuters.com/resizer/3Sc48HgPZrdbZSAEeAp5OGUoWVs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RNTZ7LSPFROGHFZMZNLSBG3UY4.jpg",
//         "publishedAt": "2022-08-26T13:54:00Z",
//         "content": "LONDON, Aug 26 (Reuters) - British energy bills will jump 80% to an average of 3,549 pounds ($4,188) a year from October, the regulator said on Friday, plunging millions of households into fuel pover… [+4312 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "MarketWatch"
//         },
//         "author": "Jeffry Bartash",
//         "title": "Inflation falls for first time in more than two years, key gauge shows, due to sinking gas prices - MarketWatch",
//         "description": "PCE inflation index drops 0.1% in July, core up 0.1%",
//         "url": "https://www.marketwatch.com/story/inflation-falls-in-july-for-first-time-in-two-plus-years-key-gauge-shows-due-to-falling-gas-prices-11661517617",
//         "urlToImage": "https://images.mktw.net/im-611327/social",
//         "publishedAt": "2022-08-26T12:40:00Z",
//         "content": "The numbers: A key gauge of U.S. inflation fell 0.1% in July thanks to tumbling gasoline prices, marking the first decline in more than two years and giving Americans some relief from a rapidly risin… [+2135 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Lifehacker.com"
//         },
//         "author": "Meredith Dietz",
//         "title": "There’s Something Better Than ‘Quiet Quitting’ - Lifehacker",
//         "description": "Embrace the radical concept of sticking to your job description.",
//         "url": "https://lifehacker.com/there-s-something-better-than-quiet-quitting-1849457662",
//         "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/86421b6b37efebefc28cb9ca18336e7f.jpg",
//         "publishedAt": "2022-08-26T12:30:00Z",
//         "content": "Look: If clocking in and clocking out counts as quitting, then we should all be quitters. Youve probably heard about quiet quitting, as well as the growing backlash to the viral term. The idea, first… [+3945 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "CNBC"
//         },
//         "author": "Mike Calia",
//         "title": "5 things to know before the stock market opens Friday - CNBC",
//         "description": "Here are the most important news items that investors need to start their trading day.",
//         "url": "https://www.cnbc.com/2022/08/26/5-things-to-know-before-the-stock-market-opens-friday-august-26.html",
//         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107094893-16589473692022-07-27t183753z_1826382441_rc2ikv9mykml_rtrmadp_0_usa-fed.jpeg?v=1658947443&w=1920&h=1080",
//         "publishedAt": "2022-08-26T11:50:52Z",
//         "content": "Federal Reserve Board Chairman Jerome Powell arrives for a news conference following a two-day meeting of the Federal Open Market Committee (FOMC) in Washington, July 27, 2022.\r\nHere are the most imp… [+4011 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "The Guardian"
//         },
//         "author": "Mattha Busby",
//         "title": "First Thing: California to ban sales of new gasoline-powered vehicles - The Guardian US",
//         "description": "Ban on sales by 2035 welcomed but affordability and charging infrastructure pose challenges. Plus, Texas judge overturns gun ban<br>",
//         "url": "https://amp.theguardian.com/us-news/2022/aug/26/first-thing-california-to-ban-sales-of-new-gasoline-powered-vehicles",
//         "urlToImage": null,
//         "publishedAt": "2022-08-26T11:18:00Z",
//         "content": "First ThingBan on sales by 2035 welcomed but affordability and charging infrastructure pose challenges. Plus, Texas judge overturns gun ban\r\nFri 26 Aug 2022 11.20 BST\r\nGood morning.\r\nCalifornia, the … [+10840 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "TheStreet"
//         },
//         "author": "Luc Olinga",
//         "title": "Ford Has Bad News for EV Buyers - TheStreet",
//         "description": "The legacy carmaker has just made a decision that its customers won't like.",
//         "url": "https://www.thestreet.com/technology/ford-has-bad-news-for-ev-buyers",
//         "urlToImage": "https://www.thestreet.com/.image/t_share/MTg3NDg1NDE0NTY5ODEzNTY0/ford-mustang-mach-e-lead5e.jpg",
//         "publishedAt": "2022-08-26T10:37:07Z",
//         "content": "Ford  (F)  did not want to upset its customers and future buyers of electric vehicles. \r\nAs consumers grapple with soaring prices for virtually everything from groceries to basic necessities to gallo… [+3708 chars]"
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": null,
//         "title": "GOP targets powerhouse Wall Street firms over investments meant to fight climate change - The Hill",
//         "description": null,
//         "url": "https://news.google.com/__i/rss/rd/articles/CBMie2h0dHBzOi8vdGhlaGlsbC5jb20vcG9saWN5LzM2MTYwODEtZ29wLXRhcmdldHMtcG93ZXJob3VzZS13YWxsLXN0cmVldC1maXJtcy1vdmVyLWludmVzdG1lbnRzLW1lYW50LXRvLWZpZ2h0LWNsaW1hdGUtY2hhbmdlL9IBAA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2022-08-26T10:00:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "the-wall-street-journal",
//             "name": "The Wall Street Journal"
//         },
//         "author": "Paul Hannon and Joe Wallace",
//         "title": "European Energy Rationing This Winter Is Looking Less Likely - The Wall Street Journal",
//         "description": "The economic war with Russia is likely to keep prices high and send growth into reverse but the specter of rationing is fading.",
//         "url": "https://www.wsj.com/articles/european-energy-rationing-this-winter-is-looking-less-likely-11661505806",
//         "urlToImage": "https://images.wsj.net/im-610727/social",
//         "publishedAt": "2022-08-26T09:30:00Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Motley Fool"
//         },
//         "author": "Sean Williams",
//         "title": "Following the Tesla Stock Split, This Widely Owned Stock Should Be Next to Split - The Motley Fool",
//         "description": "What company is next to split its shares after Tesla? There's one logical answer hiding in plain sight.",
//         "url": "https://www.fool.com/investing/2022/08/26/following-the-tesla-stock-split-this-stock-is-next/",
//         "urlToImage": "https://g.foolcdn.com/editorial/images/697842/stock-certificate-investment-retire-heirloom-donate-capital-gains-tax-getty.jpg",
//         "publishedAt": "2022-08-26T09:21:00Z",
//         "content": "It's been an unforgettable year on Wall Street... for all the wrong reasons. The broad-based S&amp;P 500 and tech-driven Nasdaq Composite have entered bear market territory; the U.S. economy has deli… [+5739 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Internet"
//         },
//         "author": "https://www.facebook.com/thehackernews",
//         "title": "Hackers Breach LastPass Developer System to Steal Source Code - The Hacker News",
//         "description": "Hackers breached a developer account of the popular password management service LastPass and stolen certain source code and technical information.",
//         "url": "https://thehackernews.com/2022/08/hackers-breach-lastpass-developer.html",
//         "urlToImage": "https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEgUTDn5qxTgldTeV--CS8nWJ_jfPEaKzHhZJJYO931Ek4AbFBNz-9sxpYoA_8kUCjcWMZOYjXCTQaHuTweWuZQviZ63UUGU4C5qlo-NgjeR5rZkf9QRtF-zcQ18v9vRMi6n2eDra4rtvlwV9jPHo0CK2HJh4OAN5wIvTpsuWDl4dVnwfqUQCe2eLPKM/s728-e1000/lastpass-hacked.jpg",
//         "publishedAt": "2022-08-26T09:10:00Z",
//         "content": "Password management service LastPass confirmed a security incident that resulted in the theft of certain source code and technical information.\r\nThe security breach is said to have occurred two weeks… [+948 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "CNBC"
//         },
//         "author": "Jihye Lee",
//         "title": "Wharton’s Jeremy Siegel says the Fed needs to hike rates only by another 100 basis points - CNBC",
//         "description": "Wharton business school professor Jeremy Siegel told CNBC that the Fed doesn't need to hike more than 100 basis points because an economic slowdown is in sight.",
//         "url": "https://www.cnbc.com/2022/08/26/whartons-jeremy-siegel-on-fed-rate-hike-ahead-of-jackson-hole.html",
//         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107109802-1661503314017-gettyimages-1234895541-VIRUAL_FED_SYMPOSIUM.jpeg?v=1661504503&w=1920&h=1080",
//         "publishedAt": "2022-08-26T09:06:12Z",
//         "content": "Wharton business school professor Jeremy Siegel said Friday that the U.S. Federal Reserve does not need to hike more than 100 basis points because an economic slowdown is in sight.\r\n\"I think we only … [+4097 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "New York Times"
//         },
//         "author": "David Yaffe-Bellany",
//         "title": "The Crypto World Can’t Wait for ‘the Merge’ - The New York Times",
//         "description": "A long-awaited upgrade to Ethereum, the most popular crypto platform, may make the technology more environmentally sustainable. But it comes with risks.",
//         "url": "https://www.nytimes.com/2022/08/26/technology/crypto-ethereum-the-merge.html",
//         "urlToImage": "https://static01.nyt.com/images/2022/08/23/autossell/still_01_Fin/still_01_Fin-facebookJumbo.jpg",
//         "publishedAt": "2022-08-26T09:00:22Z",
//         "content": "The platform was started in 2013 by a teenage programmer, Vitalik Buterin, who is now regarded as one of the industrys elder statesmen. Mr. Buterin wanted to create a crypto system that was more flex… [+1923 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "CNBC"
//         },
//         "author": "Su-Lin Tan",
//         "title": "China is pumping billions into infrastructure — but commodity markets were not impressed - CNBC",
//         "description": "Prices of the iron ore and steel, some of the biggest beneficiaries of infrastructure stimuli, were mostly muted after the announcement.",
//         "url": "https://www.cnbc.com/2022/08/26/china-pumping-billions-to-infrastructure-but-commodity-markets-muted.html",
//         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107076714-1655360361045-gettyimages-1241306752-Real_estate_economy13.jpeg?v=1655360067&w=1920&h=1080",
//         "publishedAt": "2022-08-26T08:14:06Z",
//         "content": "Yellow pylons work at a construction site in China. China's new home prices in May fell for the second month this year, depressed by still fragile demand as widespread Covid-19 curbs dented already w… [+3240 chars]"
//     },
//     {
//         "source": {
//             "id": "the-wall-street-journal",
//             "name": "The Wall Street Journal"
//         },
//         "author": "River Davis and Rebecca Elliott",
//         "title": "Tesla Supplier Panasonic Plans Additional $4 Billion EV Battery Plant in U.S. - WSJ - The Wall Street Journal",
//         "description": "The supplier to electric-vehicle maker Tesla is in discussions to build an additional roughly $4 billion EV battery plant.",
//         "url": "https://www.wsj.com/articles/tesla-supplier-panasonic-plans-additional-4-billion-ev-battery-plant-in-u-s-11661495847",
//         "urlToImage": "https://images.wsj.net/im-611108/social",
//         "publishedAt": "2022-08-26T06:37:00Z",
//         "content": "TOKYOPanasonic Holdings a supplier to electric-vehicle maker Tesla is in discussions to build an additional roughly $4 billion EV battery plant in the U.S., according to people familiar with the matt… [+166 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "YouTube"
//         },
//         "author": null,
//         "title": "Report: Tesla's self-driving tech fails to detect kids on road | WION Business News - WION",
//         "description": "Tesla has been criticized on various occasions for the lack of safeguards in its autopilot system. The effectiveness of Tesla's self-driving feature has been...",
//         "url": "https://www.youtube.com/watch?v=-9aPA6pYIuE",
//         "urlToImage": "https://i.ytimg.com/vi/-9aPA6pYIuE/maxresdefault.jpg",
//         "publishedAt": "2022-08-26T05:25:33Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "CNBC"
//         },
//         "author": "Abigail Ng",
//         "title": "Australia stocks lead gains in Asia ahead of Powell's Jackson Hole speech - CNBC",
//         "description": "This is CNBC's live blog covering Asia-Pacific markets.",
//         "url": "https://www.cnbc.com/2022/08/26/asia-markets-jackson-hole-stocks-economic-data-interest-rates.html",
//         "urlToImage": "https://image.cnbcfm.com/api/v1/image/106450881-1584574080297gettyimages-1212644190.jpeg?v=1661487260&w=1920&h=1080",
//         "publishedAt": "2022-08-26T04:51:00Z",
//         "content": "Southeast Asia's ride-hailing giant Grab reported some positives in its earnings on Thursday, but the outlook for its delivery business was an \"offsetting negative,\" said Mark Mahaney, head of the in… [+636 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "MarketWatch"
//         },
//         "author": "Aarthi Swaminathan",
//         "title": "'It’s a remarkably uncertain time': Redfin CEO warns of rapidly cooling housing market — says deals under contract are being cancelled - MarketWatch",
//         "description": "Interest rate hikes have made mortgages more expensive, prompting prospective buyers to slow down. Now, sellers are pulling back",
//         "url": "https://www.marketwatch.com/story/its-a-remarkably-uncertain-time-redfin-ceo-warns-of-rapidly-cooling-housing-market-says-deals-under-contract-are-being-cancelled-11661467568",
//         "urlToImage": "https://images.mktw.net/im-456090/social",
//         "publishedAt": "2022-08-26T04:47:00Z",
//         "content": "After a stellar two-year run, the housing market is sputtering as buyers pull back sharply. One real-estate chief said the market is indeed course-correcting, and its getting hard to make a deal as m… [+3832 chars]"
//     }
// ]
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0)
 
    const UpdateFunction=async ()=>{
        props.setProgress(20)
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.sizep}`;
        let data=await fetch(url)
        props.setProgress(40)
        let parseddata=await data.json();
        props.setProgress(70)
        setarticles(parseddata.articles)
        settotalResults(parseddata.totalResults)
        setloading(false)
        props.setProgress(100)
        console.log(url)
        
    }
    useEffect(() => {
        document.title=`${capitalizeFirst(props.category)} - NewsApp`;
        UpdateFunction();
    }, [])
    
    // const componentDidMount=async()=>{{
    //     this.UpdateFunction();
    //     // this.setState({
    //     //     loading:true
    //     // })
    //     // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9d305f3dec324c1e8efdb5ee20653a43&page=${this.state.page}&pageSize=${props.sizep}`;
    //     // let data=await fetch(url)
    //     // let parseddata=await data.json();
    //     // this.setState({articles:parseddata.articles,totalresult:parseddata.totalResults,loading:false})
    //     // console.log(parseddata)
    // }
   
    // previouspage=async()=>{
    //     // console.log("Previous Page")
    //     // this.setState({
    //     //     loading:true
    //     // })
    //     // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9d305f3dec324c1e8efdb5ee20653a43&page=${this.state.page-1}&pageSize=${props.sizep}`;
    //     // let data=await fetch(url)
    //     // let parseddata=await data.json();
    //     // this.setState({
    //     //     articles:parseddata.articles,
    //     //     page:this.state.page-1,
    //     //     loading:false
    //     // })
    //     this.UpdateFunction();
    //     this.setState({
    //         page:this.state.page-1,
    //     })
    // }
    // nextpage=async()=>{
    //     // if(!(this.state.page+1>Math.ceil(this.state.totalresult/props.sizep))){
    //     //     console.log("Next Page")
    //     //     this.setState({
    //     //         loading:true
    //     //     })
    //     //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9d305f3dec324c1e8efdb5ee20653a43&page=${this.state.page+1}&pageSize=${props.sizep}`;
    //     //     let data=await fetch(url)
    //     //     let parseddata=await data.json();
    //     //     this.setState({
    //     //         articles:parseddata.articles,
    //     //         page:this.state.page+1,
    //     //         loading:false
    //     //     })
    //     //     console.log('page',this.state.page)
    //     //     console.log(url)
    //     this.setState({
    //         page:this.state.page+1,
    //     })
    //     this.UpdateFunction();

    //     }
        const fetchMoreData=async()=>{
            setpage(page+1)
            const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.sizep}`;
            let data=await fetch(url)
            let parseddata=await data.json();
            console.log(url)
            setarticles(articles.concat(parseddata.articles))
            settotalResults(parseddata.totalResults)
            setloading(false)
        }
        const capitalizeFirst = str => {
            return str.charAt(0).toUpperCase() + str.slice(1);
          };
     

    return (
      <>
        <h1 className='text-center my-3 text-danger'>{capitalizeFirst(props.category)} Headlines</h1>
        {loading&&<Spinner/>}
         <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
            <div className='container'>

           
            <div className='row align-items-stretch'>
                {articles.map((e,index)=>{
            return <div className='col-md-4' key={index}>
                <Newsitems title={e.title}
                desc={e.description}  author={e.author} date={e.publishedAt} newsurl={e.url}
                imageurl={e.urlToImage}/> 
            </div> 

        })}   
        
           
        </div>
        </div>
        </InfiniteScroll>     

        {/* <div className='row d-flex justify-content-between py-3'>
        <button type="button" disabled={this.state.page<=1} className="btn col-3 float-end btn-warning" onClick={this.previouspage}>&laquo; Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalresult/props.sizep)} className="btn col-3 float-start btn-danger" onClick={this.nextpage}>Next &raquo;</button>
        
        </div> */}


      </>
    )

}

export default News