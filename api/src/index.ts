import express , {Router}  from 'express';
import productsRouter from './routes/products/index';

const port = 3000; // default port 3000
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})




app.use('/', productsRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})