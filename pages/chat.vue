<template>
  <div class="c-wrap">
    <div class="c-chat" ref="block">
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
  watch: {
    messages() {
      setTimeout(() => {
        this.$refs.block.scrollTop = this.$refs.block.scrollHeight
      })
    }
  },
  head() {
    return {
      title: `Room ${this.user.room}`
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
  height: 85px;
  background: #212121;
}
.c-chat {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 85px;
  padding: 1rem;
  overflow-y: auto;
}
</style>
