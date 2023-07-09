import app from './src/app.js'

// Ou a porta será a declarada no .ENV ou será a 3000
const port = process.env.PORT || 3001;


app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
})