
function CloseButton({handle, tabAvailable}) {
  // console.log(handle);
  return (
    <button onClick={handle} tabIndex={tabAvailable}>X</button>
  )
}

export default function UserCard({ user, visible, handleClose }) {
  
  if (!user) return null

  return (
    <div className={visible ? "card card-show" : "card card-hidden"}>
      <div className="card-title">
        id : {user.id}  
        <CloseButton handle={handleClose} tabAvailable={visible ? "0" : "-1"}/>
      </div>
      <div>Nom : {user.name}</div>
      <div>Email : {user.email}</div>
      <div>Adresse : </div>
      <div>Téléphone : </div>
      <div>Site : </div>

    </div>
  )
}

