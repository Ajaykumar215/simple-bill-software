const menu = {
    samosa : 15,
    kachori :20,
    maggi :50,
    vodapav : 80,
};

let key = document.querySelectorAll("#name").innerHTML;

console.log(key);
// function keyup (key){
    
// }

let name, email, Mobile;
document.getElementById("name").addEventListener("keyup", function (){
    document.getElementById("name2").innerHTML = this.value;
});

document.getElementById("email").addEventListener("keyup", function (){
    document.getElementById("email2").innerHTML = this.value;
})

document.getElementById("mobile").addEventListener("keyup", function (){
    document.getElementById("mobile2").innerHTML = this.value;
})

const myOrders = {}

String.prototype.firstLetter = firstLetter;

// const fname = "kign of javascript";

// // fname.toLowerCase();
// fname.firstLetter();


// -----------------------firstLetter Capital------------------
function firstLetter() {
    return this.slice(0,1).toUpperCase()+""+this.slice(1);
}

// // -----------------Manu price---Quantity About-------------
function renderDesign() {
let text = "";
for(const x in menu){  //01
    text += `${x.firstLetter()}(Rs. ${menu[x]}):<input type="text" id="${x}" /><br />`
    <!-- Smosa (Rs. 10):<input type="text" id="smosa"/>
}

text += `<legend>Your Orders</legend>`//03
document.getElementById("inputContainer").innerHTML = text;//02

}

renderDesign();//05


// -------------------------Get Order-------------------------
function getOrders() { //06
    // console.log("get order");
    const inputBoxes = document.querySelectorAll("#inputContainer input");//08
    
    // console.log(inputBoxes);//09 
    for(const x in myOrders){
        delete myOrders[x];
    }
    
    inputBoxes.forEach((element) => {
        // console.log(element.value);
        const order = parseInt(element.value);//sting value
        // console.log(quantity);
        if(isNaN(order) || order == 0 || order < 0){
            
        }
        else{
            myOrders[element.id] = order;
        }
    });
    billGenerate();
    // console.log(myOrders);
}

// ----------------------billGenerate--------------------

function billGenerate() {
    // console.log("hi");
    let text ="";
    let total = 0;
    for(const x in myOrders){//key
        const muti = menu[x] * myOrders[x];
        // total += muti //shorcut
        total = total + muti;

        text +=
         `<tr>
            <td>${x.firstLetter()}</td>
            <td>Rs. ${menu[x]}</td>
            <td>${myOrders[x]}</td>
            <td>${menu[x]}*${myOrders[x]} = ${muti}</td>
        </tr>`;
        
    }
    // console.log(total);

    document.getElementById('amount').innerHTML = total;
    document.getElementById('bill').innerHTML = text;
}


// ------------------------------Button Submit-----------------
document.getElementById("submit").addEventListener("click", () => {//07
    getOrders();
});
