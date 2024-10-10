import { type MutationTree } from 'vuex'
import { MutationTypes } from './mutationsTypes'
import { type RootState } from './state'

export type Mutations<S = RootState> = {
  [MutationTypes.SET_SEARCHED_MEALS](state: S, payload: []): void
}

export const mutations: MutationTree<RootState> & Mutations = {
  [MutationTypes.SET_SEARCHED_MEALS](state, payload: []) {
    state.searchedMeals = payload
  }
}
