import { useEffect, useState } from 'react';
import './style.css';
import { Joke } from '../../components/Joke';


export const HomePage = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:4000/api/jokes')
      const data = await response.json()
      console.log(data.result)
      setUsers(data.result)
    }
    fetchUsers()
  }, [])

  return (
    <>
      {users.map((user) => {
        return (
          <Joke 
          key={user.id}
          userAvatar={user.avatar} 
          userName={user.name}
          text={user.text}
          likes={user.likes}
          dislikes={user.dislikes} />
        )
      }
      )}
    </>
  );
};
