import { useRecoilValue } from 'recoil'
import { eventosFiltradosState } from '../seletor'

const useListaDeEventos = () => {
  return (useRecoilValue(eventosFiltradosState)
  )
}

export default useListaDeEventos