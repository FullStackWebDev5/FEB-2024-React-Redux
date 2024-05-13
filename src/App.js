import './App.css';
import Count from './components/Count';
import Display from './components/Display';
import { Provider } from 'react-redux'
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Count />
        <Display />
      </div>
    </Provider>
  );
}

export default App;
