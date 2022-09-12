import express from "express";
const PORT = process.env.PORT || 5555;

const app = express();

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
