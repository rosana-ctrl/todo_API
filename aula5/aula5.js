import express from 'express'
const app = express()
const port = 3000

app.get('/tarefa', (req, res) => {
    res.send('Rota ativada com GET e recurso tarefa: valores de atividades')
})
app.get('/usuario', (req, res) => {
    res.send('Rota ativada com GET e recurso usuário: valores de nome e matrícula')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})