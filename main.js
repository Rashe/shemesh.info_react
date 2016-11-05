const express = require('express');
const path = require('path');
const url = require('url');

const app = express();
app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res, next) {
    console.log('Request: [GET]', req.originalUrl);
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        console.error('error from app.js', err);
        res.status(err.status || 500);
        const data_content = require('./data/common_data');
        res.render('page-error', {
            message: err.message,
            error: err,
            data: data_content
        });
    });
}
else {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        const data_content = require('./data/common_data');
        res.render('page-error', {
            message: err.message,
            data: data_content,
            error: {}
        });
    });
}

app.set('port', process.env.PORT || 2200);
const server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
