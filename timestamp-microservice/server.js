import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

// Do not change code above this line
app.get("/api", (req, res) => {
  const now = new Date();
  return res.status(200).json({
    unix: now.getTime(),
    utc: now.toUTCString()
  });
});

app.get("/api/:date", (req, res) => {
  const { date } = req.params;

  let dateInput = date;

  if (/^\d+$/.test(date)) {
    dateInput = parseInt(date);
  }

  const parsedDate = new Date(dateInput);

  if (parsedDate.toString() === "Invalid Date") {
    return res.status(400).json({
      error: "Invalid Date",
    });
  }

  res.status(200).json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString(),
  });
});
// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
