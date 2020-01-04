import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

export default function({ store }) {
  Vue.use(
    new VueSocketIO({
      debug: false,
      connection:
        'https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/workbox-strategies.prod.js:1:2145',
      vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
      }
    })
  )
}
