function counter(){
    let quantidade = 10;

    function adicionar(){
        quantidade = quantidade + 1;
        document.getElementById("contando").innerHTML = quantidade
        console.log(quantidade);
    }
    return(
        <>
            <h1 id="contando">{quantidade}</h1>
            <button onClick={adicionar}>Aumentar</button>
        </>
        
    )
}

export default counter