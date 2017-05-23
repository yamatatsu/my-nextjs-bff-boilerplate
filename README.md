dockerをawsで本番運用するメリデメを真面目に考えよう、的な話をされて、
「確かに。。apiはserverlessに作りたい気持ちあるし。。dockerをawsでオーケストレーションするのってそんなにやりたいってわけじゃないなぁ。。。」
って思ったのでデプロイは arukas とか now とかで趣味用に実現されればいいや。
って気持ちになった。
なのでこのboilerplateは一旦ここまで。

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
- nextのバージョンあげたい
- Dockerfileが未完成
  - キャッシュが上手に活かせてない
