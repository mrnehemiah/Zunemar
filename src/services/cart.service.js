import {supabase} from "./supabase.service.js";
import {listDemo,setDemo} from "./storage.service.js";
const keyFor = userId => `cart:${userId || "guest"}`;
const validQuantity = value => Math.max(1, Math.min(99, Math.floor(Number(value) || 1)));
export async function getCart(userId){
 if(!supabase)return listDemo(keyFor(userId));
 if(!userId) return [];
 const {data,error}=await supabase.from("cart_items").select("id,user_id,product_id,quantity,products(id,title,price,image_url,stock_quantity,vendor_id)").eq("user_id",userId).order("created_at",{ascending:false});
 if(error)throw error;return data||[];
}
export async function addToCart(userId,productId,quantity=1){
 if(!productId) throw new Error("Bidhaa haijachaguliwa.");
 const amount=validQuantity(quantity);
 if(!supabase){const key=keyFor(userId);const rows=listDemo(key);const found=rows.find(x=>String(x.product_id)===String(productId));if(found)found.quantity=validQuantity(found.quantity+amount);else rows.push({id:"local-"+crypto.randomUUID(),user_id:userId||null,product_id:productId,quantity:amount});setDemo(key,rows);return rows;}
 if(!userId) throw new Error("Ingia kwanza ili kuhifadhi kikapu chako.");
 const {data:found,error:lookupError}=await supabase.from("cart_items").select("id,quantity").eq("user_id",userId).eq("product_id",productId).maybeSingle();
 if(lookupError)throw lookupError;
 if(found){const {error}=await supabase.from("cart_items").update({quantity:validQuantity(found.quantity+amount)}).eq("id",found.id).eq("user_id",userId);if(error)throw error;}
 else{const {error}=await supabase.from("cart_items").insert({user_id:userId,product_id:productId,quantity:amount});if(error)throw error;}return true;
}
export async function removeCartItem(id,userId){
 if(!supabase){const key=keyFor(userId);setDemo(key,listDemo(key).filter(x=>x.id!==id));return true;}
 if(!userId) throw new Error("Ingia kwanza.");
 const {error}=await supabase.from("cart_items").delete().eq("id",id).eq("user_id",userId);if(error)throw error;return true;
}
export async function clearCart(userId){
 if(!supabase){setDemo(keyFor(userId),[]);return true;}
 if(!userId) throw new Error("Ingia kwanza.");
 const {error}=await supabase.from("cart_items").delete().eq("user_id",userId);if(error)throw error;return true;
}
