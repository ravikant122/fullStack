import { createStore } from 'vuex'
import { type RootState, state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
// import getters from './getters'

const store = createStore<RootState>({
  state,
  mutations,
  actions
  // getters
})

export default store
