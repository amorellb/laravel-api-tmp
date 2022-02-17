function api_js_index() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        // document.getElementById('result').innerHTML = xhttp.responseText;
        document.getElementById('result').innerHTML = JSON.parse(xhttp.responseText);
        // también
        // document.getElementById('response').innerHTML = xhttp.responseText;
    }

    xhttp.open('GET', '/api/apirest', true);
    // xhttp.setRequestHeader('Content-Type', 'application/vnd.api+json');
    // xhttp.setRequestHeader('Accept', 'application/vnd.api+json');
    xhttp.send();
}

function api_js_contacts() {
    return $contacts;
}
