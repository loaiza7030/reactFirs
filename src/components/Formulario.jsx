import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({pacientes,setPacientes,paciente, setPaciente}) => {


  const [nombre,setNombre]=useState('')
  const [propietario,setPropietario]=useState('')
  const [email,setEmail]=useState('')
  const [telefono,setTelefono]=useState('')
  const [fecha,setFecha]=useState('')
  const [sintomas,setSintomas]=useState('')


  const [error, setError]=useState(false)

  useEffect(()=>{
if(Object.keys(paciente).length>0){
  setNombre(paciente.nombre)
  setPropietario(paciente.propietario)
  setEmail(paciente.email)
  setTelefono(paciente.telefono)
  setFecha(paciente.fecha)
  setSintomas(paciente.sintomas)
}

  },[paciente])


  // generar id
  const generarId=()=>{
    const random =Math.random().toString(36).substr(2);
    const fecha= Date.now().toString(36)

    return random + fecha
  }


  const handleSubmit=(e)=>{
    e.preventDefault();
  // validacion
  if([nombre,propietario,email,telefono,fecha,sintomas].includes('')){
    setError(true)
    return
  }  
  setError(false)
  // objeto paciente
 const objetoPaciente={
  nombre,
  propietario,
  email,
  telefono,
  fecha,
  sintomas,
  // id:generarId()
 }

 if(paciente.id){
  // editando
  objetoPaciente.id=paciente.id
  
  const pacientesActualizados=pacientes.map(pacienteState=> pacienteState.id===paciente.id ? objetoPaciente : pacienteState)

  setPacientes(pacientesActualizados)
  setPaciente({})
 }else{
  // nuevo
  objetoPaciente.id=generarId();
  setPacientes([...pacientes, objetoPaciente])
 }
//  codigo anterios
// setPacientes([...pacientes, objetoPaciente])

// reiniciar el form
setNombre('')
setPropietario('')
setEmail('')
setFecha('')
setTelefono('')
setSintomas('')
  }

  return (
    <div className='md:w-1/2 lg:w-3/5'>
      <h2 className='font-bold text-white text-3xl text-center'>Seguimineto Paciente</h2>
      <p className='text-center mt-3 text-2xl'>Añade pacientes y <span className='text-yellow-600'>Administralos</span></p>

   <form className=' shadow-md rounded-md m-5 p-8 bg-gray-600' action="" 
     onSubmit={handleSubmit}
   >
   {error && <Error>Todos los campos son Obligatorios</Error> 
   
    }

    <div className='mb-4'>
      <label className='block uppercase' htmlFor="mascota">Mascota</label>
      <input  className='p-3 w-full outline-none border-sky-600 rounded-md ' id='mascota' type="text" placeholder='Mascota'
      value={nombre}
      onChange={(e)=>setNombre(e.target.value)}
      />
    </div>

    <div className='mb-4' >
      <label className='block uppercase' htmlFor="propietario">Propietario</label>
      <input  className='p-3 w-full outline-none border-sky-600 rounded-md ' id='propietario' type="text" placeholder='Propietario'
        value={propietario}
        onChange={(e)=>setPropietario(e.target.value)}
      />
    </div>

    <div className='mb-4'>
      <label className='block uppercase' htmlFor="email">Email</label>
      <input  className='p-3 w-full outline-none border-sky-600 rounded-md ' id='email' type="text" placeholder='Email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
    <div className='mb-4'>
      <label className='block uppercase' htmlFor="telefono">Telefono</label>
      <input  className='p-3 w-full outline-none border-sky-600 rounded-md ' id='telefono' type="text" placeholder='Telefono'
        value={telefono}
        onChange={(e)=>setTelefono(e.target.value)}
      />
    </div >
    <div className='mb-4'>
      <label className='block uppercase' htmlFor="fecha">Fecha</label>
      <input  className='p-3 w-full outline-none border-sky-600 rounded-md ' id='fecha' type="date" 
        value={fecha}
        onChange={(e)=>setFecha(e.target.value)}
      />
    </div>
    <div className='mb-4'>
      <label className='block uppercase' htmlFor="sintomas">Sintomas</label>
       <textarea className='w-full rounded-sm outline-none p-2 ' placeholder='Sintomas' id='sintomas'
         value={sintomas}
         onChange={(e)=>setSintomas(e.target.value)}
       ></textarea>
    </div>
    <input className='bg-yellow-600 w-full p-2 mt-6 rounded-sm hover:bg-yellow-700  cursor-pointer transition-all text-white font-bold' type="submit" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
     />
   </form>
      
   
    </div>
  )
}

export default Formulario
