import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RequestVerificationPage } from './pages/RequestVerificationPage';
import { SelfVerificationPage } from './pages/SelfVerificationPage';
import { VerificationResultsPage } from './pages/VerificationResultsPage';
import { TrustProfilePage } from './pages/TrustProfilePage';
import { PricingPage } from './pages/PricingPage';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/request" element={<RequestVerificationPage />} />
            <Route path="/verify" element={<SelfVerificationPage />} />
            <Route path="/results/:id" element={<VerificationResultsPage />} />
            <Route path="/profile/:id" element={<TrustProfilePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
