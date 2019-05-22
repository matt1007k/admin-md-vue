<template>
  <v-navigation-drawer
    mobile-break-point="960"
    :value="toggle"
    @input="$emit('input', $event)"
    fixed
    app
  >
    <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-layout pa-2 column fill-height class="lightbox white--text">
        <v-spacer></v-spacer>
        <v-flex shrink>
          <div class="subheading">Jonathan Lee</div>
          <div class="body-1">heyfromjonathan@gmail.com</div>
        </v-flex>
      </v-layout>
    </v-img>
    <v-list>
      <v-list-tile exact router to="/admin" active-exact-class="primary">
        <v-list-tile-action>
          <v-icon>$vuetify.icons.dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Dashboard</v-list-tile-title>
      </v-list-tile>
      <v-list-tile router to="/admin/personas" active-exact-class="primary">
        <v-list-tile-action>
          <v-icon>$vuetify.icons.people</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Personas</v-list-tile-title>
      </v-list-tile>

      <v-list-group prepend-icon="$vuetify.icons.users" value="true">
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-group no-action sub-group value="true">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>
          </template>

          <v-list-tile v-for="(admin, i) in admins" :key="i">
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group sub-group no-action>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Actions</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile v-for="(crud, i) in cruds" :key="i" @click="goTo(crud.url)">
            <v-list-tile-title v-text="crud.title"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="crud.icon"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    drawer: true,
    admins: [
      ["Management", "mdi mdi-account-outline"],
      ["Settings", "mdi mdi-settings"]
    ],
    cruds: [
      { title: "Read", icon: "mdi mdi-book", url: "/admin/users" },
      { title: "Create", icon: "mdi mdi-plus", url: "/admin/users/create" },
      { title: "Update", icon: "mdi mdi-pencil", url: "/admin/users/edit" },
      { title: "Delete", icon: "mdi mdi-delete", url: "/admin/users/delete" }
    ]
  }),
  methods: {
    goTo(url) {
      this.$router.push(url);
    }
  }
};
</script>

