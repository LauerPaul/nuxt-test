import dotProp from 'dotprop'
import asidMenu from '~/components/menu-aside'

const data =  {
  asideToggle_open: true,
}

export default  {
  data: function(){
		return data
	},
  components: {
    'aside-menu' : asidMenu,
  },
  computed: {
    picture() {
      return  dotProp(this.$auth.user, 'picture') ||  // OpenID
              dotProp(this.$auth.user, 'picture.data.url') || // Facebook graph API
              dotProp(this.$auth.user, 'avatar_url') // Github
    }
  },
  mounted: function(){
    this.$log.info();
  }

}