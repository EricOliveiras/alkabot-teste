import { useEffect, useState } from "react"
import { postsService } from "../../service/posts"
import { usersService } from "../../service/users"

import './style.css'

const PostCard = () => {
  const [ posts, setPosts ] = useState()
  const [ users, setUsers ] = useState()

  const getPosts = async () => {
    let result = await postsService.readAll()
    setPosts(result)
  }

  const getUsers = async () => {
    let result = await usersService.readAll()
    setUsers(result)
  }

  useEffect(() => {
    getPosts()
    getUsers()
  }, [])

  return (
    <div className="container">
      <h1>Posts:</h1>
      {!posts ? (
        <p>Não existe posts ainda</p>
      ) : (
        posts.map(post => {
          return (
            <div className="posts" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              {!users ? (
                ''
              ) : (
                users.map(user => {
                  if (user.id === post.userId) {
                    return (
                      <p className="user-p-link" key={user.id}>Autor: <a href={`/user/${user.id}`}>{user.name}</a></p>
                    )
                  }
                })
              )}
              <p className="post-p">{post.body}</p>
              <a className="post-link" href={`/post/${post.id}`}>ver comentários</a>
            </div>
          )
        })
      )}
    </div>
  )
}

export default PostCard