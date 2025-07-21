import React from "react";
import { Mail, MapPin, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface Leader {
  id: string;
  name: string;
  position: string;
  imageUrl: string;
  bio?: string;
}

interface LeaderCardProps {
  leader: Leader;
  className?: string;
  style?: React.CSSProperties;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ leader, className, style }) => {
  return (
    <div 
      className={cn(
        "group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border",
        className
      )}
      style={style}
    >
      <div className="relative overflow-hidden">
        <img
          src={leader.imageUrl}
          alt={leader.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover overlay with contact info */}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center gap-3 text-white">
            <button className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
              <Mail size={18} />
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
              <Award size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {leader.name}
        </h3>
        
        <p className="text-primary font-medium mb-3">
          {leader.position}
        </p>
        
        {leader.bio && (
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {leader.bio}
          </p>
        )}

        {/* Card actions */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin size={14} className="mr-1" />
              <span>Africa</span>
            </div>
            <button className="text-sm text-primary hover:underline font-medium">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;