import { Route, Routes } from 'react-router-dom';
import AuthLayout from './auth/AuthLayout';
import SigninForm from './auth/forms/SigninForm';
import SignupForms from './auth/forms/SignupForms';
import './globals.css';
import RootLayout from './root/RootLayout';
import { Home } from './root/pages';

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForms />} />
          <Route path="*" element={<div>404</div>} />
        </Route>

        {/* Private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
