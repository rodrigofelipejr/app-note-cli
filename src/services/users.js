import Api from "./api"

const UserService = {
  register: (params) => Api.post("/users/register", params),
  login: async (params) => {
    const res = await Api.post('/users/login', params)
    localStorage.setItem('user', JSON.stringify(res.data.user))
    localStorage.setItem('token', res.data.token)
  },
  logout: () => {
    localStorage.removeItem('user', null)
    localStorage.removeItem('token', null)
  }
}

export default UserService