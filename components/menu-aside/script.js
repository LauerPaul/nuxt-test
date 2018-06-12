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
	        }
}

export default {
	data: function(){ return data },
	computed: {},
	mounted: function(){
		if (process.BROWSER_BUILD) {
	      // Инициализация скролла
	      if(this.scroll.scrollStatus && this.scroll.scrollWrapperId && this.scroll.scrollWrapperId !== '')
	      {
	        this.scroll.scrollWrapper = document.getElementById(this.scroll.scrollWrapperId);
	        this.scroll.scroll = new Scrollbar('#' + this.scroll.scrollWrapperId , this.scroll.scrollOptions);
	      }
	    }
	},
	methods: {
	}
}