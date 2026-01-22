import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
    "https://vcyeovgvzsfvytlrwqnc.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ??
    "sb_publishable_ocAz8iWY8zmxShyAFrgzMw_s0IB_1ef",
);

export default supabase;
