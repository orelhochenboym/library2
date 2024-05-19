const getDb = require("../db");

exports.getAllBooks = async (req, res) => {
  const { requestId } = req;

  try {
    const db = await getDb();
    const books = await db.books.findAll();

    console.log(
      `[Books][getAllBooks][Success][${requestId}] Successfully got all books`,
    );
    res.status(200).send(books);
  } catch (err) {
    console.log(
      `[Books][getAllBooks][Error][${requestId}] Error in getting all books. Error: ${
        err.message || err
      }`,
    );
    res.status(500).json().end();
  }
};

exports.updateReadingStatus = async (req, res) => {
  const { requestId } = req;
  const { id, reading_status } =
    req.body.data;

  try {
    const db = await getDb();
    await db.books.update(
        {
          reading_status,
        },
        {
          where: {
            id: id,
          },
        },
      );
  
    console.log(
      `[Books][updateReadingStatus][Success][${requestId}] Successfully updated reading status`,
    );
    res.status(200).end();
  } catch (err) {
    console.log(
      `[Books][updateReadingStatus][Error][${requestId}] Error in updating reading status Error: ${
        err.message || err
      }`,
    );
    res.status(500).json().end();
  }
};

exports.updateCurrentPage = async (req, res) => {
  const { requestId } = req;
  const { id, current_page } =
    req.body.data;

  try {
    const db = await getDb();
    await db.books.update(
        {
          current_page,
        },
        {
          where: {
            id: id,
          },
        },
      );
  
    console.log(
      `[Books][updateCurrentPage][Success][${requestId}] Successfully updated current page`,
    );
    res.status(200).end();
  } catch (err) {
    console.log(
      `[Books][updateCurrentPage][Error][${requestId}] Error in updating current page Error: ${
        err.message || err
      }`,
    );
    res.status(500).json().end();
  }
};

exports.deleteBook = async (req, res) => {
    const { requestId } = req;
    const { id } = req.params;
  
    try {
      const db = await getDb();
      await db.books.destroy({
        where: {
          id: id,
        },
      });
    
      console.log(
        `[Books][deleteBook][Success][${requestId}] Successfully deleted book ${id}`,
      );
      res.status(200).end();
    } catch (err) {
      console.log(
        `[Books][deleteBook][Error][${requestId}] Error in deleting book ${id} Error: ${
          err.message || err
        }`,
      );
      res.status(500).json().end();
    }
  };

  exports.createBook = async (req, res) => {
    const { requestId } = req;

    const { 
        name,
        author,
        genre,
        page_count,
        current_page,
        reading_status,
        published_date, 
    } = req.body;
  
    try {
      const db = await getDb();
      const book = await db.books.create({
        name,
        author,
        genre,
        page_count,
        current_page,
        reading_status,
        published_date,
      });
  
      console.log(
        `[Books][createBook][Success][${requestId}] Successfully created book ${book.name}}`,
      );
      res.status(200).send(book);
    } catch (err) {
      console.log(
        `[Books][createBook][Error][${requestId}] Error in creating book. Error: ${err.message || err
        }`,
      );
      res.status(500).json().end();
    }
  };
  