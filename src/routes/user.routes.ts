import { Router } from 'express';
import usersController from '../controllers/user.controller';

class UsersRoutes {
    
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(): void {
        this.router.post('/', usersController.create);
        this.router.post('/paged', usersController.listPaged);
        this.router.get('/', usersController.list);
        this.router.get('/:id', usersController.getOne);
        this.router.delete('/:id', usersController.delete);
        this.router.put('/:id', usersController.update);
    }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;