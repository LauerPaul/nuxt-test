const data = {
	/**
	*	@ Меню сайта - array(object)
	*	
	*	@param title - Текст ссылки
	*	@param link - Ссылка
	*	@param icon - Класс иконки (предпочтительно mdi)
	*	@param separator - Разделитель списка
	**/
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
	/**
	*	@ Текста компонента
	*	
	*	@param terms_link - Термины и условия
	*	@param agree_link - Пользовательское соглашение
	*	@param developer_info - Информация о разработчике сайта
	*	@param right - Информация о правах (copyright)
	**/
	text: {
		terms_link: 'Термины и условия',
		agree_link: 'Пользовательское соглашение',
		developer_info: 'Сайт разработан в агенстве ',
		right: 'Все права защищены'
	},
	// зарезервированная переменная - года работы сайта -> см. mounted
	year: ''
}

export default {
	data: function(){ return data },
	mounted: function(){
		this.$log.info('component \'menu-list\' mounted');

		// Устанавливаем переменную для отображения годов работы ресурса
		const current_year = (new Date()).getFullYear();
		this.year = parseInt(current_year) > 2018 ? '2018 - ' + current_year : 2018
	},
	methods: {
		/**
		*	@ Функция перехода на сайт разработчика
		**/
		devLinkOpen() {
			const link = 'https://lauer.agency';
			window.open(link);
		}
	}
}