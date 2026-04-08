import clientPromise from './src/lib/mongodb';

async function checkUser() {
  const client = await clientPromise;
  const db = client.db('kalp_tenant_acadivate');
  const users = db.collection('users');
  const email = 'vijendrachoudhary3344@gmail.com';
  
  const user = await users.findOne({ 
    $or: [
      { email: email },
      { userName: email }
    ]
  });
  
  if (user) {
    console.log('User found:');
    console.log(JSON.stringify(user, null, 2));
  } else {
    console.log('User not found.');
    // Check all users to see what's there
    const allUsers = await users.find({}).limit(5).toArray();
    console.log('Sample users in DB:');
    console.log(JSON.stringify(allUsers, null, 2));
  }
  process.exit(0);
}

checkUser().catch(console.error);
