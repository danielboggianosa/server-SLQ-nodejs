import { Request, Response } from 'express';
import User from '../Models/User';
const Sequelize = require('sequelize');

class UsersContuserler {
    
    //CREATE
    public async create (req: Request, res: Response): Promise<void> {
        // console.log(req.body);
        await User.create(req.body
          // { include: [{
          //   model: Rol,
          //   as: 'user_rol',
          // }], }
        )
          .then((user:any) => {
            console.log("User creado con ID:", user.id);
            res.json({msg: 'User creado exitosamente', data: user});
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
        await User.findAll()
        .then(
            (users:any) => {
                console.log("All users:", JSON.stringify(users, null, 4));
                res.json(users);
            }
        );
    }
    //READ 1
    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        await User.findOne({where:{id: id}})
        .then(
            (user:any) => {
                console.log("All users:", JSON.stringify(user, null, 4));
                res.json(user);
            }
        );
    }

    //UPDATE 1
    public async update (req: Request, res: Response) {
        const {id} = req.params;
        const {body} = req;
        await User.update(
            body, {
            where: {
              id: id
            }
          }).then((user:any) => {
            console.log("Done");
            res.json(user);
          });
    }

    //DELETE 1
    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await User.destroy({
            where: {
              id: id
            }
          }).then(() => {
            // console.log("Done");
            res.json({message: 'User Successfully Deleted'});
          });
    }

    // LISTAR CON PAGINADO
    public async getList (req: Request, res: Response): Promise<any> {
        const {page, size, field, order, value, attributes} = req.body;
        const { Op } = require('sequelize');
        // console.log(req.body);
        var where=null;
        if(value){
          where = {
            [Op.or]: [
                { id: { [Op.substring]: value } },
                { nombre: { [Op.substring]: value } },
                { apellido: { [Op.substring]: value } },
                { correo: { [Op.substring]: value } }
              ]
          }
        }
        let total = await User.count({where});
        await User.findAll({
            attributes: attributes,
            where,
            order:[ [field, order] ],
            offset: page, 
            limit: size
        })
        .then(
            (users:any) => {
                // console.log("All users:",total);
                res.json({data: users, total: total});
            }
        );
    }

}

const usersContuserler = new UsersContuserler();
export default usersContuserler;