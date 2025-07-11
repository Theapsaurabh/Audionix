import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthCallback from "./pages/auth-callback/AuthCallback";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <Routes>
      
      <Route 
        path="/sso-callback" 
        element={
          <AuthenticateWithRedirectCallback signUpForceRedirectUrl="/auth-callback" />
        } 
      />

      
      <Route path="/auth-callback" element={<AuthCallback />} />

      
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        
      </Route>
    </Routes>
  );
}

export default App;
