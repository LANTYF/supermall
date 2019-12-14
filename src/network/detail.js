import {request} from './request'

export function getDetailData(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url:'/recommend'
  })
}

export class Goods {
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.columns = columns
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.desc = itemInfo.desc
    this.discount = itemInfo.discountDesc
    this.services = services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.score = shopInfo.score
    this.sells = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.url = shopInfo.shopUrl
    this.name = shopInfo.name
  }
}

export class ParamsInfo{
  constructor(info,rule) {
    this.set = info.set
    this.tables = rule.tables
  }
}

export class Comments{
  constructor(list) {
    this.content = list[0].content
    this.created = list[0].created
    this.images = list[0].images
    this.style = list[0].style
    this.user = list[0].user
    this.explain = list[0].explain
  }
}