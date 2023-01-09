const generateHTML = (team) => {
    // console.log(team, "generate HTML template")
const manager = team[0].name

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
 ${manager}   
</body>
</html>
    `

    return html
}







module.exports = generateHTML