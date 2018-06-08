import Auth from '~/components/auth'

export default {
	middleware: ['auth'],
	data: function(){
		return {
		}
	},
	mounted: function(){
	},
	created() {
		
	},
	components: {
		'auth-case': Auth,
	}
}