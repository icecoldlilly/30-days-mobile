<template>
  <v-app>
    <v-container>
      <v-layout text-xs-center wrap>
        <v-flex xs12 mb-5>
          <v-layout justify-center>
          <v-img
            :src="require('@/assets/logo.svg')"
            class="my-3"
            contain
            height="200"
          />
          </v-layout>
          <v-layout justify-center>
            <slot />
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script lang="ts">
  export default {
    name: 'AuthLayout'
  }
</script>