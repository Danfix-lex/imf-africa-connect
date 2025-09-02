
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={cn(
      "relative min-h-[90vh] flex items-center justify-center overflow-hidden",
      className
    )}>
      {/* Background overlay with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/50 to-accent/5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1591637333145-e8c87c440873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      />
      
      <div className="container-custom relative z-10 pt-8 pb-16 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="animate-fade-in font-bold text-4xl md:text-6xl mb-6 leading-tight">
            International Ministers Forum <span className="text-primary">Africa</span>
          </h1>
          
          <p className="animate-fade-in text-lg md:text-xl text-foreground/80 mb-8 md:mb-10 leading-relaxed">
            Connecting ministers across Africa for spiritual growth, 
            fellowship, and empowerment to transform communities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Link to="/live-streams">
              <Button className="btn-primary py-6 px-8 text-base font-medium w-full sm:w-auto">
                Watch Live Streams
                <ChevronRight size={18} className="ml-1" />
              </Button>
            </Link>
            
            <Link to="/programs">
              <Button variant="outline" className="py-6 px-8 text-base font-medium w-full sm:w-auto">
                <Play size={18} className="mr-1" /> 
                Explore Programs
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
            {[
              { count: "1,000+", label: "Ministers" },
              { count: "30+", label: "Countries" },
              { count: "120+", label: "Events" },
              { count: "5,000+", label: "Community Members" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="glass rounded-lg p-4 flex flex-col items-center animate-scale-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.count}
                </span>
                <span className="text-sm md:text-base text-foreground/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
