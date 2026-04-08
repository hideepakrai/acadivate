const { MongoClient } = require('mongodb');

async function checkUser() {
  const uri = "mongodb+srv://deepakr_db_user:4oYOhDfezDMn2jCN@kalpcluster.mr8bacs.mongodb.net/kalp_tenant_acadivate";
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    const db = client.db('kalp_tenant_acadivate');
    const users = db.collection('users');
    const email = 'vijendrachoudhary3344@gmail.com';
    
    console.log('Searching for email:', email);
    
    const user = await users.findOne({ 
      $or: [
        { email: email },
        { userName: email }
      ]
    });
    
    if (user) {
      console.log('USER_FOUND_START');
      console.log(JSON.stringify(user, null, 2));
      console.log('USER_FOUND_END');
    } else {
      console.log('USER_NOT_FOUND');
      const allUsers = await users.find({}).limit(10).toArray();
      console.log('SAMPLES_START');
      console.log(JSON.stringify(allUsers.map(u => ({ userName: u.userName, email: u.email, role: u.role })), null, 2));
      console.log('SAMPLES_END');
      
      const collections = await db.listCollections().toArray();
      console.log('COLLECTIONS:', collections.map(c => c.name).join(', '));
    }
  } finally {
    await client.close();
  }
}

checkUser().catch(console.error);
