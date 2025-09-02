import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SubscriptionFormProps {
  className?: string;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!email) {
        toast({
          title: "Validation Error",
          description: "Please enter your email address",
          variant: "destructive",
        });
        return;
      }

      // Save email to subscriptions table
      const { error: subscriptionError } = await supabase
        .from('email_subscriptions')
        .insert({ email });

      if (subscriptionError) {
        if (subscriptionError.code === '23505') { // Unique constraint violation
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter",
            variant: "default",
          });
          setEmail('');
          return;
        }
        throw subscriptionError;
      }

      // Send welcome email
      const { error: emailError } = await supabase.functions.invoke('send-welcome-email', {
        body: { email }
      });

      if (emailError) {
        console.error('Error sending welcome email:', emailError);
        // Don't throw error for email sending - subscription was successful
      }

      toast({
        title: "Welcome!",
        description: "You've successfully subscribed to our newsletter. Check your email for a welcome message!",
        variant: "default",
      });

      setEmail('');
    } catch (error: any) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: error.message || "An error occurred while subscribing",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubscribe} className={`flex flex-col space-y-2 ${className || ''}`}>
      <input 
        type="email" 
        placeholder="Your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-md border-border bg-background px-3 py-2 text-sm"
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        className="btn-primary"
        disabled={isLoading}
      >
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
};

export default SubscriptionForm;