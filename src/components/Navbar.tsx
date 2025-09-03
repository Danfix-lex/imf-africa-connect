import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; // Import NavigationMenu components
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  // ... (hooks and state remain the same)
  const { t } = useTranslation();

  return (
    <nav /* ... */>
      <div className="container-custom flex items-center justify-between">
        {/* ... (Logo remains the same) */}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/home" className={navigationMenuTriggerStyle()}>Home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[200px] lg:w-[250px]">
                    <ListItem to="/about" title="About Us">Our mission, vision, and leadership.</ListItem>
                    <ListItem to="/beliefs" title="Our Beliefs">Our core doctrines and statement of faith.</ListItem>
                    <ListItem to="/leadership" title="Leadership">Meet our executive board and leaders.</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/programs" className={navigationMenuTriggerStyle()}>Programs</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/live-streams" className={navigationMenuTriggerStyle()}>Live Streams</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/membership" className={navigationMenuTriggerStyle()}>Membership</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/prayer-requests" className={navigationMenuTriggerStyle()}>Prayer Wall</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* ... (Right side with Auth buttons remains the same) */}
      </div>
      {/* ... (Mobile Navigation needs to be updated similarly) */}
    </nav>
  );
};

// A helper component for the navigation dropdown
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <Link
        to={to}
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;