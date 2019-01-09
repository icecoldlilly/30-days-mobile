<template>
    <amplify-sign-in></amplify-sign-in>
</template>

<script lang="ts">
import { AmplifyEventBus } from 'aws-amplify-vue';
import { Component, Vue } from 'vue-property-decorator';
import { constants } from 'fs';

@Component({
  mounted() {
    AmplifyEventBus.$on('authState', button => {
        if(button == 'signUp'){
            console.log(`Sign Up was clicked`)
            this.$router.push({ path: '/auth/signup'})
        } else {
            console.log(`${button} was clicked`)
        }
    })
  }
})

export default class Login extends Vue {}
</script>


