const express = require('express');

// async mocks
import nosql from './nosql/index.js';
import sql from './sql/index.js';

import gql from './gql/index.js';
import rest from './rest/index.js';

const app = express();
const router = express.Router();

sql.init();
nosql.init();

// text endpoint
app.get('/', function(req, res) {
    res.send('simple text response');
});

// graphql api
gql.plug(app);

// rest api
rest.plug(app, router);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
