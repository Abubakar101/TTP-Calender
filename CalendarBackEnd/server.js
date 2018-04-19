/* setting up dependencies */
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

/* setting up port & listen */
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* setting up cors */
app.use(cors());
/* setting up logger */
app.use(logger("dev"));

/* setting up body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../CalendarFrontEnd/build"));
}

/* Events API route */
const eventRoutes = require("./routes/eventRoutes");
app.use("/events", eventRoutes);

/* handling 404 */
app.get("*", function(req, res) {
  res.status(404).send({ message: "Oops! Not found." });
});
