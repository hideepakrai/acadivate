'use client';

import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';
import LoginForm from './LoginForm';

const LoginHome = ({isadmin}:{isadmin?:boolean}) => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-app-bg flex items-center justify-center p-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      }
    >
      <LoginForm 
        isadmin={isadmin}
      />
    </Suspense>
  );
};

export default LoginHome;
