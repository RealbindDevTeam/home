var submitted = false;

/**
 * 
 */
function thanksRedirect() {
    if (submitted) {
        var loadingDiv = document.getElementById('spinner');
        loadingDiv.style.display="block";
        setTimeout(function(){ window.location = 'http://localhost:3001/gracias'; }, 3000);
    }
}