@include('layouts.layout')

<body>
<main>
    <div id="response" class="m-5">
                <button onclick="getContacts()" class="btn btn-secondary my-3">
                    Contacts
                </button>
                <button onclick="showForm()" class="btn btn-primary my-3">
                    Add contact
                </button>
        <script>
            window.addEventListener('load', () => {
                getContacts();
            })
        </script>
        <div id="result">
        </div>
    </div>
    <script src="js/apirest.js"></script>
</main>
</body>
