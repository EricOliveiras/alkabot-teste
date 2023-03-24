import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { usersService } from "../../service/users"

import './style.css'
const UserCard = () => {
  const [ user, setUser ] = useState()
  
  let { id } = useParams()

  const getUser = async () => {
    let result = await usersService.read(id)
    setUser(result)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="container">
      {!user ? (
        <p>Usuário não encontrado!</p>
      ) : (
        <div className="container">
          <a href="/">voltar</a>
          <div className="user">
            <h3>Nome: {user.name}</h3>
            <h5>Username: {user.username}</h5>
            <p>Wensite: <a href="#">{user.website}</a></p>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserCard