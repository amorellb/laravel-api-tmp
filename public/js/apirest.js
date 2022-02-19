// function api_js_index() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//         document.getElementById('result').innerHTML = api_js_contacts(JSON.parse(xhttp.responseText));
//     }
//     xhttp.open('GET', '/api/apirest', true);
//     xhttp.send();
// }

function buttons(id) {
    return '<td>' +
        `<button class="btn-show btn btn-success ms-2" onclick="getContact(${id})">Show</button>` +
        `<button class="btn-edit btn btn-secondary ms-2" onclick="editContact(${id})">Edit</button>` +
        `<button class="btn-delete btn btn-danger ms-2" onclick="delContact(${id})">Delete</button>` +
        '</td>';
}

function renderContacts(contacts) {
    let markup = '<table class="table"><th>Name</th><th>Email</th><th>Phone</th><th>Address</th>';
    contacts.forEach(contact => {
        markup += `<tr><td>${contact.name}</td><td>${contact.email}</td><td>${contact.phone}</td><td>${contact.address}</td>${buttons(contact.id)}</td>`
    })
    return markup + '</table>';
}

function renderContact(contact) {
    let markup = '<table class="table"><th>Name</th><th>Email</th><th>Phone</th><th>Address</th>';
    markup += `<tr><td>${contact.name}</td><td>${contact.email}</td><td>${contact.phone}</td><td>${contact.address}</td></tr>`
    return markup + '</table>';
}

function getContacts() {
    fetch('/api/apirest')
        .then(res => res.json())
        .then(data => document.getElementById('result').innerHTML = renderContacts(data))
        .catch(err => console.error(err));
}

function getContact(id) {
    fetch(`/api/apirest/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById('result').innerHTML = renderContact(data)
        })
        .catch(err => console.error(err));
}

function editContact(id, uploadData) {
    fetch(`/api/apirest/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(uploadData)
    })
        .catch(err => console.error(err));
}

function delContact(id) {
    fetch(`/api/apirest/${id}`, {method: 'DELETE'})
        .catch(err => console.error(err));
}
