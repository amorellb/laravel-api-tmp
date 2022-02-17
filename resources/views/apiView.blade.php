@include('layouts.layout')

<body>
<main>
    <div id="response">
        Hello world
{{--        {{ SetActiveRoute('properties') }}--}}
        <button onclick="api_js_index()" class="nav-link ">
            <i class="fas fa-building nav-icon"></i>
            Create properties
        </button>
        <div id="result"></div>
    </div>
    <script src="js/apirest.js"></script>
</main>
</body>
