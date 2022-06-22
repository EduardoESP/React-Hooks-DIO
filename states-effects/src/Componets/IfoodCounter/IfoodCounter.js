import React, {useState, useEffect} from 'react'
import '../IfoodCounter/IfoodCounter.css'

export default function IfoodCounter() {
    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonstyle] = useState("counter-button-minus-active")

    useEffect(
      ()=>{
        alert('Você não pode mais diminuir itens')
      }, [buttonStyle]
    )

    function down(){
        if(value <= 1){
            setButtonstyle("counter-button-minus-desactive")
        }
        if(value > 0){setValue(value - 1)}
        else if(value === 0){alert("Adicione produto")}
    }

    function up(){
        setValue(value + 1)
        setButtonstyle("counter-button-minus-active")
    }
  return (
    <div className="countex-wrapper">
      <button className={buttonStyle} onClick={down}>-</button>
      <p>{value}</p>
      <button className="counter-button-plus-active" onClick={up}>+</button>
    </div>
  )
}
