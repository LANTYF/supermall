import { ADDCOUNT, ADDTOCART } from "./mutations-type"

export default {
  addCart(context, payload) {
    return new Promise((resolve,reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if (oldProduct) {
      context.commit(ADDCOUNT, oldProduct)
      resolve('添加数量加1')
    } else {
      payload.count = 1
      context.commit(ADDTOCART, payload)
      resolve('添加该商品')
    }
    })
  }
}