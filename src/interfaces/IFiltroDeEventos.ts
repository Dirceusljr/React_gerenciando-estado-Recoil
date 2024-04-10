export type IStatus = 'Completos' | 'Incompletos' | 'Ambos';

export interface IFiltroDeEventos {
    data?: Date | null;
    estado?: IStatus;
}