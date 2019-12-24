<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-btn @click="message">
        Message
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  sockets: {
    connect() {
      // eslint-disable-next-line
      console.log('socket connected')
    }
  },
  methods: {
    message() {
      this.$socket.emit('createMessage', {
        text: 'some random message'
      })
    }
  }
}
</script>
