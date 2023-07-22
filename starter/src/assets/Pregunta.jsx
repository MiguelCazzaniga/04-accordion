const Pregunta = ({ id, title, info, estado, muestra }) => {
 

  return (
    <section className="tarjeta">
      <div className='pregunta'>
        <p>{title}</p>
        <button onClick={() => muestra(id)}>{estado?<p>-</p>:<p>+</p>}</button>
      </div>
      {estado && <p className="respuesta">{info}</p>}
     
    </section>
  )
}
export default Pregunta