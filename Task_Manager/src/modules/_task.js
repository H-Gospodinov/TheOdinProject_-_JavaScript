
class Task {

    constructor(
        { title, details, dueDate, priority, label }
    ) {
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;
        this.priority = priority;
        this.label = label;
        this.id = crypto.randomUUID();
    }
    assign() {
        return this.label;
    }
    render() {
        return `
            <div class="task" id="${this.id}">
                <span>${this.title}</span>
                <span>${this.details}</span>
                <span>${this.dueDate}</span>
                <span>${this.priority}</span>
            </div>
        `;
    }
}
export default Task;