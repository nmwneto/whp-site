// Número de WhatsApp oficial da WHP.
// Formato: apenas dígitos, com código do país (55) + DDD (41) + número.
// (41) 99677-8867
export const WHATSAPP_NUMBER = '5541996778867';

// Mensagem pré-preenchida ao abrir a conversa.
export const WHATSAPP_MESSAGE = 'Olá! Vim pelo site da WHP e gostaria de conversar sobre um projeto.';

// URL única usada em todos os links de WhatsApp do site (botão flutuante, footer, CTAs, contato).
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
