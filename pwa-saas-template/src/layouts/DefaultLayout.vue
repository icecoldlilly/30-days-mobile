<template>
  <v-app>
    <v-content>
      <slot />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'DefaultLayout',
  data () {
    return {
      isSignedIn: false
    }
  }
}
</script>
