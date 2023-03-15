import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);
