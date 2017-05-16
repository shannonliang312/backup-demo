export default {
  state: {
    role: sessionStorage.getItem('role')
  },
  getters: {
    getRole (state) {
      return state.role
    }
  },
  mutations: {
    setRole (state, payload) {
      sessionStorage.setItem('role', payload.role)
      state.role = payload.role
    }
  }
}
