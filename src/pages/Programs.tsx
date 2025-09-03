// src/pages/Programs.tsx

import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import ProgramCard from "@/components/ProgramCard";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Programs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [programs, setPrograms] = useState<any[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const { data, error } = await supabase
        .from("programs")
        .select("*, media(file_url)");
      if (data) {
        const formattedPrograms = data.map((program) => ({
          id: program.id,
          title: program.title,
          description: program.description,
          imageUrl: program.media[0]?.file_url
            ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/media/${program.media[0]?.file_url}`
            : "/placeholder.svg",
          date: program.date,
          time: new Date(program.date).toLocaleTimeString(),
          location: "Online", // This can be updated later
          speaker: "IMF Africa", // This can be updated later
        }));
        setPrograms(formattedPrograms);
      }
    };
    fetchPrograms();
  }, []);

  // Filter programs based on search query
  const filteredPrograms = programs.filter(
    (program) =>
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Programs & Events</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Discover upcoming conferences, workshops, and events for ministers
            across Africa. Join us to learn, connect, and grow in your
            ministry.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <Input
              className="pl-10"
              placeholder="Search programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program, index) => (
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
            <p className="text-muted-foreground">
              No programs match your search.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Programs;