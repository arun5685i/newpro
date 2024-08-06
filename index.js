const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Parse JSON bodies (as we might send JSON data from the client)
app.use(bodyParser.json());

// Sample country and state data (replace with your data)
const countries = [
  { name: 'India', states: ['Delhi', 'Maharashtra', 'Tamil Nadu'] },
  { name: 'USA', states: ['California', 'New York', 'Texas'] }
];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/getStates', (req, res) => {
  const country = req.body.country;
  const selectedCountry = countries.find(c => c.name === country);
  const states = selectedCountry ? selectedCountry.states : [];
  res.json(states);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
