import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { LogOut, Plus, Shield, Trash2, User, Users, Mail, Calendar, MoreHorizontal, Home } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const AdminPanel = () => {
  const { user, logout, admins, createAdmin, toggleAdminStatus, deleteAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newAdminForm, setNewAdminForm] = useState({
    name: "",
    email: "",
    password: "",
    isActive: true
  });

  const handleLogout = () => {
    logout();
    navigate("/login");
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión exitosamente.",
    });
  };

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await createAdmin(newAdminForm);
    
    if (success) {
      toast({
        title: "¡Administrador creado!",
        description: `${newAdminForm.name} ha sido agregado exitosamente.`,
      });
      setNewAdminForm({ name: "", email: "", password: "", isActive: true });
      setIsCreateDialogOpen(false);
    } else {
      toast({
        title: "Error al crear administrador",
        description: "El email ya existe o hubo un error. Intenta nuevamente.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteAdmin = (adminId: string, adminName: string) => {
    deleteAdmin(adminId);
    toast({
      title: "Administrador eliminado",
      description: `${adminName} ha sido eliminado del sistema.`,
    });
  };

  const handleToggleStatus = (adminId: string, adminName: string, currentStatus: boolean) => {
    toggleAdminStatus(adminId);
    toast({
      title: `Administrador ${currentStatus ? 'desactivado' : 'activado'}`,
      description: `${adminName} ha sido ${currentStatus ? 'desactivado' : 'activado'}.`,
    });
  };

  if (!user || user.role !== 'superadmin') {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-gold-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-navy-800">Panel de Administración</h1>
                <p className="text-sm text-gray-600">Sistema de gestión inmobiliaria</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-navy-800">{user.name}</p>
                <p className="text-xs text-gray-600">Super Administrador</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/properties')}
                className="text-gold-600 hover:text-gold-700 hover:bg-gold-50"
              >
                <Home className="h-4 w-4 mr-2" />
                Gestionar Propiedades
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Administradores</p>
                  <p className="text-3xl font-bold text-navy-800">{admins.length}</p>
                </div>
                <Users className="h-12 w-12 text-gold-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Administradores Activos</p>
                  <p className="text-3xl font-bold text-green-600">{admins.filter(a => a.isActive).length}</p>
                </div>
                <User className="h-12 w-12 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Administradores Inactivos</p>
                  <p className="text-3xl font-bold text-red-600">{admins.filter(a => !a.isActive).length}</p>
                </div>
                <User className="h-12 w-12 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Admins Management */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl text-navy-800">Gestión de Administradores</CardTitle>
                <CardDescription>
                  Crea, edita y gestiona los administradores del sistema
                </CardDescription>
              </div>
              
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gold-600 hover:bg-gold-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Crear Administrador
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Crear Nuevo Administrador</DialogTitle>
                    <DialogDescription>
                      Completa los datos para crear un nuevo administrador del sistema.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleCreateAdmin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo</Label>
                      <Input
                        id="name"
                        value={newAdminForm.name}
                        onChange={(e) => setNewAdminForm(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Ej: Juan Pérez"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={newAdminForm.email}
                        onChange={(e) => setNewAdminForm(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="admin@inmobiliaria.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Contraseña</Label>
                      <Input
                        id="password"
                        type="password"
                        value={newAdminForm.password}
                        onChange={(e) => setNewAdminForm(prev => ({ ...prev, password: e.target.value }))}
                        placeholder="••••••��•"
                        required
                        minLength={6}
                      />
                      <p className="text-xs text-gray-500">Mínimo 6 caracteres</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="isActive"
                        checked={newAdminForm.isActive}
                        onCheckedChange={(checked) => setNewAdminForm(prev => ({ ...prev, isActive: checked }))}
                      />
                      <Label htmlFor="isActive">Administrador activo</Label>
                    </div>
                    
                    <div className="flex justify-end space-x-2 pt-4">
                      <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                        Cancelar
                      </Button>
                      <Button type="submit" className="bg-gold-600 hover:bg-gold-700">
                        Crear Administrador
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Administrador</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Fecha de Creación</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {admins.map((admin) => (
                  <TableRow key={admin.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-navy-600" />
                        </div>
                        <span>{admin.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span>{admin.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>{admin.createdAt}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={admin.isActive ? "default" : "secondary"}>
                        {admin.isActive ? "Activo" : "Inactivo"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => handleToggleStatus(admin.id, admin.name, admin.isActive)}
                          >
                            {admin.isActive ? "Desactivar" : "Activar"}
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => handleDeleteAdmin(admin.id, admin.name)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Eliminar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {admins.length === 0 && (
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No hay administradores registrados</p>
                <p className="text-sm text-gray-500">Crea el primer administrador del sistema</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminPanel;
