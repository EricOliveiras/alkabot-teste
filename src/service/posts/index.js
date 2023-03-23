import api from '../api.js'

export const postsService = {
  async read() {
    let posts = await api.get('posts')
    return posts.data
  },

  async readComents(id) {
    let coments = await api.get(`posts/${id}/coments`)
    return coments
  }
}