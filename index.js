

let saveEntries = document.getElementById("save-entries")
let increasN =document.getElementById("increase")
let count = 0

function increment(){
    count = count +1
    increasN.innerText = count
  

    

}

function save(){

    let countStr = count + " - "
    saveEntries.textContent = saveEntries.textContent + countStr
    count = 0

    increasN.innerText = 0
   



    console.log(count)
}

