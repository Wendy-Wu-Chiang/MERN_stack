const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

require("./config/mongoose.config");

const RestaurantRoutes = require("./routes/restaurant.routes");
RestaurantRoutes(app);

app.listen(8000, () => {
  console.log("listen at port 8000");
});
