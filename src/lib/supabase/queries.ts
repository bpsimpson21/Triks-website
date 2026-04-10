import { createServerClient } from './server';
import type { Trip, TripWithDetails, TripDate } from '@/types';

export async function getTrips(): Promise<Trip[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('trips')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function getFeaturedTrips(): Promise<Trip[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('trips')
    .select('*')
    .eq('is_featured', true)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function getTripBySlug(slug: string): Promise<TripWithDetails | null> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('trips')
    .select(`
      *,
      itinerary_days (*),
      trip_dates (*)
    `)
    .eq('slug', slug)
    .single();

  if (error) return null;
  return data as TripWithDetails;
}

export async function getTripById(id: string): Promise<TripWithDetails | null> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('trips')
    .select(`
      *,
      itinerary_days (*),
      trip_dates (*)
    `)
    .eq('id', id)
    .single();

  if (error) return null;
  return data as TripWithDetails;
}

export async function getAvailableDates(tripId: string): Promise<TripDate[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('trip_dates')
    .select('*')
    .eq('trip_id', tripId)
    .eq('is_available', true)
    .gte('start_date', new Date().toISOString().split('T')[0])
    .order('start_date', { ascending: true });

  if (error) throw error;
  return data ?? [];
}
