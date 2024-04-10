import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";

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
