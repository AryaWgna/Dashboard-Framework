import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Status from './pages/Status';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import AnimatedPage from './components/AnimatedPage';
import { AnimatePresence } from 'framer-motion';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          {/* These routes are now protected */}
          <Route path="/" element={<AnimatedPage><Dashboard /></AnimatedPage>} />
          <Route path="/orders" element={<AnimatedPage><Orders /></AnimatedPage>} />
          <Route path="/status" element={<AnimatedPage><Status /></AnimatedPage>} />
          <Route path="/reports" element={<AnimatedPage><Reports /></AnimatedPage>} />
          <Route path="/settings" element={<AnimatedPage><Settings /></AnimatedPage>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
