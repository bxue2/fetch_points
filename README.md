# fetch_points

## Instructions:
"npm install" to install node dependencies

Run "node app.js" to open server

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
**GET /api/points/all** - Responds with JSON object containing all user balances

Ex. localhost:5000/api/points/all

### Transaction History (for debugging purposes)
**GET /api/points/history** - Responds with current list of transactions in "db"

Ex. localhost:5000/api/points/history
