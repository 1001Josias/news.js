
(async()=>{
   const allAgencyNews = require('../../index')
   const cointelegraph = await allAgencyNews.cointelegraph()
   
   //Index zero indicates the latest news from the portal.
   // Enter the index you want.
   console.log(`Cointelegraph news: ${await cointelegraph.getNews(0)}`)
   
   // console.log(`Cointelegraph news: ${await cointelegraph.getNews(5)}`)
   
})()