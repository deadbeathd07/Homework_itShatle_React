import User from "./User/User";

function UserList(props) {
    return (
        props.arr.map(item => (
        <User key = {item.id} name = {item.name} />
        ))
    );
}

export default UserList;