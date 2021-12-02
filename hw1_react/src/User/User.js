import './User.css';

function User(props) {
    let text;
    if (props.name.indexOf('e'.toLowerCase()) > -1) {
        text = <span className = "spanUser">It's Premium User {props.name}</span>;
    } else if (props.name.length > 5) {
        text = <span className = "spanUser">It's {props.name.substr(0, 5)}</span>;
    } else if (props.name.toLowerCase() === props.name.split('').reverse().join('').toLowerCase()) {
        text = <span className = "name-highlighted">It's {props.name.substr(0, 5)}</span>;
    } else {
        text = <span className = "spanUser">It's {props.name}</span>;
    }
    return <>
        {text}
    </>;
}
export default User;