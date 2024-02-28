import { Router } from "express";
import { deleteOne, getAll, getOne, insertOne, updateOne } from "../controller/products.controller.js";

const router = Router();

router.get('/', getAll);
router.get('/:serialNumber', getOne);
router.post('/', insertOne);
router.post('/:serialNumber', updateOne);
router.get('/delete/:serialNumber', deleteOne);

export default router;
