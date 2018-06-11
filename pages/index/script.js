import Auth from '~/components/auth'

const data = {

}

export default {
	components: {
		'auth-case': Auth
	},
	middleware: ['auth'],
	options: {
		auth: false
	},
	data: function(){ return data },
	mounted: function(){
		console.log(this.$auth.user);
	},
	created() {
	}
}