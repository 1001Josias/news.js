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

module.exports = {
   fetchUrl,
   getNewsUrls,
}