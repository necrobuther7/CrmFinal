import { Cliente } from './Cliente';
import { Estado } from './Estado';
import { Comunicacion } from './Comunicacion';

export class Pqr {
    id_pqr: number;
    tipo_pqr: string;
    descripcion_pqr: string;
    fecha_pqr: number;
    respuesta_pqr: string;
    id_cliente: Cliente;
    estado_pqr: Estado;
    id_medio_comunicacion: Comunicacion;
}