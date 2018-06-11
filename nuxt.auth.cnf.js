export default {
	plugins: [ '~/plugins/auth' ],
	redirect: {
	  callback: '/callback'
	},
	strategies: {
	  local: {
	    endpoints: {
	      login: { propertyName: 'token.accessToken' }
	    }
	  }
	}
}