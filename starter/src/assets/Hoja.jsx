import Pregunta from "./Pregunta"


const Hoja = ({data,muestra}) => {
    return (
      <section className="hoja">
          <h2>Questions</h2>
        {data.map((item) => {
           
          return (
             <Pregunta key={item.id} {...item} muestra={muestra} ></Pregunta>           
                 )
        })}
      </section>
    )
}

export default Hoja