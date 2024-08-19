const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const courseRoutes = require("./routes/courseRoute");
const projectRoutes = require("./routes/projectRoute");
const memberRoutes = require("./routes/memberRoute");
const feedbackRoutes = require("./routes/feedbackRoute");
const contactRoutes = require("./routes/contactRoute");
const subcribeRoutes = require("./routes/subcribeRoute");

const app = express();
const PORT = 3000;

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://duongtrungkiendev:duongtrungkiendev@cluster0.upyso.mongodb.net/mrh3-landingdatabase?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Application connected database successfully!!!"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

app.use("/api", courseRoutes);
app.use("/api", projectRoutes);
app.use("/api", memberRoutes);
app.use("/api", feedbackRoutes);
app.use("/api", contactRoutes);
app.use("/api", subcribeRoutes);


app.listen(PORT, () => {
  console.log(`Server is listenning on port ${PORT}`);
});
