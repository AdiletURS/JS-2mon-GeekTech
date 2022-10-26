import AboutUs from "./pages/aboutUs/AboutUs";


function App() {
  const text = {tittle: "hello" ,
  subtitle: "lorem lorem lorem "
    }
    return (
        <div className="App">
            <AboutUs info={text}/>
        </div>
      )

}
export default App;