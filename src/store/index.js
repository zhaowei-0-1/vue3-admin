import { createStore } from 'vuex'

export default createStore({
  state: {
    // 是不是第一次登录
    isGetterRouter: false
  },
  mutations: {
    changeGetterRouter(state, value) {
      state.isGetterRouter = value

    }
  },
  actions: {
  },
  modules: {
  }
})
