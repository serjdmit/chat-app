<template>
  <div class="c-wrap">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn @click="exit" icon class="mr-3">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Chat room {{ user.room }}</v-toolbar-title>
    </v-app-bar>
    <div class="c-chat">
      <Message
        v-for="message in messages"
        :key="message.text"
        :name="message.name"
        :text="message.text"
        :owner="message.id === user.id"
      />
    </div>
    <div class="c-form">
      <ChatForm />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Message from '@/components/Message'
import ChatForm from '@/components/ChatForm'
export default {
  middleware: ['chat'],
  components: { Message, ChatForm },
  computed: mapState(['user', 'messages']),
  head() {
    return {
      title: `Room ${this.user.room}`
    }
  },
  methods: {
    exit() {
      this.$router.push('/?messsage=userLeft')
      this.clearData()
    }
  }
}
</script>

<style scoped>
.c-wrap {
  height: 100%;
  position: relative;
  overflow: hidden;
}
.c-form {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  height: 80px;
  background: #212121;
}
.c-chat {
  position: absolute;
  top: 65px;
  right: 0;
  left: 0;
  bottom: 80px;
  padding: 1rem;
  overflow-y: auto;
}
</style>
