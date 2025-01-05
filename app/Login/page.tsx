'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/navigation';
// import { supabase } from './lib/supabase'; // Import the Supabase client
import { supabase } from '@/lib/supbase';
const AuthPage: React.FC = () => {
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const router = useRouter();

  // Handle Signup Logic
  const handleSignup = async () => {
    const { email, password } = signupData;

    if (!email || !password || !signupData.username) {
      toast.error('Please fill in all the fields.');
      return;
    }

    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success('Account created successfully!');
        // Optionally, you can store the username in a separate table or update user metadata
        // supabase.from('users').upsert({ username: signupData.username, user_id: user.id });
        setSignupData({ username: '', email: '', password: '' });
        router.push('/login');
      }
    } catch (error) {
      toast.error('An error occurred during signup.');
    }
  };

  // Handle Login Logic
  const handleLogin = async () => {
    const { username, password } = loginData;

    if (!username || !password) {
      toast.error('Please enter both username and password.');
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: username,
        password,
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success('Logged in successfully!');
        setTimeout(() => {
          router.push('/'); // Navigate to homepage after login
        }, 2000);
      }
    } catch (error) {
      toast.error('An error occurred during login.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4">
      <Toaster position="top-right" />
      <div className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-lg">
        <Tabs defaultValue="login">
          <TabsList className="flex justify-center space-x-4 mb-6">
            <TabsTrigger value="login" className="text-white focus:ring-blue-500">
              Login
            </TabsTrigger>
            <TabsTrigger value="signup" className="text-white focus:ring-green-500">
              Signup
            </TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="login-username" className="block text-sm font-medium">
                  Username (Email)
                </label>
                <Input
                  id="login-username"
                  type="email"
                  placeholder="Enter your email"
                  value={loginData.username}
                  onChange={(e) =>
                    setLoginData({ ...loginData, username: e.target.value })
                  }
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="login-password" className="block text-sm font-medium">
                  Password
                </label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Login
              </Button>
            </form>
          </TabsContent>

          {/* Signup Tab */}
          <TabsContent value="signup">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignup();
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="signup-username" className="block text-sm font-medium">
                  Username
                </label>
                <Input
                  id="signup-username"
                  type="text"
                  placeholder="Choose a username"
                  value={signupData.username}
                  onChange={(e) =>
                    setSignupData({ ...signupData, username: e.target.value })
                  }
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="signup-password" className="block text-sm font-medium">
                  Password
                </label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="Choose a password"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Signup
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
