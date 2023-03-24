import api from '../api.js'

export const usersService = {
  async read(id) {
    let user = await api.get(`users/${id}`)
    return user.data
  },

  async readAll() {
    let users = await api.get('users')
    return users.data
  }
}