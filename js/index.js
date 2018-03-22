

var coin = ['Your Speaking The Truth', 'You Are Lying!! Dont Do that'];

function flip(){
  var coinFlip = coin[Math.floor(Math.random()*coin.length)];
  document.getElementById('results').innerHTML = coinFlip;
}

function refresh(){
  document.getElementById('results').innerHTML = 'Detect Again'
}

document.getElementById('dice').onclick = flip;
document.getElementById('reload').onclick = refresh;
