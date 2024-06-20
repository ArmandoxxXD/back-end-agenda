import { Router } from 'express';
import agendaController from '../controllers/agendaControllers';

class AgendaRoutes {
    public router: Router = Router();
    constructor(){
         this.config();
        }   
    config(): void{
        this.router.get('/', agendaController.list); 
        this.router.post('/',agendaController.create);
        this.router.delete('/:id',agendaController.delete);
        this.router.put('/:id',agendaController.update);
        this.router.get('/:id',agendaController.getOne);
        }
    }
    const agendaRoutes = new AgendaRoutes();
    export default agendaRoutes.router;