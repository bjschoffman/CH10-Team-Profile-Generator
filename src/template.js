const generateHTML = (team) => {
    // console.log(team, "generate HTML template")
const cards = []

for (let i=0; i < team.length; i++) {
  if (team[i].getRole() === "Manager") {
   let managerCard = `
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h1 class="card-title">${team[i].name}</h1>
              <h2 class="card-text">${team[i].getRole()}</h2>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${team[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                <li class="list-group-item">Office Number: ${team[i].officeNumber}</li>
            </ul>
          </div>
        </div>
        `;
        cards.push(managerCard);

  } else if (team[i].getRole() === "Engineer") { 
    let engineerCard = `
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h1 class="card-title">${team[i].name}</h1>
              <h2 class="card-text">${team[i].getRole()}</h2>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${team[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://www.github.com/${team[i].github}" target="_blank">${team[i].github}</a></li>
            </ul>
          </div>
        </div>
        `;
        cards.push(engineerCard);   

  } else if (team[i].getRole() === "Intern") { 
      let internCard = `
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h1 class="card-title">${team[i].name}</h1>
              <h2 class="card-text">${team[i].getRole()}</h2>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${team[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                <li class="list-group-item">School: ${team[i].school}</li>
            </ul>
          </div>
        </div>
        `;
        cards.push(internCard);
  }         
};

    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
    crossorigin="anonymous">
</head>
<body>
    <header class="container-fluid">
        <h1 class="text-center bg-danger text-white p-3">My Team</h1>
    </header>
    
    <div class="row row-cols-1 row-cols-md-3 g-4 p-4">
    ${cards}
    </div>

</body>
</html>
    `;

    return html
}







module.exports = generateHTML