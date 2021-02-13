const express = require('express')


const app = express()




app.use('/api', pictures)



app.listen(4554, () => console.log(`http://localhost:4554`))