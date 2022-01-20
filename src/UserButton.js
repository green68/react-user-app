const UserButton = ({ user, handleClick }) => {

    return (
        <button className="btn" onClick={_ => handleClick(user)}>
            {user.id} {user.name} {user.username}
        </button>
    )
};

export default UserButton
