const UserButton = ({ user, tabAvailable , handleClick }) => {

    // console.log(`userid: ${user.id}`);
    // console.log(`tabulation: ${tabAvailable}`);
    return (
        <button className="btn" onClick={_ => handleClick(user)} tabIndex={tabAvailable}>
            {user.id} {user.name} {user.username}
        </button>
    )
};

export default UserButton
