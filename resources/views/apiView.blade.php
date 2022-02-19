@include('layouts.layout')

<body>
<main>
    <div id="response">
                <button onclick="getContacts()" class="btn btn-primary">
                    Contacts
                </button>
        <script>
            window.addEventListener('load', () => {
                getContacts();
            })
        </script>
        <div id="result"></div>
    </div>
    <script src="js/apirest.js"></script>
</main>
</body>
