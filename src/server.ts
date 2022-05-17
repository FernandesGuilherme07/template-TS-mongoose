import App from "./app";
import config from "config";
import db from "../config/db";

const port = config.get<number>("port");

App.listen(port, async () => {
  await db();

  console.log(`Servidor executando na porta ${port}`);
  console.log(`Ctrl + click: http://localhost:${port}`);
});
