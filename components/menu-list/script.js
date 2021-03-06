/**
* @version 1.0 beta
* @module Component_Menu-list
* @desc Component List menu
* @see ~/components/menu-list
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018:copyright:lauer.agency
*/

const data = {
	/**
	* @namespace Component Menu-list  Data{}
	*
	* @property {array} menu - Меню сайта
	* 	@property {string} menu.object.title - Текст ссылки
	* 	@property {string} menu.object.link - Ссылка
	* 	@property {string} menu.object.icon - Класс иконки (предпочтительно mdi)
	* 	@property {true} menu.separator - Разделитель списка
	*
	* @property {object} text - Текста компонента
	* 	@property {string} text.terms_link - Термины и условия
	* 	@property {string} text.agree_link - Пользовательское соглашение
	* 	@property {string} text.developer_info - Информация о разработчике сайта
	* 	@property {string} text.right - Информация о правах (copyright)
	* 
	* @property {object} year - зарезервированная переменная - года работы сайта (см. mounted)
	*/
	menu: [
		{
			title: 'Главная',
			link: '',
			route_name: 'index',
			icon: 'mdi mdi-home'
		},
		{
			title: 'Блог',
			link: '/blog',
			icon: 'mdi mdi-library-books'
		},
		{
			title: 'Контакты',
			link: '/contacts',
			icon: 'mdi mdi-phone-log'
		},
		{ separator: true },
		{
			title: 'Авиа туры',
			link: '/fly-tours',
			icon: 'mdi mdi-airplane'
		},
		{
			title: 'Автобусные туры',
			link: '/bus-tours',
			icon: 'mdi mdi-bus'
		},
		{
			title: 'Туры по Украине',
			link: '/ukraine-tours',
			icon: 'mdi mdi-flag'
		},
		{ separator: true },
		{
			title: 'Праздники и события',
			link: '/events',
			icon: 'mdi mdi-heart-circle'
		},
		{
			title: 'Для корпораций',
			link: '/for-corporation',
			icon: 'mdi mdi-star-circle'
		},
		{ separator: true },
		{
			title: 'Авиа билеты',
			link: '/fly-tickets',
			icon: 'mdi mdi-airplane-takeoff'
		},
		{
			title: 'Автобусные билеты',
			link: '/bus-tickets',
			icon: 'mdi mdi-bus-articulated-front'
		},
		{
			title: 'Подготовка документов',
			link: '/documents',
			icon: 'mdi mdi-file-document'
		},
		{ separator: true },
		{
			title: 'О нас',
			link: '/about',
			icon: 'mdi mdi-information'
		},
		{
			title: 'Сотрудничество',
			link: '/partners',
			icon: 'mdi mdi-account-multiple'
		},
		{ separator: true }
	],
	text: {
		terms_link: 'Термины и условия',
		agree_link: 'Пользовательское соглашение',
		developer_info: 'Сайт разработан в агенстве ',
		right: 'Все права защищены'
	},
	year: ''
}

/** Export component */
export default {
	
	// Set data
	data: function(){ return data },

	/**
	* >>> 
	* Hook reporting
	* @event module:Component_Menu-list~Component Menu-list mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'menu-list\' mounted');

		// Устанавливаем переменную для отображения годов работы ресурса
		const current_year = (new Date()).getFullYear();
		this.year = parseInt(current_year) > 2018 ? '2018 - ' + current_year : 2018
	},

	// Methods
	methods: {
		/**
		*	Функция перехода на сайт разработчика
		*	@method devLinkOpen
		**/
		devLinkOpen() {
			// Log method init
			this.$log.debug('component \'menu-aside\' - Инициализация стилизированного сролла');

			const link = 'https://lauer.agency';
			window.open(link);
		}
	}
}