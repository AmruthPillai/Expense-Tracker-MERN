import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Overview from './components/Overview';
import History from './components/History';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

const App = () => (
  <GlobalProvider>
    <div className="container">
      <div className="row">
        <div className="py-5 col-4 mx-auto d-flex flex-column align-items-center">
          <Header />
          <div className="my-3" />
          <Balance />
          <div className="my-3" />
          <Overview />
          <div className="my-4" />
          <History />
          <div className="my-4" />
          <AddTransaction />
        </div>
      </div>
    </div>
  </GlobalProvider>
);

export default App;
