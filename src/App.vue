<template>
  <v-app>
    <v-app-bar flat class="border-b">
      <v-app-bar-title>My app</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <h1 class="hidden-md-and-down text-h5 text-lg-h3">Dashboard</h1>

        <div class="d-flex justify-space-between">
          <div
            style="width: 100px; height: 100px;"
            class="pa-4 border rounded-lg elevation-2"
          >teste</div>
          <div
            style="width: 100px; height: 100px;"
            class="pa-4 border rounded-lg elevation-2"
          >teste</div>
          <div
            style="width: 100px; height: 100px;"
            class="pa-4 border rounded-lg elevation-2"
          >teste</div>
        </div>
      </v-container>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
</script>
