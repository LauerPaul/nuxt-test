import dotProp from 'dotprop'
import Scrollbar from 'perfect-scrollbar'
import asidMenu from '~/components/menu-aside'

const data =  {
                asideToggle_open: true,
                
              }
export default  {
  data: function(){
		return data
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