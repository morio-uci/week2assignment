const express = require('express');
const app = express();
const staticRoute = express.static('public');
import {reverseText} from "./api";
const PORT = process.env.PORT || 8080;

app.use( staticRoute );
app.use('/static', staticRoute );
app.use('/api/v1', reverseText());


app.listen(PORT, 'localhost');

export default app;