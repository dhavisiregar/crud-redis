import express from "express";
import taskRoutes from "./src/router/taskRouter.ts";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", taskRoutes);

app.listen(port, () => {
  console.log("Server running on port : ", port);
});
