# fetch_points

### Instructions:
Run "node app.js" to open server
The server defaults to localhost:5000, to change the port number, modify "const port = <#>" in app.js
API assumes incoming data is sent in application/json format

### API Routes:
Format Example: localhost:5000/api/points/all
#### Add Transaction
POST /api/points/add - Input {"payer": username, "points": points, "timestamp": timestamp} in JSON format
Will add transaction, responds with success message

#### Spend Points
POST /api/points/spend -Input {"points": points} in JSON format
Will handle logic with spending points, responds with success message

#### Get Balances
GET /api/points/all - Responds with JSON object containing all user balances

#### Transaction History (for debugging purposes)
GET /api/points/history - Responds with current list of transactions in "db"
