import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://hzdmzuepguuwtxdqmgvb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6ZG16dWVwZ3V1d3R4ZHFtZ3ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNjAyODMsImV4cCI6MjA2NTYzNjI4M30.bFunIoTZd-Y6zrwV_fHR-ILOPBgybMKfvv-yxX7Wssw';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };