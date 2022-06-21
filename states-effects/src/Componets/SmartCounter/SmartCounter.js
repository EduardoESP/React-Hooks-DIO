import {useState} from 'react';

function SmartCounter(){
  
        const [quantidade, somaQuantidade] = useState(1);
    
    return(
        <>
            <h1>{quantidade}</h1>
            <button onClick={()=> somaQuantidade(quantidade + 1 )}>Adicionar</button>
        </>
    )
}
export default SmartCounter;