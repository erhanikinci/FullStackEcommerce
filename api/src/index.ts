import express , { json, urlencoded }  from 'express';
import productsRouter from './routes/products/index';
import { listProducts } from './routes/products/productsController';

const port = 3000; // default port 3000
const app = express();

app.use(urlencoded({ extended: false }));
app.use(json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/products', productsRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})