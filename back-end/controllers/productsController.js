// DEPENDENCIES
const productRouter = require('express').Router({mergeParams: true})
const {
    getAllProducts,
    getProduct
} = require('../queries/productQueries');


productRouter.get('/', async (request,response)=> {
    const allProducts = await getAllProducts();
    response.json(allProducts);
});

productRouter.get('/:itemType', async (request, response)=>{
    const {itemType} = request.params;
    try {
        const product = await getProduct();
        if (product) {
            response.json(product);
        }
        else throw `There is no product of this type: ${itemType}`;
    } 
    catch (error) {
        response.status(404).json({ error: 'Not found', message: error });
    };
});

module.exports = productRouter;