import User from './User/User';

function ComposableUser (props) {
    return (
        props.children.map(item => (
        <User key = {item.id} name = {item.name} />
        ))
    );
}

export default ComposableUser;