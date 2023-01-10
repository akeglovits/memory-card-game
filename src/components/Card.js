import "../styles/Card.css";

const Card = (props) => {
  return (
    <div
      className="Card"
      onClick={() => {
        props.handleClick(props.val);
      }}
    >
      <img src={"/images/" + props.val + ".png"} alt={props.val} />
      <div className="CardValue">
        {props.val.charAt(0).toUpperCase() + props.val.slice(1)}
      </div>
    </div>
  );
};

export default Card;
