import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre,propietario, email, telefono,fecha,sintomas, id}=paciente

  const handleEliminar = ()=>{
    const respuesta = confirm('Deseas eliminar este paciente ?');
    if(respuesta){
      eliminarPaciente(id);
    }
  }
  return (
    <div className=' bg-gray-300 shadow-md rounded-md p-3 mt-8  '>
        <p className='font-bold'>Nombre:{' '} <span className='font-normal'>{nombre}</span></p>
        <p className='font-bold'>Propietario:{' '} <span className='font-normal'>{propietario}</span></p>
        <p className='font-bold'>Email:{' '} <span className='font-normal'>{email}</span></p>
        <p className='font-bold'>Telefono:{' '} <span className='font-normal'>{telefono}</span></p>
        <p className='font-bold'>Fecha: {' '}<span className='font-normal'>{fecha}</span></p>
      <p className='font-bold'>Sintomas:{' '} <span className='font-normal'>{sintomas}</span></p>

      <div className='mt-5'>
        <button className='bg-yellow-600 mr-7 rounded-md p-2 hover:bg-yellow-700 transition-all text-white font-bold w-20' type='button '
        onClick={()=>setPaciente(paciente)}
        >Editar</button>

        <button className='bg-red-600  rounded-md p-2 hover:bg-red-500 transition-all text-white font-bold w-20' type='button '
        // eliminando desde aqui
        // onClick={()=> eliminarPaciente(id)}
        // otra forma
        onClick={handleEliminar}
        >Eliminar</button>

      </div>
      </div>
  )
}

export default Paciente
