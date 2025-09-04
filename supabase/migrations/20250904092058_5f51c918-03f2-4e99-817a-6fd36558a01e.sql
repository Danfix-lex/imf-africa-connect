-- Create prayer_requests table
CREATE TABLE public.prayer_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  request TEXT NOT NULL,
  is_public BOOLEAN NOT NULL DEFAULT false,
  is_answered BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.prayer_requests ENABLE ROW LEVEL SECURITY;

-- Create policies for prayer_requests
CREATE POLICY "Anyone can view public prayer requests" 
ON public.prayer_requests 
FOR SELECT 
USING (is_public = true);

CREATE POLICY "Anyone can insert prayer requests" 
ON public.prayer_requests 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Only admins can manage all prayer requests" 
ON public.prayer_requests 
FOR ALL 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create member_resources table
CREATE TABLE public.member_resources (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT,
  file_type TEXT,
  file_size BIGINT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.member_resources ENABLE ROW LEVEL SECURITY;

-- Create policies for member_resources
CREATE POLICY "Anyone can view member resources" 
ON public.member_resources 
FOR SELECT 
USING (true);

CREATE POLICY "Only admins can manage member resources" 
ON public.member_resources 
FOR ALL 
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updating updated_at
CREATE TRIGGER update_prayer_requests_updated_at
BEFORE UPDATE ON public.prayer_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_member_resources_updated_at
BEFORE UPDATE ON public.member_resources
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();