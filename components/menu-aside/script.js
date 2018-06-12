import listMenu from '~/components/menu-list'
import Scrollbar from 'perfect-scrollbar'

const data = {
	/**
	*	@ Стилизированный скролла
	*	 
	*	@param scrollStatus - Вкл/Выкл инициализации скролла
	*	@param scrollWrapperId - ID на котором будет инициализирован скролл
	*	@param scrollWrapper - Переменная для хранения объекта - контейнер скролла  (резерв - не заполнять)
	*	@param scroll - Переменная для храниения инициализированного скролла (резерв - не заполнять)
	*	@param scrollOptions {} - Опци для работы скролла (Документация: https://github.com/utatti/perfect-scrollbar)
	**/
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
	/**
	*	@ Текста на странице
	*	
	*	@param menu - текст под кнопкой меню
	**/
	text: {
		menu: 'меню',
	}
}

export default {
	props: ['default_list'],
	data: function(){ return data },
	components: {
		'list-menu' : listMenu
	},
	mounted: function(){
		this.$log.info('component \'menu-aside\' mounted');
		this.scrollInit();
	},
	methods: {
		/**
		*	@ Инициализация стилизированного сролла
		*
		*	@param -> data.scroll {}
		**/
		scrollInit(){
			this.$log.info('component \'menu-aside\' - Инициализация скролла');

			if(this.scroll.scrollStatus && this.scroll.scrollWrapperId && this.scroll.scrollWrapperId !== ''){
	        this.scroll.scrollWrapper = document.getElementById(this.scroll.scrollWrapperId);
	        this.scroll.scroll = new Scrollbar('#' + this.scroll.scrollWrapperId , this.scroll.scrollOptions);
	      }
		}
	}
}