const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const books = require("./src/routes/BooksRouter");
const readingStatuses = require("./src/routes/ReadingStatusesRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//ROUTES
app.use("/books", books);
app.use("/readingStatuses", readingStatuses);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;