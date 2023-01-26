const generateHTML = (team) => {
    // console.log(team, "generate HTML template")
const cards = []
for (let i = 0; i < team.length; i++) {
    if(team[i].getRole() === "Manager"){
        let managerCard = `
        <h1>${team[i].name}</h1>
        `
     cards.push(managerCard)   
    }
}

    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
 ${cards}   
</body>
</html>
    `

    return html
}







module.exports = generateHTML