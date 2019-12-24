<template>
  <h1>CHAT PAGE {{ user.name }}</h1>
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
  }
}
</script>
