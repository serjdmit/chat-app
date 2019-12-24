export const state = () => ({})

export const actions = {
  SOCKET_newMessage(ctx, data) {
    // eslint-disable-next-line
    console.log('Message recieved ' + data.text)
  }
}
