import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const filtro = get(filtroDeEventos);
    const todosOsEventos = get(listaDeEventosState);

    const eventos = todosOsEventos.filter((evento) => {
      const eventosComStatus =
        filtro.estado === "Completos"
          ? evento.completo
          : filtro.estado === "Incompletos"
          ? !evento.completo
          : true;

      const eventosComData =
        !filtro.data ||
        evento.inicio.toISOString().slice(0, 10) ===
          filtro.data.toISOString().slice(0, 10);

      return eventosComData && eventosComStatus;
    });
    return eventos;
  },
});

export const eventosAsync = selector({
  key: 'eventosAsync',
  get: async () => {
    const resposta = await fetch('http://localhost:8080/eventos');
    const eventosJSON: IEvento[] = await resposta.json();
    return eventosJSON.map(evento => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim)
    }))
  }
})