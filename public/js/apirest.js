function api_js_index() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        // document.getElementById('result').innerHTML = xhttp.responseText;
        document.getElementById('result').innerHTML = api_js_contacts(JSON.parse(xhttp.responseText));
        // también
        // document.getElementById('response').innerHTML = xhttp.responseText;
    }

    xhttp.open('GET', '/api/apirest', true);
    // xhttp.setRequestHeader('Content-Type', 'application/vnd.api+json');
    // xhttp.setRequestHeader('Accept', 'application/vnd.api+json');
    xhttp.send();
}

function api_js_contacts(contactsData) {
    let markup = '<table><th>Name</th><th>Lastname</th><th>Phone</th>';
    contactsData.forEach(contact => {
        markup += `<tr><td>${contact.firstname}</td><td>${contact.lastname}</td><td>${contact.contact_number}</td></tr>`
    })
    return markup + '</table>';
}
