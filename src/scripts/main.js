fetch('data/player-stats.json')
  .then((response) => response.json())
  .then((data) => {
    const { players } = data;
    appendData(players);

    // select player
    playerSelect.onchange = function (e) {
      const i = e.target.value;
      showPlayerData(players[i]);
    };
  })
  .catch((err) => console.log('error: ', err));

const playerSelect = document.getElementById('playerSelect');

function appendData(players) {
  // fill select
  for (let i = 0; i < players.length; i += 1) {
    const option = document.createElement('option');
    option.innerHTML = `${players[i].player.name.first} ${players[i].player.name.last}`;
    option.value = i;
    playerSelect.appendChild(option);
  }

  // show first player
  showPlayerData(players[0]);
}

function showPlayerData(data) {
  document.getElementById(
    'playerPhoto',
  ).src = `images/players/p${data.player.id}.png`;
  document.getElementById(
    'playerName',
  ).innerHTML = `${data.player.name.first} ${data.player.name.last}`;
  document.getElementById('playerPosition').innerHTML = choosePlayerPosition(
    data.player.info.position,
  );
  const playerTeam = document.getElementById('playerTeam');
  playerTeam.innerHTML = data.player.currentTeam.name;
  playerTeam.className = `player__team player__team--${data.player.currentTeam.id}`;

  const goals = data.stats.find((el) => el.name === 'goals').value;
  document.getElementById('statAppearances').innerHTML = data.stats.find(
    (el) => el.name === 'appearances',
  ).value;
  document.getElementById('statGoals').innerHTML = goals;
  document.getElementById('statAssists').innerHTML = data.stats.find(
    (el) => el.name === 'goal_assist',
  ).value;

  const matchesSum =
    data.stats.find((el) => el.name === 'losses').value +
    data.stats.find((el) => el.name === 'wins').value +
    data.stats.find((el) => el.name === 'draws').value;

  document.getElementById('statGoalsPerMatch').innerHTML = (
    goals / matchesSum
  ).toFixed(2);

  const passesSum =
    data.stats.find((el) => el.name === 'fwd_pass').value +
    data.stats.find((el) => el.name === 'backward_pass').value;

  document.getElementById('statPasses').innerHTML = (
    passesSum / data.stats.find((el) => el.name === 'mins_played').value
  ).toFixed(2);
}

function choosePlayerPosition(position) {
  switch (position) {
    case 'D':
      return 'Defender';
    case 'F':
      return 'Forward';
    case 'M':
      return 'Midfielder';
    default:
      return 'Other';
  }
}
