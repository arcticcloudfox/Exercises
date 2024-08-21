//TODO: Add Your Code Below
window.addEventListener("load", () => {
    fetch('<https://handlers.education.launchcode.org/static/astronauts.json>').then(function(response) {
        response.json().then(function(json) {
            const info = document.getElementById("container");
            let i = 0;
            info.innerHTML = `
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                        <li>${json[i].hoursInSpace}</li>
                        <li>${json[i].active}</li>
                        <li>${json[i].skills}</li>
                        </ul>
                        <img src = '${json[i].picture} height = 100'/>`
        });
    });
});