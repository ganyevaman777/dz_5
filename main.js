const list = [

];
const addButton = document.getElementById('button')
const input = document.getElementById('input')


function render() {
    const mainDiv = document.createElement("div")
    mainDiv.setAttribute("class", "list")

    for (let i = 0; i < list.length; i++){
        const div = document.createElement('div')
        div.setAttribute('class', "todoBlock")
        const p = document.createElement('p')
        p.innerText = list[i].text
        div.append(p)

        const buttons = document.createElement('div')
        buttons.setAttribute('class', 'buttons')


        const changeButton = document.createElement('button')
        changeButton.innerText = "change"
        changeButton.setAttribute('class','change')
        changeButton.onclick = function () {
            const obl = prompt('change')
            p.innerText = obl;
        }

        const deleteButton = document.createElement('button')
        deleteButton.setAttribute('class', 'delete')
        deleteButton.innerText = "delete"
        deleteButton.onclick = function() {
            mainDiv.remove();
        }

        buttons.append(changeButton, deleteButton)
        div.append(buttons)
        mainDiv.append(div)
    }
    const form = document.querySelector('.form')
    document.querySelector('.list').remove();
    form.append(mainDiv)
}

addButton.onclick = function () {
    const object = {
        id: list.length+1,
        text: input.value
    }
    list.push(object);
    render();
}
