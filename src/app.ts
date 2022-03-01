import express, { Request, Response } from "express";
import path from "path";
import apiRoute from "./routes/commit.route";
// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/api", function (req: Request, res: Response) {
  res.send("Welcome to the api :)");
});

const router = express.Router();
router.use("/commit", apiRoute);
app.use("/api", router);

export default app;
