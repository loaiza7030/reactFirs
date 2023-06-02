import { useState,useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
function App() {

const [pacientes,setPacientes]=useState([]);
const [paciente,setPaciente]=useState({});

// obteniendo los datos de local storage
useEffect(()=>{
const obtenerLS =()=>{
  const pacientesLS=JSON.parse(localStorage.getItem('pacientes')) ?? [];
  setPacientes(pacientesLS)
}
obtenerLS()
},[])

// almacenando en local storage
useEffect(()=>{
  localStorage.setItem('pacientes', JSON.stringify(pacientes))
},[pacientes])

// eliminar
const eliminarPaciente=(id)=>{
const pacientesActualizados = pacientes.filter(paciente=> paciente.id !== id);
setPacientes(pacientesActualizados)
}

  return (
    <div className='container mx-auto mt-28'>
      <Header />
      <div className='mt-12 md:flex'>
            <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
            
            />
            <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
      </div>
  
     
    </div>
  )
}

export default App
