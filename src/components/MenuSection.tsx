"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Sparkles, CheckCircle2, ChevronRight, X } from "lucide-react";

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
    <section id="menu" className="py-24 relative bg-[#FAF7F2] border-t border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF3E0] border border-[#B89737]/30 text-[#B89737] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#1A1918] font-serif mb-4">
            {t.title}
          </h2>
          <p className="text-[#6E6A64] text-base font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Search & Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#C84B31] text-white shadow-md shadow-[#C84B31]/20"
                    : "bg-white border border-[#EAE5DD] text-[#6E6A64] hover:text-[#1A1918] hover:border-[#C84B31]"
                }`}
              >
                {cat.label[currentLang]}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#6E6A64] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-white border border-[#EAE5DD] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1A1918] placeholder-gray-400 focus:outline-none focus:border-[#C84B31] transition-colors shadow-xs"
            />
          </div>
        </div>

        {/* Grid of Dishes */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 text-[#6E6A64] text-sm bg-white rounded-2xl border border-[#EAE5DD]">
            {t.noResults}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="card-luxury rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Dish Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name[currentLang]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    {/* Badge */}
                    {item.badge && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C84B31] text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                        {item.badge[currentLang]}
                      </div>
                    )}

                    {/* Price */}
                    <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-xl bg-white/95 text-[#1A1918] font-bold font-mono text-sm shadow-md border border-[#EAE5DD]">
                      {formatPrice(item.priceDT)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-bold text-[#1A1918] font-serif hover:text-[#C84B31] transition-colors">
                      {item.name[currentLang]}
                    </h3>
                    <p className="text-xs text-[#6E6A64] font-normal leading-relaxed line-clamp-2">
                      {item.desc[currentLang]}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-[#EAE5DD]/60 flex items-center justify-between text-xs text-[#C84B31] font-semibold">
                  <span>Détails & Ingrédients</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dish Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white border border-[#EAE5DD] rounded-3xl overflow-hidden shadow-2xl space-y-5 p-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 border border-[#EAE5DD] text-[#1A1918] flex items-center justify-center hover:bg-[#C84B31] hover:text-white transition-colors shadow"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold font-serif text-white drop-shadow">
                  {selectedItem.name[currentLang]}
                </span>
                <span className="px-4 py-1.5 rounded-xl bg-[#C84B31] text-white font-bold font-mono text-base shadow">
                  {formatPrice(selectedItem.priceDT)}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#1A1918]/80 font-normal leading-relaxed">
              {selectedItem.desc[currentLang]}
            </p>

            {/* Ingredients */}
            {selectedItem.ingredients && (
              <div className="space-y-2 pt-2 border-t border-[#EAE5DD]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C84B31]">
                  {t.ingredientsLabel}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#EAE5DD] text-xs text-[#1A1918] flex items-center gap-1.5 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C84B31]" />
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action */}
            <div className="pt-4 border-t border-[#EAE5DD] flex items-center gap-3">
              <button
                onClick={() => {
                  setSelectedItem(null);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl bg-[#C84B31] hover:bg-[#B33E26] text-white font-bold text-sm shadow-md shadow-[#C84B31]/20 hover:scale-[1.01] active:scale-95 transition-all"
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
