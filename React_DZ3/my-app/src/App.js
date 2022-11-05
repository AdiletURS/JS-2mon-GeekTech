import "./App.css";
import UserBlue from "./pages/userBlue/UserBlue";
import UserRed from "./pages/userRed/UserRed";
import HelloWorld from "./components/helloWorld/HelloWorld";

function App() {
  const user = { name: "Anna", age: 19 };
  return (
    <div className="App">
      <div className="userblue">
        <h1>UserBlue</h1>

        <UserBlue text={user} />
      </div>
      <div className="userRed">
        <h1>User Red</h1>
        <UserRed text={user} />
      </div>
      <HelloWorld user={user} />
    </div>
  );
}

export default App;
