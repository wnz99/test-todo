import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Controls from './components/Controls';
import ToDoItemAdd from './components/ToDoItemAdd';
import ToDoList from './components/ToDoList';
import actions from './store/actions';
import { onSaveTask } from './utils/forms';

const { tasks } = actions;

const App = () => {
  const dispatch = useDispatch();
  const [showAddSection, setShowAddSection] = useState(true);

  return (
    <div>
      <div className="app">
        <header>
          <h1>TO-DOs App</h1>
        </header>
        <main role="main" className="app-container">
          <section className="controls">
            <Controls onAddItem={() => setShowAddSection(status => !status)} />
          </section>
          <section className={showAddSection ? 'fadein' : 'fadeout'}>
            {showAddSection && (
              <ToDoItemAdd
                onCancel={() => setShowAddSection(status => !status)}
                onSubmit={data => onSaveTask(dispatch, tasks)(data)}
              />
            )}
          </section>
          <section>
            <ToDoList />
          </section>
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
          @media (--desktop) {
            .app {
              width: 900px;
              margin: auto;
            }
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
            padding-bottom: 24px;
          }
        `}
      </style>
    </div>
  );
};

export default hot(App);
