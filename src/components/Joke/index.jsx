import './style.css'
import { useState } from 'react'

export const Joke = ({userAvatar, userName, text, likes, dislikes}) => {
  const [upLikes, setUpLikes] = useState(0)
  const [downLikes, setDownLikes] = useState(0)
  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} />
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text">
            {text}
          </p>
        </div>
        <div className="joke__likes">
          <button onClick={() => (setUpLikes(upLikes + 1))} id="btn-up" className="btn-like btn-like--up"></button>
          <span id="likes-up" className="likes-count likes-count--up">{likes + upLikes}</span>
          <button onClick={() => (setDownLikes(downLikes - 1))} id="btn-down" className="btn-like btn-like--down"></button>
          <span id="likes-down" className="likes-count likes-count--down">{dislikes - downLikes}</span>
        </div>
      </div>
    </div>
  )
}