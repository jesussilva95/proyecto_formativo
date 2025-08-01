import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LogOut, Plus, Home, Edit, Trash2, Eye, MapPin, DollarSign, Bed, Bath, Square, Camera, Car } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useProperties } from "@/contexts/PropertiesContext";
import { useToast } from "@/hooks/use-toast";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import type { Property } from "@/contexts/PropertiesContext";

// Características predefinidas del sistema
const CARACTERISTICAS_PREDEFINIDAS = [
  "Acabados de alta calidad",
  "Espacios amplios y luminosos",
  "Zona residencial tranquila",
  "Excelente ubicación",
  "Fácil acceso a servicios",
  "Cerca de centros comerciales"
];

// Servicios y comodidades predefinidos
const SERVICIOS_PREDEFINIDOS = [
  "Internet disponible",
  "Agua potable",
  "Áreas verdes",
  "Electricidad",
  "Zona segura",
  "Cocina funcional"
];

const PropertyManagement = () => {
  const { user, logout } = useAuth();
  const { getPropertiesByAdmin, createProperty, deleteProperty, updatePropertyStatus, updateProperty, properties, refreshProperties } = useProperties();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState<any>(null);
  const [newPropertyForm, setNewPropertyForm] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    parking: "",
    yearBuilt: "",
    type: "venta" as Property['type'],
    status: "disponible" as Property['status'],
    imageUrl: "",
    condition: "Excelente",
    propertyType: "Casa",
    caracteristicas: CARACTERISTICAS_PREDEFINIDAS.join(", "),
    servicios: SERVICIOS_PREDEFINIDOS.join(", "),
    featured: false
  });

  const handleLogout = () => {
    logout();
    navigate("/login");
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión exitosamente.",
    });
  };

  const handleCreateProperty = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convertir string de características a array
    const caracteristicasArray = newPropertyForm.caracteristicas
      .split(',')
      .map(c => c.trim())
      .filter(c => c.length > 0);

    // Convertir string de servicios a array
    const serviciosArray = newPropertyForm.servicios
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    const newPropertyData = {
      title: newPropertyForm.title,
      description: newPropertyForm.description,
      price: Number(newPropertyForm.price),
      location: newPropertyForm.location,
      bedrooms: Number(newPropertyForm.bedrooms),
      bathrooms: Number(newPropertyForm.bathrooms),
      area: Number(newPropertyForm.area),
      parking: newPropertyForm.parking ? Number(newPropertyForm.parking) : undefined,
      yearBuilt: newPropertyForm.yearBuilt ? Number(newPropertyForm.yearBuilt) : undefined,
      type: newPropertyForm.type,
      status: newPropertyForm.status,
      imageUrl: newPropertyForm.imageUrl || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
      adminId: 'general', // Propiedades generales que cualquier admin puede gestionar
      featured: newPropertyForm.featured,
      caracteristicas: caracteristicasArray,
      servicios: serviciosArray,
      condition: newPropertyForm.condition,
      propertyType: newPropertyForm.propertyType
    };

    createProperty(newPropertyData);
    setNewPropertyForm({
      title: "",
      description: "",
      price: "",
      location: "",
      bedrooms: "",
      bathrooms: "",
      area: "",
      parking: "",
      yearBuilt: "",
      type: "venta" as Property['type'],
      status: "disponible" as Property['status'],
      imageUrl: "",
      condition: "Excelente",
      propertyType: "Casa",
      caracteristicas: CARACTERISTICAS_PREDEFINIDAS.join(", "),
      servicios: SERVICIOS_PREDEFINIDOS.join(", "),
      featured: false
    });
    setIsCreateDialogOpen(false);

    toast({
      title: "¡Propiedad creada!",
      description: `${newPropertyData.title} ha sido agregada exitosamente.`,
    });
  };

  const handleDeleteProperty = (propertyId: string, propertyTitle: string) => {
    deleteProperty(propertyId);
    toast({
      title: "Propiedad eliminada",
      description: `${propertyTitle} ha sido eliminada del sistema.`,
    });
  };

  const handleStatusChange = (propertyId: string, newStatus: Property['status']) => {
    updatePropertyStatus(propertyId, newStatus);
    toast({
      title: "Estado actualizado",
      description: `El estado de la propiedad ha sido actualizado.`,
    });
  };

  const handleEditProperty = (property: any) => {
    console.log('=== EDITING PROPERTY ===');
    console.log('Full property object:', property);
    console.log('Property ID:', property.id);
    console.log('Property características:', property.caracteristicas);
    console.log('Property servicios:', property.servicios);

    // Convertir array de características a string, usar predeterminadas si está vacío
    const caracteristicasArray = Array.isArray(property.caracteristicas) ? property.caracteristicas : [];
    const caracteristicasString = caracteristicasArray.length > 0
      ? caracteristicasArray.join(', ')
      : CARACTERISTICAS_PREDEFINIDAS.join(', ');

    // Convertir array de servicios a string, usar predeterminados si está vacío
    const serviciosArray = Array.isArray(property.servicios) ? property.servicios : [];
    const serviciosString = serviciosArray.length > 0
      ? serviciosArray.join(', ')
      : SERVICIOS_PREDEFINIDOS.join(', ');

    console.log('Converted características string:', caracteristicasString);
    console.log('Converted servicios string:', serviciosString);
    console.log('=== END EDITING PROPERTY ===');

    const editingData = {
      ...property,
      price: property.price.toString(),
      bedrooms: property.bedrooms.toString(),
      bathrooms: property.bathrooms.toString(),
      area: property.area.toString(),
      parking: property.parking?.toString() || '',
      yearBuilt: property.yearBuilt?.toString() || '',
      caracteristicas: caracteristicasString,
      servicios: serviciosString,
      condition: property.condition || 'Excelente',
      propertyType: property.propertyType || 'Casa',
      featured: property.featured || false,
    };

    console.log('Final editing data:', editingData);
    setEditingProperty(editingData);
    setIsEditDialogOpen(true);
  };

  const handleUpdateProperty = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!editingProperty) return;

    // Convertir string de características a array
    const caracteristicasArray = editingProperty.caracteristicas
      .split(',')
      .map(c => c.trim())
      .filter(c => c.length > 0);

    // Convertir string de servicios a array
    const serviciosArray = editingProperty.servicios
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    const updatedData = {
      title: editingProperty.title,
      description: editingProperty.description,
      price: Number(editingProperty.price),
      location: editingProperty.location,
      bedrooms: Number(editingProperty.bedrooms),
      bathrooms: Number(editingProperty.bathrooms),
      area: Number(editingProperty.area),
      parking: editingProperty.parking ? Number(editingProperty.parking) : undefined,
      yearBuilt: editingProperty.yearBuilt ? Number(editingProperty.yearBuilt) : undefined,
      type: editingProperty.type,
      status: editingProperty.status,
      imageUrl: editingProperty.imageUrl,
      condition: editingProperty.condition || 'Excelente',
      propertyType: editingProperty.propertyType || 'Casa',
      caracteristicas: caracteristicasArray,
      servicios: serviciosArray,
      featured: editingProperty.featured || false
    };

    updateProperty(editingProperty.id, updatedData);
    setIsEditDialogOpen(false);
    setEditingProperty(null);

    toast({
      title: "¡Propiedad actualizada!",
      description: `${updatedData.title} ha sido actualizada exitosamente.`,
    });
  };

  const formatPrice = (price: number, type: Property['type']) => {
    return type === 'venta' 
      ? `$${price.toLocaleString()}` 
      : `$${price.toLocaleString()}/mes`;
  };

  if (!user || (user.role !== 'admin' && user.role !== 'superadmin')) {
    navigate('/login');
    return null;
  }

  // Filtrar propiedades del administrador actual
  const userProperties = getPropertiesByAdmin(user?.id || '');

  // Debug: Log de las propiedades cargadas
  console.log('=== PROPERTIES LOADED ===');
  console.log('Total properties available:', properties.length);
  console.log('User properties:', userProperties.length);
  console.log('Sample property for debugging:', userProperties[0]);
  console.log('=== END PROPERTIES LOADED ===');



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                <Home className="h-6 w-6 text-gold-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-navy-800">Gestión de Propiedades</h1>
                <p className="text-sm text-gray-600">Panel de Administrador</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-navy-800">{user.name}</p>
                <p className="text-xs text-gray-600">Administrador</p>
              </div>


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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Propiedades Disponibles</p>
                  <p className="text-3xl font-bold text-navy-800">{userProperties.length}</p>
                </div>
                <Home className="h-12 w-12 text-gold-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Disponibles</p>
                  <p className="text-3xl font-bold text-green-600">
                    {userProperties.filter(p => p.status === 'disponible').length}
                  </p>
                </div>
                <Eye className="h-12 w-12 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">En Venta</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {userProperties.filter(p => p.type === 'venta').length}
                  </p>
                </div>
                <DollarSign className="h-12 w-12 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">En Alquiler</p>
                  <p className="text-3xl font-bold text-purple-600">
                    {userProperties.filter(p => p.type === 'alquiler').length}
                  </p>
                </div>
                <Home className="h-12 w-12 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Properties Management */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl text-navy-800">Gestión de Propiedades</CardTitle>
                <CardDescription>
                  Gestiona las propiedades del sistema inmobiliario
                </CardDescription>
              </div>
              
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gold-600 hover:bg-gold-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar Propiedad
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Agregar Nueva Propiedad</DialogTitle>
                    <DialogDescription>
                      Completa los datos de la nueva propiedad.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleCreateProperty} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Título</Label>
                        <Input
                          id="title"
                          value={newPropertyForm.title}
                          onChange={(e) => setNewPropertyForm(prev => ({ ...prev, title: e.target.value }))}
                          placeholder="Casa moderna..."
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="price">Precio</Label>
                        <Input
                          id="price"
                          type="number"
                          value={newPropertyForm.price}
                          onChange={(e) => setNewPropertyForm(prev => ({ ...prev, price: e.target.value }))}
                          placeholder="350000"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Descripción</Label>
                      <Textarea
                        id="description"
                        value={newPropertyForm.description}
                        onChange={(e) => setNewPropertyForm(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Descripción detallada de la propiedad..."
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Ubicación</Label>
                      <Input
                        id="location"
                        value={newPropertyForm.location}
                        onChange={(e) => setNewPropertyForm(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="Zona Norte, Ciudad"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="bedrooms">Habitaciones</Label>
                        <Input
                          id="bedrooms"
                          type="number"
                          value={newPropertyForm.bedrooms}
                          onChange={(e) => setNewPropertyForm(prev => ({ ...prev, bedrooms: e.target.value }))}
                          placeholder="3"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bathrooms">Baños</Label>
                        <Input
                          id="bathrooms"
                          type="number"
                          value={newPropertyForm.bathrooms}
                          onChange={(e) => setNewPropertyForm(prev => ({ ...prev, bathrooms: e.target.value }))}
                          placeholder="2"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="area">Área (m²)</Label>
                        <Input
                          id="area"
                          type="number"
                          value={newPropertyForm.area}
                          onChange={(e) => setNewPropertyForm(prev => ({ ...prev, area: e.target.value }))}
                          placeholder="150"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="type">Tipo</Label>
                        <Select
                          value={newPropertyForm.type}
                          onValueChange={(value: Property['type']) =>
                            setNewPropertyForm(prev => ({ ...prev, type: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="venta">Venta</SelectItem>
                            <SelectItem value="alquiler">Alquiler</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="status">Estado</Label>
                        <Select
                          value={newPropertyForm.status}
                          onValueChange={(value: Property['status']) =>
                            setNewPropertyForm(prev => ({ ...prev, status: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="disponible">Disponible</SelectItem>
                            <SelectItem value="vendida">Vendida</SelectItem>
                            <SelectItem value="alquilada">Alquilada</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="parking">Estacionamientos</Label>
                        <Input
                          id="parking"
                          type="number"
                          value={newPropertyForm.parking}
                          onChange={(e) => setNewPropertyForm(prev => ({ ...prev, parking: e.target.value }))}
                          placeholder="2"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="yearBuilt">Año de Construcción</Label>
                        <Input
                          id="yearBuilt"
                          type="number"
                          value={newPropertyForm.yearBuilt}
                          onChange={(e) => setNewPropertyForm(prev => ({ ...prev, yearBuilt: e.target.value }))}
                          placeholder="2020"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="condition">Condición</Label>
                        <Select
                          value={newPropertyForm.condition}
                          onValueChange={(value) =>
                            setNewPropertyForm(prev => ({ ...prev, condition: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Nuevo">Nuevo</SelectItem>
                            <SelectItem value="Como nuevo">Como nuevo</SelectItem>
                            <SelectItem value="Excelente">Excelente</SelectItem>
                            <SelectItem value="Muy bueno">Muy bueno</SelectItem>
                            <SelectItem value="Bueno">Bueno</SelectItem>
                            <SelectItem value="Renovado">Renovado</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="propertyType">Tipo de Propiedad</Label>
                        <Select
                          value={newPropertyForm.propertyType}
                          onValueChange={(value) =>
                            setNewPropertyForm(prev => ({ ...prev, propertyType: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Casa">Casa</SelectItem>
                            <SelectItem value="Apartamento">Apartamento</SelectItem>
                            <SelectItem value="Penthouse">Penthouse</SelectItem>
                            <SelectItem value="Villa">Villa</SelectItem>
                            <SelectItem value="Loft">Loft</SelectItem>
                            <SelectItem value="Dúplex">Dúplex</SelectItem>
                            <SelectItem value="Casa Ecológica">Casa Ecológica</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="caracteristicas">Características</Label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setNewPropertyForm(prev => ({
                            ...prev,
                            caracteristicas: CARACTERISTICAS_PREDEFINIDAS.join(", ")
                          }))}
                          className="text-xs"
                        >
                          Usar predeterminadas
                        </Button>
                      </div>
                      <Textarea
                        id="caracteristicas"
                        value={newPropertyForm.caracteristicas}
                        onChange={(e) => setNewPropertyForm(prev => ({ ...prev, caracteristicas: e.target.value }))}
                        placeholder="Aire acondicionado, Cocina integral, Jardín privado, Seguridad 24/7..."
                        rows={3}
                      />
                      <p className="text-xs text-gray-500">
                        Separa cada característica con una coma (,)
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="servicios">Servicios y Comodidades</Label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setNewPropertyForm(prev => ({
                            ...prev,
                            servicios: SERVICIOS_PREDEFINIDOS.join(", ")
                          }))}
                          className="text-xs"
                        >
                          Usar predeterminados
                        </Button>
                      </div>
                      <Textarea
                        id="servicios"
                        value={newPropertyForm.servicios}
                        onChange={(e) => setNewPropertyForm(prev => ({ ...prev, servicios: e.target.value }))}
                        placeholder="Internet disponible, Electricidad, Agua potable, Zona segura..."
                        rows={3}
                      />
                      <p className="text-xs text-gray-500">
                        Separa cada servicio con una coma (,)
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="imageUrl">URL de Imagen (opcional)</Label>
                      <Input
                        id="imageUrl"
                        value={newPropertyForm.imageUrl}
                        onChange={(e) => setNewPropertyForm(prev => ({ ...prev, imageUrl: e.target.value }))}
                        placeholder="https://..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-base font-semibold">Marcar como Destacada</Label>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="featured"
                          checked={newPropertyForm.featured}
                          onCheckedChange={(checked) => setNewPropertyForm(prev => ({ ...prev, featured: checked }))}
                        />
                        <Label htmlFor="featured">Propiedad destacada</Label>
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-2 pt-4">
                      <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                        Cancelar
                      </Button>
                      <Button type="submit" className="bg-gold-600 hover:bg-gold-700">
                        Crear Propiedad
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>

              {/* Diálogo de Edición */}
              <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Editar Propiedad</DialogTitle>
                    <DialogDescription>
                      Modifica los datos de la propiedad.
                    </DialogDescription>
                  </DialogHeader>

                  {editingProperty && (
                    <form onSubmit={handleUpdateProperty} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="edit-title">Título</Label>
                          <Input
                            id="edit-title"
                            value={editingProperty.title}
                            onChange={(e) => setEditingProperty(prev => ({ ...prev, title: e.target.value }))}
                            placeholder="Casa moderna..."
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="edit-price">Precio</Label>
                          <Input
                            id="edit-price"
                            type="number"
                            value={editingProperty.price}
                            onChange={(e) => setEditingProperty(prev => ({ ...prev, price: e.target.value }))}
                            placeholder="350000"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="edit-description">Descripción</Label>
                        <Textarea
                          id="edit-description"
                          value={editingProperty.description}
                          onChange={(e) => setEditingProperty(prev => ({ ...prev, description: e.target.value }))}
                          placeholder="Descripción detallada de la propiedad..."
                          rows={3}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="edit-location">Ubicación</Label>
                        <Input
                          id="edit-location"
                          value={editingProperty.location}
                          onChange={(e) => setEditingProperty(prev => ({ ...prev, location: e.target.value }))}
                          placeholder="Zona Norte, Ciudad"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="edit-bedrooms">Habitaciones</Label>
                          <Input
                            id="edit-bedrooms"
                            type="number"
                            value={editingProperty.bedrooms}
                            onChange={(e) => setEditingProperty(prev => ({ ...prev, bedrooms: e.target.value }))}
                            placeholder="3"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="edit-bathrooms">Baños</Label>
                          <Input
                            id="edit-bathrooms"
                            type="number"
                            value={editingProperty.bathrooms}
                            onChange={(e) => setEditingProperty(prev => ({ ...prev, bathrooms: e.target.value }))}
                            placeholder="2"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="edit-area">Área (m²)</Label>
                          <Input
                            id="edit-area"
                            type="number"
                            value={editingProperty.area}
                            onChange={(e) => setEditingProperty(prev => ({ ...prev, area: e.target.value }))}
                            placeholder="150"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="edit-type">Tipo</Label>
                          <Select
                            value={editingProperty.type}
                            onValueChange={(value: Property['type']) =>
                              setEditingProperty(prev => ({ ...prev, type: value }))
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="venta">Venta</SelectItem>
                              <SelectItem value="alquiler">Alquiler</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="edit-status">Estado</Label>
                          <Select
                            value={editingProperty.status}
                            onValueChange={(value: Property['status']) =>
                              setEditingProperty(prev => ({ ...prev, status: value }))
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="disponible">Disponible</SelectItem>
                              <SelectItem value="vendida">Vendida</SelectItem>
                              <SelectItem value="alquilada">Alquilada</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="edit-parking">Estacionamientos</Label>
                          <Input
                            id="edit-parking"
                            type="number"
                            value={editingProperty.parking || ''}
                            onChange={(e) => setEditingProperty(prev => ({ ...prev, parking: e.target.value }))}
                            placeholder="2"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="edit-yearBuilt">Año de Construcción</Label>
                          <Input
                            id="edit-yearBuilt"
                            type="number"
                            value={editingProperty.yearBuilt || ''}
                            onChange={(e) => setEditingProperty(prev => ({ ...prev, yearBuilt: e.target.value }))}
                            placeholder="2020"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="edit-condition">Condición</Label>
                          <Select
                            value={editingProperty.condition || 'Excelente'}
                            onValueChange={(value) =>
                              setEditingProperty(prev => ({ ...prev, condition: value }))
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Nuevo">Nuevo</SelectItem>
                              <SelectItem value="Como nuevo">Como nuevo</SelectItem>
                              <SelectItem value="Excelente">Excelente</SelectItem>
                              <SelectItem value="Muy bueno">Muy bueno</SelectItem>
                              <SelectItem value="Bueno">Bueno</SelectItem>
                              <SelectItem value="Renovado">Renovado</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="edit-propertyType">Tipo de Propiedad</Label>
                          <Select
                            value={editingProperty.propertyType || 'Casa'}
                            onValueChange={(value) =>
                              setEditingProperty(prev => ({ ...prev, propertyType: value }))
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Casa">Casa</SelectItem>
                              <SelectItem value="Apartamento">Apartamento</SelectItem>
                              <SelectItem value="Penthouse">Penthouse</SelectItem>
                              <SelectItem value="Villa">Villa</SelectItem>
                              <SelectItem value="Loft">Loft</SelectItem>
                              <SelectItem value="Dúplex">Dúplex</SelectItem>
                              <SelectItem value="Casa Ecológica">Casa Ecológica</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="edit-caracteristicas">Características</Label>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => setEditingProperty(prev => ({
                              ...prev,
                              caracteristicas: CARACTERISTICAS_PREDEFINIDAS.join(", ")
                            }))}
                            className="text-xs"
                          >
                            Usar predeterminadas
                          </Button>
                        </div>
                        <Textarea
                          id="edit-caracteristicas"
                          value={editingProperty.caracteristicas || ''}
                          onChange={(e) => setEditingProperty(prev => ({ ...prev, caracteristicas: e.target.value }))}
                          placeholder="Aire acondicionado, Cocina integral, Jardín privado, Seguridad 24/7..."
                          rows={3}
                        />
                        <p className="text-xs text-gray-500">
                          Separa cada característica con una coma (,)
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="edit-servicios">Servicios y Comodidades</Label>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => setEditingProperty(prev => ({
                              ...prev,
                              servicios: SERVICIOS_PREDEFINIDOS.join(", ")
                            }))}
                            className="text-xs"
                          >
                            Usar predeterminados
                          </Button>
                        </div>
                        <Textarea
                          id="edit-servicios"
                          value={editingProperty.servicios || ''}
                          onChange={(e) => setEditingProperty(prev => ({ ...prev, servicios: e.target.value }))}
                          placeholder="Internet disponible, Electricidad, Agua potable, Zona segura..."
                          rows={3}
                        />
                        <p className="text-xs text-gray-500">
                          Separa cada servicio con una coma (,)
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="edit-imageUrl">URL de Imagen (opcional)</Label>
                        <Input
                          id="edit-imageUrl"
                          value={editingProperty.imageUrl}
                          onChange={(e) => setEditingProperty(prev => ({ ...prev, imageUrl: e.target.value }))}
                          placeholder="https://..."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-base font-semibold">Marcar como Destacada</Label>
                        <div className="flex items-center space-x-2">
                          <Switch
                            id="edit-featured"
                            checked={editingProperty.featured || false}
                            onCheckedChange={(checked) => setEditingProperty(prev => ({ ...prev, featured: checked }))}
                          />
                          <Label htmlFor="edit-featured">Propiedad destacada</Label>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-2 pt-4">
                        <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                          Cancelar
                        </Button>
                        <Button type="submit" className="bg-gold-600 hover:bg-gold-700">
                          Actualizar Propiedad
                        </Button>
                      </div>
                    </form>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Propiedad</TableHead>
                  <TableHead>Ubicación</TableHead>
                  <TableHead>Precio</TableHead>
                  <TableHead>Detalles</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userProperties.map((property) => (
                  <TableRow key={property.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-3">
                        <img
                          src={property.imageUrl}
                          alt={property.title}
                          className="w-12 h-12 rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => navigate(`/propiedad/${property.id}`, {
                            state: { from: 'admin' }
                          })}
                          title="Click para ver detalles"
                        />
                        <div>
                          <p
                            className="font-medium cursor-pointer hover:text-gold-600 transition-colors"
                            onClick={() => navigate(`/propiedad/${property.id}`, {
                              state: { from: 'admin' }
                            })}
                            title="Click para ver detalles"
                          >
                            {property.title}
                          </p>
                          <div className="text-sm text-gray-500 space-y-1">
                            <p>{property.createdAt}</p>
                            <div className="flex items-center space-x-2">
                              <span className="px-2 py-1 bg-gray-100 rounded text-xs">{property.propertyType}</span>
                              <span className="px-2 py-1 bg-gray-100 rounded text-xs">{property.condition}</span>
                              {property.featured && (
                                <span className="px-2 py-1 bg-gold-100 text-gold-800 rounded text-xs">Destacada</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{property.location}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">
                      {formatPrice(property.price, property.type)}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex space-x-3">
                          <div className="flex items-center space-x-1">
                            <Bed className="h-4 w-4" />
                            <span>{property.bedrooms}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Bath className="h-4 w-4" />
                            <span>{property.bathrooms}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Square className="h-4 w-4" />
                            <span>{property.area}m²</span>
                          </div>
                          {property.parking && (
                            <div className="flex items-center space-x-1">
                              <Car className="h-4 w-4" />
                              <span>{property.parking}</span>
                            </div>
                          )}
                        </div>
                        {property.yearBuilt && (
                          <div className="text-xs text-gray-500">
                            Construido: {property.yearBuilt}
                          </div>
                        )}
                        {property.caracteristicas && property.caracteristicas.length > 0 && (
                          <div className="text-xs text-gray-500">
                            {property.caracteristicas.length} características
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={property.status}
                        onValueChange={(value: Property['status']) => 
                          handleStatusChange(property.id, value)
                        }
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="disponible">Disponible</SelectItem>
                          <SelectItem value="vendida">Vendida</SelectItem>
                          <SelectItem value="alquilada">Alquilada</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Badge variant={property.type === 'venta' ? "default" : "secondary"}>
                        {property.type === 'venta' ? 'Venta' : 'Alquiler'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => navigate(`/propiedad/${property.id}`, {
                              state: { from: 'admin' }
                            })}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Ver Detalles
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleEditProperty(property)}
                          >
                            <Edit className="h-4 w-4 mr-2" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => handleDeleteProperty(property.id, property.title)}
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
            
            {userProperties.length === 0 && (
              <div className="text-center py-8">
                <Home className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No hay propiedades disponibles para gestionar</p>
                <p className="text-sm text-gray-500">Agrega una nueva propiedad al sistema</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PropertyManagement;