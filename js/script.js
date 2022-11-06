function createGame(time1, hora, time2) {
  return `   
  <li>
    <img src="assets/icon-${time1}.svg" alt="Bandeira ${time1}" />
    <strong>${hora}</strong>
    <img src="assets/icon-${time2}.svg" alt="Bandeira ${time2}" />
  </li> 
  `
}

function createCard(data, dia, jogos) {
  return `
  <div class="card">
          <h2>${data} <span>${dia} </span></h2>
          <ul>
            ${jogos}
          </ul>  
  </div> 
  `
}
document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "southKorea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland")) +
  createCard("02/12", "sexta", createGame("cameroon", "16:00", "brazil"))
