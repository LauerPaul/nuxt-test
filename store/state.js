/**
*   @version 1.0 beta
*   @module Store_state
*   @desc Store state - в файле указывается состояние данных(state) хранилища [Store]{@link module:Store}
*   @see ~/store/state.js
*
*   @author Pavel Uhrynovych (front-end developer of VC)
*   @copyright 2018©victoriyaclub.com
*/
const state = {
	/**
	* @namespace $store->state
    * 
    *   @property {string|require('string')} logo - site logo link
    *   @property {boolean} logo_alt - attr `alt` for site logo
    */
	logo: require('~/assets/images/froggy_tours.png'),
	logo_alt: 'Froggy Tours'
}

export default state