import busyOverlay from '~/components/busy-overlay'

const data = {
	username: '',
	password: '123',
	error: null
}

export default {
	middleware: ['auth'],
	components: {
		busyOverlay
	},
	data: function(){
		return data
	},
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
	methods: {
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