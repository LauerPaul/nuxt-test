/**
* @version 1.0 beta
* @module Layout_Default
* @desc Layout Default
* @see ~/layouts/default
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018:copyright:lauer.agency
*/

import dotProp from 'dotprop'
import asidMenu from '~/components/menu-aside'

const data =  {
	/**
	* @namespace Layout Default Data{}
	*
	* @property {boolean} asideToggle_open - Aside menu visibility status
	* @property {object} text - Текста компонента
	* 	@property {string} text.menu - Текст под кнопкой меню
	*/
	asideToggle_open: true,
	text: {
		menu: 'меню',
	}
}

/** Export component */
export default  {

	// Set data
	data: function(){ return data },

	/**
	* This layout requires the components:
	* [menu-aside]{@link module:Component_Menu-aside}, 
	*/
	components: {
		'aside-menu' : asidMenu,
	},


	/**
	* >>> 
	* Hook reporting
	* @event module:Layout_Default~Layout Default computed
	*/
	computed: {
		picture() {
			return  dotProp(this.$auth.user, 'picture') ||  // OpenID
							dotProp(this.$auth.user, 'picture.data.url') || // Facebook graph API
							dotProp(this.$auth.user, 'avatar_url') // Github
		}
	},

	/**
	* >>> 
	* Hook reporting
	* @event module:Layout_Default~Layout Default mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('layout \'default\' -> mounted');
	},

	// Methods
	methods: {
		
	}
}