import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/src/lib/mongodb';

async function getCollection() {
  const client = await clientPromise;
  const db = client.db('kalp_tenant_acadivate');
  return db.collection('sliders');
}

function getObjectId(id: string) {
  return ObjectId.isValid(id) ? new ObjectId(id) : null;
}

async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const collection = await getCollection();

    if (id) {
      const objectId = getObjectId(id);
      if (!objectId) {
        return NextResponse.json({ success: false, error: 'Slider ID is invalid' }, { status: 400 });
      }

      const item = await collection.findOne({ _id: objectId });
      if (!item) {
        return NextResponse.json({ success: false, error: 'Slider not found' }, { status: 404 });
      }

      return NextResponse.json({ success: true, item });
    }

    const items = await collection.find({}).sort({ order: 1, createdAt: -1 }).toArray();
    return NextResponse.json({ success: true, items });
  } catch (error) {
    console.error('Error fetching sliders:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch sliders' }, { status: 500 });
  }
}

async function POST(req: NextRequest) {
  try {
    const collection = await getCollection();
    const payload = await req.json();
    const now = new Date().toISOString();
    
    const document = {
      ...payload,
      createdAt: now,
      updatedAt: now,
    };

    const result = await collection.insertOne(document);
    const item = await collection.findOne({ _id: result.insertedId });

    return NextResponse.json({ success: true, item }, { status: 201 });
  } catch (error) {
    console.error('Error creating slider:', error);
    return NextResponse.json({ success: false, error: 'Failed to create slider' }, { status: 500 });
  }
}

async function PUT(req: NextRequest) {
  try {
    const collection = await getCollection();
    const payload = await req.json();
    const { _id, id, ...updateData } = payload;
    const documentId = _id || id;

    if (!documentId) {
      return NextResponse.json({ success: false, error: 'Slider ID is required' }, { status: 400 });
    }

    const objectId = getObjectId(documentId);
    if (!objectId) {
      return NextResponse.json({ success: false, error: 'Slider ID is invalid' }, { status: 400 });
    }

    const result = await collection.updateOne(
      { _id: objectId },
      {
        $set: {
          ...updateData,
          updatedAt: new Date().toISOString(),
        },
      }
    );

    const item = await collection.findOne({ _id: objectId });
    return NextResponse.json({ success: true, item });
  } catch (error) {
    console.error('Error updating slider:', error);
    return NextResponse.json({ success: false, error: 'Failed to update slider' }, { status: 500 });
  }
}

async function DELETE(req: NextRequest) {
  try {
    const collection = await getCollection();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Slider ID is required' }, { status: 400 });
    }

    const objectId = getObjectId(id);
    if (!objectId) {
      return NextResponse.json({ success: false, error: 'Slider ID is invalid' }, { status: 400 });
    }

    await collection.deleteOne({ _id: objectId });
    return NextResponse.json({ success: true, deletedId: id });
  } catch (error) {
    console.error('Error deleting slider:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete slider' }, { status: 500 });
  }
}

export { GET, POST, PUT, DELETE };
