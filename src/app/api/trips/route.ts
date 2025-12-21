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

export async function POST() {
  try {
    const db = await getDatabase()
    const trips = db.collection('trips')

    const result = await trips.findOneAndUpdate(
      { id: 'main' },
      {
        $inc: { currentTrip: 1, totalTrips: 1 }
      },
      {
        upsert: true,
        returnDocument: 'after'
      }
    )

    if (!result) {
      return null
    }

    return NextResponse.json({
      currentTrip: result.currentTrip,
      totalTrips: result.totalTrips
    })
  } catch (error) {
    console.error('Failed to update trip:', error)
    return NextResponse.json({ error: 'Failed to update trip.' }, { status: 500 })
  }
}