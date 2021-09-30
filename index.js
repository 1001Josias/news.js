const services = require('./src/services')

const allAgencyNews = {
   cointelegraph: ()=> services('https://cointelegraph.com.br', 'post-card__header'),   
   OGlobo: ()=> services('https://oglobo.globo.com','teaser__title')
}

module.exports = allAgencyNews