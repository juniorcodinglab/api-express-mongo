import app from './src/app.js'

import * as dotenv from 'dotenv'
dotenv.config()

// Ou a porta será a declarada no .ENV ou será a 3000
const port = process.env.APPLICATION_PORT || 3001;
const serverUrl = process.env.SERVER_URL || 'localhost';


app.listen(port, () => {
    console.log(`Servidor escutando em ${serverUrl}:${port}`);
})