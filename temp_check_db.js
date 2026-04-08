const { MongoClient } = require('mongodb');

async function checkLeads() {
    const uri = "mongodb+srv://deepakr_db_user:4oYOhDfezDMn2jCN@kalpcluster.mr8bacs.mongodb.net/kalp_tenant_acadivate";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db('kalp_tenant_acadivate');
        const collection = db.collection('leads');
        const leads = await collection.find({}).sort({ createdAt: -1 }).limit(10).toArray();
        console.log("Recent Leads Count:", leads.length);
        console.log("Recent Leads Data:", JSON.stringify(leads, null, 2));
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

checkLeads();
