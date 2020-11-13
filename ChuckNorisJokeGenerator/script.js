function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log("Data is", data);
      var joke = data.value;
      document.getElementById("norris-img").src = data.icon_url;
      document.getElementById("joke-box").innerHTML = joke;
    })
    .catch();

  getCategory();
}
function getCategory() {
  fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("Data is ", data);
      var option = document.getElementById("category");
      var val = "";
      data.forEach((ele) => {
        console.log(ele);
        val = val + "<option value=" + ele + ">" + ele + "</option>";
      });

      option.innerHTML = val;
    })
    .catch();
}
function getJokeByCategory() {
  var val = document.getElementById("category").value;
  console.log(val);
  fetch(`https://api.chucknorris.io/jokes/random?category=${val}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log("Data is", data);
      var joke = data.value;
      document.getElementById("norris-img").src = data.icon_url;
      document.getElementById("joke-box").innerHTML = joke;
    })
    .catch();
}
