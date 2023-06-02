import Paciente from './Paciente'


const ListadoPacientes = ({pacientes,setPaciente, eliminarPaciente}) => {



  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll p-4'>


      {pacientes && pacientes.length ? (
        <>
          <h2 className='text-center text-3xl font-bold text-white'>Listado Pacientes</h2>
      <p className='text-center text-2xl'>Lista tus pacientes y<span className='text-yellow-600'>{' '}Administralos</span></p>

      {pacientes.map( (paciente)=>(
       
       <Paciente
       key={paciente.id}
       paciente={paciente}
       setPaciente={setPaciente}
       eliminarPaciente={eliminarPaciente}
       />
    ))}
        </>
      ) :(
        <>
            <h2 className='text-center text-3xl font-bold text-white'>No hay Pacientes</h2>
      <p className='text-center text-2xl'>Comienza Agregando y<span className='text-yellow-600'>{' '}Administralos</span></p>
        </>
      )}
    


  

    </div>
  )
}

export default ListadoPacientes
