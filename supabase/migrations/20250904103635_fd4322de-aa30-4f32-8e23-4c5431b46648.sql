-- Fix RLS policies for subscription_attempts table to properly protect email addresses and IP addresses

-- First, ensure RLS is enabled on subscription_attempts table
ALTER TABLE public.subscription_attempts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to recreate them properly
DROP POLICY IF EXISTS "Only admins can view subscription attempts" ON public.subscription_attempts;

-- Create comprehensive RLS policies for subscription_attempts table

-- 1. Only allow service role (backend functions) to INSERT subscription attempts
-- This prevents direct client access while allowing the app to log attempts
CREATE POLICY "Service role can insert subscription attempts" 
ON public.subscription_attempts 
FOR INSERT 
WITH CHECK ((auth.jwt() ->> 'role'::text) = 'service_role'::text);

-- 2. Only admins can view subscription attempts (contains sensitive email/IP data)
CREATE POLICY "Only admins can view subscription attempts" 
ON public.subscription_attempts 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- 3. Only admins can update subscription attempts
CREATE POLICY "Only admins can update subscription attempts" 
ON public.subscription_attempts 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- 4. Only admins can delete subscription attempts
CREATE POLICY "Only admins can delete subscription attempts" 
ON public.subscription_attempts 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));