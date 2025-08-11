import React from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Props = {
  mode?: "login" | "register";
};

const SocialAuthButtons: React.FC<Props> = ({ mode }) => {
  const { toast } = useToast();

  const handleOAuth = async (provider: "google" | "apple") => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (error) throw error;
    } catch (e: any) {
      toast({
        title: "Authentication error",
        description: e?.message || "Unable to sign in. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-3">
      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={() => handleOAuth("google")}
        aria-label="Continue with Google"
      >
        Continue with Google
      </Button>
      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={() => handleOAuth("apple")}
        aria-label="Continue with Apple"
      >
        Continue with Apple
      </Button>
    </div>
  );
};

export default SocialAuthButtons;
