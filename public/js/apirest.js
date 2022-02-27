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
        `<button class="btn-edit btn btn-warning ms-2" onclick="showForm(${id}, 'edit')">Edit</button>` +
        `<button class="btn-delete btn btn-danger ms-2" onclick="delContact(${id})">Delete</button>` +
        '</td>';
}

function renderContacts(contacts) {
    let markup = '<table class="table"><thead><th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Address</th><th>Actions</th></thead><tbody>';
    contacts.forEach(contact => {
        markup += `<tr><td>${contact.id}</td><td>${contact.name}</td><td>${contact.email}</td><td>${contact.phone}</td><td>${contact.address}</td>${buttons(contact.id)}</td>`
    })
    return markup + '</tbody></table>';
}

function renderContact(contact) {
    let markup = '<table class="table"><thead><th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Address</th></thead>';
    markup += `<tdoby><tr><td>${contact.id}</td><td>${contact.name}</td><td>${contact.email}</td><td>${contact.phone}</td><td>${contact.address}</td></tr></tdoby>`
    return markup + '</table>';
}

function getContacts() {
    fetch('/api/apirest')
        .then(res => res.json())
        .then(data => {
            console.log('Contacts shown successfully')
            const sortedData = data.data.sort((a, b) => {
                return a.id - b.id;
            })
            document.getElementById('result').innerHTML = renderContacts(sortedData);
        })
        .catch(err => console.error(err));
}

function getContact(id) {
    fetch(`/api/apirest/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log('Contact shown successfully')
            document.getElementById('result').innerHTML = renderContact(data.data)
        })
        .catch(err => console.error(err));
}

function addContact() {
    const inputName = document.querySelector('#name');
    const inputEmail = document.querySelector('#email');
    const inputPhone = document.querySelector('#phone');
    const inputAddress = document.querySelector('#address');

    fetch(`/api/apirest`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: inputName.value,
            email: inputEmail.value,
            phone: inputPhone.value,
            address: inputAddress.value
        })
    })
        .then(res => {
            if (res.ok) {
                console.log('Contact added successfully')
            }
        })
        .catch(err => console.error(err));
    setTimeout(() => {
        location.reload()
    }, 1000)
}

function editContact(id) {
    const inputName = document.querySelector('#name');
    const inputEmail = document.querySelector('#email');
    const inputPhone = document.querySelector('#phone');
    const inputAddress = document.querySelector('#address');

    fetch(`/api/apirest/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: inputName.value,
            email: inputEmail.value,
            phone: inputPhone.value,
            address: inputAddress.value
        })
    })
        .then(res => {
            if (res.ok) {
                console.log('Contact edited successfully')
            }
        })
        .catch(err => console.error(err));
    setTimeout(() => {
        location.reload()
    }, 1000)
}

function delContact(id) {
    fetch(`/api/apirest/${id}`, {method: 'DELETE'})
        .then(res => {
            if (res.ok) {
                console.log('Contact deleted successfully')
            }
        })
        .catch(err => console.error(err));
    setTimeout(() => {
        location.reload()
    }, 1000)
}

function renderForm(id, action = 'show') {
    let button = '';
    if (action === 'edit') {
        button = `<button class="btn btn-warning my-3" onClick="editContact(${id})">Edit contact</button>`
    } else if (action === 'show') {
        button = '<button class="btn btn-primary my-3" onClick="addContact()">Add contact</button>'
    }
    return `
        <div class="needs-validation">
            <label class="form-label" for="name">Name</label>
            <input id="name" class="form-control" type="text"/>
            <label class="form-label" for="email">Email</label>
            <input id="email" class="form-control" type="text"/>
            <label class="form-label" for="phone">Phone</label>
            <input id="phone" class="form-control" type="text"/>
            <label class="form-label" for="address">Address</label>
            <input id="address" class="form-control" type="text"/>
            ${button}
        </div>
    `;
}

function showForm(id, action) {
    document.getElementById('result').innerHTML = renderForm(id, action);
}
