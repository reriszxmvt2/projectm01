document.addEventListener('init', function(event) {
    var page = event.target;

    if (page.id === 'page1') {
        page.querySelector('#button-signup').onclick = function() {
            document.querySelector('#myNavigator').pushPage('views/signup.html');
        };
    } else if (page.id === 'page2') {
        page.querySelector('ons-toolbar .center');
    }
});