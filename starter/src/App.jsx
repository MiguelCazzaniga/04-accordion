import { useState } from "react";
import Hoja from "./assets/hoja";
import data from "./data"

const App = () => {
 
  const estado=false

  const newData=data.map((item)=>{
    let dataReg={
      id:item.id,
      info:item.info,
      title:item.title,
      estado:false
    }
    return(dataReg)
  })
  
  const [pregunta,setPregunta]=useState(newData)

  const muestra=(id)=>{
    
    let dataReg={}
    let cambiaEstado=false
    const muestraData = pregunta.map((item) => {
      console.log(id,item.id)
      if (id==item.id){
        console.log(item)
        if (item.estado==false){
        dataReg = {
        id: item.id,
        info: item.info,
        title: item.title,
        estado: true
        }
        }else{
           dataReg = {
              id: item.id,
              info: item.info,
              title: item.title,
              estado: false
                       }  
        }

      }  else{
       
        dataReg = {
        id: item.id,
        info: item.info,
        title: item.title,
        estado: false
          }
    }
    
      return (dataReg)
    })
      
      setPregunta(muestraData)
    
    
    
  }
  
  

  return (
    <main>
      <Hoja data={pregunta} muestra={muestra}></Hoja>
    </main>
  )
};
export default App;
