import { createRoot } from 'react-dom/client';

import './index.css';
// import App from './App';
import App from './components/App';
import Routes from './pages'
import reportWebVitals from './reportWebVitals';
import { AccessProvider } from './context';

import './style/app.css'

const container = document.getElementById('app') as HTMLElement;


const root = createRoot(container);
root.render(
  <AccessProvider>
    <App>
      <Routes/>
    </App>
  </AccessProvider>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
