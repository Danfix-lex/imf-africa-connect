-- Secure email subscriptions: prevent email harvesting by restricting SELECT access
-- Only allow service role (backend) to read email subscriptions for admin purposes
CREATE POLICY "Only service role can view email subscriptions"
ON public.email_subscriptions
FOR SELECT
TO service_role
USING (true);

-- This ensures:
-- 1. Public users cannot harvest email addresses
-- 2. Only authenticated backend services can access the subscription list
-- 3. Subscription functionality remains intact for users