-- T.R.I.K.S. Database Schema
-- Run this in your Supabase SQL Editor to create all tables.

-- Trips
CREATE TABLE IF NOT EXISTS trips (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  duration text NOT NULL,
  difficulty text NOT NULL,
  age_range text,
  price integer,
  description text NOT NULL,
  short_description text NOT NULL,
  includes text[] DEFAULT '{}',
  location text NOT NULL,
  image_url text NOT NULL,
  gallery_urls text[] DEFAULT '{}',
  video_url text,
  is_featured boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Trip Dates
CREATE TABLE IF NOT EXISTS trip_dates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id uuid NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  start_date date NOT NULL,
  end_date date NOT NULL,
  max_participants integer DEFAULT 8,
  current_participants integer DEFAULT 0,
  is_available boolean DEFAULT true
);

-- Itinerary Days
CREATE TABLE IF NOT EXISTS itinerary_days (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id uuid NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  day_number numeric NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  river_section text,
  miles numeric,
  activities_am text,
  activities_pm text
);

-- Bookings
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_date_id uuid NOT NULL REFERENCES trip_dates(id) ON DELETE CASCADE,
  participant_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  emergency_contact_name text NOT NULL,
  emergency_contact_phone text NOT NULL,
  medical_notes text,
  age integer,
  parent_guardian_name text,
  parent_guardian_email text,
  waiver_signed boolean DEFAULT false,
  waiver_signed_at timestamptz,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Waivers
CREATE TABLE IF NOT EXISTS waivers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  signature text NOT NULL,
  agreed_to_terms boolean NOT NULL,
  signed_at timestamptz DEFAULT now(),
  ip_address text
);

-- Enable Row Level Security
ALTER TABLE trips ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_dates ENABLE ROW LEVEL SECURITY;
ALTER TABLE itinerary_days ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE waivers ENABLE ROW LEVEL SECURITY;

-- Public read access for trips, dates, and itinerary
CREATE POLICY "Public can read trips" ON trips FOR SELECT USING (true);
CREATE POLICY "Public can read trip_dates" ON trip_dates FOR SELECT USING (true);
CREATE POLICY "Public can read itinerary_days" ON itinerary_days FOR SELECT USING (true);

-- Anyone can insert bookings and waivers (public booking form)
CREATE POLICY "Anyone can create bookings" ON bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can create waivers" ON waivers FOR INSERT WITH CHECK (true);

-- Only authenticated users can read bookings/waivers (admin)
CREATE POLICY "Authenticated can read bookings" ON bookings FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can read waivers" ON waivers FOR SELECT USING (auth.role() = 'authenticated');
