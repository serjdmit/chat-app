<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8>
      <v-card min-width="400">
        <v-card-title><h1>Nuxt chat</h1></v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="16"
              :rules="nameRules"
              label="Your name"
              required
            ></v-text-field>

            <v-text-field
              v-model="room"
              :rules="roomRules"
              label="Room name"
              required
            ></v-text-field>
            <v-btn
              :disabled="!valid"
              @click="submit"
              color="success"
              class="mr-4"
            >
              Come in
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 16) || 'Name must be less than 16 characters'
    ],
    room: '',
    roomRules: [(v) => !!v || 'Room name is required']
  }),
  layout: 'empty',
  head: { title: 'Welcome to Nuxt chat' },
  sockets: {
    connect() {
      // eslint-disable-next-line
      console.log('socket connected')
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    submit() {
      if (this.$refs.form.validate()) {
        const user = {
          name: this.name,
          room: this.room
        }

        this.setUser(user)
        this.$router.push('/chat')
      }
    }
  }
}
</script>
