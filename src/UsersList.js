import React from 'react'
import UserButton from './UserButton';

const UsersList = ({users, handleClick}) => {

  if (! Array.isArray(users)) return (<div>Erreur de chargement</div>)
  
  const list = users.map(user => {
    return (
      <UserButton key={user.id} user={user} handleClick={handleClick} />
    );
  })

  return (
    <div className="users-list">
      <h1>Liste des users</h1>
      <div className='users'>
        {(list.length === 0) ? <div>Chargement en cours...</div>: list}
      </div>
    </div>
  )
}

export default UsersList
