import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <LoginButton />
      <LogoutButton />
      <Profile />
      <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

