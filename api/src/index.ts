import express , {Router}  from 'express';
import productsRouter from './routes/products/index';
import { listProducts } from './routes/products/productsController';

const port = 3000; // default port 3000
const app = express();

app.get('/', listProducts)




app.use('/products', productsRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})