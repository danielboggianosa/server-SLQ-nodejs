import express from 'express';
import { Application } from 'express-serve-static-core';
import morgan from 'morgan';
import cors from 'cors';
import db_setup from './database/setup';
import userRoutes from './routes/user.routes';;
import rolRoutes from './routes/rol.routes';;
import phoneRoutes from './routes/phone.routes';;


class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
        this.db_config();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({"extended": false}));
    }

    routes(): void {        
        this.app.use('/api/users', userRoutes);
        this.app.use('/api/rols', rolRoutes);
        this.app.use('/api/phones', phoneRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en el puerto ', this.app.get('port'));
        })
    }

    db_config(): void{        
        db_setup;
    }

}

const server = new Server();
server.start();