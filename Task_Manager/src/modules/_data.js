import sampleData from './_data.json';

let currentData = sampleData;

for (const item of currentData) {
    item.id = crypto.randomUUID();
}
function updateData(newData, oldData) {

    if (newData) {
        newData.id = crypto.randomUUID();
        currentData.push(newData);
    }
    else if (oldData) {
        currentData = currentData.filter(item => item.id !== oldData);
    }
    // trigger custom event
    const event = new CustomEvent('dataChange');
    document.dispatchEvent(event);
}
export {currentData, updateData};