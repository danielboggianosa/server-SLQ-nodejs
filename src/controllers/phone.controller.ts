import { Request, Response } from 'express';
import Phone from '../models/Phone';

class PhonesContphoneler {
    
    //CREATE
    public async create (req: Request, res: Response): Promise<void> {
        // console.log(req.body);
        await Phone.create(req.body)
          .then((phone:any) => {
            console.log("Phone creado con ID:", phone.id);
            res.json({msg: 'Phone creado exitosamente', data: phone});
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
        await Phone.findAll()
        .then(
            (phones:any) => {
                console.log("All phones:", JSON.stringify(phones, null, 4));
                res.json(phones);
            }
        );
    }
    //READ 1
    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        await Phone.findOne({where:{id: id}})
        .then(
            (phone:any) => {
                console.log("All phones:", JSON.stringify(phone, null, 4));
                res.json(phone);
            }
        );
    }

    //UPDATE 1
    public async update (req: Request, res: Response) {
        const {id} = req.params;
        const {body} = req;
        await Phone.update(
            body, {
            where: {
              id: id
            }
          }).then((phone:any) => {
            console.log("Done");
            res.json(phone);
          });
    }

    //DELETE 1
    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await Phone.destroy({
            where: {
              id: id
            }
          }).then(() => {
            console.log("Done");
            res.json('hecho');
          });
    }

}

const phonesContphoneler = new PhonesContphoneler();
export default phonesContphoneler;