import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

export async function GET() {
  try {
    const db = await getDatabase();
    const trips = db.collection('trips');
    
    let tripData = await trips.findOne({ id: 'main' });
    
    if (!tripData) {
      tripData = { id: 'main', currentTrip: 0, totalTrips: 0 };
      await trips.insertOne(tripData);
    }
    
    return NextResponse.json({
      currentTrip: tripData.currentTrip,
      totalTrips: tripData.totalTrips
    });
  } catch (error) {
    console.error('Error fetching trips:', error);
    return NextResponse.json({ error: 'Failed to fetch trips' }, { status: 500 });
  }
}