const headerUsername = document.getElementById('header-username');
const storedLogin = localStorage.getItem('userLogin');
if (headerUsername) {
    headerUsername.textContent = storedLogin ? `Привет, ${storedLogin}` : 'Гость';
}




const itemList = document.getElementById('itemList');
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const searchInput = document.getElementById('searchInput');
const itemDescription = document.getElementById('itemDescription');

let items = [
    { name: 'Recon', description: 'Крч умеет сканировать.' },
    { name: 'Support', description: 'Крч помогает в тиме, имеет бафы в хиле' },
    { name: 'Wraith', description: 'Перс с порталами.' },
    { name: 'Pathfinder', description: 'Перс летает как человек паук.' },
    { name: 'Lifeline', description: 'Имеет дрон который хилит.' }
];

function displayItems(filter = '') {
    itemList.innerHTML = '';
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
    filteredItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${item.name}`;
        li.addEventListener('click', () => {
            itemDescription.textContent = item.description;
        });
        itemList.appendChild(li);
    });
}

function addItem() {
    const newItem = itemInput.value.trim();
    if (newItem) {
        items.push({ name: newItem, description: 'Описание для ' + newItem }); // Default description
        itemInput.value = '';
        displayItems();
    }
}

searchInput.addEventListener('input', () => {
    displayItems(searchInput.value);
});

addButton.addEventListener('click', addItem);

itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});

displayItems();
