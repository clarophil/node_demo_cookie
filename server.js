let express = require('express');
let app = express();

let cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
    res.redirect('/cookie/show');
});

// Add name in cookie
app.get('/cookie/add/:name?', (req, res) => {
    console.log(req.params);
    if ( typeof req.params.name !== 'undefined')
    {
        res.cookie('name', req.params.name);
        res.redirect('/cookie/show');
    }
    else 
        res.send('hello boy');
} );

// Show cookie content
app.get( '/cookie/show', (req,res) => {
    if ( typeof req.cookies.name !== 'undefined')
    {
        res.send('hello ' + req.cookies.name);
    }
    else 
        res.send('hello no cookie');
});

// Remove cookie
app.get( '/cookie/remove', (req,res) => {
    console.log(req.params);
    if ( typeof req.cookies.name !== 'undefined')
        {
            res.clearCookie('name');
            res.send('hello cookie remove');
        }
    else 
        res.send('hello no cookie');
});

let port = 8000;
app.listen(port, () => console.log('Server is running ' + port));