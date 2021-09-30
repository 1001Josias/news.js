
(async()=>{

   const allAgencyNews = require('../../index')
   const OGlobo = await allAgencyNews.OGlobo()
   
   // Return a list with urls of the latest news
   console.log(`O Globo urls news:\n ${OGlobo.newsUrls}`)

})()
