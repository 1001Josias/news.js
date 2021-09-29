const axios = require('axios').default
const cheerio = require('cheerio').default

async function fetchUrl(url) {
   try {
      log('{fetchUrl}: Getting the website HTML...')
      const response = await axios.get(url)
      return await response.data         
   } catch (error) {
      log(`{fetchUrl Error}:\n ${error}`)
   }
}

function getNewsUrls(homepageUrl, homepageHtml, newsClassName) {
   const $ = cheerio.load(homepageHtml)
   const elementsHtml = $.html(`.${newsClassName} a`)
   const newsUrls = []
   $(elementsHtml).map((index, element) => {
      let href = element.attribs.href
      newsUrls.push(homepageUrl + href)
   })
   return newsUrls
}

async function getNews(newsIndex) {
   const htmlNewsBody = await fetchUrl(newsUrls[newsIndex])
   const $ = cheerio.load(htmlNewsBody)
   const arr = Object.values($('p'))
   return cheerio.text(arr)
}

module.exports = {
   getNews,
   fetchUrl,
   getNewsUrls,
}