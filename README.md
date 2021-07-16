# fetch_points

## Instructions:
"npm install" to install node dependencies

Run "node app.js" to open Express server

The server defaults to localhost:5000, to change the port number, modify "const port = <#>" in app.js

API assumes incoming data is sent in application/json format

## API Routes:
### Add Transaction
**POST /api/points/add** - Input {"payer": username, "points": points, "timestamp": timestamp} in JSON format

Ex. localhost:5000/api/points/add -> {"payer": "Bob3", "points": -500, "timestamp": "2020-11-05T14:00:00Z"}

### Spend Points
**POST /api/points/spend** - Input {"points": points} in JSON format

Ex. localhost:5000/api/points/spend -> {"points": 5000}

### Get Balances
**GET /api/points/all** - Returns a JSON object containing all user balances

Ex. localhost:5000/api/points/all

### Transaction History (for debugging purposes)
**GET /api/points/history** - Responds with current list of transactions in "db"

Ex. localhost:5000/api/points/history

### Some other notes:
The logic behind spending points confused me a bit, especially regarding negatives, hopefully I interpreted correctly. There's currently no logic for what happens if adding a transaction puts a balance in the negatives either (instructions only specified that spending shouldn't put payers in debt). Also no logic for if you spend more than is available (will just empty the transaction history).
