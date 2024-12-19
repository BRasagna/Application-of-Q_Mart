const express=require('express')
const router=express.Router();
const {addItem,viewofItems,updateItems,deleteItems}=require('../controllers/additemsController')
router.post('/additem',addItem)
router.get('/view',viewofItems)
router.put('/update/:id',updateItems)
router.delete('/delete/:id',deleteItems)

module.exports=router;

