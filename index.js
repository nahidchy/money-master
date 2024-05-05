function getInputValue(inputId){
    const elementId = document.getElementById(inputId);
    const element =parseFloat(elementId.value);
    elementId.value='';
    if(isNaN(element)){
        alert('input a valid number')
    }
        return element;
    
}
function getTextValue(textId){
    const textElement = document.getElementById(textId);
    const text =parseFloat(textElement.innerText);
    return text;
}
function setElement(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText=newValue;
}
document.getElementById('calculate').addEventListener('click',function(){
 const income =getInputValue('income');
 const food =getInputValue('food');
 const rent =getInputValue('rent');
 const clothes=getInputValue('clothes');
 const totalExpenses = food + rent + clothes;
 const balance = income - totalExpenses;
 setElement('expenses',totalExpenses);
 setElement('balance',balance)

});
document.getElementById("save").addEventListener("click",function(){
    const save = getInputValue('saveInput');
    const totalExpense = getTextValue('expenses');
    const saving = (save / 100) * totalExpense;
    const previousBalance = getTextValue('balance');
    const newBalance = previousBalance - saving;
    setElement('saving',saving);
    setElement('remain',newBalance)
})