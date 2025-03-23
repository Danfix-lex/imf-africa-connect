import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, Users, Clock, Bell, Settings, Plus, PenSquare, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LiveStream from "@/components/LiveStream";
import ProgramCard from "@/components/ProgramCard";

const UserPlus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="19" x2="19" y1="8" y2="14" />
    <line x1="22" x2="16" y1="11" y2="11" />
  </svg>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth();
  
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, isLoading, navigate]);
  
  const isAdmin = user?.role === "admin";
  
  const myUpcomingPrograms = [
    {
      id: "1",
      title: "Annual Ministers' Conference 2023",
      description: "A three-day intensive conference for ministers to receive refreshing, impartation, and strategic direction for their ministries.",
      imageUrl: "https://images.unsplash.com/photo-1527153818091-1a9638521e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "2023-07-15",
      time: "9:00 AM - 5:00 PM",
      location: "Nairobi, Kenya",
      speaker: "Various Speakers",
    },
    {
      id: "2",
      title: "Leadership Development Workshop",
      description: "Equipping church leaders with practical tools and strategies for effective church management and growth.",
      imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "2023-08-05",
      time: "10:00 AM - 3:00 PM",
      location: "Lagos, Nigeria",
      speaker: "Dr. Samuel Adeyemi",
    },
  ];
  
  const savedStreams = [
    {
      id: "1",
      title: "Sunday Pastoral Conference: Leading with Vision",
      description: "Join our panel of experienced pastors as they discuss vision-driven leadership in the church context.",
      thumbnailUrl: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      startTime: "2023-06-10T15:00:00.000Z",
      viewerCount: 1234,
      isLive: true,
    },
    {
      id: "2",
      title: "Youth Ministry Workshop: Engaging Gen Z",
      description: "Learn effective strategies for connecting with and ministering to Generation Z in your church.",
      thumbnailUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      startTime: "2023-06-15T14:00:00.000Z",
      viewerCount: 0,
      isLive: false,
    },
  ];
  
  const notifications = [
    {
      id: "1",
      title: "New Live Stream",
      message: "A new live stream 'Prayer & Intercession Summit' is starting in 2 hours",
      time: "2 hours ago",
      read: false,
    },
    {
      id: "2",
      title: "Registration Confirmed",
      message: "Your registration for 'Annual Ministers' Conference 2023' has been confirmed",
      time: "1 day ago",
      read: true,
    },
    {
      id: "3",
      title: "New Program Added",
      message: "A new program 'Leadership Development Workshop' has been added",
      time: "2 days ago",
      read: true,
    },
  ];
  
  const adminUsers = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "user",
      registrationDate: "2023-01-15",
      lastActive: "2023-06-10",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "user",
      registrationDate: "2023-02-20",
      lastActive: "2023-06-09",
    },
    {
      id: "3",
      name: "Robert Johnson",
      email: "robert@example.com",
      role: "admin",
      registrationDate: "2023-03-10",
      lastActive: "2023-06-11",
    },
  ];
  
  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome, {user?.name}!</h1>
            <p className="text-muted-foreground">
              {isAdmin 
                ? "Manage your platform, users, and content from your admin dashboard." 
                : "Manage your IMF Africa account, programs, and streams from your dashboard."}
            </p>
          </div>
          
          {isAdmin && (
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button className="btn-primary">
                <Plus size={16} className="mr-2" />
                New Program
              </Button>
              <Button variant="outline">
                <Video size={16} className="mr-2" />
                New Stream
              </Button>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">My Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{myUpcomingPrograms.length}</p>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Saved Streams</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{savedStreams.length}</p>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{notifications.filter(n => !n.read).length}</p>
            </CardContent>
          </Card>
          
          {isAdmin && (
            <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{adminUsers.length}</p>
              </CardContent>
            </Card>
          )}
        </div>
        
        <Tabs defaultValue="programs" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="programs">My Programs</TabsTrigger>
            <TabsTrigger value="streams">Saved Streams</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            {isAdmin && <TabsTrigger value="users">Manage Users</TabsTrigger>}
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="programs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myUpcomingPrograms.map((program, index) => (
                <ProgramCard
                  key={program.id}
                  {...program}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                />
              ))}
              <Card className="border-dashed border-2 flex items-center justify-center h-full animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <Button variant="ghost" className="h-20 w-20 rounded-full">
                    <Plus size={30} />
                  </Button>
                  <p className="mt-2 text-muted-foreground">Browse More Programs</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="streams">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedStreams.map((stream, index) => (
                <LiveStream
                  key={stream.id}
                  {...stream}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                />
              ))}
              <Card className="border-dashed border-2 flex items-center justify-center h-full animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <Button variant="ghost" className="h-20 w-20 rounded-full">
                    <Plus size={30} />
                  </Button>
                  <p className="mt-2 text-muted-foreground">Browse More Streams</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {notifications.map((notification, index) => (
                    <div 
                      key={notification.id} 
                      className={`flex items-start p-4 rounded-lg ${notification.read ? 'bg-card' : 'bg-accent/20'} animate-fade-in`}
                      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    >
                      <div className="mr-4">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${notification.read ? 'bg-muted' : 'bg-primary/10'}`}>
                          <Bell size={20} className={notification.read ? 'text-muted-foreground' : 'text-primary'} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold">
                            {notification.title}
                            {!notification.read && (
                              <Badge variant="default" className="ml-2 bg-primary text-white">New</Badge>
                            )}
                          </h4>
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                        <p className="text-muted-foreground">{notification.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {isAdmin && (
            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Registered Users</CardTitle>
                    <Button className="btn-primary">
                      <UserPlus size={16} className="mr-2" />
                      Add User
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3">Name</th>
                          <th className="text-left p-3">Email</th>
                          <th className="text-left p-3">Role</th>
                          <th className="text-left p-3">Registration Date</th>
                          <th className="text-left p-3">Last Active</th>
                          <th className="text-left p-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {adminUsers.map((user, index) => (
                          <tr 
                            key={user.id} 
                            className="border-b animate-fade-in"
                            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                          >
                            <td className="p-3">{user.name}</td>
                            <td className="p-3">{user.email}</td>
                            <td className="p-3">
                              <Badge 
                                variant={user.role === "admin" ? "default" : "outline"}
                                className={user.role === "admin" ? "bg-primary" : ""}
                              >
                                {user.role}
                              </Badge>
                            </td>
                            <td className="p-3">{user.registrationDate}</td>
                            <td className="p-3">{user.lastActive}</td>
                            <td className="p-3">
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm">
                                  <PenSquare size={16} />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue={user?.name} className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" defaultValue={user?.email} className="mt-1" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Password</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" className="mt-1" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Notification Preferences</h3>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="email-notifications" />
                      <Label htmlFor="email-notifications">Receive email notifications</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="program-updates" />
                      <Label htmlFor="program-updates">Program updates and reminders</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="live-stream-notifications" />
                      <Label htmlFor="live-stream-notifications">Live stream notifications</Label>
                    </div>
                  </div>
                  
                  <Button className="btn-primary">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

const Label = ({ htmlFor, children }: { htmlFor: string, children: React.ReactNode }) => (
  <label htmlFor={htmlFor} className="text-sm font-medium">{children}</label>
);

const Input = ({ id, type = "text", defaultValue, className }: { id: string, type?: string, defaultValue?: string, className?: string }) => (
  <input
    id={id}
    type={type}
    defaultValue={defaultValue}
    className={`w-full rounded-md border border-input bg-background px-3 py-2 text-sm ${className || ""}`}
  />
);

const Checkbox = ({ id }: { id: string }) => (
  <input type="checkbox" id={id} className="rounded border-border" />
);

export default Dashboard;
