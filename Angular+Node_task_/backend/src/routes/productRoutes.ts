import { Router } from 'express';
import multer from 'multer';
import { addProduct, getProducts, getProduct, updateProduct, deleteProduct } from '../controller/productController';

const router = Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

function asyncHandler(fn: any) {
  return function (req: any, res: any, next: any) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

router.get('/', asyncHandler(getProducts));
router.get('/:id', asyncHandler(getProduct));
router.post('/', upload.array('images'), asyncHandler(addProduct));
router.put('/:id', upload.array('images'), asyncHandler(updateProduct));
router.delete('/:id', asyncHandler(deleteProduct));

export default router;
