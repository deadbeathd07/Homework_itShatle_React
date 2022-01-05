import "./Card.scss";

function Card(props) {
  return (
    <div>
      <div>
        <h2>{props.name}</h2>
        <p>{props.exercise}</p>
      </div>
      <div>
        <button onClick={props.func}>Принять</button>
      </div>
    </div>
  );
}

export default Card;
