import { createStore } from 'vuex'

interface PeriodComparison {
  visits: number
  uniqueVisitors: number
  actionsPerVisit: number
  bounceRate: number
}

interface Analytics {
  visits: number
  uniqueVisitors: number
  actionsPerVisit: number
  bounceRate: number
  periodComparison: PeriodComparison
}

interface State {
  analytics: Analytics
}

export default createStore<State>({
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
    updateAnalytics(state, payload: Partial<Analytics>) {
      state.analytics = { ...state.analytics, ...payload }
    }
  },
  actions: {
    async fetchAnalytics({ commit }) {
      // Simulated API call
      const mockData = {
        visits: Math.floor(Math.random() * 20000),
        uniqueVisitors: Math.floor(Math.random() * 15000),
        actionsPerVisit: +(Math.random() * 5).toFixed(1),
        bounceRate: Math.floor(Math.random() * 100)
      }
      commit('updateAnalytics', mockData)
    }
  }
})
