import { Router } from "express";

// products endpoints
const router = Router()

router.get('/products', (req, res) => {
  res.send('the list of products')
})

router.get('/products/:id', (req, res) => {
  console.log(req.params);
  
  res.send(`the product with id ${req.params.id}`)
});

router.post('/products', (req, res) => {
  res.send('a new product has been added')
});

export default router;