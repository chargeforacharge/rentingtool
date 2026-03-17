window.globalJsonArray = JSON.parse(localStorage.getItem("c4acRented"))
export function updateRentalItem(renterName){
    try{
    let fullJSON = JSON.parse(localStorage.getItem("c4acRented"));
    let newArray = []
    // console.log(fullJSON);
    fullJSON = window.globalJsonArray;
    // console.error('asdasd' + JSON.stringify(fullJSON))
    if(fullJSON.find(item => item.renterName == renterName) !== undefined){
        if(fullJSON.length > 0){
        throw new Error('Person is already renting')
    }}
        let currentTime = Date.now()
        fullJSON.push({
            rentTime: currentTime,
            renterName: renterName,
})
// console.warn(fullJSON);
window.globalJsonArray = fullJSON;
localStorage.setItem("c4acRented", JSON.stringify(fullJSON));
}catch(e){
        console.error(e)
    }
}
export function getRentalItemFromIdx(name){
    let fullyConvert = JSON.parse(localStorage.getItem("c4acRented"))
    let parsed = window.globalJsonArray
    // console.log(fullyConvert)
    // fullyConvert.forEach(item => {
    //     parsed.push(JSON.parse(item))
    // })
    // console.warn(parsed);
    if(name in parsed){
        return parsed[name]
    }else{
        throw new Error('No rent item found.')
    }
}
function msToNiceForm(ms){
    let seconds = ms / 1000
    let hrs = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds % 3600) / 60)
    let secs = Math.floor(seconds % 60)
    return `<b>${hrs}:${mins}:${secs}</b>`
}
export function getRentObjAsItem(rentObj){
    try{
    let parse = JSON.parse(rentObj)
    let item = "Current Renter: <b>"
    item += parse.renterName
    item += "</b><br>"
    item += "Rented At: <b>"
    item += new Date(parse.rentTime).toLocaleString()
    item += '</b>'
    item += '<br> Time Out: '
    let currentTime = Date.now()
    let timeOut = currentTime - parse.rentTime;
    item += msToNiceForm(timeOut);
    return item
}catch(e){
        console.error(e)
    }
}
export function removeUser(name){
    let fullJSON = window.globalJsonArray
    let location = fullJSON.findIndex(item => item.renterName == name);
    // console.log(location)
    if(location === undefined){
        throw new Error('No rent found.')
    }else{
        fullJSON.splice(location, 1)
        window.globalJSONArray = fullJSON
        // console.log(fullJSON)
        localStorage.setItem("c4acRented", JSON.stringify(fullJSON))
    }
}