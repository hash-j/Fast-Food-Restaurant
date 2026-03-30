import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Info } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ScrollArea, ScrollBar } from '../components/ui/scroll-area';

const menuData = {
  saji: {
    title: 'Saji',
    items: [
      { name: 'Quarter Saji', price: '700' },
      { name: 'Half Saji', price: '1,300' },
      { name: 'Full Saji', price: '2,400' },
      { name: 'Half Plate Rice', price: '400' },
      { name: 'Full Plate Rice', price: '750' },
    ]
  },
  fish: {
    title: 'Fish',
    items: [
      { name: 'Grilled Fish', price: '1,700' },
      { name: 'Fried Fish', price: '1,600' },
      { name: 'Charga (Half)', price: '1,050' },
      { name: 'Charga (Full)', price: '1,800' },
    ]
  },
  bbq: {
    title: 'Special Bar-B-Q',
    subtitle: 'Q = Quarter | H = Half | F = Full',
    items: [
      { name: 'Tikka Boti', price: '350 / 700 / 1,400' },
      { name: 'Malai Boti', price: '450 / 850 / 1,700' },
      { name: 'Malai Cheese Boti', price: '550 / 1,050 / 2,100' },
      { name: 'Nablata', price: '400 / 750 / 1,500' },
      { name: 'Beef Kebab', price: '450 / 900 / 1,800' },
      { name: 'Chicken Kebab', price: '350 / 700 / 1,400' },
      { name: 'Chicken Cheese Kebab', price: '450 / 850 / 1,700' },
      { name: 'Drum Stick', price: '400 / 750 / 1,450' },
      { name: 'Rajistani Boti', price: '450 / 850 / 1,700' },
      { name: 'Leg Piece', price: '400' },
      { name: 'Chest Piece', price: '450' },
      { name: 'Leg Piece Malai', price: '430' },
      { name: 'Chest Piece Malai', price: '480' },
    ]
  },
  drinks: {
    title: 'Drinks',
    items: [
      { name: 'Mineral Water', price: '120' },
      { name: 'Regular Drink', price: '70' },
      { name: 'Half Liter Drink', price: '110' },
      { name: '1 Liter Drink', price: '160' },
      { name: '1.5 Liter Drink', price: '210' },
      { name: 'Jumbo Drink', price: '280' },
    ]
  },
  naan: {
    title: 'Naan & Sides',
    items: [
      { name: 'Special Naan', price: '40' },
      { name: 'Roghni Naan', price: '80' },
      { name: 'Zera Naan', price: '60' },
      { name: 'Roti (Per Head)', price: '70' },
      { name: 'Raita', price: '70' },
      { name: 'Salad', price: '70' },
    ]
  },
  parathaRolls: {
    title: 'Paratha Rolls',
    items: [
      { name: 'Chicken Paratha Roll', price: '290' },
      { name: 'Zinger Paratha Roll', price: '360' },
      { name: 'Kabab Paratha Roll', price: '370' },
      { name: 'BBQ Paratha Roll', price: '380' },
      { name: 'Chicken Cheese Paratha Roll', price: '370' },
      { name: 'Grilled Paratha Roll', price: '400' },
      { name: "Chotu's Special Paratha Roll", price: '420' },
      { name: 'Makhan Malai Paratha Roll', price: '390' },
      { name: 'Grilled Cheese Paratha Roll', price: '450' },
      { name: 'Kabab Cheese Paratha Roll', price: '400' },
      { name: 'Zinger Cheese Paratha Roll', price: '420' },
    ]
  },
  sandwiches: {
    title: 'Sandwiches',
    items: [
      { name: "Chotu's BBQ Sandwich", price: '280' },
      { name: 'Doctor Sandwich', price: '240' },
      { name: "Chotu's Club Sandwich", price: '400' },
      { name: "Chotu's Peri Peri Sandwich", price: '400' },
      { name: "Chotu's Grilled Sandwich", price: '450' },
      { name: "Chotu's Special Grilled Sandwich", price: '480' },
      { name: 'Panni Special Plus Sandwich', price: '600' },
      { name: 'Crispy Zinger Sandwich', price: '400' },
    ]
  },
  wraps: {
    title: 'Wraps',
    items: [
      { name: 'Zinger Wrap', price: '460' },
      { name: 'Grilled Chicken Wrap', price: '500' },
      { name: "Chotu's Special Chicken Wrap", price: '550' },
    ]
  },
  burgers: {
    title: 'Burgers',
    categories: [
      {
        name: 'Zinger Burgers',
        items: [
          { name: 'Beeba Zinger Burger', price: '340' },
          { name: "Chotu's Special Zinger Burger", price: '460' },
          { name: 'Wadera Zinger Burger', price: '520' },
        ]
      },
      {
        name: 'Grilled Burgers',
        items: [
          { name: 'Beeba Grilled Burger', price: '450' },
          { name: "Chotu's Special Grilled Burger", price: '500' },
          { name: 'Big 11 Burger', price: '450' },
          { name: 'Wehshi Burger', price: '550' },
          { name: 'Wehshi Grilled Burger', price: '650' },
          { name: 'Tower Burger', price: '750' },
          { name: 'Beef Burger', price: '800' },
        ]
      },
      {
        name: 'Special Burgers',
        items: [
          { name: 'Lanchoo Pizza Burger', price: '450' },
          { name: 'Teetu Patty Burger', price: '280' },
          { name: 'Chicken Burger', price: '340' },
          { name: 'Teena Shami Burger', price: '250' },
        ]
      }
    ]
  },
  shawarma: {
    title: 'Shawarma',
    items: [
      { name: 'Chicken Tikka Shawarma', price: '260' },
      { name: 'Noonga BBQ Shawarma', price: '280' },
      { name: "Chotu's Special Shawarma", price: '320' },
      { name: 'Khatri Zinger Shawarma', price: '350' },
      { name: 'Chicken Cheese Shawarma', price: '330' },
      { name: 'Khatri Cheese Shawarma', price: '390' },
      { name: 'Turkish Grilled Shawarma', price: '400' },
      { name: "Chotu's Platter Shawarma", price: '400' },
      { name: 'Kabab Shawarma', price: '350' },
    ]
  },
  broast: {
    title: 'Broast',
    items: [
      { name: 'Quarter Broast', price: '600' },
      { name: 'Half Broast', price: '1,150' },
      { name: 'Full Broast', price: '2,200' },
    ]
  },
  pizza: {
    title: 'Pizza',
    subtitle: '7" / 10" / 13" / 16"',
    items: [
      { name: 'Chicken Tikka Pizza', price: '560 / 1,050 / 1,540 / 2,050' },
      { name: 'Creamy Tikka Pizza', price: '560 / 1,050 / 1,540 / 2,050' },
      { name: 'Chicken Fajita Pizza', price: '560 / 1,050 / 1,540 / 2,050' },
      { name: 'Malai Pizza', price: '560 / 1,050 / 1,540 / 2,050' },
      { name: 'BBQ Pizza', price: '560 / 1,050 / 1,540 / 2,050' },
      { name: 'Super Supreme Pizza', price: '560 / 1,050 / 1,540 / 2,050' },
      { name: 'Achari Pizza', price: '560 / 1,050 / 1,540 / 2,050' },
      { name: 'Cheese Lover Pizza', price: '560 / 1,050 / 1,540 / 2,050' },
      { name: 'Veg Lover Pizza', price: '560 / 1,050 / 1,540 / 2,050' },
      { name: '2 in 1 Pizza', price: '560 / 1,050 / 1,540 / 2,050' },
      { name: 'Hot Spicy Tikka Pizza', price: '560 / 1,050 / 1,540 / 2,050' },
      { name: 'Chicken Kabab Pizza', price: '600 / 1,150 / 1,850 / 2,200' },
      { name: "Chotu's Special Pizza", price: '600 / 1,250 / 1,950 / 2,300' },
      { name: 'Lasagna Pizza', price: '650 / 1,550 / 2,200 / 2,450' },
      { name: 'Zinger Pizza', price: '650 / 1,550 / 2,200 / 2,450' },
      { name: 'Kabab Crust Pizza', price: '660 / 1,400 / 2,000 / 2,500' },
      { name: 'Crown Crust Pizza', price: '700 / 1,400 / 1,950 / 2,300' },
      { name: 'Chicken Paproni Pizza', price: '700 / 1,300 / 1,850 / 2,200' },
      { name: 'Chicken Sausages Pizza', price: '700 / 1,300 / 1,850 / 2,200' },
      { name: 'Grill Chicken & Sauce', price: '700 / 1,400 / 1,950 / 2,300' },
      { name: '4 in 1 Pizza', price: '700 / 1,400 / 1,950 / 2,300' },
    ]
  },
  deals: {
    title: 'Deals',
    items: [
      { 
        name: 'Deal #1', 
        tag: 'SHAWARMA DEAL',
        price: '1,800',
        contents: [
          '3 Noonga Shawarma',
          '2 Zinger Paratha Roll',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #2', 
        tag: 'WRAP DEAL',
        price: '1,500',
        contents: [
          '2 Chicken Grill Wrap',
          '1 Chotu\'s Special Wrap',
          '1 Liter Drink'
        ]
      },
      { 
        name: 'Deal #3', 
        tag: 'ZINGER DEAL',
        price: '1,680',
        contents: [
          '5 Beeba Zingers',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #4', 
        tag: 'ZINGER DEAL',
        price: '1,350',
        contents: [
          '3 Chotu\'s Special Zinger',
          '1 Liter Drink'
        ]
      },
      { 
        name: 'Deal #5', 
        tag: 'WINGS DEAL',
        price: '2,200',
        contents: [
          '40 Hot Wings',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #6', 
        tag: 'PARATHA DEAL',
        price: '1,760',
        contents: [
          '5 Zinger Paratha',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #7', 
        tag: 'PIZZA & WINGS',
        price: '2,050',
        contents: [
          '1 Large Pizza',
          '10 Hot Wings',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #8', 
        tag: 'PIZZA DEAL',
        price: '2,000',
        contents: [
          '2 Medium Pizza',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #9', 
        tag: 'PREMIUM',
        price: '2,450',
        contents: [
          '1 Chotu\'s Special XL Pizza',
          '10 Hot Shots FREE'
        ]
      },
      { 
        name: 'Deal #10', 
        tag: 'COMBO DEAL',
        price: '2,150',
        contents: [
          '2 Small Pizza',
          '1 Half Broast',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #11', 
        tag: 'BROAST DEAL',
        price: '1,980',
        contents: [
          '1 Half Broast',
          '2 Grill Sandwich',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #12', 
        tag: 'SHAWARMA DEAL',
        price: '2,000',
        contents: [
          '6 Khatti Zinger Shawarma',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #13', 
        tag: 'SHAWARMA DEAL',
        price: '1,750',
        contents: [
          '7 Chicken Tikka Shawarma',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #14', 
        tag: 'BURGER DEAL',
        price: '2,000',
        contents: [
          '4 Wadera Zinger Burger',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #15', 
        tag: 'BUDGET DEAL',
        price: '1,050',
        contents: [
          '1 Pao Finger Zinger',
          '1 Beeba Burger',
          '1 Patti Burger',
          '1 Liter Drink'
        ]
      },
      { 
        name: 'Deal #16', 
        tag: 'PIZZA DEAL',
        price: '2,900',
        contents: [
          '2 Large Chicken Tikka Pizza',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #17', 
        tag: 'BURGER DEAL',
        price: '1,650',
        contents: [
          '5 Chicken Burger',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #18', 
        tag: 'BURGER DEAL',
        price: '1,450',
        contents: [
          '5 Petti Burger',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #19', 
        tag: 'BURGER DEAL',
        price: '1,760',
        contents: [
          '3 Beeba Grill Burger',
          '1 Weshii Fries',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #20', 
        tag: 'BROAST DEAL',
        price: '2,500',
        contents: [
          '1 Full Broast',
          '1 Half Salad',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #21', 
        tag: 'SUPER COMBO',
        price: '3,100',
        contents: [
          '1 Large Pizza',
          '4 Beeba Zinger',
          '1 Small Weshii Fries',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #22', 
        tag: 'COMBO DEAL',
        price: '1,840',
        contents: [
          '3 Patti Burger',
          '10 Hot Wings',
          '1 Small Weshii Fries',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #23', 
        tag: 'COMBO DEAL',
        price: '2,000',
        contents: [
          '4 Beeba Zinger Burger',
          '5 Hot Shot',
          '1 Small Weshii Fries',
          '1.5 Liter Drink'
        ]
      },
      { 
        name: 'Deal #24', 
        tag: 'COMBO DEAL',
        price: '1,850',
        contents: [
          '3 Patti Burger',
          '1 Half Broast',
          '1 Liter Drink'
        ]
      },
      { 
        name: 'Deal #25', 
        tag: 'SUPER COMBO',
        price: '2,350',
        contents: [
          '2 Grill Sandwich',
          '1 Medium Chicken Tikka Pizza',
          '1 Quarter Broast',
          '1 Liter Drink'
        ]
      },
      { 
        name: 'Deal #26', 
        tag: 'SUPER COMBO',
        price: '2,750',
        contents: [
          '4 Beeba Burger',
          '1 Medium Chicken Tikka Pizza',
          '10 Hot Wings',
          '1 Liter Drink'
        ]
      },
      { 
        name: 'Deal #27', 
        tag: 'COMBO DEAL',
        price: '1,480',
        contents: [
          '2 Beeba Zinger Burger',
          '1 Small Pizza',
          '5 Hot Wings',
          '1 Liter Drink'
        ]
      },
      { 
        name: 'Couple Deal', 
        tag: 'COUPLE DEAL',
        price: '1,400',
        contents: [
          '2 Patti Burger',
          '5 Hot Wings',
          '1 Small Pizza',
          '1 Liter Drink'
        ]
      },
      { 
        name: 'Friend Deal', 
        tag: 'BEST VALUE',
        price: '1,200',
        contents: [
          '2 Chicken Tikka Shawarma',
          '2 Zinger Shawarma',
          '1 Liter Drink'
        ]
      },
      { 
        name: 'Family Deal 1', 
        tag: 'FAMILY',
        price: '4,250',
        contents: [
          '1 XL Pizza',
          '4 Beeba Zinger Burger',
          '3 Chicken Tikka Shawarma',
          '2 Club Sandwich',
          '1 Jumbo Drink'
        ]
      },
      { 
        name: 'Family Deal 2', 
        tag: 'FAMILY',
        price: '4,650',
        contents: [
          '1 XL Pizza',
          '20 Hot Wings',
          '5 Zinger Burger',
          '1 Jumbo Drink'
        ]
      }
    ]
  }
};

const categories = Object.keys(menuData);

// Map category keys to one category image (stored in public/menu-items/)
const categoryImages = {
  saji: '/menu-items/saji.png',
  fish: '/menu-items/fish.png',
  bbq: '/menu-items/bbq.png',
  drinks: '/menu-items/drinks.png',
  naan: '/menu-items/naan.png',
  parathaRolls: '/menu-items/paratha-rolls.png',
  sandwiches: '/menu-items/sandwiches.png',
  wraps: '/menu-items/wraps.png',
  burgers: '/menu-items/burgers.png',
  shawarma: '/menu-items/shawarma.png',
  broast: '/menu-items/broast.png',
  pizza: '/menu-items/pizza.png'
};
export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('saji');

  return (
    <div data-testid="menu-page" className="min-h-screen bg-background">
      {/* Header */}
      <section className="min-h-[600px] flex items-center pt-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Discover Our</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Menu
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Explore our wide selection of halal dishes, from traditional BBQ to gourmet burgers and pizzas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-[72px] z-40 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto">
          <ScrollArea className="w-full">
            <div className="flex gap-2 p-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-background text-foreground hover:bg-background/90'
                  }`}
                  data-testid={`category-${cat}`}
                >
                  {menuData[cat].title}
                </button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      

      {/* Menu Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {categories.map((cat) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCategory === cat ? 1 : 0 }}
              className={activeCategory === cat ? 'block' : 'hidden'}
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {menuData[cat].title}
                </h2>
                {menuData[cat].subtitle && (
                  <p className="text-muted-foreground text-sm">{menuData[cat].subtitle}</p>
                )}
              </div>

              {/* For the `deals` tab we use a card-based layout */}
              {cat === 'deals' ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-fr">
                  {menuData[cat].items.map((item, idx) => (
                    <DealCard key={idx} deal={item} />
                  ))}
                </div>
              ) : (
                // Main two-column layout: left -> items, right -> single category image
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-2">
                    {/* If category has subcategories (like Burgers), render each subcategory */}
                    {menuData[cat].categories ? (
                      <div className="space-y-8">
                        {menuData[cat].categories.map((subCat, idx) => (
                          <div key={idx}>
                            <h3 className="text-xl font-medium mb-4 text-primary" style={{ fontFamily: 'Syne, sans-serif' }}>
                              {subCat.name}
                            </h3>
                            <div className="space-y-3">
                              {subCat.items.map((item, itemIdx) => (
                                <MenuItemCard key={itemIdx} item={item} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {menuData[cat].items.map((item, idx) => (
                          <MenuItemCard key={idx} item={item} />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-1 flex items-center justify-center">
                    {categoryImages[cat] ? (
                      <img
                        src={categoryImages[cat]}
                        alt={menuData[cat].title}
                        className="w-full max-w-[360px] h-auto object-cover rounded-lg shadow-md"
                      />
                    ) : (
                      <div className="w-full max-w-[360px] h-40 bg-background border border-border rounded-lg flex items-center justify-center text-muted-foreground">
                        No image
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Ready to Order?
            </h2>
            <p className="text-gray-400 mb-8">
              Call us now or visit our cafe. We're open from 12 PM to 2 AM.
            </p>
            <a href="tel:0321-4967022" data-testid="menu-call-btn">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                <Phone className="mr-2 w-5 h-5" />
                Call to Order: 0321-4967022
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function MenuItemCard({ item }) {
  return (
    <div className="bg-background p-5 border border-[#1C1C1C] rounded hover:shadow-lg transition-all duration-300 group" data-testid="menu-item">
      <div className="flex justify-between items-start gap-4">
        <h4 className="text-base font-medium text-foreground group-hover:text-secondary transition-colors duration-200">
          {item.name}
        </h4>
        <span className="text-primary font-semibold whitespace-nowrap text-sm">
          Rs. {item.price}
        </span>
      </div>
    </div>
  );
}
function DealCard({ deal }) {
  return (
    <div className="bg-[#18191B] border-2 border-[#FBAC23] rounded-xl overflow-hidden transition-all duration-300 hover:border-secondary/70 group flex flex-col h-full" style={{ boxShadow: '4px 4px 12px rgba(251, 172, 35, 0.15)' }}>
      {/* Deal Badge */}
      <div className="bg-[#18191B] border-b-2 border-[#FBAC23] px-3 py-2 text-center">
        <span className="text-xs font-bold tracking-wider uppercase text-[#FBAC23]" style={{ fontFamily: 'Syne, sans-serif' }}>{deal.tag}</span>
      </div>

      {/* Deal Contents */}
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-foreground text-xs font-medium mb-2 uppercase tracking-wide">Includes:</p>
        <ul className="space-y-2 mb-4 flex-grow">
          {deal.contents.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-secondary text-xs mt-0.5 flex-shrink-0">✔</span>
              <span className="text-xs leading-tight">{item}</span>
            </li>
          ))}
        </ul>

        {/* Price Section */}
        <div className="border-t border-[#1C1C1C] pt-3 mb-3">
          <p className="text-2xl font-bold text-secondary" style={{ fontFamily: 'Syne, sans-serif' }}>
            Rs. {deal.price}
          </p>
        </div>

        {/* CTA Button */}
        <a href="tel:0321-4967022" data-testid="deal-call-btn" className="mt-auto">
          <button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-2 text-sm rounded transition-colors duration-300">
            Call Now
          </button>
        </a>
      </div>
    </div>
  );
}