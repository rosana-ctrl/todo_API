const usuarioController = (app) => {

    app.get('/usuario', (req, res) => {
        res.send('Rota ativada com GET e recurso usuário: valores de nome e matrícula')
    })
}

export default usuarioController