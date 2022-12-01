import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state';
// import { CodeCell } from './components/code-cell';
import { TextEditor } from './components/text-editor';
import React from 'react';

const App = () => {
  return (
    <>
      <TextEditor />
      {/* <CodeCell /> */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
