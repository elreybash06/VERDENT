import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
      res.send("<h1>hello</h1>")
});

app.get("/contact", (req, res) => {
    res.send("0544025323")
});

app.get("/about", (req, res) => {
    res.send("my name is mohammed bashiru bonsu-bandoh")
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})