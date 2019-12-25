<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.text">
        {{ message.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  middleware: ['chat'],
  computed: mapState(['user']),
  head() {
    return {
      title: `Room ${this.user.room}`
    }
  },
  computed: mapState(['user', 'messages'])
}
</script>
