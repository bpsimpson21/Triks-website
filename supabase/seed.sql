-- T.R.I.K.S. Seed Data
-- Run this after schema.sql to populate the database with trip data.

-- Youth Camp
INSERT INTO trips (id, title, slug, duration, difficulty, age_range, description, short_description, includes, location, image_url, gallery_urls, is_featured)
VALUES (
  '11111111-1111-1111-1111-111111111111',
  'Youth Camp',
  'youth-camp',
  '4.5 days',
  'Beginner (Class I–II+)',
  '10–16',
  'Camp and paddle for four and a half days on the beautiful Trinity River! Students build whitewater paddling skills on Class I–II+ rapids while creating new relationships with the outdoors: swimming, camping, and playing in nature. Through guided on-water and on-shore experiences, T.R.I.K.S. aims to nurture future stewards of the river and the outdoors.',
  'Camp and paddle for four and a half days on the beautiful Trinity River! Build whitewater skills on Class I–II+ rapids while camping under the stars.',
  ARRAY['All kayaking gear (kayak, paddle, PFD, helmet, spray skirt, wetsuit)', 'Professional instruction', 'Camping (paid-for sites)', 'Meals'],
  'Hayden Flat Campground, Trinity River',
  'https://images.unsplash.com/photo-1545652985-5edd365b12eb?w=1200&h=600&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1545652985-5edd365b12eb?w=1200&h=600&fit=crop', 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&h=600&fit=crop', 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1200&h=600&fit=crop'],
  true
);

-- Youth Clinic
INSERT INTO trips (id, title, slug, duration, difficulty, age_range, description, short_description, includes, location, image_url, gallery_urls, is_featured)
VALUES (
  '22222222-2222-2222-2222-222222222222',
  'Youth Clinic (Day Program)',
  'youth-clinic',
  '4 days',
  'Beginner (Class I–II+)',
  '10–16',
  'A 4-day clinic offered at a lower price to locals from Humboldt and Trinity counties. While T.R.I.K.S. doesn''t provide camping and meals, we encourage families to gather at central camping areas to promote togetherness. Same on-water curriculum as Youth Camp.',
  'A 4-day clinic for local youth. Same on-water curriculum as Youth Camp, without camping — perfect for families in Humboldt and Trinity counties.',
  ARRAY['All kayaking gear', 'Professional instruction', 'Lunch'],
  'Hayden Flat Campground area, Trinity River',
  'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&h=600&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&h=600&fit=crop', 'https://images.unsplash.com/photo-1545652985-5edd365b12eb?w=1200&h=600&fit=crop'],
  true
);

-- Adult Paddle Clinic
INSERT INTO trips (id, title, slug, duration, difficulty, description, short_description, includes, location, image_url, gallery_urls, is_featured)
VALUES (
  '33333333-3333-3333-3333-333333333333',
  'Adult Paddle Clinic',
  'adult-paddle-clinic',
  '3 days',
  'Beginner (Class I–II+)',
  'T.R.I.K.S. invites all adults to paddle for three days on the beautiful Trinity River! Paddle together as a group during the day with lunch provided. In the evening, students camp on their own at amazing riverside National Forest Service campgrounds. Build whitewater paddling skills on Class I–II+ rapids while finding stillness through intimate connections with nature.',
  'Three days of paddling on the Trinity River for adults. Build whitewater skills while finding stillness through intimate connections with nature.',
  ARRAY['All kayaking gear', 'Professional instruction', 'Lunch daily'],
  'Hayden Flat Campground, Trinity River',
  'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1200&h=600&fit=crop',
  ARRAY['https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1200&h=600&fit=crop', 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1200&h=600&fit=crop'],
  true
);

-- Youth Camp Itinerary
INSERT INTO itinerary_days (trip_id, day_number, title, description, river_section, miles, activities_am, activities_pm) VALUES
('11111111-1111-1111-1111-111111111111', 0.5, 'Arrival & Camp Setup', 'Student drop-off, camp setup, gear & kayak outfitting, camp orientation, and games.', 'Hayden Flat Campground', NULL, '', 'Student drop-off (3–4 PM), camp setup, gear & kayak outfitting, camp orientation, games.'),
('11111111-1111-1111-1111-111111111111', 1, 'Wet Exit & Flatwater Paddling', 'Build water comfort and learn essential safety skills at Hayden Flat.', 'Hayden Flat', 0, 'Water comfort, safety briefing, swimming, wet exit progression (no skirt → skirt → full wet exit).', 'Intro paddles, flatwater paddling, on-water games.'),
('11111111-1111-1111-1111-111111111111', 2, 'Downstream!', 'First downstream paddle — French Creek to Hayden Flat.', 'French Creek to Hayden Flat', 4, 'Flatwater warm-up, paddle downstream.', 'Paddle to camp, on-water games.'),
('11111111-1111-1111-1111-111111111111', 3, 'Downstream!', 'Longer stretch — Big Bar to French Creek.', 'Big Bar to French Creek', 5, 'Flatwater warm-up, paddle downstream.', 'Paddle to take-out.'),
('11111111-1111-1111-1111-111111111111', 4, 'Final Downstream Day!', 'Final day of moving downstream with two route options.', 'Bagdad to "The Slot" or Hayden Flat to Cedar', 7, 'Warm-up, paddle downstream.', 'Paddle to takeout, check-out gear, student pick-up.');

-- Youth Clinic Itinerary (same on-water days 1–4)
INSERT INTO itinerary_days (trip_id, day_number, title, description, river_section, miles, activities_am, activities_pm) VALUES
('22222222-2222-2222-2222-222222222222', 1, 'Wet Exit & Flatwater Paddling', 'Build water comfort and learn essential safety skills at Hayden Flat.', 'Hayden Flat', 0, 'Water comfort, safety briefing, swimming, wet exit progression.', 'Intro paddles, flatwater paddling, on-water games.'),
('22222222-2222-2222-2222-222222222222', 2, 'Downstream!', 'French Creek to Hayden Flat.', 'French Creek to Hayden Flat', 4, 'Flatwater warm-up, paddle downstream.', 'Paddle to Hayden, on-water games.'),
('22222222-2222-2222-2222-222222222222', 3, 'Downstream!', 'Big Bar to French Creek.', 'Big Bar to French Creek', 5, 'Flatwater warm-up, paddle downstream.', 'Paddle to take-out.'),
('22222222-2222-2222-2222-222222222222', 4, 'Final Downstream Day!', 'Final day with two route options.', 'Bagdad to "The Slot" or Hayden Flat to Cedar', 7, 'Warm-up, paddle downstream.', 'Paddle to takeout, check-out gear, student pick-up.');

-- Adult Paddle Clinic Itinerary
INSERT INTO itinerary_days (trip_id, day_number, title, description, river_section, miles, activities_am, activities_pm) VALUES
('33333333-3333-3333-3333-333333333333', 1, 'Gear Fitting & Flatwater Paddling', 'Check-in, gear fitting, water comfort, and intro to flatwater paddling at Hayden Flat.', 'Hayden Flat', 0, 'Check-in, paperwork, gear fitting.', 'Lunch, water comfort, safety briefing, swimming, wet exit progression, intro paddle & flatwater paddling.'),
('33333333-3333-3333-3333-333333333333', 2, 'Downstream!', 'French Creek to Hayden Flat.', 'French Creek to Hayden Flat', 4, 'Flatwater warm-up, paddle downstream.', 'Lunch, paddle to Hayden, on-water games.'),
('33333333-3333-3333-3333-333333333333', 3, 'Downstream!', 'Big Bar to French Creek.', 'Big Bar to French Creek', 5, 'Flatwater warm-up, paddle downstream.', 'Lunch, paddle to take-out.');

-- Sample Trip Dates (Summer 2026)
INSERT INTO trip_dates (trip_id, start_date, end_date, max_participants, current_participants, is_available) VALUES
-- Youth Camp dates
('11111111-1111-1111-1111-111111111111', '2026-06-15', '2026-06-19', 8, 3, true),
('11111111-1111-1111-1111-111111111111', '2026-07-06', '2026-07-10', 8, 0, true),
('11111111-1111-1111-1111-111111111111', '2026-07-27', '2026-07-31', 8, 0, true),
-- Youth Clinic dates
('22222222-2222-2222-2222-222222222222', '2026-06-22', '2026-06-25', 8, 2, true),
('22222222-2222-2222-2222-222222222222', '2026-07-13', '2026-07-16', 8, 0, true),
('22222222-2222-2222-2222-222222222222', '2026-08-03', '2026-08-06', 8, 0, true),
-- Adult Paddle Clinic dates
('33333333-3333-3333-3333-333333333333', '2026-07-24', '2026-07-26', 8, 1, true),
('33333333-3333-3333-3333-333333333333', '2026-08-07', '2026-08-09', 8, 0, true),
('33333333-3333-3333-3333-333333333333', '2026-08-21', '2026-08-23', 8, 0, true);
