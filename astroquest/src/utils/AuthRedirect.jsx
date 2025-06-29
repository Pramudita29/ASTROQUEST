import { Navigate } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

export default function AuthRedirect() {
  const isLoggedIn = !!localStorage.getItem('token'); // returns true if token exists

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }
  return <LandingPage />;
}
