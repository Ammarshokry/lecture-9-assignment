let balance = 2000;
let balancep = document.querySelector("span")
let inputp = document.querySelector("#inputpassword")
let btn = document.querySelector(".showbutton")
let container = document.querySelector("#container2")
let amountinput = document.querySelector("#amount")
let table = document.querySelector("table tbody")
let head = document.querySelector("#headbalance")


let myLogs = []


function showdata() {
    if (inputp.value == "1234") {
        balancep.innerText = balance
        inputp.remove();
        btn.remove();
        container.classList.replace("d-none", "d-flex")
        head.classList.replace("d-none", "d-block")
        rendering()
    } else {
        alert("wrong password")
    }
}

function deposit() {
    let obalance = balance
    balance += +amountinput.value
    balancep.innerText = balance
    let obj = {
        beforeBalance: obalance,
        type: "deposit",
        amount: amountinput.value,
        afterBalance: balance
    };
    myLogs.push(obj);
    renderLogs();
}


function withdraw() {
    if (amountinput.value <= balance) {
        let obalance2 = balance
        balance -= +amountinput.value
        balancep.innerText = balance
        let obj2 = {
            beforeBalance: obalance2,
            type: "withdraw",
            amount: amountinput.value,
            afterBalance: balance
        };
        myLogs.push(obj2)
        renderLogs()
    } else {
        alert("انت كحيان يلا")
    }
}


function deleteamount(index) {
    const deletelogs = myLogs[index]
    let deletebalance = deletelogs.type === "deposit" ? -deletelogs.amount : +deletelogs.amount;
    myLogs.splice(index, 1)
    balance += deletebalance;
    balancep.innerText = balance;
    renderLogs()
}

function renderLogs() {
    table.innerHTML = "";
    myLogs.forEach((log, index) => {
        table.innerHTML += `
        <tr>
          <th>${index + 1}</th>
          <th>${log.beforeBalance}</th>
          <th>${log.type}</th>
          <th>${log.amount}</th>
          <th>${log.afterBalance} <button class="btn btn-danger" onclick="deleteamount(${index})">X</button></th>
        </tr>
      `;
    });
}