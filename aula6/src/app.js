import express from "express"

import usuarioController from "./controller/usuario_controller.js"
import tarefaController from "./controller/tarefa_controller.js"

const app = express()
const port = 3000

usuarioController(app)
tarefaController(app)

app.listen(port, () => {
    console.log(`http://localhost${port}/`)
})