
import React, { useState } from "react";
import Layout from "@/components/Layout";
import LiveStream from "@/components/LiveStream";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, SlidersHorizontal } from "lucide-react";

const LiveStreams = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const liveStreams = [
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
      id: "4",
      title: "Worship Leaders Workshop",
      description: "Learn effective techniques and spiritual principles for leading worship in your church.",
      thumbnailUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      startTime: "2023-06-11T16:00:00.000Z",
      viewerCount: 567,
      isLive: true,
    },
  ];
  
  const upcomingStreams = [
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
    {
      id: "5",
      title: "Church Leadership Conference",
      description: "A comprehensive conference covering various aspects of church leadership and management.",
      thumbnailUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      startTime: "2023-06-25T10:00:00.000Z",
      viewerCount: 0,
      isLive: false,
    },
    {
      id: "6",
      title: "Marriage & Family Counseling",
      description: "Essential principles for counseling couples and families in your ministry.",
      thumbnailUrl: "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      startTime: "2023-06-30T13:00:00.000Z",
      viewerCount: 0,
      isLive: false,
    },
  ];
  
  const pastStreams = [
    {
      id: "7",
      title: "Financial Management for Churches",
      description: "Best practices for managing church finances, budgeting, and financial transparency.",
      thumbnailUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      startTime: "2023-05-15T15:00:00.000Z",
      viewerCount: 1892,
      isLive: false,
    },
    {
      id: "8",
      title: "African Church History Seminar",
      description: "Exploring the rich history of Christianity in Africa and its unique contributions to global Christianity.",
      thumbnailUrl: "https://images.unsplash.com/photo-1603688042573-28186df43d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      startTime: "2023-05-20T14:00:00.000Z",
      viewerCount: 2153,
      isLive: false,
    },
    {
      id: "9",
      title: "Effective Sermon Preparation",
      description: "Methods and tools for preparing impactful, scripture-based sermons for your congregation.",
      thumbnailUrl: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      startTime: "2023-05-25T16:00:00.000Z",
      viewerCount: 1765,
      isLive: false,
    },
  ];
  
  // Filter streams based on search query
  const filterStreams = (streams: any[]) => {
    if (!searchQuery) return streams;
    
    return streams.filter(stream => 
      stream.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stream.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  
  const filteredLiveStreams = filterStreams(liveStreams);
  const filteredUpcomingStreams = filterStreams(upcomingStreams);
  const filteredPastStreams = filterStreams(pastStreams);
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Live Streams</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Watch live and recorded sessions from our conferences, workshops, and events.
            Learn from experienced ministers and church leaders from across Africa.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              className="pl-10"
              placeholder="Search streams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="md:w-auto">
            <SlidersHorizontal size={18} className="mr-2" />
            Filters
          </Button>
        </div>
        
        <Tabs defaultValue="live" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="live">Live Now</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Streams</TabsTrigger>
          </TabsList>
          
          <TabsContent value="live">
            {filteredLiveStreams.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLiveStreams.map((stream, index) => (
                  <LiveStream
                    key={stream.id}
                    {...stream}
                    className="animate-fade-in"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No live streams match your search.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="upcoming">
            {filteredUpcomingStreams.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUpcomingStreams.map((stream, index) => (
                  <LiveStream
                    key={stream.id}
                    {...stream}
                    className="animate-fade-in"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No upcoming streams match your search.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past">
            {filteredPastStreams.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPastStreams.map((stream, index) => (
                  <LiveStream
                    key={stream.id}
                    {...stream}
                    className="animate-fade-in"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No past streams match your search.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default LiveStreams;
