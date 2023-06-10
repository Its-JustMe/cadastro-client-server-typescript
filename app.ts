import express, { Express } from 'express';
import router from './app/routes/router'

const app: Express = express();
const port: number = 3000;

app.use(express.json());
app.use(express.static("app/public"));

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});