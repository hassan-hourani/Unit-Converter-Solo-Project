const cbtn = document.getElementById("btn")
const inputValue = document.getElementById("number")
const lengthel = document.getElementById("length")
const volumeel = document.getElementById("volume")
const massel = document.getElementById("mass")

cbtn.addEventListener("click", function(){
    let newLengthInMeters = inputValue.value / 3.28084
    let newLengthInFeet = inputValue.value * 3.28084
    let newVolumeInLiters = inputValue.value / 0.264172
    let newVolumeInGallons = inputValue.value * 0.264172
    let newMassInKilograms = inputValue.value / 2.2
    let newMassInPounds = inputValue.value * 2.2
    lengthel.innerHTML=`${inputValue.value} meters = ${newLengthInFeet.toFixed(3)} feet | ${inputValue.value} feet = ${newLengthInMeters.toFixed(3)} meters`
    volumeel.innerHTML=`${inputValue.value} liters = ${newVolumeInGallons.toFixed(3)} gallons | ${inputValue.value} gallons = ${newVolumeInLiters.toFixed(3)} liters`
    massel.innerHTML=`${inputValue.value} kilos = ${newMassInPounds.toFixed(3)} pounds | ${inputValue.value} pounds = ${newMassInKilograms.toFixed(3)} kilos`

})