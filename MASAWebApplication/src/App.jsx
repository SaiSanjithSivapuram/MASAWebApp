import Provider from "react-redux/es/components/Provider";
import store from './store';
import './App.css'
import Layout from './Layout/Layout';

function App() {

  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App
