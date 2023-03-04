import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import SideBar from './components/SideBar';
import store from './utils/store/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
