# usage
```
docker-compose up
```
and access 'http://localhost:8000/'

## at first setup
```
docker-compose exec api bash
```
でapiコンテナの中に入り
```
rails db:create RAILS_ENV=development
rails db:migrate RAILS_ENV=development
rails db:seed_fu FILTER=/store RAILS_ENV=development
rails db:seed_fu RAILS_ENV=development
```
を唱える。

# やりたきこと
- [x] page増やす
- [x] rails api server をサクッと構築
- [x] ssr /w fetch
- [x] docker
- [x] mysql
- [ ] awsへのデプロイを考える
