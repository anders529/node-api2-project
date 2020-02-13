const express = require("express");
const apiRouter = require("./routes/postRoutes.js");
const server = express();
server.use(express.json());
server.use("/api/posts", apiRouter);
server.get("/", (req, res) => {
    res.send(
    `<h2>Something API</h>
    <p>Not sure what to put here.</p>`
  );
});
const port = 5000;
server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
