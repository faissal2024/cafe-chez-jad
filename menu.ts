// Single source of truth: edit prices and products here.
export type Item = { fr: string; ar: string; price?: number };
export type Category = {
  id: string; icon: "coffee" | "citrus" | "glass" | "droplet" | "cookie" | "wheat";
  fr: string; ar: string; categoryPrice?: number; items: Item[];
};
export const CURRENCY = "DH";
export const menu: Category[] = [
  { id: "cafes", icon: "coffee", fr: "Cafés", ar: "القهوة", categoryPrice: 12, items: [
    { fr: "Espresso", ar: "إسبريسو" }, { fr: "Café Noir", ar: "قهوة سوداء" },
    { fr: "Café Crème", ar: "قهوة بالكريمة" }, { fr: "Cappuccino", ar: "كابتشينو" },
    { fr: "Café au Lait", ar: "قهوة بالحليب" }, { fr: "Café Américain", ar: "قهوة أمريكية" } ] },
  { id: "jus", icon: "citrus", fr: "Jus", ar: "العصائر", items: [
    { fr: "Jus de Pomme", ar: "عصير التفاح", price: 15 }, { fr: "Jus de Citron", ar: "عصير الليمون", price: 15 },
    { fr: "Jus de Banane", ar: "عصير الموز", price: 15 }, { fr: "Panaché", ar: "باناشي", price: 20 },
    { fr: "Jus d’Avocat", ar: "عصير الأفوكا", price: 20 } ] },
  { id: "boissons", icon: "glass", fr: "Boissons fraîches", ar: "المشروبات الباردة", items: [
    { fr: "Orangina", ar: "أورنجينا", price: 20 }, { fr: "Soda", ar: "صودا", price: 12 },
    { fr: "Oulmès", ar: "أولماس", price: 15 }, { fr: "Schweppes Tonic", ar: "شويبس تونيك", price: 15 },
    { fr: "Schweppes Citron", ar: "شويبس ليمون", price: 15 } ] },
  { id: "eaux", icon: "droplet", fr: "Eaux", ar: "المياه", items: [
    { fr: "Petite bouteille d’eau", ar: "قنينة ماء صغيرة", price: 3 },
    { fr: "Grande bouteille d’eau", ar: "قنينة ماء كبيرة", price: 5 } ] },
  { id: "snacks", icon: "cookie", fr: "Snacks salés", ar: "المملحات", items: [
    { fr: "Mmelhat / Snacks salés", ar: "المملحات", price: 5 } ] },
  { id: "biscuits", icon: "wheat", fr: "Biscuits", ar: "البسكويت", items: [
    { fr: "Biscuits", ar: "البسكويت", price: 5 } ] },
];
export const ui = {
  fr: { title: "Bienvenue chez Café Chez Jad", sub: "Découvrez notre carte et laissez-vous tenter.", all: "Tous les cafés", same: "Tous nos cafés", thanks: "Merci de votre visite. À très bientôt !", cats: "Catégories" },
  ar: { title: "مرحباً بكم في Café Chez Jad", sub: "اكتشفوا قائمتنا واستمتعوا بمشروباتكم.", all: "", same: "جميع أنواع القهوة", thanks: "شكراً لزيارتكم. نراكم قريباً!", cats: "الفئات" },
} as const;
