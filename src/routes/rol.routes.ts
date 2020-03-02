import { Router } from 'express';
import rolsController from '../controllers/rol.controller';

class RolsRoutes {
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.post('/', rolsController.create);
        this.router.get('/', rolsController.list);
        this.router.get('/:id', rolsController.getOne);
        this.router.delete('/:id', rolsController.delete);
        this.router.put('/:id', rolsController.update);
    }
}

const rolsRoutes = new RolsRoutes();
export default rolsRoutes.router;