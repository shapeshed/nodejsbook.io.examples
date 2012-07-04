
process.stdin.resume();

process.on('SIGINT', function() {
  console.log('Got a SIGINT. Exiting');
  process.exit(0);
});


