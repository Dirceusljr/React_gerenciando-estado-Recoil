import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

const useDeletarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    return setListaDeEventos((listaAntiga) => [
      ...listaAntiga.filter((evt) => evt.id !== evento.id),
    ]);
  };
};

export default useDeletarEvento;
