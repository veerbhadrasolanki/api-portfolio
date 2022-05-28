
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://veerbhadrasolanki:OcLPmA6ridURiY3W@cluster0.snegw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

client.connect(message => {
    console.log("Connected!!");
});
