import classes from "./userRed.module.css";

function UserRed(props) {
  return (
    <>
      <ul>
        {Object.values(props.text).map(function (a) {
          if (a === "Anna") {
            return <li className={classes.red}>name: {a}</li>;
          } else {
            return <li className={classes.red}>age: {a}</li>;
          }
        })}
      </ul>
    </>
  );
}
export default UserRed;
