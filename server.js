const express = require("express"),
    app = express(),
    cors = require("cors"),
    port = 8000;
app.listen(port, () => console.log(`Listening to on port ${port}`));

app.use(cors());
app.use(express.json());

require("./server/config/database.config");
require("./server/routes/product.route")(app);
require("./server/routes/order.route")(app);
require("./server/routes/user.route")(app);