const state = {
  sidebar: {
    isFold: false
  }
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.isFold = !state.sidebar.isFold
  }
}

export default {
  namespaced: true,
  state,
  mutations
}