import dotProp from 'dotprop'

export default  {
  computed: {
    picture() {
      return  dotProp(this.$auth.user, 'picture') ||  // OpenID
              dotProp(this.$auth.user, 'picture.data.url') || // Facebook graph API
              dotProp(this.$auth.user, 'avatar_url') // Github
    }
  }

}