import { Request, Response } from 'express';
import Rol from '../models/Rol';

class RolsController {
    
    //CREATE
    public async create (req: Request, res: Response): Promise<void> {
        // console.log(req.body);
        await Rol.create(req.body)
          .then((rol:any) => {
            console.log("Rol creado con ID:", rol.id);
            res.json({msg: 'Rol creado exitosamente', data: rol});
          })
          .catch((error:any)=>{
            console.log('Hubo un error al crear el registro');
            if(error.errors.type === "unique_violation"){
              res.json({msg: 'Este correo ya se encuentra registrado'});
            }
            else{
              res.json(error.errors.type);
            }
          });
    }

    //READ ALL
    public async list (req: Request, res: Response): Promise<any> {
        await Rol.findAll()
        .then(
            (rols:any) => {
                console.log("All rols:", JSON.stringify(rols, null, 4));
                res.json(rols);
            }
        );
    }
    //READ 1
    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        await Rol.findOne({where:{id: id}})
        .then(
            (rol:any) => {
                console.log("All rols:", JSON.stringify(rol, null, 4));
                res.json(rol);
            }
        );
    }

    //UPDATE 1
    public async update (req: Request, res: Response) {
        const {id} = req.params;
        const {body} = req;
        await Rol.update(
            body, {
            where: {
              id: id
            }
          }).then((rol:any) => {
            console.log("Done");
            res.json(rol);
          });
    }

    //DELETE 1
    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await Rol.destroy({
            where: {
              id: id
            }
          }).then(() => {
            console.log("Done");
            res.json('hecho');
          });
    }

}

const rolsController = new RolsController();
export default rolsController;