window.globalTicks = 0
window.secondGlobalJSONArray = JSON.parse(localStorage.getItem("c4acRented"))
if(localStorage.getItem("c4acRented") == null){
    localStorage.setItem("c4acRented", '[]')
}


import * as renting from './rent.js'
console.log(renting)
// renting.updateRentalItem('kameron kriens')
// console.log(renting.getRentObjAsItem(renting.getRentalItemFromName("kameron kriens")))
window.renting = renting
setInterval(function (){
    window.globalTicks += 1
}, 1000)
window.dropdownStatus = true
window.onload = async function (){
    toggleDropdown()
}





function toggleDropdown(){
    document.querySelectorAll('.dropdown').forEach(function(i){
        if(dropdownStatus)
        {
            i.style.visibility = 'hidden'
        }
        else
        {
            i.style.visibility = 'visible';
        }
    })
    if(dropdownStatus){
        dropdownStatus = false
    }
    else{
        dropdownStatus = true
    }
}

let closerButton = document.getElementById("closebutton")

closerButton.addEventListener("click", (event) => {
    try {
        if (dropdownStatus) {
            event.currentTarget.textContent = '▲'
        } else {
            event.currentTarget.textContent = '▼'
        }
        toggleDropdown()
    }catch(e){
        console.log(e)
    }
})

closerButton.addEventListener('mouseenter', (event) => {
    try {
        event.currentTarget.style.backgroundColor = "#4a4a4a"
    }catch(e){
        console.log(e)
    }
})

closerButton.addEventListener('mouseleave', (event) => {
    event.currentTarget.style.backgroundColor = "#232323"
})
//UI UPDATES
setInterval(function (){
    document.getElementById('rented').innerHTML = ''
    // console.log(window.secondGlobalJSONArray)
    window.secondGlobalJSONArray.forEach((item) => {
        // alert(renting.getRentObjAsItem(JSON.stringify(item)));
        let listItem = document.createElement('li')
        listItem.innerHTML = renting.getRentObjAsItem(JSON.stringify(item))
        listItem.classList.add('listItem')
        document.getElementById('rented').appendChild(listItem)
    })
}, 250)
document.getElementById('addingForm').addEventListener('submit', (event) => {
    event.preventDefault()
    name = event.currentTarget.value
    try {
        renting.updateRentalItem(name)
        alert('Added: ' + name)
    }catch(e){
        alert(e.message)
    }
})