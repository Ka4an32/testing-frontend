import { Provider } from 'react-redux';
import store from './redux/store';

import WrapComponent from './component/WrapComponent';

function App() {
  return (
    <Provider store={store}>
      <WrapComponent></WrapComponent>
    </Provider>
  );
}

export default App;
