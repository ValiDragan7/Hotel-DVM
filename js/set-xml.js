document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    fetch('contract.xml')
      .then(response => response.text())
      .then(xmlData => {
        // Retrieve form data
        const nume = document.getElementById('Nume').value;
        const prenume = document.getElementById('Prenume').value;
        const email = document.getElementById('email').value;
        const camera = document.getElementById('Camera').value;
        const metodaPlata = document.querySelector('input[name="alegePlata"]:checked').value;
        
        // Replace the placeholders in the XML data with form values
        const replacedXmlData = xmlData
          .replace('${nume}', nume)
          .replace('${prenume}', prenume)
          .replace('${email}', email)
          .replace('${camera}', camera)
          .replace('${metodaPlata}', metodaPlata);
        
        // Store the replaced XML data in localStorage
        localStorage.setItem('contractXML', replacedXmlData);
        
        // Submit the form
        form.submit();
      })
      .catch(error => {
        console.error('Error fetching XML file:', error);
      });
  });
});
