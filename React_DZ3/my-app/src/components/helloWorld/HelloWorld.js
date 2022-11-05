function HelloWorld(props) {
  function Hello() {
    alert("Hello world");
  }
  return (
    <>
      <button className="btn" onClick={Hello}>
        Нажми :D
      </button>
    </>
  );
}

export default HelloWorld;
