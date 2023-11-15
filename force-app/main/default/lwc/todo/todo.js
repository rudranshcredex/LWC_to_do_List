
import { LightningElement, track } from 'lwc';

export default class Todo extends LightningElement {
    @track userInput = '';
    task = [];
    taskList=[];
    selectedId = [];
    selected = true;

    handleInput(event) {
        this.userInput = event.target.value;
    }

    addTaskButton() {
        this.task.push({ id: this.task.length + 1, taskName: this.userInput, isSelected: false });
        this.taskList = [...this.task];
        this.userInput = '';
    }

    handleCheckboxChange(event) {
        const taskId = event.target.value;
        console.log('taskId------>', taskId);

        this.selectedId.push(taskId);
        // this.task.forEach(taskItem => {
        //     if (taskItem.id === taskId) {
        //         taskItem.isSelected = event.target.checked;
        //     }
        // });

        console.log(' this.selectedId------->',  this.selectedId.length);

    }

    removeTasks(){
        this.selected=false;
    }

}
