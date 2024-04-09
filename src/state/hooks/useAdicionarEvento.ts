import { useSetRecoilState } from "recoil"
import { listaDeEventosState } from "../atom"
import { IEvento } from "../../interfaces/IEvento";
import { ObterId } from "../../utils";

const useAdicionarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (evento : IEvento) => {
      const hoje = new Date();
      if(evento.inicio < hoje) {
          throw new Error ('Eventos não podem ser cadastrados com data menor que a atual.')
        }
      evento.id = ObterId();
      return setListaDeEventos(listaAnterior => [...listaAnterior, evento]);
}
}

export default useAdicionarEvento