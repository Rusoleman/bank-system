const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));

//CRUD
/*══════════════════════════════════════════
                    Read
══════════════════════════════════════════*/
app.get('/', (req, res) =>{
    res.send("Server Bank");
});

app.get('/accounts', async (req, res) =>{
    let results = await accounts.findAll({raw: true, nest: true, include: [{model:AccountTypes}]});
    res.render('accounts', {accounts: results});
});

