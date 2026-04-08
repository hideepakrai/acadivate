const { MongoClient } = require('mongodb');

async function checkLeads() {
    const uri = "mongodb://localhost:27017"; // Assuming local or env reachable
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db('kalp_tenant_acadivate');
        const collection = db.collection('leads');
        const leads = await collection.find({}).sort({ createdAt: -1 }).limit(5).toArray();
        console.log("Recent Leads:", JSON.stringify(leads, null, 2));
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

checkLeads();
