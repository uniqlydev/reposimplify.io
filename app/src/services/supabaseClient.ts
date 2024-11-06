import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.supabase_url;
const supabaseAnonKey = process.env.supabase_anon;

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
