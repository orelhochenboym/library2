const getDb = require("../db");

exports.getAllreadingStatuses = async (req, res) => {
    const { requestId } = req;
  
    try {
      const db = await getDb();
      const readingStatuses = await db.reading_statuses.findAll();
  
      console.log(
        `[readingStatuses][getAllreadingStatuses][Success][${requestId}] Successfully got all readingStatuses`,
      );
      res.status(200).send(readingStatuses);
    } catch (err) {
      console.log(
        `[readingStatuses][getAllreadingStatuses][Error][${requestId}] Error in getting all readingStatuses. Error: ${
          err.message || err
        }`,
      );
      res.status(500).json().end();
    }
  };