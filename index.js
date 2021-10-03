const services = require('./src/services')

const allAgencyNews = {
   cointelegraph: ()=> services('https://cointelegraph.com.br', 'post-card__header'),   
   oGlobo: ()=> services('https://oglobo.globo.com','teaser__title'),
   globoEsporte: ()=> services('https://ge.globo.com', 'feed-media-wrapper' ),
   livecoins: ()=> services('https://livecoins.com.br', 'td-module-thumb'),
}

module.exports = allAgencyNews