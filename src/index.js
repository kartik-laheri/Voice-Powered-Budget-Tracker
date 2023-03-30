import React from 'react';
import ReactDOM from 'react-dom/client';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SpeechProvider appId="39f7c2eb-73af-4026-85fa-8dbdc03927d4" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>
);

//7c4aee08-1073-4a32-b862-ebe1850e0732 