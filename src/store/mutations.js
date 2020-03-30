import { ADDCOUNT, ADDTOCART} from './mutations-type'

export default {
  [ADDCOUNT](state, payload) {
    payload.count += 1
  },
  [ADDTOCART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}