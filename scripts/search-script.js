
function initialise()
{
    const result = document.getElementById("result");
    window.alert("Search results for: " + getUrlParam("textSearch"));
    result.innerText = getUrlParam("textSearch");
}

initialise();