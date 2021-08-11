import React from 'react';

function Movie({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>
        Hellooo
      </h1>
      <Movie fav="drama" />
    </div>
  );
}

export default App;
