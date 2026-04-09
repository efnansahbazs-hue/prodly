import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  const missing = [
    !supabaseUrl && "VITE_SUPABASE_URL",
    !supabaseAnonKey && "VITE_SUPABASE_ANON_KEY",
  ]
    .filter(Boolean)
    .join(", ");
  console.error(
    `[Supabase] Missing environment variable(s): ${missing}. Uygulama Supabase'e baġlanamıyor.`
  );
  throw new Error(
    `Missing Supabase environment variable(s): ${missing}. Vercel'de VITE_SUPABASE_URL ve VITE_SUPABASE_ANON_KEY tanımlı olduğundan emin olun.`
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
