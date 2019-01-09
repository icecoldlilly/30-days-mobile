<template>
    <amplify-sign-up></amplify-sign-up>
</template>

<script lang="ts">
import { AmplifyEventBus } from 'aws-amplify-vue';
import { Component, Vue } from 'vue-property-decorator';
import { constants } from 'fs';

@Component({
  mounted() {
    AmplifyEventBus.$on('authState', button => {
        if(button == 'signedOut'){
            console.log(`Sign Up was clicked`)
            this.$router.push({ path: '/auth/'})
        } else {
            console.log(`${button} was clicked`)
        }
    })
  }
})

export default class SignUp extends Vue {}
</script>


