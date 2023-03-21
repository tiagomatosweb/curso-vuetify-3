<template>
  <v-app>
    <v-app-bar flat class="border-b">
      <v-app-bar-title>My app</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
</script>
