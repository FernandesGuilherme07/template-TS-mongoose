import App from "./app";
import config from "config";

const port = config.get<number>("port");

App.listen(port, async () => {
  console.log(`Servidor executando na porta ${port}`);
  console.log(`Ctrl + click: http://localhost:${port}`);
});
