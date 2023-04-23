let string = " ";
let buttons = document.querySelectorAll('.button');
// its a event listener
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'c'){
            string=" "
            document.querySelector('input').value=string;
            
        }
        else{
        console.log(e.target)
        //for selecting the keys in the button form
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
    })
})