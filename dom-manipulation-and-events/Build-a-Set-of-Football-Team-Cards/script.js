// Create the footballTeam object
const footballTeam = {
  team: "Red Falcons",
  year: 2026,
  headCoach: "Alex Thompson",
  players: [
    { name: "John Carter", position: "forward", isCaptain: true },
    { name: "Sam Lee", position: "midfielder", isCaptain: false },
    { name: "David Kim", position: "defender", isCaptain: false },
    { name: "Alex Morgan", position: "goalkeeper", isCaptain: false },
    { name: "Ryan Fox", position: "midfielder", isCaptain: false },
    { name: "Leo Messi", position: "forward", isCaptain: false },
  ]
};

// DOM elements
const teamEl = document.getElementById("team");
const yearEl = document.getElementById("year");
const headCoachEl = document.getElementById("head-coach");
const playerCardsEl = document.getElementById("player-cards");
const playersSelectEl = document.getElementById("players");

// Display team info
teamEl.innerText = footballTeam.team;
yearEl.innerText = footballTeam.year;
headCoachEl.innerText = footballTeam.headCoach;

// Function to create a player card
function createPlayerCard(player) {
  const card = document.createElement("div");
  card.classList.add("player-card");
  const nameEl = document.createElement("h2");
  // Add (Captain) if player is captain
  nameEl.innerText = player.isCaptain ? `(Captain) ${player.name}` : player.name;

  const positionEl = document.createElement("p");
  positionEl.innerText = `Position: ${player.position}`;

  card.appendChild(nameEl);
  card.appendChild(positionEl);

  return card;
}
// Function to render player cards
function renderPlayerCards(filterPosition = "all") {
  // Clear previous cards
  playerCardsEl.innerHTML = "";

  // Filter players based on position
  const filteredPlayers = footballTeam.players.filter(player => {
    return filterPosition === "all" ? true : player.position === filterPosition;
  });

  // Append cards
  filteredPlayers.forEach(player => {
    const card = createPlayerCard(player);
    playerCardsEl.appendChild(card);
  });
}
// Event listener for dropdown menu
playersSelectEl.addEventListener("change", function() {
  renderPlayerCards(this.value);
});

// Initial render (all players)
renderPlayerCards();