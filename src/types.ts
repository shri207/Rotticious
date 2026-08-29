export type MenuCategory = 
  | 'All'
  | 'Coffee'
  | 'Sandwiches'
  | 'Pizza'
  | 'Chicken'
  | 'Vegetarian'
  | 'Desserts'
  | 'Bakery'
  | 'Shakes';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  image: string;
  isSignature?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  tags?: string[];
  pairingRecommendation?: string;
  portionNotes?: string;
}

export interface Review {
  id: string;
  quote: string;
  author: string;
  role?: string;
  rating: number;
  highlightTag?: string;
  date?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  spanClass?: string;
  aspect?: string;
}

export interface TableReservation {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'Indoor AC' | 'Cozy Corner' | 'Work Friendly' | 'No Preference';
  specialRequests?: string;
}
