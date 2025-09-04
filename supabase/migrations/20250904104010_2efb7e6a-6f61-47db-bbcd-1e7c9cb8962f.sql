-- Fix RLS policies for member_resources table to restrict access to authenticated members only

-- Drop the overly permissive policy that allows anyone to view member resources
DROP POLICY IF EXISTS "Anyone can view member resources" ON public.member_resources;

-- Create a new policy that restricts access to authenticated users only
CREATE POLICY "Only authenticated users can view member resources" 
ON public.member_resources 
FOR SELECT 
TO authenticated
USING (true);

-- Keep the existing admin management policy (no changes needed)
-- Policy "Only admins can manage member resources" remains unchanged