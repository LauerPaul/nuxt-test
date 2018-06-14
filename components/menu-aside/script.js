/**
* @version 1.0 beta
* @module Component_Menu-aside
* @desc Component Aside menu
* @see ~/components/menu-aside
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018:copyright:lauer.agency
*/

import listMenu from '~/components/menu-list'
import Scrollbar from 'perfect-scrollbar'

const data = {
	/**
	* @namespace Component Menu-aside Data{}
	* 
	* @property {object} scroll - Параметры для стилизированного скролла
	* 	@property {boolean} scroll.scrollStatus - Вкл/Выкл инициализации скролла
	* 	@property {string} scroll.scrollWrapperId - ID на котором будет инициализирован скролл
	* 	@property {string} scroll.scrollWrapper - Переменная для хранения объекта - контейнер скролла  (резерв - не заполнять)
	* 	@property {string} scroll.scroll - Переменная для храниения инициализированного скролла (резерв - не заполнять)
	* 	@property {string} scroll.scrollOptions - Опци для работы скролла ([Документация]{@link https://github.com/utatti/perfect-scrollbar})
	* 
	* @property {object} text - Текста компонента
	* 	@property {string} text.menu - Текст под кнопкой меню
	*/
	scroll: {
		scrollStatus: true,
		scrollWrapperId: 'asideMenu-scrollWrapper',
		scrollWrapper: '',
		scroll: '',
		scrollOptions: {
			wheelPropagation: true,
			suppressScrollX: true
		}
    },
	text: {
		menu: 'меню',
	}
}

/** Export component */
export default {

	props: ['default_list'],

	// Set data
	data: function(){ return data },

	/**
	* This layout requires the components:
	* [menu-list]{@link module:Component_Menu-list}, 
	*/
	components: {
		'list-menu' : listMenu
	},

	/**
	* >>> 
	* Hook reporting
	* @event module:Component_Menu-aside~Component Menu-aside mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'menu-aside\' mounted');

		// Вызов инициалиции стилизированного скролла в mounted
		this.scrollInit();
	},

	// Methods
	methods: {
		/**
		*	Инициализация стилизированного сролла
		*	@method scrollInit
		**/
		scrollInit(){
			// Log method init
			this.$log.debug('component \'menu-aside\' - Инициализация стилизированного сролла');

			if(this.scroll.scrollStatus && this.scroll.scrollWrapperId && this.scroll.scrollWrapperId !== ''){
		        this.scroll.scrollWrapper = document.getElementById(this.scroll.scrollWrapperId);
		        this.scroll.scroll = new Scrollbar('#' + this.scroll.scrollWrapperId , this.scroll.scrollOptions);
	      	} else{ this.$log.warn('component \'menu-aside\' - Инициализация стилизированного сролла отключена')}
		}
	}
}