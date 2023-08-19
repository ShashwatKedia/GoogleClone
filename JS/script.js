const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    var code = event.code;
    if(code === "Enter") {
        search();
    }
      else if(event.keyCode === 13){
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?client=safari&rls=en&q="+input+"&ie=UTF-8&oe=UTF-8"; 
}
