import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import SocialAuthButtons from "@/components/auth/SocialAuthButtons";
import { Separator } from "@/components/ui/separator";

const Auth = () => {
  const navigate = useNavigate();
  const { login, register, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("login");
  
  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  
  // Register form state
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoginLoading(true);
    
    try {
      if (!loginForm.email || !loginForm.password) {
        toast({
          title: "Validation Error",
          description: "Please fill in all fields",
          variant: "destructive",
        });
        return;
      }
      
      const { error } = await login(loginForm.email, loginForm.password);
      
      if (error) {
        toast({
          title: "Login Failed",
          description: error,
          variant: "destructive",
        });
        return;
      }
      
      toast({
        title: "Success",
        description: "Login successful!",
        variant: "default",
      });
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        title: "Login Failed",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoginLoading(false);
    }
  };
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegisterLoading(true);
    
    try {
      if (!registerForm.name || !registerForm.email || !registerForm.password || !registerForm.confirmPassword) {
        toast({
          title: "Validation Error",
          description: "Please fill in all fields",
          variant: "destructive",
        });
        return;
      }
      
      if (registerForm.password !== registerForm.confirmPassword) {
        toast({
          title: "Validation Error",
          description: "Passwords do not match",
          variant: "destructive",
        });
        return;
      }
      
      const { error } = await register(registerForm.name, registerForm.email, registerForm.password);
      
      if (error) {
        toast({
          title: "Registration Failed",
          description: error,
          variant: "destructive",
        });
        return;
      }
      
      toast({
        title: "Success",
        description: "Please check your email to confirm your account!",
        variant: "default",
      });
      
      // Clear form after successful registration
      setRegisterForm({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (error: any) {
      console.error("Registration error:", error);
      toast({
        title: "Registration Failed",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsRegisterLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold">
            Welcome to IMF Africa
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {activeTab === "login" 
              ? "Sign in to access your account" 
              : "Register to join our ministerial community"}
          </p>
        </div>
        
        <div className="bg-card shadow-lg rounded-lg p-8 mt-8 animate-fade-in">
          <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 w-full mb-6">
              <TabsTrigger value="login">Sign In</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <SocialAuthButtons mode="login" />
              <div className="my-4"><Separator /></div>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    value={loginForm.email}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    value={loginForm.password}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={isLoginLoading}
                >
                  {isLoginLoading ? "Signing in..." : "Sign In"}
                </Button>
                
                <div className="text-sm text-center text-muted-foreground mt-4">
                  <p>
                    Don't have an account?{" "}
                    <button 
                      type="button"
                      onClick={() => setActiveTab("register")}
                      className="text-primary hover:underline"
                    >
                      Register
                    </button>
                  </p>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <SocialAuthButtons mode="register" />
              <div className="my-4"><Separator /></div>
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="John Doe" 
                    value={registerForm.name}
                    onChange={(e) => setRegisterForm(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input 
                    id="register-email" 
                    type="email" 
                    placeholder="you@example.com" 
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input 
                    id="register-password" 
                    type="password" 
                    placeholder="••••••••" 
                    value={registerForm.password}
                    onChange={(e) => setRegisterForm(prev => ({ ...prev, password: e.target.value }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input 
                    id="confirm-password" 
                    type="password" 
                    placeholder="••••••••" 
                    value={registerForm.confirmPassword}
                    onChange={(e) => setRegisterForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={isRegisterLoading}
                >
                  {isRegisterLoading ? "Registering..." : "Register"}
                </Button>
                
                <div className="text-sm text-center text-muted-foreground mt-4">
                  <p>
                    Already have an account?{" "}
                    <button 
                      type="button"
                      onClick={() => setActiveTab("login")}
                      className="text-primary hover:underline"
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          <p>
            By continuing, you agree to IMF Africa's{" "}
            <a href="#" className="text-primary hover:underline">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;