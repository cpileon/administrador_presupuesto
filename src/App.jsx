import { useState } from 'react'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Header from './components/Header'
import NuevoPresupuesto from './components/NuevoPresupuesto'
import Modal from './components/Modal'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevoGasto = () =>{
    setModal(true)
    setTimeout(() => {
      setAnimarModal(true)
    }, 110)
  }

  return (
    <>
      <Header 
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidPresupuesto = {isValidPresupuesto}
        setIsValidPresupuesto = {setIsValidPresupuesto}

      />
        {isValidPresupuesto && (
            <div className='nuevo-gasto'>
                <img src= {IconoNuevoGasto} 
                alt="Agregar nuevo gasto"
                onClick={handleNuevoGasto} />
            </div>
        )}

        {modal && <Modal setModal = {setModal} animarModal = {animarModal} setAnimarModal = {setAnimarModal}/> }
    </>
  )
}

export default App
