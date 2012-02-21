function notDefined(){
  console.trace();
  try {
    someFunction();
  } catch (e) {
    console.error(e);
  }
}

notDefined();
