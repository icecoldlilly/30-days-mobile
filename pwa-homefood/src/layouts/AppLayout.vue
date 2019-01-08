<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Example</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
      Fork <i><font-awesome-icon icon="code-branch" style="margin: 2px;"/> </i>
      </v-btn>
      <v-btn v-if="isSignedIn">
        <span class="mr-2">
          Log Out <i> <font-awesome-icon icon="sign-out-alt" style="margin: 2px;"/> </i>
        </span>
      </v-btn>
      <v-btn v-else>
        <span class="mr-2">
            Sign In <i><font-awesome-icon icon="sign-in-alt" style="margin: 2px;" /></i>
        </span>
      </v-btn>
    </v-toolbar>
    <v-content>
       <slot />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'AppLayout',
  data () {
    return {
      isSignedIn: false
    }
  }
}
</script>
