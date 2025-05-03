
class Task {

    constructor(
        { title, dueDate, label, priority, id }
    ) {
        this.title = title;
        this.dueDate = dueDate;
        this.label = label;
        this.priority = priority;
        this.id = id;
    }
    render() {
        return `
            <div id="${this.id}" class="task ${this.priority == 'high' ? 'prioritize' : ''}">
                <div class="data main">
                    <span>${this.title}</span>
                </div>
                <div class="data">${this.dueDate}</div>
                <div class="data">${this.label}</div>
                <div class="data">
                    <button class="task-btn" id="complete" type="button" title="complete"></button>
                    <button class="task-btn" id="edit_task" type="button" title="edit"></button>
                    <button class="task-btn" id="remove_task" type="button" title="delete"></button>
                </div>
            </div>
        `;
    } // input must be object
}
function createTask(data) {
    // expects a single object
    const task = new Task(data);
    return task.render();
}
export default createTask;