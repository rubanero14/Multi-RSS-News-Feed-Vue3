(function(){"use strict";var e={8393:function(e,s,t){var a=t(9242),o=t(3396);function n(e,s,t,a,n,i){const r=(0,o.up)("RSSFeed");return(0,o.wg)(),(0,o.j4)(r)}var i=t(7139);const r={class:"container"},c={class:"row"},l={key:0},d={key:0},w={class:"text-secondary mb-3"},p={key:0,"data-cy":"actions-article-wrapper",class:"articles-wrapper"},u={key:1},m=(0,o._)("span",{class:"text-danger mb-0"},[(0,o._)("strong",null,[(0,o._)("em",null,"No articles found here!")])],-1),h={key:0},g={class:"text-secondary mb-3"};function f(e,s,t,n,f,b){const v=(0,o.up)("HeaderComponent"),y=(0,o.up)("loading-spinner"),N=(0,o.up)("sources-tiles"),k=(0,o.up)("articles-tiles"),_=(0,o.up)("card-component"),T=(0,o.up)("topic-tiles"),x=(0,o.up)("error-component"),j=(0,o.up)("footer-component");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",c,[(0,o._)("div",{class:(0,i.C_)({"col-3":f.screenWidth>=1200,"":f.screenWidth<1200})},null,2),(0,o._)("div",{class:(0,i.C_)({"":f.screenWidth<1200,"col-6":f.screenWidth>=1200})},[(0,o.Wm)(v,{onBackwardNav:s[0]||(s[0]=e=>b.backwardNav(f.isError)),tabNav:f.tabNav,isloading:f.isloading,isError:f.isError,showSourceCode:e.showSourceCode,devActivationCount:f.devActivationCount},null,8,["tabNav","isloading","isError","showSourceCode","devActivationCount"]),(0,o.Wm)(y,{isloading:f.isloading,isError:f.isError},null,8,["isloading","isError"]),(0,o.Wm)(a.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[f.isloading||0!==f.tabNav?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(a.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o._)("h2",{onClick:s[1]||(s[1]=e=>b.devMode()),class:"text-secondary mb-3"},"Sources")])),_:1}),(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(f.sources,((s,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"d-inline-block"},[(0,o.Wm)(N,{index:t,source:s,topics:e.topics,isloading:f.isloading,tabNav:f.tabNav,onForwardNav:e=>b.forwardNav(s)},null,8,["index","source","topics","isloading","tabNav","onForwardNav"])])))),128))])]))])),_:1}),f.isError||f.isloading||2!==f.tabNav?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(a.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o._)("h2",w,(0,i.zw)(1===f.topicData.length?f.topicTitle:f.topicTitle2),1)])),_:1}),this.feedHasArticles()?((0,o.wg)(),(0,o.iD)("div",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.feeds,((s,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"mb-2",key:t},[(0,o.Wm)(k,{index:t,feed:s,feeds:e.feeds,data:f.data,screenWidth:f.screenWidth,pic:e.pic,setAltImage:b.setAltImage},null,8,["index","feed","feeds","data","screenWidth","pic","setAltImage"])])))),128))])):((0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(_,{onClick:s[2]||(s[2]=e=>b.backwardNav(f.isError)),class:"d-flex justify-content-center align-content-center p-4"},{default:(0,o.w5)((()=>[m])),_:1})]))])),(0,o.Wm)(a.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[f.isloading||1!==f.tabNav?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",h,[(0,o.Wm)(a.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o._)("h2",g,(0,i.zw)(f.topicTitle),1)])),_:1}),(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(f.topicData,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"d-inline-block"},[(0,o.Wm)(T,{index:t,topic:e,setAltImage:b.setAltImage,topicNavUrl:f.topicNavUrl,onGetRssFeeds:s=>b.getRssFeeds(f.topicNavUrl,e.url,e.title),onForwardNav:s[3]||(s[3]=e=>b.forwardNav())},null,8,["index","topic","setAltImage","topicNavUrl","onGetRssFeeds"])])))),128))])]))])),_:1}),(0,o.Wm)(x,{onBackwardNav:s[4]||(s[4]=e=>b.backwardNav()),data:f.data,tabNav:f.tabNav,isError:f.isError},null,8,["data","tabNav","isError"]),(0,o.Wm)(j,{onBackwardNav:s[5]||(s[5]=e=>b.backwardNav(f.isError)),data:f.data,tabNav:f.tabNav,isloading:f.isloading,isError:f.isError,topicData:f.topicData||[],feeds:e.feeds||[]},null,8,["data","tabNav","isloading","isError","topicData","feeds"])],2),(0,o._)("div",{class:(0,i.C_)({"col-3":f.screenWidth>=1200,"":f.screenWidth<1200})},null,2)])])}var b=t(6265),v=t.n(b);class y{static UrlEncoder(e){return encodeURIComponent(e)}static ElapsedTime(e){const s=new Date(e).getTime(),t=Date.now(),a=(t-s)/1e3,o=a/60,n=o/60,i=n/24,r=i/7,c=r/4,l=c/12;return a>=1&&a<60?a.toFixed(0)+(a.toFixed(0)<2?" second":" seconds"):o>=1&&o<60?o.toFixed(0)+(o.toFixed(0)<2?" minute":" minutes"):n>=1&&n<24?n.toFixed(0)+(n.toFixed(0)<2?" hour":" hours"):i>=1&&i<7?i.toFixed(0)+(i.toFixed(0)<2?" day":" days"):r>=1&&r<4?r.toFixed(0)+(r.toFixed(0)<2?" week":" weeks"):c>=1&&c<12?c.toFixed(0)+(c.toFixed(0)<2?" month":" months"):l>=1?l.toFixed(0)+(l.toFixed(0)<2?" year":" years"):void 0}}t(7658);const N=[],k=(e,s,t,a)=>{const o=[],n=()=>s||`https://${e.toLowerCase().replaceAll(" ","").replaceAll(".com","")}.com/favicon.ico`,[i,r,c]=[e,n(),t];return a.map((e=>{const[s,t]=[e[0],e[1]];o.push({title:s,url:t})})),N.push({name:i,url:r,logo:c,topics:o})};k("Investing.com",null,"in-logo.jpg",[["Economy News","https://www.investing.com/rss/news_14.rss"],["Economic Indicators News","https://www.investing.com/rss/news_95.rss"],["Stock Market News","https://www.investing.com/rss/news_25.rss"],["ETF News","https://www.investing.com/rss/stock_ETFs.rss"],["Foreign Exchange News","https://www.investing.com/rss/news_1.rss"]]),k("Business Wire",null,"bw-logo.png",[["Dividend News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeEF9ZVA==&_gl=1*z96yy4*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA4MTU2My4yLjEuMTY2NjA4MjAxOS4wLjAuMA.."],["IPO News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeEF9YXQ==&_gl=1*oudbjk*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA4MTU2My4yLjAuMTY2NjA4MTU2My4wLjAuMA.."],["Merger/Acquisition News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeEFtRWA==&_gl=1*ewsir6*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQxMi4wLjAuMA.."],["Share Issue News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtWXA==&_gl=1*ji7i1m*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQzNC4wLjAuMA.."],["Stock Split News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtWXg==&_gl=1*1ysdfcb*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQ0MS4wLjAuMA.."],["Stock Sale/Buyback News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtWXw==&_gl=1*11xwt23*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQ0NS4wLjAuMA.."],["SPAC News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJaF1hWXw==&_gl=1*9mr1pq*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQ1MS4wLjAuMA.."],["Closed End Fund News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtYXg==&_gl=1*mau74y*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA4MTU2My4yLjEuMTY2NjA4MTczMC4wLjAuMA.."]]),k("GlobeNewswire",null,"gnw.jpg",[["Dividend Reports","https://www.globenewswire.com/RssFeed/subjectcode/12-Dividend%20Reports%20and%20Estimates/feedTitle/GlobeNewswire%20-%20Dividend%20Reports%20and%20Estimates"],["Company Announcement","https://www.globenewswire.com/RssFeed/subjectcode/9-Company%20Announcement/feedTitle/GlobeNewswire%20-%20Company%20Announcement"],["Conference Calls","https://www.globenewswire.com/RssFeed/subjectcode/89-Conference%20Calls%202f%20Webcasts/feedTitle/GlobeNewswire%20-%20Conference%20Calls,%20Webcasts"],["Initial Public Offerings","https://www.globenewswire.com/RssFeed/subjectcode/21-Initial%20Public%20Offerings/feedTitle/GlobeNewswire%20-%20Initial%20Public%20Offerings"],["Earnings Releases","https://www.globenewswire.com/RssFeed/subjectcode/13-Earnings%20Releases%20And%20Operating%20Results/feedTitle/GlobeNewswire%20-%20Earnings%20Releases%20And%20Operating%20Results"],["Directors And Officers","https://www.globenewswire.com/RssFeed/subjectcode/11-Directors%20And%20Officers/feedTitle/GlobeNewswire%20-%20Directors%20And%20Officers"],["Insider's Buy & Sell","https://www.globenewswire.com/RssFeed/subjectcode/22-Insider%2027s%20Buy%202fSell/feedTitle/GlobeNewswire%20-%20Insider%20s%20Buy,%20Sell"],["Interim Information","https://www.globenewswire.com/RssFeed/subjectcode/66-Interim%20Information/feedTitle/GlobeNewswire%20-%20Interim%20Information"],["Funds Information","https://www.globenewswire.com/RssFeed/subjectcode/80-Investment%20Fund%20Information/feedTitle/GlobeNewswire%20-%20Investment%20Fund%20Information"],["Net Asset Value","https://www.globenewswire.com/RssFeed/subjectcode/62-Net%20Asset%20Value/feedTitle/GlobeNewswire%20-%20Net%20Asset%20Value"],["Press Releases","https://www.globenewswire.com/RssFeed/subjectcode/72-Press%20Releases/feedTitle/GlobeNewswire%20-%20Press%20Releases"]]),k("Finance Asia",null,"fa-logo.jpg",[["Markets","https://www.financeasia.com/rss/category/markets"],["Debt","https://www.financeasia.com/rss/category/debt"],["Equity","https://www.financeasia.com/rss/category/equity"],["Debt Research","https://www.financeasia.com/rss/category/debt-research"]]),k("Trading Economics",null,"te-logo.jfif",[["Consumer Price Index (CPI)","https://tradingeconomics.com/rss/news.aspx?i=consumer+price+index+cpi"],["GDP Annual Growth Rate","https://tradingeconomics.com/rss/news.aspx?i=gdp+annual+growth+rate"],["Core Inflation Rate","https://tradingeconomics.com/rss/news.aspx?i=core+inflation+rate"],["Unemployment Change","https://tradingeconomics.com/rss/news.aspx?i=unemployment+change"],["Retail Sales (MoM)","https://tradingeconomics.com/rss/news.aspx?i=retail+sales+mom"],["Non-Farm Payroll (US)","https://tradingeconomics.com/rss/news.aspx?i=nonfarm+payrolls+private"],["Interest Rate","https://tradingeconomics.com/rss/news.aspx?i=interest+rate"],["Weapons Sales","https://tradingeconomics.com/rss/news.aspx?i=weapons+sales"]]),k("Seeking Alpha","https://seekingalpha.com/samw/static/images/favicon-32x32.png","sa-logo.webp",[["Breaking News","https://seekingalpha.com/market_currents.xml"],["Editor's Picks","https://seekingalpha.com/tag/editors-picks.xml"],["IPO Analysis","https://seekingalpha.com/tag/ipo-analysis.xml"],["Transcripts","https://seekingalpha.com/sector/transcripts.xml"],["Wall Street Breakfast","https://seekingalpha.com/tag/wall-st-breakfast.xml"],["ETFs & Portfolio Strategy","https://seekingalpha.com/tag/etf-portfolio-strategy.xml"]]),k("CSS-Tricks",null,"csst-logo.jpg",[["CSS-Tricks","https://css-tricks.com/feed/"]]),k("Reuters",null,"reuters-logo.png",[["Market Impact","https://www.reutersagency.com/feed/?best-customer-impacts=market-impact&post_type=best"],["Energy & Commodities","https://www.reutersagency.com/feed/?best-sectors=commodities-energy&post_type=best"],["Economy","https://www.reutersagency.com/feed/?best-sectors=economy&post_type=best"],["Equities","https://www.reutersagency.com/feed/?best-sectors=equities&post_type=best"],["FX & Fixed Income","https://www.reutersagency.com/feed/?best-sectors=foreign-exchange-fixed-income&post_type=best"]]),k("CNN",null,"cnn-logo.png",[["CNN World","http://rss.cnn.com/rss/cnn_latest.rss"]]),k("CNBC",null,"cnbc-logo.png",[["Investing News","https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=15839069"]]),k("Yahoo Finance",null,"yf-logo.jpg",[["Finance News","https://finance.yahoo.com/news/rssindex"]]),k("MarketWatch",null,"mw-logo.png",[["Real-time Headlines","http://feeds.marketwatch.com/marketwatch/realtimeheadlines"]]),k("Zacks",null,"zk-logo.png",[["Press Release","https://scr.zacks.com/rss/pressrelease.aspx"]]),k("S&P Global","https://www.spglobal.com/_assets/images/icons/SPG_favicon_wht_32x32.ico","sp-logo.png",[["Corporate News","https://www.spglobal.com/spdji/en/rss/rss-details/?rssFeedName=corporate-news"]]),k("WSJ",null,"wsj-logo.png",[["Markets","https://feeds.a.dj.com/rss/RSSMarketsMain.xml"]]),k("The EurAsian Times",null,"eat-logo.png",[["Latest News","https://eurasiantimes.com/feed/"]]),k("DefenseNews","https://www.defensenews.com/pf/resources/img/favicons/def/favicon-32x32.png?d=104","dn-logo.jpg",[["Home Page","https://www.defensenews.com/arc/outboundfeeds/rss/category/global/?outputType=xml"],["Global","https://www.defensenews.com/arc/outboundfeeds/rss/category/global/?outputType=xml"],["Air","https://www.defensenews.com/arc/outboundfeeds/rss/category/air/?outputType=xml"],["Land","https://www.defensenews.com/arc/outboundfeeds/rss/category/land/?outputType=xml"],["Naval","https://www.defensenews.com/arc/outboundfeeds/rss/category/naval/?outputType=xml"],["Space","https://www.defensenews.com/arc/outboundfeeds/rss/category/space/?outputType=xml"],["Unmanned","https://www.defensenews.com/arc/outboundfeeds/rss/category/unmanned/?outputType=xml"],["Industry","https://www.defensenews.com/arc/outboundfeeds/rss/category/industry/?outputType=xml"]]),k("DefenseTalk","https://feedburner.com/favicon.ico","dt-logo.jpeg",[["Defense","https://feeds2.feedburner.com/defensenews"],["Army","https://feeds2.feedburner.com/army-news"],["Defense & Security","https://feeds2.feedburner.com/defense-security"],["Defense Technology","https://feeds2.feedburner.com/defense-technology"],["Missiles & Bombs","https://feeds2.feedburner.com/missiles-bombs"],["Nuclear & WMD","https://feeds2.feedburner.com/wmd-news"],["Navy","https://feeds2.feedburner.com/navynews"],["Drones","https://feeds.feedburner.com/dronesnews"]]),k("Shephard Media",null,"sm-logo.png",[["Latest Articles","https://www.shephardmedia.com/news/feed/"],["Naval Warfare","https://www.shephardmedia.com/news/naval-warfare/feed/"],["Land Warfare","https://www.shephardmedia.com/news/landwarfareintl/feed/"],["Air Warfare","https://www.shephardmedia.com/news/air-warfare/feed/"],["Defence Notes","https://www.shephardmedia.com/news/defence-notes/feed/"],["Defence Helicopter","https://www.shephardmedia.com/news/defence-helicopter/feed/"],["Military Logistics","https://www.shephardmedia.com/news/mil-log/feed/"],["Special Operations","https://www.shephardmedia.com/news/special-operations/feed/"],["Uncrewed Vehicles","https://www.shephardmedia.com/news/uv-online/feed/"]]),k("Janes",null,"janes-logo.png",[["Janes News","https://www.janes.com/feeds/news"]]),k("GlobalSecurity.org","https://www.globalsecurity.org/favicon.ico","gs-logo.png",[["Defence News","https://www.globalsecurity.org/globalsecurity-org.xml"]]),k("The Diplomat",null,"td-logo.png",[["Current Affairs","https://thediplomat.com/feed/"]]),k("Science Daily",null,"scd-logo.jpg",[["All News","https://www.sciencedaily.com/rss/all.xml"],["Top Science","https://www.sciencedaily.com/rss/top/science.xml"],["Top Technology","https://www.sciencedaily.com/rss/top/technology.xml"]]),k("SpaceNews","https://spacenews.com/wp-content/themes/spacenews/favicon-32x32.png","spn-logo.png",[["SpaceNews","https://spacenews.com/feed/"]]);var _=N;const T=(0,o.uE)('<h1 class="text-secondary mb-1"><strong>Latest News Feeds</strong></h1><label class="text-secondary mb-3"> Powered by <strong><i class="fa-brands fa-vuejs"></i> <i class="fa-solid fa-rss"></i></strong> and built by <strong><a class="text-secondary" style="text-decoration:none;" href="https://github.com/rubanero14">Raj</a></strong></label>',2),x={key:0,href:"https://github.com/rubanero14/rubanero14-Convert-XML-to-JSON-Guide/blob/master/src",class:"btn btn-outline-secondary mb-lg-3 w-100",target:"_blank"},j=(0,o._)("i",{class:"bi bi-code-slash"},null,-1),E=["disabled"],D=(0,o._)("i",{class:"bi bi-arrow-left"},null,-1),F=(0,o._)("hr",{class:"my-3",size:"5",noshade:""},null,-1);function A(e,s,t,a,n,i){return(0,o.wg)(),(0,o.iD)("div",null,[T,0===this.tabNav&&this.showSourceCode?((0,o.wg)(),(0,o.iD)("a",x,[j,(0,o.Uk)(" Source Code")])):(0,o.kq)("",!0),this.tabNav>0?((0,o.wg)(),(0,o.iD)("button",{key:1,"data-cy":"actions-back-button",onClick:s[0]||(s[0]=s=>e.$emit("backwardNav",this.isError)),class:"btn btn-secondary w-100",disabled:this.isloading},[D,(0,o.Uk)(" Back")],8,E)):(0,o.kq)("",!0),F])}var C={props:["tabNav","isloading","isError","showSourceCode","devActivationCount"]},M=t(89);const S=(0,M.Z)(C,[["render",A]]);var W=S;const R=e=>((0,o.dD)("data-v-f1e31a26"),e=e(),(0,o.Cn)(),e),I={key:0,class:"text-danger"},O={key:0},U={key:1,class:"row"},Y={class:"col-12"},L={class:"text-danger mb-3"},z=R((()=>(0,o._)("img",{class:"err",src:"https://rubanero14.github.io/RSS-Feed-CP-Prototype-Vue3/err.png"},null,-1))),G=R((()=>(0,o._)("figcaption",{class:"mb-3"},[(0,o.Uk)("Figure 1 - Click "),(0,o._)("span",null,"Enable Access"),(0,o.Uk)(" button below to open this page")],-1))),Q=R((()=>(0,o._)("ol",{type:"1",class:"text-start text-secondary"},[(0,o._)("li",null,[(0,o.Uk)("Click "),(0,o._)("strong",{class:"text-success"},"Enable Access"),(0,o.Uk)(" button below")]),(0,o._)("li",null,[(0,o.Uk)("When new window pops up, click "),(0,o._)("strong",{class:"text-success"},"Request temporary access to the demo server"),(0,o.Uk)(" button as per figure above.")]),(0,o._)("li",null,[(0,o.Uk)("Close that window and back to "),(0,o._)("span",{class:"text-secondary"},[(0,o._)("strong",null,"RSS Feed")]),(0,o.Uk)(" page and start browsing for articles")])],-1))),P={class:"col-12"},J=R((()=>(0,o._)("i",{class:"bi bi-hdd-rack"},null,-1)));function Z(e,s,t,n,r,c){return(0,o.wg)(),(0,o.j4)(a.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[this.isError&&2===this.tabNav?((0,o.wg)(),(0,o.iD)("div",I,[(0,o.Wm)(a.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[this.data.includes("403")?((0,o.wg)(),(0,o.iD)("div",U,[(0,o._)("div",Y,[(0,o._)("h2",L,(0,i.zw)(this.data.replace(",","!")),1),z,G,Q]),(0,o._)("div",P,[(0,o._)("a",{onClick:s[0]||(s[0]=s=>e.$emit("backwardNav")),href:"https://cors-anywhere.herokuapp.com/corsdemo?accessRequest=01a082fe9409ff8c6c2e76a853281642569c12198c0358fadbbe4a03321d2fd7",class:"btn btn-outline-success w-100",target:"_blank"},[J,(0,o.Uk)(" Enable Access ")])])])):((0,o.wg)(),(0,o.iD)("p",O,(0,i.zw)(this.data)+" Try reloading again...",1))])),_:1})])):(0,o.kq)("",!0)])),_:1})}var q={props:["data","tabNav","isError"]};const B=(0,M.Z)(q,[["render",Z],["__scopeId","data-v-f1e31a26"]]);var X=B;const $=(0,o._)("hr",{class:"my-3",size:"5",noshade:""},null,-1),K=["disabled"],H=(0,o._)("i",{class:"bi bi-arrow-left"},null,-1);function V(e,s,t,a,n,i){return(0,o.wg)(),(0,o.iD)("div",null,[$,this.tabNav>0&&i.showLowerBackBtn()?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:s[0]||(s[0]=s=>e.$emit("backwardNav","isError")),class:"btn btn-secondary w-100",disabled:this.isloading},[H,(0,o.Uk)(" Back")],8,K)):(0,o.kq)("",!0)])}var ee={props:["tabNav","isloading","isError","topicData","feeds"],methods:{showLowerBackBtn(){return 1===this.tabNav?void 0!==this.topicData&&this.topicData.length>4:2===this.tabNav?void 0!==this.topicData&&this.feeds.length>4:void 0}}};const se=(0,M.Z)(ee,[["render",V]]);var te=se;const ae=["data-cy"],oe={class:"d-contents"},ne=["src"];function ie(e,s,t,n,r,c){const l=(0,o.up)("card-component"),d=(0,o.up)("center");return(0,o.wg)(),(0,o.j4)(a.uT,{appear:"",key:this.index,name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{style:(0,i.j5)({"--i":this.index})},{default:(0,o.w5)((()=>[(0,o._)("a",{"data-cy":`actions-source-${t.index}`,class:"title",onClick:s[0]||(s[0]=s=>e.$emit("forwardNav",t.source))},[(0,o.Wm)(l,{class:"logo p-0 mb-3 mx-2"},{default:(0,o.w5)((()=>[(0,o._)("div",oe,[(0,o._)("img",{class:"logo",src:t.source.logo,onerror:"this.src='https://rss.com/favicon.ico'"},null,8,ne)])])),_:1})],8,ae)])),_:1},8,["style"])])),_:1})}const re={class:"card"};function ce(e,s){return(0,o.wg)(),(0,o.iD)("div",re,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}const le={},de=(0,M.Z)(le,[["render",ce],["__scopeId","data-v-4b4e49ce"]]);var we=de,pe={props:["source","isloading","tabNav","index"],components:{CardComponent:we}};const ue=(0,M.Z)(pe,[["render",ie],["__scopeId","data-v-620fab78"]]);var me=ue;const he={key:0,class:"text-center spinner-border text-secondary",role:"status"};function ge(e,s,t,n,i,r){return(0,o.wg)(),(0,o.j4)(a.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[this.isloading&&!this.isError?((0,o.wg)(),(0,o.iD)("div",he)):(0,o.kq)("",!0)])),_:1})}var fe={props:["isloading","isError"]};const be=(0,M.Z)(fe,[["render",ge]]);var ve=be;const ye=["data-cy","href"],Ne={class:"p-3"},ke={class:"row"},_e={class:"col-9 col-md-11 text-start"},Te={class:"title text-secondary"},xe={key:0},je={key:1},Ee={key:2},De={key:0,class:"time d-block text-secondary mb-0"},Fe={class:"wrapper col-3 col-md-1 d-flex align-items-center justify-content-center"},Ae=["src"];function Ce(e,s,t,n,r,c){const l=(0,o.up)("card-component"),d=(0,o.up)("center");return(0,o.wg)(),(0,o.j4)(a.uT,{key:this.index,appear:"",name:"fade-articles",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{style:(0,i.j5)({"--j":this.index})},{default:(0,o.w5)((()=>[(0,o._)("a",{"data-cy":`actions-article-${t.index}`,class:"title",href:t.feed.link.toString(),target:"_blank"},[(0,o.Wm)(l,null,{default:(0,o.w5)((()=>[(0,o._)("div",Ne,[(0,o._)("div",ke,[(0,o._)("div",_e,[(0,o._)("h3",Te,[t.screenWidth>=1200?((0,o.wg)(),(0,o.iD)("span",xe,(0,i.zw)(t.feed.title.toString().substr(0,250).replace(": ","")+"..."),1)):t.screenWidth>=600&&t.screenWidth<1200?((0,o.wg)(),(0,o.iD)("span",je,(0,i.zw)(t.feed.title.toString().substr(0,150).replace(": ","")+"..."),1)):((0,o.wg)(),(0,o.iD)("span",Ee,(0,i.zw)(t.feed.title.toString().substr(0,50).replace(": ","")+"..."),1))]),c.date()?((0,o.wg)(),(0,o.iD)("p",De,[(0,o._)("em",null,"Updated: "+(0,i.zw)(c.date(t.index))+" ago",1)])):(0,o.kq)("",!0)]),(0,o._)("div",Fe,[t.pic?((0,o.wg)(),(0,o.iD)("img",{key:0,class:"m-auto",src:t.pic,onError:s[0]||(s[0]=e=>this.setAltImage())},null,40,Ae)):(0,o.kq)("",!0)])])])])),_:1})],8,ye)])),_:1},8,["style"])])),_:1})}var Me={props:["index","feed","data","feeds","screenWidth","pic","setAltImage"],components:{CardComponent:we},methods:{date(){return this.rssMode=Object.keys(this.data).includes("rss")?"pubDate":"dc:date",y.ElapsedTime(this.feeds[0][this.rssMode])}}};const Se=(0,M.Z)(Me,[["render",Ce],["__scopeId","data-v-2bd9f7f6"]]);var We=Se;const Re=e=>((0,o.dD)("data-v-696b977b"),e=e(),(0,o.Cn)(),e),Ie=["data-cy"],Oe={class:"d-inline-block justify-content-center align-items-center m-auto"},Ue=["src"],Ye=Re((()=>(0,o._)("br",null,null,-1))),Le={class:"mb-2"},ze={class:"text-secondary title"};function Ge(e,s,t,n,r,c){const l=(0,o.up)("CardComponent"),d=(0,o.up)("center");return(0,o.wg)(),(0,o.j4)(a.uT,{key:this.index,appear:"",name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{style:(0,i.j5)({"--i":this.index})},{default:(0,o.w5)((()=>[(0,o._)("a",{"data-cy":`actions-topic-${t.index}`,class:"title",onClick:s[1]||(s[1]=s=>(e.$emit("getRssFeeds",t.topicNavUrl,t.topic.url,t.topic.title),e.$emit("forwardNav")))},[(0,o.Wm)(l,{class:"tile mb-3 mx-2"},{default:(0,o.w5)((()=>[(0,o._)("div",Oe,[(0,o._)("img",{src:t.topicNavUrl,onError:s[0]||(s[0]=e=>this.setAltImage())},null,40,Ue),Ye,(0,o._)("strong",Le,[(0,o._)("span",ze,(0,i.zw)(t.topic.title),1)])])])),_:1})],8,Ie)])),_:1},8,["style"])])),_:1})}var Qe={props:["index","topic","topicNavUrl","setAltImage"],components:{CardComponent:we}};const Pe=(0,M.Z)(Qe,[["render",Ge],["__scopeId","data-v-696b977b"]]);var Je=Pe;const Ze=t(9058);var qe={components:{HeaderComponent:W,ErrorComponent:X,FooterComponent:te,SourcesTiles:me,LoadingSpinner:ve,ArticlesTiles:We,TopicTiles:Je,CardComponent:we},data(){return{data:"",isloading:!1,isError:!1,rssSource:"",screenWidth:"",tabNav:0,topicData:"",topicNavUrl:"",topicTitle:"",topicTitle2:"",sources:_,devActivationCount:0}},watch:{url(){this.getRssFeeds(),this.setScreenWidth()}},mounted(){window.addEventListener("resize",this.setScreenWidth),this.setScreenWidth()},unmounted(){window.removeEventListener("resize",this.setScreenWidth)},methods:{forwardNav(e){return 0===this.tabNav&&e.topics.length>1?(this.topicData=e.topics,this.topicNavUrl=e.url,this.topicTitle=e.name,this.tabNav<3?this.tabNav++:this.tabNav):0===this.tabNav&&1===e.topics.length?(this.pic=e.url,this.topicData=e.topics,this.topicNavUrl=e.topics[0].url,this.topicTitle=e.name,this.topicTitle2=e.topics[0].title,this.getRssFeeds(this.pic,this.topicNavUrl,this.topicTitle2),this.tabNav=2):void 0},backwardNav(e){return 2===this.tabNav&&1===this.topicData.length?this.tabNav=0:e?(this.isError=!1,console.log("Iserror ",this.isError),this.tabNav=0):this.tabNav>-1?this.tabNav--:this.tabNav},setScreenWidth(){return console.log(window.innerWidth),this.screenWidth=window.innerWidth},async getRssFeeds(e,s,t){if(this.tabNav=2,this.isError=!1,this.isloading=!0,this.pic=e,this.topicTitle2=t,s.includes("tradingeconomics")||s.includes("sciencedaily")){const e=`https://cors-anywhere.herokuapp.com/${s}`;console.log("foreign proxy fires"),this.data=await v().get(e).then((e=>Ze.parseStringPromise(e.data))).catch((e=>(this.isloading=!1,this.isError=!0,console.log(e),e.message+",")))}else{const e=`https://rss-feed-proxy-server.herokuapp.com/${y.UrlEncoder(s)}`;console.log("own proxy fires"),this.data=await v().get(e).then((e=>e.data)).catch((e=>(this.isloading=!1,this.isError=!0,console.log(e),e.message+",")))}this.isError||(this.feeds=Object.keys(this.data).includes("rss")?this.data.rss.channel[0].item:this.data["rdf:RDF"].item,this.feedHasArticles=()=>Object.keys(this.data).includes("rss")?Object.keys(this.data.rss.channel[0]).includes("item"):Object.keys(this.data).includes("rdf:RDF")?Object.keys(this.data["rdf:RDF"]).includes("item"):void 0,this.isloading=!1)},devMode(){this.devActivationCount++,7===this.devActivationCount&&(this.showSourceCode=!0)},setAltImage(e){e.target.src=this.logo}}};const Be=(0,M.Z)(qe,[["render",f]]);var Xe=Be,$e={name:"App",components:{RSSFeed:Xe}};const Ke=(0,M.Z)($e,[["render",n]]);var He=Ke;(0,a.ri)(He).mount("#app")}},s={};function t(a){var o=s[a];if(void 0!==o)return o.exports;var n=s[a]={exports:{}};return e[a].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(s,a,o,n){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],n=e[d][2];for(var r=!0,c=0;c<a.length;c++)(!1&n||i>=n)&&Object.keys(t.O).every((function(e){return t.O[e](a[c])}))?a.splice(c--,1):(r=!1,n<i&&(i=n));if(r){e.splice(d--,1);var l=o();void 0!==l&&(s=l)}}return s}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,o,n]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var a in s)t.o(s,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:s[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){var e={143:0};t.O.j=function(s){return 0===e[s]};var s=function(s,a){var o,n,i=a[0],r=a[1],c=a[2],l=0;if(i.some((function(s){return 0!==e[s]}))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(c)var d=c(t)}for(s&&s(a);l<i.length;l++)n=i[l],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(d)},a=self["webpackChunkrss_feed"]=self["webpackChunkrss_feed"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(8393)}));a=t.O(a)})();
//# sourceMappingURL=app.10020aa8.js.map