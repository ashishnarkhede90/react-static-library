import React from 'react';
import ReactDOM from 'react-dom';

const Library = () => (
  <div>
    <section>
      <p><b>Name: The Alchemist</b></p>
      <p>by - Paulo Coelho</p>
      <p>Pages: 250</p>
    </section>
  </div>
)

const App = () => {
  return (
    <Library />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);