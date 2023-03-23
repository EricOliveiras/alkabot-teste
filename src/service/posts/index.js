import api from '../api.js'

export const postsService = {
  async read(id) {
    let posts = await api.get(`posts/${id}`)
    return posts.data
  },

  async readAll() {
    let posts = await api.get('posts')
    return posts.data
  },

  async readComments(id) {
    let coments = await api.get(`posts/${id}/comments`)
    return coments.data
  }
}