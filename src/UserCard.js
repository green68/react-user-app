export default function UserCard({ user, visible, handleClose }) {
  
  let show = visible ? "card-show" : ""

  if (!user) return null

  return (
    <div className={visible ? "card card-show" : "card card-hidden"}>
      <div className="card-title">
        id : {user.id}  
        <CloseButton handle={handleClose}/>
      </div>
      <div>Nom : {user.name}</div>
      <div>Email : {user.email}</div>
      <div>Adresse : </div>
      <div>Téléphone : </div>
      <div>Site : </div>

    </div>
  )
}

function CloseButton({handle}) {
  // console.log(handle);
  return (
    <button onClick={handle}>X</button>
  )
}
