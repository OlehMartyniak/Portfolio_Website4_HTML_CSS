// Вибиремо всі іконки з класом tab-item
const tabItems = document.querySelectorAll(".tab-item");
// Вибиремо все наповнення для кожної іконки tab-item (tab-content-item)
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Вибиремо іконку на яку клікаємо
function selectItem (e) {
    removeBorder();
    removeShow();
    // Додамо border до вибраної іконки
    this.classList.add("tab-border");
    // Вибиремо потрібний контент (id іконки + content)
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // До обраного контенту додамо клас show
    tabContentItem.classList.add("show");
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove("tab-border"));
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove("show"));
}

// querySelectorAll створює node-list, аналог array; пройдемось по ньому методом forEach і додамо
// eventListener, який викликатиме функцію selectItem
tabItems.forEach(item => item.addEventListener("click", selectItem));

// За замовчуванням в CSS приховаємо вміст для кожної іконки
//  #tab-1-content,
//  #tab-2-content,
//  #tab-3-content {
//      display: none;
//  }