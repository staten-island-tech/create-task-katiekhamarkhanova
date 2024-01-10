const URL = "https://meowfacts.herokuapp.com/"

document.getElementById("factsButton").addEventListener("click", function (event) {
    event.preventDefault();
    async function getData(URL) {
        try {
          const response = await fetch(URL);
          if (response.status != 200) {
            throw new Error(response.statusText);
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.log("Sorry, error.");
        }
    }
    getData(URL);
})