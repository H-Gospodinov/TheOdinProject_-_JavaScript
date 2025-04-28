
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
    assign() {
        return this.label;
    }
    render() {
        return `
            <div class="task ${this.priority == 'high' ? 'prioritize' : ''}" id="${this.id}">
                <span class="text">
                    <strong>${this.title}</strong>
                </span>
                <span>${this.dueDate}</span>
                <span>${this.label}</span>
                <span>
                    <button id="complete" type="button"></button>
                    <button id="change" type="button"></button>
                    <button id="delete" type="button"></button>
                </span>
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