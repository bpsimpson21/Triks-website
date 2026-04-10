export interface Trip {
  id: string;
  title: string;
  slug: string;
  duration: string;
  difficulty: string;
  age_range: string | null;
  price: number | null;
  description: string;
  short_description: string;
  includes: string[];
  location: string;
  image_url: string;
  gallery_urls: string[];
  video_url: string | null;
  is_featured: boolean;
  created_at: string;
}

export interface TripDate {
  id: string;
  trip_id: string;
  start_date: string;
  end_date: string;
  max_participants: number;
  current_participants: number;
  is_available: boolean;
}

export interface ItineraryDay {
  id: string;
  trip_id: string;
  day_number: number;
  title: string;
  description: string;
  river_section: string;
  miles: number | null;
  activities_am: string;
  activities_pm: string;
}

export interface Booking {
  id: string;
  trip_date_id: string;
  participant_name: string;
  email: string;
  phone: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  medical_notes: string | null;
  age: number | null;
  parent_guardian_name: string | null;
  parent_guardian_email: string | null;
  waiver_signed: boolean;
  waiver_signed_at: string | null;
  status: string;
  created_at: string;
}

export interface Waiver {
  id: string;
  booking_id: string;
  full_name: string;
  signature: string;
  agreed_to_terms: boolean;
  signed_at: string;
  ip_address: string | null;
}

export interface TripWithDetails extends Trip {
  itinerary_days: ItineraryDay[];
  trip_dates: TripDate[];
}
