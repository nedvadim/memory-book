import './App.css';
import AppContent from "./containers/MainContentWrapper/MainContentWrapper";
import React from 'react'
import { AuthProvider } from './auth/Auth'
function App() {
  return (
      <AuthProvider>
        <AppContent />
      </AuthProvider>
  );
}

export default App;
