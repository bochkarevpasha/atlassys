document.getElementById('dateInput').addEventListener('change', function() {
    const dateInput = this;
    const date = new Date(dateInput.value);

    if (!isNaN(date.getTime())) {
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();

      const formattedDate = `${day} ${month} ${year}`;
      document.getElementById('formattedDateInput').value = formattedDate;
    }
  });