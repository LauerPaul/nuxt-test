/**
*   @version 1.0 beta
*   @module Store
*   @desc Store - хранилище приложения
*   @see ~/store/index.js
*
*   @author Pavel Uhrynovych (front-end developer of VC)
*   @copyright 2018©victoriyaclub.com
*/

import Vuex from 'vuex'

import mutations from '~/store/mutations'
import state from '~/store/state'

/**
* Import files:
* [State]{@link module:Store_state},
* [Mutations]{@link module:Store_mutations}
*/
const createStore = () => {
  return new Vuex.Store({
    state: state,
    mutations
  })
}

export default createStore