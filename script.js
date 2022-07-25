async function getContent() {
    try {
        const response = await fetch('http://localhost:4567/')

        const data = await response.json()

        show(data)
    } catch (error) {
        console.log(error)
    }
}
getContent()


function show(users) {

    let output = ''

    for (const user of users){
        output += `<li>${user.name}</li>`
    }

    document.querySelector('main').innerHTML = output
}