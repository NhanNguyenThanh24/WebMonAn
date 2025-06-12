//DROPDOWN MENU
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
}

// Hiệu ứng nội dung 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

// Elements to observe
const sections = document.querySelectorAll('.featured-categories, .featured-recipes, .recipe-content');
sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});
//SEARCH BAR
// Danh sách món ăn gợi ý
const foodSuggestions = [
    "Phở bò",
    "Bánh mì",
    "Cơm tấm",
    "Bún bò Huế",
    "Bánh xèo",
    "Gỏi cuốn",
    "Cà phê sữa đá",
    "Trà sữa trân châu",
    "Bún chả",
    "Mì Quảng",
    "Bánh cuốn",
    "Chả giò",
    "Hủ tiếu",
    "Cơm gà",
    "Bún đậu mắm tôm"
];

const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestionsBox');

searchInput.addEventListener('input', function() {
    const inputValue = this.value.toLowerCase();
    suggestionsBox.innerHTML = '';
    
    if (inputValue.length > 0) {
        const matchedSuggestions = foodSuggestions.filter(food => 
            food.toLowerCase().includes(inputValue)
        );
        
        if (matchedSuggestions.length > 0) {
            matchedSuggestions.forEach(suggestion => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = suggestion;
                div.addEventListener('click', () => {
                    searchInput.value = suggestion;
                    suggestionsBox.style.display = 'none';
                });
                suggestionsBox.appendChild(div);
            });
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none';
        }
    } else {
        suggestionsBox.style.display = 'none';
    }
});

// Ẩn gợi ý khi click ra ngoài
document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.style.display = 'none';
    }
});