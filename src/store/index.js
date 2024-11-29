import { createStore } from 'vuex'

export default createStore({
  state: {
    analytics: {
      visits: 15480,
      uniqueVisitors: 12749,
      actionsPerVisit: 3.2,
      bounceRate: 42,
      periodComparison: {
        visits: 12,
        uniqueVisitors: 8,
        actionsPerVisit: -2,
        bounceRate: -5
      }
    }
  },
  mutations: {
    updateAnalytics(state, payload) {
      state.analytics = { ...state.analytics, ...payload }
    }
  },
  actions: {
    fetchAnalytics({ commit }) {
      // Here we would typically make an API call
      // For now, we're using mock data
      setTimeout(() => {
        commit('updateAnalytics', {
          visits: Math.floor(Math.random() * 20000),
          uniqueVisitors: Math.floor(Math.random() * 15000)
        })
      }, 1000)
    }
  }
})
