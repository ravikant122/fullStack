import axios from 'axios'
import { type ActionTree } from 'vuex'
import { type RootState } from './state'
import { MutationTypes } from './mutationsTypes'

export const actions: ActionTree<RootState, RootState> = {
  async searchMeals({ commit }, keyword: string) {
    try {
      const { data } = await axios.get(`search.php?s=${keyword}`)
      commit(MutationTypes.SET_SEARCHED_MEALS, data.meals)
    } catch (e) {
      console.error('error fetching meals', e)
    }
  }
}
