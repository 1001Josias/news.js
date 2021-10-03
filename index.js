const services = require('./src/services')

const allAgencyNews = {
   cointelegraph: ()=> services('https://cointelegraph.com.br', 'post-card__header'),   
   oGlobo: ()=> services('https://oglobo.globo.com','teaser__title'),
   globoEsporte: ()=> services('https://ge.globo.com', 'feed-media-wrapper' ),
   livecoins: ()=> services('https://livecoins.com.br', 'td-module-thumb'),
   senadoFederal: ()=> services('https://www12.senado.leg.br/noticias', 'embed-responsive'),
   criptofacil: ()=> services('https://www.criptofacil.com', 'elementor-heading-title'),
   tecnoblog: ()=> services('https://tecnoblog.net', 'texts'),
   beincrypto: ()=> services('https://beincrypto.com.br', 'title.h-100')
}

module.exports = allAgencyNews