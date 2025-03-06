const express = require("express");
const app = express();
app.use(express.json());
const livrosRoutes = require("./routes/livros");

app.use("/livros", livrosRoutes )

app.listen(3000, () => {
    console.log("Servidor esta rodando");
});