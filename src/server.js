const app = require("../src/index");

const connect = require("../src/configs/db");

app.listen(8787, async (req, res) => {
  try {
    await connect();
    console.log("listening on port 8787");
  } catch (error) {
    console.log(error.message);
  }
});
