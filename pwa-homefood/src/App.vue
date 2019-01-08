<template>
  <component :is="layout">
      <router-view/>
  </component>
</template>

<script>
// import { components } from 'aws-amplify-vue'


export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || "app") + '-layout';
    }
  },
  // components: {
  //   ...components
  // }
}
</script>
