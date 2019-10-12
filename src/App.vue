<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>SUDO</span>
        <span class="font-weight-light"> RAMEN APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-tabs centered="true">
        <v-tab to="/p0">Input Text</v-tab>
        <v-tab to="/p1">Counter</v-tab>
        <v-tab to="/p2">Show/Hide</v-tab>
        <v-tab to="/p3">Select</v-tab>
      </v-tabs>
      <v-card
        class="ma-auto"
        max-width="512"
        outlined
      >
        <router-view />
      </v-card>>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>
