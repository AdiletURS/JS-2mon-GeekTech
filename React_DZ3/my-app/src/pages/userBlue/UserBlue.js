import classes from "./userBlue.module.css";

function UserBlue(props) {
  const user = props.text;
  return (
    <>
      <ul>
        {Object.values(props.text).map(function (a) {
          if (a === "Anna") {
            return <li className={classes.user}>name: {a}</li>;
          } else {
            return <li className={classes.user}>age: {a}</li>;
          }
        })}
      </ul>
    </>
  );
}
export default UserBlue;
