var getDog = function(){
    var request =  new XMLHttpRequest();
    request.open("GET", "https://dog.ceo/api/breeds/image/random");
    request.onload = function(){
        var data = JSON.parse(this.response);
        var dogImage =data.message;
        console.log(dogImage);
        document.getElementById("dog").src=dogImage;
    }
    request.send();
}
var getCat = function(){
    var request =  new XMLHttpRequest();
    request.open("GET", "https://cataas.com/cat?json=true");
    request.onload = function(){
        var data = JSON.parse(this.response);
        var catImage ="https://cataas.com"+ data.url;
        console.log(catImage);
        document.getElementById("cat").src=catImage;
    }
    request.send();
}
var getImages =function(){
    getCat();
    getDog();
}