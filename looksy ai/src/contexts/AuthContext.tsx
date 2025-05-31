import  { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signUp: (name: string, email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Mock login - in a real app, this would call an API
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser({
          id: '1',
          name: 'Demo User',
          email,
          avatar: 'https://i.pravatar.cc/150?u=demo'
        });
        resolve();
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
  };

  const signUp = async (name: string, email: string, password: string) => {
    // Mock signup - in a real app, this would call an API
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser({
          id: '1',
          name,
          email,
          avatar: 'https://i.pravatar.cc/150?u=' + email
        });
        resolve();
      }, 500);
    });
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user,
      login, 
      logout, 
      signUp 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
 