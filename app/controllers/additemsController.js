const express=require('express')
const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient();

const addItem=async(req,res)=>
{
    try{
    const normalizeBody=Object.fromEntries(
        Object.entries(req.body).map(([key,value]) => [key.toLowerCase(),value]));
    
        console.log("normalizebody ",normalizeBody)
    const {itemname,quantity,category,saleprice,mrp}=normalizeBody;

    if(!itemname||!quantity||!category||!saleprice||!mrp)
    {
        console.log(itemname,quantity,category,saleprice,mrp)
        return res.status(400).json({message:"all feilds are required "})
    }
    
    const newItem=await prisma.item.create({
        data: {itemName:itemname,quantity,category,salePrice:saleprice,mrp,
            // user:
            // {
            //     connect:{id :parseInt(userid)}
            // }
        }
    })
    return res.status(200).json({message:"item is added successfully",NameofItem  :newItem});
    }

    catch(error)
    {
        console.log("error occurs during the addition of item ",error.message)
        return res.status(500).json({message:"failed to add an item"})
    }

}
const viewofItems=async(req,res)=>
{
    const viewItems=await prisma.item.findMany()
    res.json({message:"these items are available in database :" , viewItems})
}
module.exports={addItem,viewofItems};