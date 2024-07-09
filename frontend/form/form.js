fetch('http://localhost:3000/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // Obtener el texto de la respuesta
  })
  .then(data => {
    // Aquí puedes trabajar con los datos obtenidos
    console.log(data);
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud:', error);
  });
