import {request} from './request'

export function getDetailData(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
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