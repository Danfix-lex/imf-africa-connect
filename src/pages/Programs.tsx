
import React, { useState } from "react";
import Layout from "@/components/Layout";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  SlidersHorizontal, 
  Calendar, 
  MapPin, 
  Users,
  BookOpen,
  UserPlus,
  HeartHandshake
} from "lucide-react";

const Programs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const featuredPrograms = [
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
      id: "4",
      title: "African Church Leadership Summit",
      description: "A summit focused on equipping church leaders with the tools needed to address the unique challenges faced by African churches.",
      imageUrl: "https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      date: "2023-08-10",
      time: "10:00 AM - 4:00 PM",
      location: "Accra, Ghana",
      speaker: "Dr. Michael Mensah",
    },
  ];
  
  const upcomingPrograms = [
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
    {
      id: "3",
      title: "Women in Ministry Summit",
      description: "Celebrating and empowering women in church leadership roles across the continent.",
      imageUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "2023-09-20",
      time: "9:00 AM - 4:00 PM",
      location: "Cape Town, South Africa",
      speaker: "Pastor Grace Mwangi",
    },
    {
      id: "5",
      title: "Youth Ministry Conference",
      description: "Strategies and tools for effective youth ministry in the African context.",
      imageUrl: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "2023-10-15",
      time: "10:00 AM - 5:00 PM",
      location: "Kampala, Uganda",
      speaker: "Pastor James Okoye",
    },
    {
      id: "6",
      title: "Church Planting Seminar",
      description: "Learn effective strategies for planting and growing new churches in various contexts.",
      imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      date: "2023-11-05",
      time: "9:00 AM - 3:00 PM",
      location: "Kigali, Rwanda",
      speaker: "Bishop Thomas Mwangi",
    },
  ];
  
  const pastPrograms = [
    {
      id: "7",
      title: "Ministers' Retreat 2023",
      description: "A time of spiritual refreshing and renewal for ministers from across the continent.",
      imageUrl: "https://images.unsplash.com/photo-1468392788711-903a924796dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "2023-03-10",
      time: "All Day",
      location: "Mombasa, Kenya",
      speaker: "Various Speakers",
    },
    {
      id: "8",
      title: "Biblical Studies Conference",
      description: "In-depth study of scripture with contextual application for African ministry contexts.",
      imageUrl: "https://images.unsplash.com/photo-1581404917879-53e19259fdda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      date: "2023-04-15",
      time: "9:00 AM - 4:00 PM",
      location: "Johannesburg, South Africa",
      speaker: "Dr. John Mbiti",
    },
    {
      id: "9",
      title: "Pastoral Care Workshop",
      description: "Practical training on providing effective pastoral care in various situations.",
      imageUrl: "https://images.unsplash.com/photo-1523803326055-13189e5ade15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "2023-05-20",
      time: "10:00 AM - 3:00 PM",
      location: "Cairo, Egypt",
      speaker: "Rev. Sarah Kimani",
    },
  ];
  
  // Filter programs based on search query
  const filterPrograms = (programs: any[]) => {
    if (!searchQuery) return programs;
    
    return programs.filter(program => 
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.speaker.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  
  const filteredFeaturedPrograms = filterPrograms(featuredPrograms);
  const filteredUpcomingPrograms = filterPrograms(upcomingPrograms);
  const filteredPastPrograms = filterPrograms(pastPrograms);
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Programs & Events</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Discover upcoming conferences, workshops, and events for ministers across Africa.
            Join us to learn, connect, and grow in your ministry.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              className="pl-10"
              placeholder="Search programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="md:w-auto">
            <SlidersHorizontal size={18} className="mr-2" />
            Filters
          </Button>
        </div>
        
        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Calendar, label: "Conferences" },
              { icon: BookOpen, label: "Workshops" },
              { icon: Users, label: "Retreats" },
              { icon: UserPlus, label: "Networking" },
              { icon: HeartHandshake, label: "Outreach" },
              { icon: MapPin, label: "Regional Events" },
            ].map((category, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="h-20 flex flex-col items-center justify-center gap-1 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <category.icon size={20} />
                <span>{category.label}</span>
              </Button>
            ))}
          </div>
        </div>
        
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Programs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="featured">
            {filteredFeaturedPrograms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFeaturedPrograms.map((program, index) => (
                  <ProgramCard
                    key={program.id}
                    {...program}
                    className="animate-fade-in"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No featured programs match your search.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="upcoming">
            {filteredUpcomingPrograms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUpcomingPrograms.map((program, index) => (
                  <ProgramCard
                    key={program.id}
                    {...program}
                    className="animate-fade-in"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No upcoming programs match your search.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past">
            {filteredPastPrograms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPastPrograms.map((program, index) => (
                  <ProgramCard
                    key={program.id}
                    {...program}
                    className="animate-fade-in"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No past programs match your search.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Programs;
