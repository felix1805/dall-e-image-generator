const App = () => {
  const surpriseOptions = [
    'A green car driving sideways',
    'A yellow panda eating chicken nuggets',
    'A lampshade printing newspapers'
  ];

  return (
    <div className="App">
      <section className="search-section">
        <p>Start with a detailed description 
          <span className="surprise">Surprise me</span></p>
          <div className="input-container"><input placeholder="A small Giraffe"/>
          <button>Generate</button></div>
      </section>
      <section className="image-section"></section>
    </div>
  );
};

export default App;
