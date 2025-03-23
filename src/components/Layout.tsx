
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
  fullWidth?: boolean;
  withoutFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className,
  containerClass,
  fullWidth = false,
  withoutFooter = false,
}) => {
  const location = useLocation();
  
  // Add padding top to account for the fixed navbar
  const isAuthPage = location.pathname === "/auth";
  
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      {!isAuthPage && <Navbar />}
      
      <main className={cn(
        "flex-1",
        !isAuthPage && "pt-20", // Add padding for the navbar
        containerClass
      )}>
        {fullWidth ? (
          children
        ) : (
          <div className="container-custom py-8 md:py-12">
            {children}
          </div>
        )}
      </main>
      
      {!withoutFooter && <Footer />}
    </div>
  );
};

export default Layout;
