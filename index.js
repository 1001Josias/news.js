const services = require('./src/services')

const allAgencyNews = {
   cointelegraph: ()=> services('https://cointelegraph.com.br', 'post-card__header'),   
}

module.exports = allAgencyNews