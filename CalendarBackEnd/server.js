/* setting up dependencies */
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

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

// else if (process.env.NODE_ENV === "development") {
//   app.get("/events", function(req, res) {
//     res.json()
//   });
// }

/* Events API route */
import eventRoutes from "./routes/eventroutes";
app.use("/api/events", eventRoutes);

/* handling 404 */
app.get("*", function(req, res) {
  res.status(404).send({ message: "Oops! Not found." });
});
