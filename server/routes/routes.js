import express from 'express';
import CepController from '../controllers/CepController';
const router = express.Router();

router.get('/:cep', CepController.getCep);

export default router;