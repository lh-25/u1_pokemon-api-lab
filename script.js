let button = document.querySelector("#searchButton")
let pokemonName = document.querySelector("#pokemonName")
let pokemonImage = document.querySelector("#pokemonImage")
let textInput = document.querySelector("#inputBar")
let pokemonAbilities = document.getElementById('pokemonAbilities')
let pokemonType = document.getElementById('pokemonType')
let pokemonId = document.getElementById('pokemonId')
let pokemonMoves = document.getElementById('moves')
let pokeData = ''

const getPoke = async (pokemon) => {
    let poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    pokeData = poke.data
    pokemonImage.setAttribute('src', `${poke.data.sprites.front_default}`)
    pokemonName.innerHTML = ''
    pokemonId.innerHTML = ''
    pokemonAbilities.innerHTML = ''
    pokemonType.innerHTML = ''
    pokemonMoves.innerHTML = ''
    pokemonName.innerText = `${pokeData.name}`
    pokemonId.innerHTML = `ID: ${pokeData.id}`
    for (let i = 0; i < pokeData.abilities.length; i++) {
        let item = document.createElement('p')
        item.innerHTML = `Ability ${i + 1}: ${pokeData.abilities[i].ability.name}`
        pokemonAbilities.appendChild(item)
    }
    for (let i = 0; i < pokeData.types.length; i++) {
        let item = document.createElement('p')
        item.innerHTML = `Type ${i + 1}: ${pokeData.types[i].type.name}`
        pokemonType.appendChild(item)
    }

    for (let i = 0; i < pokeData.moves.length; i++) {
        let item = document.createElement('p')
        item.innerHTML = `Move ${i + 1}: ${pokeData.moves[i].move.name}`
        pokemonMoves.appendChild(item)
    }
}



button.addEventListener('click', async () => {
    let searchPoke = textInput.value
    getPoke(searchPoke)

})

