<template>
  <v-app app>
    <v-content>
      <v-app-bar class="app-bar">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-btn @click="exit" icon class="mr-3">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>Chat room {{ user.room }}</v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" mobile-break-point="650" app>
        <v-list subheader>
          <v-subheader>Recent chat</v-subheader>

          <v-list-item v-for="u in users" :key="u.id" @click.prevent>
            <v-list-item-content>
              <v-list-item-title>{{ u.name }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon :color="u.id === user.id ? 'green accent-4' : 'grey'"
                >mdi-message-text</v-icon
              >
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <div style="height: calc(100% - 65px)"><nuxt /></div>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    drawer: true
  }),
  computed: mapState(['user', 'users']),
  methods: {
    ...mapMutations(['clearData']),
    exit() {
      this.$socket.emit('userLeft', this.user.id, () => {
        this.$router.push('/?message=userLeft')
        this.clearData()
      })
    }
  }
}
</script>
