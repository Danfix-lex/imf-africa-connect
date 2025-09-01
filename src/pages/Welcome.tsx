import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Users, Calendar, Radio, Crown } from "lucide-react";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="relative">
              <h1 className="text-hero font-black bg-gradient-hero bg-clip-text text-transparent animate-glow">
                IMF Africa
              </h1>
              <div className="absolute inset-0 text-hero font-black bg-gradient-hero bg-clip-text text-transparent blur-2xl opacity-30">
                IMF Africa
              </div>
            </div>
            <p className="text-subheading font-semibold text-muted-foreground max-w-2xl mx-auto">
              International Ministers Forum Africa
            </p>
          </motion.div>

          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-heading font-bold text-foreground">
              Welcome to Our Community
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of ministers across Africa in fellowship, learning, and spiritual growth. 
              Access live streams, programs, leadership resources, and more.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Radio, label: "Live Streams", color: "text-primary" },
              { icon: Calendar, label: "Programs", color: "text-secondary" },
              { icon: Crown, label: "Leadership", color: "text-warning" },
              { icon: Users, label: "Community", color: "text-success" }
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                className="card-enhanced hover-lift group p-6 text-center"
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-body font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="pt-4"
          >
            <Link to="/auth">
              <Button 
                variant="premium"
                size="xl" 
                className="group text-lg font-bold tracking-wide"
              >
                Get Started Today
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>

          {/* Footer Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-body text-muted-foreground/80 pt-2"
          >
            Ready to join our community? Sign up or sign in to access your dashboard.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;