console.log("HIII");

const formEl = document.forms.tipCal;
const billAmtEl = formEl.elements.billamount;
const billtip = formEl.elements.tip;

const calculateBtn = document.getElementById("calbtn");


billAmtEl.addEventListener("focus", () =>{
    console.log("Focused")
})

calculateBtn.addEventListener("click", function (event) {
    event.preventDefault(); // prevent form from reloading the page
    const billAmt = parseFloat(formEl.elements.billamount.value);
    const tipPercent = parseFloat(formEl.elements.tip.value);

    if (isNaN(billAmt) || isNaN(tipPercent)){
        alert("Please enter valid numbers!");
        return;
    }

    console.log("Bill Amount:", billAmt);
    console.log("Tip %:", tipPercent);

    // add calculation logic here
    const total = (billAmt + (billAmt * tipPercent/100));
    console.log(total);

    const totalEl = document.getElementById('total');
    totalEl.textContent = `Total: $${total.toFixed(2)}`;
});