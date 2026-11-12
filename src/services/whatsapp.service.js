export function joinChannel(){window.open(window.ZUNE_CONFIG.whatsappChannel,"_blank","noopener,noreferrer");}
export function contactSupport(text=""){const base=window.ZUNE_CONFIG.whatsappContact;window.open(text?`${base}?text=${encodeURIComponent(text)}`:base,"_blank","noopener,noreferrer");}
