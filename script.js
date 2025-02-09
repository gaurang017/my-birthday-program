document.getElementById('startButton').addEventListener('click', function() {
  // Show the confetti animation (if you want to add a confetti effect)
  // document.getElementById('confetti').style.opacity = 1;

  // Show messages after button click, revealing one by one
  setTimeout(function() {
    document.getElementById('message1').style.display = 'block';
  }, 2000);

  setTimeout(function() {
    document.getElementById('message2').style.display = 'block';
  }, 5000);

  setTimeout(function() {
    document.getElementById('message3').style.display = 'block';
  }, 8000);

  setTimeout(function() {
    document.getElementById('message4').style.display = 'block';
  }, 11000);

  setTimeout(function() {
    document.getElementById('finalMessage').style.display = 'block';
  }, 14000);
});
