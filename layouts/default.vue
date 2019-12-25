<template>
  <v-app app>
    <v-content>
      <v-navigation-drawer v-model="drawer" mobile-break-point="650" app>
        <v-list subheader>
          <v-subheader>Recent chat</v-subheader>

          <v-list-item v-for="user in users" :key="user.id" @click.prevent>
            <v-list-item-content>
              <v-list-item-title>{{ user.name }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon :color="user.id === 2 ? 'green accent-4' : 'grey'"
                >mdi-message-text</v-icon
              >
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <div style="height: 100%;"><nuxt /></div>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    drawer: true,
    users: [
      { id: 1, name: 'Vlad' },
      { id: 2, name: 'Sergei' }
    ]
  }),
  computed: mapState(['user']),
  methods: {
    ...mapMutations(['clearData'])
  }
}
</script>
