button=document.getElementById("botao").addEventListener('click',function(){
     fetch("https://pokeapi.co/api/v2/pokemon/charmander")
    .then(function(response){
    return response.json()

    }).then(function(response){
        console.log(response)
        let url=response.sprites.front_default
        document.getElementById('img-card').setAttribute('src',url)
    })

})