let planetContainer = document.querySelector(".planet-container")

let addPlanetCard = (planet) => {

let planetCard = document.createElement("li")

planetCard.className="planet-card"

let image = document.createElement("img")
let header = document.createElement("h3")
let paragraph = document.createElement("p")

image.src=planet.picture

header.textContent= planet.name
paragraph.textContent= `${planet.name} is the ${planet.positionfromSun}planet from the Sun. Its years is ${planet.earthDayInAYear} earth days long.`

planetCard.append(image)
planetContainer.append(planetCard)
console.log(planet.name)
}
planets.forEach(planet) => {
addPlanetCard(planet)
}