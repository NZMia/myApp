import { Provider } from 'react-redux';
import store from './store/index';
import MainLayout from './Layout/mainLayout';

function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export default App;
