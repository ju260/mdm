import axios from 'axios'

function callApi (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const namespaced = true
const state = () => ({
  items: []
})

const getters = {
  getItems: (state) => state.items
}

const actions = {

  async fetchItems ({ commit }) {
    try {
      const res = (await axios.get('/assets/json/cart.json')).data
      if (res?.products) commit('SET_ITEMS', Object.values(res.products))
    } catch (error) {
      console.error(error)
      throw error
    }
  },

  async updateItem ({ commit, getters }, { itemRef, patch }) {
    try {
      await callApi(1000) // l'api doit renvoyer l'item mis a jour
      const updatedItem = getters.getItems.filter(item => item.reference === itemRef)
      if (!updatedItem.length) return
      Object.assign(updatedItem[0], patch)
      commit('UPDATE_ITEM', updatedItem[0])
    } catch (error) {
      console.error('error during updateItem', error)
      throw error
    }
  },
  async deleteItem ({ commit }, { itemRef }) {
    try {
      await callApi(1000) // le produit doit etre delete du panier coté api
      commit('DELETE_ITEM', itemRef)
    } catch (error) {
      console.error('error during deleteItem', error)
      throw error
    }
  }
}

const mutations = {
  SET_ITEMS (state, payload) {
    state.items = payload
  },
  UPDATE_ITEM (state, itemPatch) {
    const idxItem = state.items.findIndex(item => item.reference === itemPatch.reference)
    if (idxItem !== -1) {
      state.items.splice(idxItem, 1, itemPatch)
    }
  },
  DELETE_ITEM (state, itemRef) {
    state.items = state.items.filter(item => item.reference !== itemRef)
  }
}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}

export {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
