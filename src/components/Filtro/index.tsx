import React, { useState } from 'react';
import style from './Filtro.module.scss';
import { useSetRecoilState } from 'recoil';
import { filtroDeEventos } from '../../state/atom';
import { IFiltroDeEventos, IStatus } from '../../interfaces/IFiltroDeEventos';

const Filtro: React.FC = () => {
  
  const [data, setData] = useState('')
  const [estado, setEstado] = useState<IStatus>("Ambos");

  const setFiltroDeEventos = useSetRecoilState<IFiltroDeEventos>(filtroDeEventos); 
  
  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const filtro: IFiltroDeEventos = {}
    filtro.estado = estado;
    if(data) {
      filtro.data = new Date(data)
    } else {
      filtro.data = null;
    setFiltroDeEventos(filtro)
  }
}

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input 
      type="date" 
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)} 
      placeholder="Por data"
      value={data} />
      <br />
      <h3 className={style.titulo}>Filtrar por estado</h3>
    <select name="estado" id="estado" onChange={evento => setEstado(evento.target.value as IStatus)} className={style.input}>
      <option value="">Selecione uma opção</option>
      <option value="Completos">Completos</option>
      <option value="Incompletos">Incompletos</option>
      <option value="Ambos">Ambos</option>
    </select>

    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro