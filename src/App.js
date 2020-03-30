import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';

import Controls from './components/Controls';
import AddToDoItem from './components/AddToDoItem';

const App = () => {
  const [showAddSection, setShowAddSection] = useState(false);
  return (
    <>
      <div className="app">
        <header>
          <h1>TO-DOs App</h1>
        </header>
        <main role="main">
          <section className="controls">
            <Controls onAddItem={() => setShowAddSection(status => !status)} />
          </section>
          <section className={showAddSection ? 'fadein' : 'fadeout'}>
            {showAddSection && (
              <AddToDoItem
                onCancel={() => setShowAddSection(status => !status)}
              />
            )}
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
            padding-bottom: 5px;
          }
        `}
      </style>
      <style jsx>
        {`
          .item {
            display: ${showAddSection ? 'flex' : 'none'};
          }
          .fadein,
          .fadeout {
            opacity: 0;
            -moz-transition: opacity 0.4s ease-in-out;
            -o-transition: opacity 0.4s ease-in-out;
            -webkit-transition: opacity 0.4s ease-in-out;
            transition: opacity 0.4s ease-in-out;
          }
          .fadein {
            opacity: 1;
          }
        `}
      </style>
    </>
  );
};

export default hot(App);
