const express = require('express')
const app = express()
const { MongoClient } = require('mongodb');
//const MongoClient = mongo.MongoClient;
const port = 3000
const url = 'mongodb://localhost:27017/edureka';
const client = new MongoClient(url);
let db;

const users = [
    {
        name : 'John',
        age : 21,
    },
    {
        name : 'Jack',
        age : 42,
    },
    {
        name : 'Neelam',
        age : 33,
    },
]

// const locations = 
// [
//     {
//       "location_id": 1,
//       "location_name": "Ashok Vihar Phase 3, New Delhi",
//       "state_id": 1,
//       "state": "Delhi",
//       "country_name": "India"
//     },
//     {
//       "location_id": 2,
//       "location_name": "Ashok Vihar Phase 2,Chincholi, Delhi-110006, Delhi",
//       "state_id": 1,
//       "state": "Delhi",
//       "country_name": "India"
//     },
//     {
//       "location_id": 3,
//       "location_name": "Tagore Garden, New Delhi",
//       "state_id": 1,
//       "state": "Delhi",
//       "country_name": "India"
//     },
//     {
//       "location_id": 4,
//       "location_name": "Bibvewadi, Pune",
//       "state_id": 2,
//       "state": "Maharashtra",
//       "country_name": "India"
//     },
//     {
//       "location_id": 5,
//       "location_name": "Hadapsar, Pune",
//       "state_id": 2,
//       "state": "Maharashtra",
//       "country_name": "India"
//     },
//     {
//       "location_id": 6,
//       "location_name": "Kothrud, Pune",
//       "state_id": 2,
//       "state": "Maharashtra",
//       "country_name": "India"
//     },
//     {
//       "location_id": 7,
//       "location_name": "Anand Vihar",
//       "state_id": 1,
//       "state": "Delhi",
//       "country_name": "India"
//     },
//     {
//       "location_id": 8,
//       "location_name": "Jeevan Bhima Nagar, Bangalore",
//       "state_id": 3,
//       "state": "Karnataka",
//       "country_name": "India"
//     },
//     {
//       "location_id": 9,
//       "location_name": "Rajajinagar, Bangalore-430006, Bangalore",
//       "state_id": 3,
//       "state": "Karnataka",
//       "country_name": "India"
//     },
//     {
//       "location_id": 10,
//       "location_name": "HSR, Bangalore",
//       "state_id": 3,
//       "state": "Karnataka",
//       "country_name": "India"
//     },
//     {
//       "location_id": 11,
//       "location_name": "Thane, Mumbai",
//       "state_id": 2,
//       "state": "Maharashtra",
//       "country_name": "India"
//     },
//     {
//       "location_id": 12,
//       "location_name": "Borivali West, Mumbai",
//       "state_id": 2,
//       "state": "Maharashtra",
//       "country_name": "India"
//     },
//     {
//       "location_id": 13,
//       "location_name": "Sector 40, Chandigarh",
//       "state_id": 4,
//       "state": "Punjab",
//       "country_name": "India"
//     },
//     {
//       "location_id": 14,
//       "location_name": "Majnu ka Tila, New Delhi",
//       "state_id": 1,
//       "state": "Delhi",
//       "country_name": "India"
//     }
//   ]

app.get('/', (req, res) => {
    res.send('Hello World! Namaste🙏🙏')
})

app.get('/userList', (req, res) => {
    res.send(users)
})

// app.get('/locations', (req, res) => {
//     res.send(locations)
// })

// get locations
app.get("/locations", async (req, res) => {
  try {
    const result = await db.collection("locations").find().toArray();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});




async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  db = client.db("edureka");
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(() => console.log('Connected successfully to server'))
  .catch(console.error)
  .finally(() => client.close());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

process.on('SIGINT', () => {
  // Close MongoDB connection when the application is shutting down
  client.close().then(() => process.exit(0));
});


//get locations
// app.get("/locations", function (req, res) {
//   db.collection("locations")
//     .find()
//     .toArray((err, result) => {
//       if (err) throw err;
//       res.send(result);
//     });
// });
