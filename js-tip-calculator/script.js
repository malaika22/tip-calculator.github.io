const calculateTipButton=document.querySelector('#calculate-tip');
const inputBill=document.getElementById('bill-amount');
const inputPeople=document.getElementById('people');
const service=document.getElementById('service');
const calculateTipDiv=document.getElementsByClassName('calculate-tip-div');
const resultSpans=document.getElementsByClassName('result-spans');
const result=document.getElementById('result');
const feedbackDiv=document.getElementsByClassName('feedback-div');
const modalOverlay=document.getElementById('modal-overlay');
const calculateTip=()=>{
        let tip;
        const performanceValue=service.value;
        const bill=inputBill.value;
        if(inputBill.value==='' || inputBill.value===0){
            alert('Enter valid values');
        } else{
            // console.log(inputBill.value);
            // console.log(inputPeople.value);
            // console.log(service.value)
            tip=bill * performanceValue;
        }
        console.log(tip)
        return tip;
}





    calculateTipButton.addEventListener('click',function(){
        if(calculateTip()>0){
            const persons=inputPeople.value;
            const tipPerPerson=calculateTip()/persons;
            result.style.display='block';
            resultSpans[0].innerText=`${tipPerPerson}`;
            resultSpans[1].innerText=`${persons}`;
            resultSpans[2].innerText=`${calculateTip()}`;   
         } 
    })


