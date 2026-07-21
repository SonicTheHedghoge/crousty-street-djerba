"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Flame, Sparkles, Filter, CheckCircle2, ChevronRight, X, Heart } from "lucide-react";

interface MenuSectionProps {
  currentLang: "fr" | "en" | "ar";
  currency: "DT" | "EUR";
  onOpenBooking: () => void;
}

export interface MenuItem {
  id: string;
  category: "seafood" | "djerbi" | "grill" | "starters" | "drinks";
  name: { fr: string; en: string; ar: string };
  desc: { fr: string; en: string; ar: string };
  priceDT: number;
  image: string;
  badge?: { fr: string; en: string; ar: string };
  spicy?: boolean;
  featured?: boolean;
  prepTime?: string;
  ingredients?: string[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "gargoulette-agneau",
    category: "djerbi",
    name: {
      fr: "Agneau en Gargoulette Djerbienne",
      en: "Traditional Djerbian Lamb Gargoulette",
      ar: "قرقولة لحم الضأن الجربية الأصيلة",
    },
    desc: {
      fr: "Jarret d'agneau fondant mijoté au four d'argile avec tomates, piments doux, romarin sauvage et épices djerbiennes. Cassé à votre table.",
      en: "Tender lamb shank slow-cooked in clay jar with sun-ripened tomatoes, peppers, wild rosemary, and secret Djerbian spices. Broken live at your table.",
      ar: "لحم ضأن طري مطهو بطريقة تقليدية في الفخار مع الطماطم والفلفل والإكليل والتوابل الجربية المميزة. يُكسر أمامكم على الطاولة.",
    },
    priceDT: 48,
    image: "/images/gargoulette.jpg",
    badge: { fr: "Spécialité Phare", en: "House Specialty", ar: "الأكثر طلباً" },
    featured: true,
    ingredients: ["Agneau frais local", "Poivrons", "Tomates fraiches", "Épices Djerbiennes", "Huile d'olive extra vierge"],
  },
  {
    id: "plateau-royal-mer",
    category: "seafood",
    name: {
      fr: "Grand Plateau Royal de la Mer",
      en: "Royal Seafood Platter Flamant Rose",
      ar: "طبق الملكي الكبير للمأكولات البحرية",
    },
    desc: {
      fr: "Daurade sauvage grillée, loups de mer, grandes crevettes royales, tentacules de poulpe mariné au citron et calamars dorés.",
      en: "Grilled wild sea bream, seabass, jumbo king prawns, marinated octopus tentacles, and golden fried calamari served with garlic butter.",
      ar: "تشكيلة من سمك الوراطة والبحر المشوي، الجمبري الملكي الكبير، الأخطبوط المتبل بالكليمون، والكلمار الذهبي.",
    },
    priceDT: 75,
    image: "/images/seafood.jpg",
    badge: { fr: "Pêche du Jour", en: "Fresh Catch", ar: "صيد اليوم" },
    featured: true,
    ingredients: ["Daurade", "Crevettes géantes", "Poulpe djerbien", "Calamars", "Citron vert & Beurre d'ail"],
  },
  {
    id: "couscous-poisson-djerba",
    category: "djerbi",
    name: {
      fr: "Couscous au Poisson de Djerba",
      en: "Djerbian Fresh Fish Couscous",
      ar: "كسكسي بالسمك على الطريقة الجربية",
    },
    desc: {
      fr: "Semoule fine cuite à la vapeur aromatisée, pavé de mérou ou loup de mer, piments frits, potiron et fenouil sauvage.",
      en: "Steamed fine couscous flavored with fish broth, grouper or seabass fillet, fried green peppers, pumpkin, and wild fennel.",
      ar: "كسكسي رفيع مبخر بمرق السمك، فيليه المناني أو سمك قاروص، فلفل مقلي، قرع عسلي وشمار بري.",
    },
    priceDT: 42,
    image: "/images/gargoulette.jpg",
    badge: { fr: "Traditionnel", en: "Authentic", ar: "تقليدي أصيل" },
    ingredients: ["Semoule de blé dur", "Mérou / Loup", "Piments", "Potiron", "Épices couscous"],
  },
  {
    id: "daurade-grillee",
    category: "seafood",
    name: {
      fr: "Daurade Royale Grillée au Bois",
      en: "Wood-Grilled Wild Sea Bream",
      ar: "سمك الوراطة المشوي على الفحم",
    },
    desc: {
      fr: "Daurade entière de 600g grillée sur braises au romarin, servie avec frites maison, salade méchouia et sauce tchouktchouka.",
      en: "Whole 600g sea bream charcoal grilled with rosemary, served with fresh hand-cut fries, Mechouia salad, and spicy dip.",
      ar: "سمكة وراطة كاملة مشوية على الفحم بالإكليل، تقدم مع بطاطس مقلية، سلطة مشوية وصلصة طازجة.",
    },
    priceDT: 38,
    image: "/images/seafood.jpg",
    ingredients: ["Daurade sauvage", "Romarin", "Salade Méchouia", "Frites artisanales"],
  },
  {
    id: "ojja-crevettes-royales",
    category: "djerbi",
    name: {
      fr: "Ojja aux Crevettes Royales & Œufs",
      en: "Royal Prawns & Spicy Egg Ojja",
      ar: "عجة بالجمبري الملكي والبيض",
    },
    desc: {
      fr: "Sauce tomate pimentée mijotée à l'ail, harissa arbi maison, crevettes royales décortiquées et œufs pochés fondants.",
      en: "Spicy tomato garlic stew infused with artisanal harissa, shell-on king prawns, and soft poached eggs.",
      ar: "صلصة طماطم متبلة بالثوم والهريسة العربي، جمبري ملكي طازج مع بيض عيون.",
    },
    priceDT: 34,
    image: "/images/seafood.jpg",
    spicy: true,
    ingredients: ["Crevettes royales", "Harissa Arbi", "Œufs fermiers", "Tomate & Ail"],
  },
  {
    id: "fillet-boeuf-grille",
    category: "grill",
    name: {
      fr: "Filet de Bœuf au Poivre Vert & Champignons",
      en: "Grilled Beef Tenderloin Green Peppercorn",
      ar: "فيليه بقر مشوي بالفلفل الأخضر والمشروم",
    },
    desc: {
      fr: "Cœur de filet tendre saisi à la perfection, sauce crémée au poivre vert frais, écrasé de pommes de terre à l'huile d'olive.",
      en: "Prime beef tenderloin seared to your liking, green peppercorn cream sauce, olive oil crushed potatoes.",
      ar: "قطعة فيليه بقر طرية مشوية، صلصة الكريمة بالفلفل الأخضر، وبطاطس مهروسة بزيت الزيتون.",
    },
    priceDT: 46,
    image: "/images/hero.jpg",
    ingredients: ["Filet de Bœuf", "Poivre vert", "Crème fraîche", "Pommes de terre"],
  },
  {
    id: "brick-djerbienne-oeuf-thon",
    category: "starters",
    name: {
      fr: "Brick Djerbienne au Thon & Œuf Coulant",
      en: "Crispy Djerbian Tuna & Runny Egg Brik",
      ar: "بريكة جربية بالتونة والبيض",
    },
    desc: {
      fr: "Feuille de malsouka croustillante dorée, farce au thon de Méditerranée, câpres, persil et cœur d'œuf coulant.",
      en: "Golden crispy pastry sheet stuffed with wild Mediterranean tuna, capers, parsley, and melted egg yolk.",
      ar: "ورقة ملسوقة مقرمشة محشوة بالتونة الممتازة، الكبر، البقدونس وبيض ناعم.",
    },
    priceDT: 12,
    image: "/images/terrace.jpg",
    ingredients: ["Feuille de Malsouka", "Thon", "Œuf", "Câpres & Persil", "Citron"],
  },
  {
    id: "salade-mechouia-poulpe",
    category: "starters",
    name: {
      fr: "Salade Méchouia au Poulpe Grillé",
      en: "Grilled Octopus & Mechouia Salad",
      ar: "سلطة مشوية بالأخطبوط المشوي",
    },
    desc: {
      fr: "Poivrons et tomates grillés au feu de bois pilonnés à la main, tentacules de poulpe grillé, œuf dur et huile d'olive vierge.",
      en: "Hand-mashed charcoal roasted peppers and tomatoes, topped with tender grilled octopus, boiled egg, and virgin olive oil.",
      ar: "فلفل وطماطم مشوية على الفحم، أخطبوط مشوي طري، بيض مسلوق وزيت زيتون بكر.",
    },
    priceDT: 22,
    image: "/images/terrace.jpg",
    ingredients: ["Poivrons grillés", "Poulpe", "Huile d'olive djerbienne", "Thon & Œufs"],
  },
  {
    id: "cocktail-flamant-rose",
    category: "drinks",
    name: {
      fr: "Cocktail Signature 'Flamant Rose'",
      en: "Signature 'Flamant Rose' Tropical Elixir",
      ar: "كوكتيل الفلامان روز المميز",
    },
    desc: {
      fr: "Nectar de grenade frais, jus de pamplemousse rose, sirop d'hibiscus fait maison, menthe fraîche et pignons de pin.",
      en: "Fresh pomegranate nectar, pink grapefruit, homemade hibiscus syrup, fresh mint, and toasted pine nuts.",
      ar: "عصير رمان طازج، ليمون هندي وردي، شراب الكركديه المنزلي، نعناع طازج وصنوبر.",
    },
    priceDT: 16,
    image: "/images/cocktail.jpg",
    badge: { fr: "Incontournable", en: "Must Try", ar: "مشروبنا الخاص" },
    featured: true,
    ingredients: ["Grenade", "Pamplemousse rose", "Hibiscus", "Menthe fraîche", "Pignons"],
  },
  {
    id: "the-menthe-pignons",
    category: "drinks",
    name: {
      fr: "Thé Vert à la Menthe & Pignons Dorés",
      en: "Traditional Mint Tea with Pine Nuts",
      ar: "شاي أخضر بالنعناع والصنوبر",
    },
    desc: {
      fr: "Thé vert tunisien mijoté à la menthe fraîche parfumée, servi dans la tradition djerbienne avec pignons torréfiés.",
      en: "Classic brew of green tea infused with fresh mint leaves, generously topped with toasted pine nuts.",
      ar: "شاي أخضر تونسي مطهو بالنعناع الفواح، يقدم على الطريقة الجربية مع الصنوبر المحمص.",
    },
    priceDT: 8,
    image: "/images/cocktail.jpg",
    ingredients: ["Thé vert", "Menthe fraîche", "Pignons de pin", "Sucre pur"],
  },
];

export default function MenuSection({ currentLang, currency, onOpenBooking }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Conversion rate: 1 EUR = ~3.35 TND
  const formatPrice = (priceDT: number) => {
    if (currency === "EUR") {
      const priceEUR = (priceDT / 3.35).toFixed(1);
      return `${priceEUR} €`;
    }
    return `${priceDT} DT`;
  };

  const categories = [
    { id: "all", label: { fr: "Tous les Plats", en: "All Dishes", ar: "جميع الأطباق" } },
    { id: "seafood", label: { fr: "Poissons & Mer", en: "Seafood", ar: "مأكولات بحرية" } },
    { id: "djerbi", label: { fr: "Spécialités Djerba", en: "Djerbian Specials", ar: "أطباق جربية" } },
    { id: "grill", label: { fr: "Grillades & Tajines", en: "Grills & Tajines", ar: "مشويات وواجن" } },
    { id: "starters", label: { fr: "Entrées & Bricks", en: "Starters & Briks", ar: "مقبلات وبريك" } },
    { id: "drinks", label: { fr: "Cocktails & Thé", en: "Drinks & Tea", ar: "مشروبات وشاي" } },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const nameMatch = item.name[currentLang].toLowerCase().includes(searchQuery.toLowerCase());
    const descMatch = item.desc[currentLang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && (nameMatch || descMatch);
  });

  const t = {
    fr: {
      badge: "Gastronomie & Carte du Chef",
      title: "Notre Carte & Menu Gourmand",
      subtitle: "Des ingrédients frais, locaux et préparés à la commande selon les plus pures traditions tunisiennes.",
      searchPlaceholder: "Rechercher un plat, poisson, gargoulette...",
      ingredientsLabel: "Ingrédients Principaux:",
      orderItemBtn: "Réserver une table pour goûter ce plat",
      closeModal: "Fermer",
      noResults: "Aucun plat trouvé dans cette catégorie.",
    },
    en: {
      badge: "Culinary Selection & Menu",
      title: "Our Gourmet Menu & Dishes",
      subtitle: "Fresh local ingredients cooked to order following authentic Tunisian gastronomy.",
      searchPlaceholder: "Search for a dish, seafood, gargoulette...",
      ingredientsLabel: "Main Ingredients:",
      orderItemBtn: "Book a table to taste this dish",
      closeModal: "Close",
      noResults: "No dishes found in this category.",
    },
    ar: {
      badge: "قائمة الطعام والخيارات",
      title: "قائمة طعامنا الشهية",
      subtitle: "مكونات طازجة ومحلية تُعد فور الطلب وفق أصول الطهي التونسي الأصيل.",
      searchPlaceholder: "ابحث عن طبق، أسماك، قرقولة...",
      ingredientsLabel: "المكونات الأساسية:",
      orderItemBtn: "احجز طاولة لتذوق هذا الطبق",
      closeModal: "إغلاق",
      noResults: "لم يتم العثور على أطباق في هذه الفئة.",
    },
  }[currentLang];

  return (
    <section id="menu" className="py-24 relative bg-[#0A0D14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif mb-4">
            {t.title}
          </h2>
          <p className="text-gray-400 text-base font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Search & Category Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-500/25"
                    : "glass-panel text-gray-400 hover:text-white hover:border-rose-500/30"
                }`}
              >
                {cat.label[currentLang]}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-[#121722] border border-rose-900/30 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors"
            />
          </div>
        </div>

        {/* Grid of Dishes */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 text-gray-500 text-sm glass-panel rounded-2xl">
            {t.noResults}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group glass-panel rounded-2xl overflow-hidden border-rose-900/20 hover:border-rose-500/40 transition-all cursor-pointer hover:-translate-y-1 flex flex-col"
              >
                {/* Dish Image */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-900">
                  <Image
                    src={item.image}
                    alt={item.name[currentLang]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121722] via-transparent to-transparent"></div>

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-rose-500/90 text-white text-[10px] font-bold tracking-wider uppercase backdrop-blur-md shadow">
                      {item.badge[currentLang]}
                    </div>
                  )}

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-[#0A0D14]/90 border border-amber-500/40 text-amber-300 font-bold font-mono text-sm shadow-lg">
                    {formatPrice(item.priceDT)}
                  </div>
                </div>

                {/* Dish Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white font-serif group-hover:text-rose-300 transition-colors">
                      {item.name[currentLang]}
                    </h3>
                    <p className="text-xs text-gray-400 font-light line-clamp-2 mt-1.5 leading-relaxed">
                      {item.desc[currentLang]}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-rose-400 font-medium">
                    <span>Voir Détails & Ingrédients</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dish Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#121722] border border-rose-500/30 rounded-3xl overflow-hidden shadow-2xl space-y-5 p-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-gray-300 hover:text-white flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name[currentLang]}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121722] via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-2xl font-bold font-serif text-white">
                  {selectedItem.name[currentLang]}
                </span>
                <span className="px-4 py-1.5 rounded-xl bg-amber-500 text-black font-bold font-mono text-base shadow">
                  {formatPrice(selectedItem.priceDT)}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              {selectedItem.desc[currentLang]}
            </p>

            {/* Ingredients */}
            {selectedItem.ingredients && (
              <div className="space-y-2 pt-2 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  {t.ingredientsLabel}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-rose-400" />
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <button
                onClick={() => {
                  setSelectedItem(null);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white font-bold text-sm shadow-lg shadow-rose-500/25 hover:scale-[1.02] active:scale-95 transition-all"
              >
                {t.orderItemBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
