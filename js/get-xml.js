document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the XML data from localStorage
  const xmlString = localStorage.getItem('contractXML');

  // Parse the XML data
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

  // Extract the contract details from the XML
  const clientName = xmlDoc.querySelector('Nume').textContent;
  const clientSurname = xmlDoc.querySelector('Prenume').textContent;
  const clientEmail = xmlDoc.querySelector('Email').textContent;
  const bookingCamera = xmlDoc.querySelector('Camera').textContent;
  const bookingPayment = xmlDoc.querySelector('Optiune').textContent;

  // Update the contract details in the HTML
  document.getElementById('client-name').textContent = clientName;
  document.getElementById('client-surname').textContent = clientSurname;
  document.getElementById('client-email').textContent = clientEmail;
  document.getElementById('booking-camera').textContent = bookingCamera;
  document.getElementById('booking-payment').textContent = bookingPayment;

  // Update the current date in the contract
  const currentDate = new Date().toLocaleDateString('ro-RO');
  document.getElementById('current-date').textContent = currentDate;
});
