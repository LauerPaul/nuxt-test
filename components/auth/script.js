/**
* @version 1.0 beta
* @module Component_Auth
* @desc Component Auth
* @see ~/components/auth
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018:copyright:lauer.agency
*/

const data = {
	/**
	* @namespace Component_Auth~Component Auth Data{}
	*
	* @property {string} username - reserved
	* @property {string} password - reserved
	* @property {null|string} error - reserved
	*/
	username: '',
	password: '123',
	error: null
}

/** Export component */
export default {

	// Set data
	data: function(){ return data },

	// Middleware
	middleware: ['auth'],
	components: {
	},
	
	/**
	* >>> 
	* Hook reporting
	* @event module:Component_Auth~Component Auth computed
	*/
	computed: {
		strategies: () => ([
		 { key: 'auth0', name: 'Auth0', color: '#ec5425' },
		 { key: 'google', name: 'Google', color: '#4284f4' },
		 { key: 'facebook', name: 'Facebook', color: '#3c65c4' },
		 { key: 'github', name: 'Github', color: '#202326' }
		]),
		redirect() {
		  return (
		    this.$route.query.redirect &&
		    decodeURIComponent(this.$route.query.redirect)
		  )
		},
		isCallback() {
		  return Boolean(this.$route.query.callback)
		}
	},

	/**
	* >>> 
	* Hook reporting
	* @event module:Component_Auth~Component Auth mounted
	*/
	mounted: function(){
		// Log mounted hook
		this.$log.info('component \'auth\' -> mounted');
	},

	// Methods
	methods: {
		/**
		*	Отправка данных для авторизации
		*	@method login
		*	@async
		**/
		async login() {
	      this.error = null

	      return this.$auth
	        .loginWith('local', {
	          data: {
	            username: this.username,
	            password: this.password
	          }
	        })
	        .catch(e => {
	          this.error = e + ''
	        })
	    }
	}
}