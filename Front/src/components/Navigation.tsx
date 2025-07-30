import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Propiedades", href: "/propiedades" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top contact bar */}
      <div className="hidden md:block bg-navy-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@inmobiliaria.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Ciudad, País</span>
              </div>
            </div>
            <div className="text-gold-400">
              Horarios: Lun-Vie 9:00-18:00, Sáb 10:00-14:00
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy-800">InmoEstado</h1>
              <p className="text-xs text-muted-foreground">Bienes Raíces</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground/60",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button size="sm" className="bg-gold-500 hover:bg-gold-600">
              Agendar Cita
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <Link
                  to="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-navy-800">
                      InmoEstado
                    </h1>
                    <p className="text-xs text-muted-foreground">
                      Bienes Raíces
                    </p>
                  </div>
                </Link>

                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary py-2",
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-foreground/60",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="space-y-4 pt-4 border-t">
                  <Button className="w-full bg-gold-500 hover:bg-gold-600">
                    Agendar Cita
                  </Button>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>info@inmobiliaria.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
