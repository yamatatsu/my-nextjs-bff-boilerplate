const routes = require('next-routes')()

// これを書くとダイレクトアクセスできるようになる
routes.add('wallets', '/wallets/:walletId')

module.exports = routes
