
import React from "react";
import { CalendarDays, Clock, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  time: string;
  location: string;
  speaker: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  date,
  time,
  location,
  speaker,
  className,
  style,
}) => {
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <div 
      className={cn(
        "card-enhanced hover-lift group overflow-hidden bg-gradient-card border-border/50",
        className
      )}
      style={style}
    >
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-heading line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-body line-clamp-3">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
          <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <CalendarDays size={16} className="mr-3 text-primary flex-shrink-0" />
            <span className="truncate">{formatDate(date)}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <Clock size={16} className="mr-3 text-primary flex-shrink-0" />
            <span className="truncate">{time}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <MapPin size={16} className="mr-3 text-primary flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <User size={16} className="mr-3 text-primary flex-shrink-0" />
            <span className="truncate">{speaker}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button className="btn-primary flex-1 hover-glow">
            Learn More
          </Button>
          <Button className="btn-outline flex-1">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
