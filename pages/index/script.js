/**
* @version 1.0 beta
* @module Page_Index
* @desc Page Index
* @see ~/pages/index.vue
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018:copyright:lauer.agency
*/

import Auth from '~/components/auth'

const data = {
	/**
	* @namespace Page Index Data{}
	* @property 
	*/
}

/** Export component */
export default {

	// Set data
	data: function(){ return data },

	/**
	* This layout requires the components:
	* [Auth]{@link module:Component_Auth}
	*/
	components: {
		'auth-case': Auth
	},

	// Middleware
	middleware: ['auth'],
	options: {
		auth: false
	},

	/**
	* >>> 
	* Hook reporting
	* @event module:Page_Index~Page Index mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('page \'index\' -> mounted');
		if(this.$auth.user) this.$log.debug(this.$auth.user);
	},

	// Methods
	methods: {
	}
}