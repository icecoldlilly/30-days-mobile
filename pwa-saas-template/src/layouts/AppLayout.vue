<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Example</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/hilalh/30-days-mobile/"
        target="_blank"
      >
      Fork <i><font-awesome-icon icon="code-branch" style="margin: 2px;"/> </i>
      </v-btn>
      <amplify-sign-out v-if="isSignedIn" />
      <v-btn v-else router-link to="/auth/">
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


<script lang="ts">
import { AmplifyEventBus } from 'aws-amplify-vue';
import { Component, Vue } from 'vue-property-decorator';
import { constants } from 'fs';

export default {
  name: 'AppLayout',
  mounted: function() {
    AmplifyEventBus.$on('authState', button => {
      console.log(`${button} was clicked`)
    })
  },
  data () {
    return {
      isSignedIn: true
    }
  }
}
</script>
