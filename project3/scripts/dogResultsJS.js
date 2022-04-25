let getDog = function(){
    var request =  new XMLHttpRequest();
    request.open("GET", "https://dog.ceo/api/breeds/image/random");
    request.onload = function(){
        var data = JSON.parse(this.response);
        var dogImage =data.message;
        document.getElementById(dog).imageContent=dogImage;
    }
}