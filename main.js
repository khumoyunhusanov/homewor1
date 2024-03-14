// alert("salom")


let arr ="<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime magnam, voluptates maiores cumque omnis sunt tempora placeat voluptas corrupti, doloribus quo totam minus reprehenderit adipisci, ducimus nostrum velit ullam esse!</p>"

let uzgar = arr.split("")

let sa = []
let saa = []
let saaa = []
let saaaa = []
let saaaaa = []

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    
    if (arr[i].toLocaleLowerCase() === "s"){
        sa.push(arr[i])
    }
    if (arr[i].toLocaleLowerCase() === "a"){
        saa.push(arr[i])
    }
    if (arr[i].toLocaleLowerCase() === "l"){
        saaa.push(arr[i])
    }
    if (arr[i].toLocaleLowerCase() === "o"){
        saaaa.push(arr[i])
    }
    if (arr[i].toLocaleLowerCase() === "m"){
        saaaaa.push(arr[i])
    }
}

console.log(sa);
console.log(saa);
console.log(saaa);
console.log(saaaa);
console.log(saaaaa);


console.log(uzgar);

let b = Math.min(sa.length,saa.length,saaa.length,saaaa.length,saaaaa.length)
console.log(b);
