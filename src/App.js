import { hot } from 'react-hot-loader/root';
import React from 'react';

import Controls from './components/Controls';

const App = () => {
  return (
    <>
      <div className="app">
        <header>
          <h1>TO-DOs App</h1>
        </header>
        <main role="main">
          <section className="controls">
            <Controls />
          </section>
          <section>This is an app</section>
        </main>
      </div>

      <style jsx global>
        {`
          @import '/src/index.css';
        `}
      </style>
      <style jsx>
        {`
          .app {
            margin-right: 5px;
            margin-left: 5px;
          }
          .controls {
            display: flex;
            justify-content: flex-end;
          }
        `}
      </style>
    </>
  );
};

export default hot(App);
