import Vuex from 'vuex'

import mutations from '~/store/mutations'
import state from '~/store/state'

const createStore = () => {
  return new Vuex.Store({
    state: state,
    mutations
  })
}

export default createStore