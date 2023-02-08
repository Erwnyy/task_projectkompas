<template>
  <div class="bg-slate-300 h-[60px] text-center flex justify-center">
    <AppLogo/>
    <div class="mt-[16px] ">
      <HorizontalLinkList
        :links="links"
      />
    </div>
  </div>
</template>

<script>

import HorizontalLinkList from '../molecules/HorizontalLinkList'
import AppLogo from '../atoms/AppLogo'

export default {
  name: 'NavBar',
  data () {
    return {
      links: [
        {
          path: '/',
          label: 'Homepage'
        },
        {
          path: '/atoms',
          label: 'Dashboard'
        }
      ]
    }
  },
  components: {
    HorizontalLinkList,
    AppLogo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
  border-bottom: 1px solid #eee;
  display: flex;
}
.left {
  text-align: left;
  flex: 1;
}
.center {
  text-align: center;
  flex: 4;
}
.right {
  text-align: right;
  flex: 1;
}
</style>
