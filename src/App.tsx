import React from 'react';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import Cart from './components/Cart';
import Item from './components/Item';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Cart />
      <Auth />
      <Item />
      <Counter />
    </Provider>
  );
}

export default App;
