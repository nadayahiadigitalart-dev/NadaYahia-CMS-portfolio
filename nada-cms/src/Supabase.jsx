import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://onqhkdkravpbxavtvlnc.supabase.co'
const supabaseKey = 'sb_publishable_O35fbJnISh3GH1ZyCOGQ-w_VvO-HOz6'

export const Supabase = createClient(supabaseUrl, supabaseKey)
