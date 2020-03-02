import { Router } from 'express';
import phonesController from '../controllers/phone.controller';

class PhonesRoutes {
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.post('/', phonesController.create);
        this.router.get('/', phonesController.list);
        this.router.get('/:id', phonesController.getOne);
        this.router.delete('/:id', phonesController.delete);
        this.router.put('/:id', phonesController.update);
    }
}

const phonesRoutes = new PhonesRoutes();
export default phonesRoutes.router;