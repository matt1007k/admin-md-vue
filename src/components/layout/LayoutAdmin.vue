<template>
  <v-app>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">Admin</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>$vuetify.icons.search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>$vuetify.icons.apps</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "LayoutAdmin"
};
</script>

<style>
</style>
