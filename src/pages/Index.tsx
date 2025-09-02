
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import LiveStream from "@/components/LiveStream";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Index = () => {
  const featuredStreams = [
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
    {
      id: "3",
      title: "Prayer & Intercession Summit",
      description: "A powerful time of prayer and intercession for nations, leaders, and communities across Africa.",
      thumbnailUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      startTime: "2023-06-20T16:00:00.000Z",
      viewerCount: 0,
      isLive: false,
    },
  ];
  
  const upcomingPrograms = [
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
  ];
  
  return (
    <Layout fullWidth withoutFooter={false}>
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-primary font-medium mb-2">About IMF Africa</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Uniting Ministers Across Africa</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The International Ministers Forum (IMF) Africa is a premier platform that connects 
                ministers across the African continent. We provide resources, networking opportunities, 
                and spiritual enrichment to help ministers effectively lead their congregations and 
                impact their communities.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Through our various programs, conferences, and online resources, we are committed to 
                supporting the spiritual and professional growth of ministers throughout Africa.
              </p>
              <Button className="btn-primary">Learn More About Us</Button>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Ministers Conference" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-lg p-6 shadow-lg hidden md:block">
                <p className="text-white font-semibold text-xl">20+ Years</p>
                <p className="text-white/80 text-sm">Serving Ministers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Live Streams Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <p className="text-primary font-medium mb-2">Watch & Learn</p>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Live Streams</h2>
            </div>
            <Link to="/live-streams" className="mt-4 md:mt-0">
              <Button variant="ghost" className="flex items-center">
                View All Streams
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredStreams.map((stream, index) => (
              <LiveStream 
                key={stream.id}
                {...stream}
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <p className="text-primary font-medium mb-2">Upcoming Events</p>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Programs</h2>
            </div>
            <Link to="/programs" className="mt-4 md:mt-0">
              <Button variant="ghost" className="flex items-center">
                View All Programs
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {upcomingPrograms.map((program, index) => (
              <ProgramCard 
                key={program.id}
                {...program}
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Ministerial Community</h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
            Connect with thousands of ministers across Africa. Share experiences, 
            resources, and grow together in your ministry journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/auth">
              <Button className="bg-white text-primary hover:bg-white/90 py-6 px-8 text-base font-medium w-full sm:w-auto">
                Register Now
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 py-6 px-8 text-base font-medium w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer is included via the Layout component */}
    </Layout>
  );
};

export default Index;
