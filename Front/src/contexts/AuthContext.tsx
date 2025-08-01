import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  role: 'superadmin' | 'admin';
  name: string;
}

interface Admin {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: string;
  isActive: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  admins: Admin[];
  createAdmin: (adminData: Omit<Admin, 'id' | 'createdAt'>) => Promise<boolean>;
  toggleAdminStatus: (adminId: string) => void;
  deleteAdmin: (adminId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Datos simulados para el superadmin
const SUPERADMIN_CREDENTIALS = {
  email: 'superadmin@inmobiliaria.com',
  password: 'admin123',
  user: {
    id: '1',
    email: 'superadmin@inmobiliaria.com',
    role: 'superadmin' as const,
    name: 'Super Administrador'
  }
};

// No hay administradores iniciales - solo el superadmin puede crearlos
const INITIAL_ADMINS: Admin[] = [];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [admins, setAdmins] = useState<Admin[]>(INITIAL_ADMINS);

  // Cargar usuario desde localStorage al inicializar
  useEffect(() => {
    const savedUser = localStorage.getItem('auth_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    const savedAdmins = localStorage.getItem('admins_data');
    const needsReset = localStorage.getItem('admins_reset_needed');

    if (needsReset !== 'false' && savedAdmins) {
      // Limpiar administradores corruptos una sola vez
      localStorage.removeItem('admins_data');
      localStorage.setItem('admins_reset_needed', 'false');
      console.log('Admins data cleared, starting with empty admin list');
      setAdmins(INITIAL_ADMINS);
    } else if (savedAdmins && needsReset === 'false') {
      try {
        const parsedAdmins = JSON.parse(savedAdmins);
        setAdmins(parsedAdmins);
        console.log('Admins loaded from localStorage:', parsedAdmins.length);
      } catch (error) {
        console.error('Error loading admins from localStorage:', error);
        setAdmins(INITIAL_ADMINS);
      }
    } else {
      console.log('Starting with empty admin list');
      setAdmins(INITIAL_ADMINS);
      localStorage.setItem('admins_reset_needed', 'false');
    }
  }, []);

  // Guardar admins en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('admins_data', JSON.stringify(admins));
  }, [admins]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Verificar si es superadmin
    if (email === SUPERADMIN_CREDENTIALS.email && password === SUPERADMIN_CREDENTIALS.password) {
      setUser(SUPERADMIN_CREDENTIALS.user);
      localStorage.setItem('auth_user', JSON.stringify(SUPERADMIN_CREDENTIALS.user));
      return true;
    }

    // Verificar si es un administrador
    const admin = admins.find(a => a.email === email && a.password === password && a.isActive);
    if (admin) {
      const adminUser: User = {
        id: admin.id,
        email: admin.email,
        role: 'admin',
        name: admin.name
      };
      setUser(adminUser);
      localStorage.setItem('auth_user', JSON.stringify(adminUser));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  const createAdmin = async (adminData: Omit<Admin, 'id' | 'createdAt'>): Promise<boolean> => {
    try {
      // Verificar si el email ya existe
      if (admins.some(admin => admin.email === adminData.email)) {
        return false;
      }

      const newAdmin: Admin = {
        ...adminData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString().split('T')[0]
      };

      setAdmins(prev => [...prev, newAdmin]);
      return true;
    } catch (error) {
      return false;
    }
  };

  const toggleAdminStatus = (adminId: string) => {
    setAdmins(prev => 
      prev.map(admin => 
        admin.id === adminId 
          ? { ...admin, isActive: !admin.isActive }
          : admin
      )
    );
  };

  const deleteAdmin = (adminId: string) => {
    setAdmins(prev => prev.filter(admin => admin.id !== adminId));
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    admins,
    createAdmin,
    toggleAdminStatus,
    deleteAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
