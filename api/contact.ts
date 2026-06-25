import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
    // 1. Základní CORS nastavení
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // 2. Kontrola proměnných (napíše do logů Vercelu, pokud chybí)
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
        console.error('CHYBA: Chybí Environment Variables ve Vercelu!');
        return res.status(500).json({ error: 'Server není správně nakonfigurován (chybí klíče).' });
    }

    // 3. Inicializace klienta
    const supabase = createClient(supabaseUrl, supabaseKey);

    try {
        const { error } = await supabase
            .from('contacts')
            .insert([req.body]);

        if (error) throw error;

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('Chyba při zápisu do Supabase:', err.message);
        return res.status(500).json({ error: err.message });
    }
}