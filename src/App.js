import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Hooks from './components/Hooks';
import MainContainer from './components/MainContainer';
import SearchResults from './components/SearchResults';
import WatchPage from './components/WatchPage';
import store from './utils/store/store';

const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <SearchResults />,
      },
      {
        path : "/hooks",
        element: <Hooks />
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
