import { Request,Response } from "express";
import pool from "../database";

class AgendaController{
    public async list (req: Request, resp: Response){
        const notas = await pool.query('SELECT * FROM notas');
        resp.json(notas);
        }

    public async create (req: Request, resp: Response): Promise<void>{
        await pool.query('INSERT INTO notas set ?', [req.body]);
        resp.json({message: 'Nota guardada'});
        }

    public async delete(req: Request, resp : Response) : Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM notas WHERE id = ?', [id]);
        resp.json({message: 'La nota se elimino'});
        }

    public async update (req: Request, resp: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE notas set ? WHERE id = ?', [req.body, id]);
        resp.json({message: 'La nota se actualizo'});
        }
        
    public async getOne(req: Request, resp: Response): Promise<any>{
        const { id } = req.params; // se recupera el id de request params.
        const notas = await pool.query('SELECT * FROM notas WHERE id = ?',[id]);
        if(notas.length >0){
        return resp.json(notas[0]);
        }
        resp.status(404).json({text: 'La nota no existe'});
        }

}

const agendaController = new AgendaController();
export default agendaController;