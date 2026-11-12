import {supabase} from "./supabase.service.js";
const answers=[
{keys:["seller","muuzaji","kuuza","duka"],text:"Ili uwe muuzaji, fungua Account kisha chagua “Become a Seller”. Jaza taarifa za duka na subiri idhini ya ZUNE PREMIUM ADMIN."},
{keys:["order","oda","agizo"],text:"Unaweza kufuatilia oda zako kwenye Account → My Orders."},
{keys:["verified","uthibitisho","badge"],text:"Badge ya blue ni ya maduka yaliyothibitishwa. Badge ya gold ni ya wanunuzi waliothibitishwa. Hali hutoka Supabase na idhini ya ZUNE PREMIUM ADMIN."},
{keys:["cart","kikapu"],text:"Bonyeza Add to Cart kwenye bidhaa, kisha fungua Cart kwenye navigation ya chini."},
{keys:["whatsapp","channel"],text:"Unaweza kujiunga na ZUNE WhatsApp Channel kupitia kitufe cha “Jiunge WhatsApp Channel”."},
{keys:["payment","malipo","lipa"],text:"Kwa sasa checkout inatuma ombi la oda tu; haichukui malipo."},
{keys:["account","akaunti","login","ingia"],text:"Fungua Account ili kuingia, kujisajili, kubadilisha taarifa zako au kuona oda zako."}
];
export async function askZuneAI(question){
 const q=String(question||"").trim().slice(0,1200);
 if(!q) return "Tafadhali andika swali lako.";
 if(supabase){
  try{
   const {data,error}=await supabase.functions.invoke("zune-ai-assistant",{body:{question:q}});
   if(!error && data?.reply) return String(data.reply);
  }catch(err){console.warn("ZUNE AI unavailable",err);}
 }
 const normalized=q.toLowerCase();
 const hit=answers.find(a=>a.keys.some(k=>normalized.includes(k)));
 return hit?.text||"ZUNE AI online haijawezeshwa kikamilifu bado. Naweza kusaidia kuhusu bidhaa, akaunti, oda, kuwa muuzaji, verification na WhatsApp.";
}
