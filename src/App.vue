<template>
  <v-app>
    <v-app-bar flat class="border-b">
      <v-app-bar-title>My app</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <h1 class="text-h6">Meu app</h1>
        <h2>Meu app</h2>
        <h3>Meu app</h3>
        <h4>Meu app</h4>
        <h5>Meu app</h5>
        <h6>Meu app</h6>
        <br><br>
        <div class="text-subtitle-1">Subtitle 1</div>
        <div class="text-caption">Caption</div>

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
