import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './components/Account';
import Manage from './components/Manage';

const App = () => {
  return (
    // <Account />
    <Router>
      <Routes>
        <Route path={'/'} element={<Account />} />
        <Route path={'Manage'} element={<Manage />} />
      </Routes>
    </Router>
  );
}

export default App;
