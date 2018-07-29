const notValid = (event) => {
  if (event) {
    event.preventDefault();
  }
  alert('Must complete the required fields.');
};

export default notValid;
