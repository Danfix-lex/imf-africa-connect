
import React, { useState } from "react";
import { Play, Users, Calendar, Clock, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface LiveStreamProps {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  streamUrl: string;
  startTime: string;
  viewerCount: number;
  isLive?: boolean;
  className?: string;
  isDetailed?: boolean;
  style?: React.CSSProperties;
}

const LiveStream: React.FC<LiveStreamProps> = ({
  id,
  title,
  description,
  thumbnailUrl,
  streamUrl,
  startTime,
  viewerCount,
  isLive = false,
  className,
  isDetailed = false,
  style,
}) => {
  const [playing, setPlaying] = useState(false);
  
  const handlePlay = () => {
    setPlaying(true);
  };
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <div 
      className={cn(
        "rounded-lg overflow-hidden border border-border transition-all duration-300 hover:shadow-lg bg-card",
        isDetailed ? "flex flex-col" : "h-full",
        className
      )}
      style={style}
    >
      <div className="relative">
        {/* Thumbnail or Video */}
        {playing && isLive ? (
          <div className="aspect-video w-full">
            <iframe
              src={`${streamUrl}?autoplay=1`}
              className="w-full h-full"
              allowFullScreen
              allow="autoplay; encrypted-media"
              title={title}
            />
          </div>
        ) : (
          <div className="aspect-video w-full relative group">
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all">
              {isLive ? (
                <Button 
                  onClick={handlePlay}
                  className="bg-primary/90 hover:bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center"
                >
                  <Play size={24} fill="white" />
                </Button>
              ) : (
                <div className="bg-primary/90 text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <Calendar size={24} />
                </div>
              )}
            </div>
            
            {/* Live Badge */}
            {isLive && (
              <Badge 
                className="absolute top-2 left-2 bg-red-500 text-white font-medium animate-pulse flex items-center gap-1"
                variant="default"
              >
                <span className="w-2 h-2 rounded-full bg-white inline-block"></span> LIVE
              </Badge>
            )}
            
            {/* Viewer Count Badge */}
            {isLive && (
              <Badge 
                className="absolute top-2 right-2 bg-black/70 text-white"
                variant="outline"
              >
                <Users size={14} className="mr-1" />
                {viewerCount.toLocaleString()}
              </Badge>
            )}
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold line-clamp-2 mb-2">{title}</h3>
        
        <p className={cn(
          "text-muted-foreground text-sm mb-4",
          isDetailed ? "" : "line-clamp-2"
        )}>
          {description}
        </p>
        
        <div className="mt-auto space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar size={16} className="mr-1" />
            <span>{formatDate(startTime)}</span>
          </div>
          
          {!isLive && (
            <Button 
              className="btn-primary w-full"
              variant="outline"
            >
              <Calendar size={16} className="mr-2" />
              Add to Calendar
            </Button>
          )}
          
          {isLive && !playing && (
            <Button 
              className="btn-primary w-full"
              onClick={handlePlay}
            >
              <Play size={16} className="mr-2" />
              Watch Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
