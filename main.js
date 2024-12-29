let input = document.querySelector('#taskInput');
let AddButton = document.querySelector('#addTaskBtn');
let editbutton = document.querySelector('#editbutton');
let TaskList = document.querySelector('.tasks');
let containerPopup = document.querySelector('.bg');
let inputEdit = document.querySelector('#editinput')
let Tasks = [];
let edge = document.querySelector('.edge');
let editable = false;
AddButton.addEventListener('click', () => {

    if (input.value != '') {
        let mainDiv = document.createElement('div');
        //////////////
        let text = document.createElement('p');
        text.innerText = input.value;
        //////////////////
        let DivSvg = document.createElement('div');
        DivSvg.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" onclick='comp(this)' viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" onclick='backToList(this)'; fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hidden">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z" />
          </svg>
            <svg xmlns="http://www.w3.org/2000/svg" onclick='del(this)' fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" onclick='edit(this)' viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>


            <div class="comp">COMPLETED</div>
            `
        ///////////////////////////
        mainDiv.insertAdjacentElement('afterbegin', text);
        mainDiv.insertAdjacentElement('beforeend', DivSvg);
        mainDiv.dataset.completed = false;
        mainDiv.dataset.edit = false;
        edge.insertAdjacentElement('beforebegin', mainDiv);
        input.value = '';
        input.focus();
    }
});

function comp(e) {
    e.parentElement.lastChild.previousSibling.classList.add('done');
    e.parentElement.parentElement.dataset.completed = 'true';
    e.classList.add('hidden');
    let child = e.parentElement.childNodes;
    child[3].classList.remove('hidden');

    edge.insertAdjacentElement('afterend', e.parentElement.parentElement);
}
function backToList(e) {
    e.parentElement.lastChild.previousSibling.classList.remove('done');
    e.parentElement.parentElement.dataset.completed = 'false';
    e.classList.add('hidden');
    let child = e.parentElement.childNodes;
    child[1].classList.remove('hidden');

    edge.insertAdjacentElement('beforebegin', e.parentElement.parentElement);
}

function del(e) {
    e.parentElement.parentElement.remove();
}

function edit(el) {
    // console.log(el.parentElement.previousSibling);

    inputEdit.value = el.parentElement.previousSibling.innerText;
    containerPopup.classList.remove('hidden');
    inputEdit.focus();
    el.parentElement.previousSibling.innerText = ''
    editbutton.addEventListener('click', function () {
        el.parentElement.previousSibling.innerText = inputEdit.value;
        containerPopup.classList.add('hidden');
        inputEdit.value = '';
        el = null
    });



}