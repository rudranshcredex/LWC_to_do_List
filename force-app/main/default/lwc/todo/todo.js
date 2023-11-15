import { LightningElement, wire, track } from 'lwc';


export default class Todo extends LightningElement {
    @track
    userInput='';
    task = [];

    

    handleInput(event){
        this.userInput=event.target.value;
        //console.log('this.userInput------>', this.userInput);
    }
    addTaskButton(){
        this.task.push(this.userInput);
        console.log('userinput----->', this.userInput);
        console.log('this.task-------->', this.task);

        
        this.userInput = '';
    }







    
}