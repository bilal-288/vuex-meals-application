//here the mutation is called
//Mutations are the only way to modify the state in Vuex.

import axiosClient from '../axiosClient.js'
export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            commit('setSearchedMeals', data.meals)
        })
}