document.addEventListener('DOMContentLoaded', () => {
    const tutorials = {
        basic: [
            { id: 'basic1', title: '初级教程 1' }
        ],
        intermediate: [
            { id: 'intermediate1', title: '中级教程 1' }
        ],
        advanced: [
            { id: 'advanced1', title: '高级教程 1' }
        ]
    };

    const categoryLinks = document.querySelectorAll('.category-link');
    const tutorialList = document.getElementById('tutorialList');

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();  // Prevent the default action of the link
            const category = link.dataset.category;
            const selectedTutorials = tutorials[category];

            tutorialList.innerHTML = '';  // Clear the current list
            selectedTutorials.forEach(tutorial => {
                const tutorialLink = document.createElement('a');
                tutorialLink.href = `tutorial.html?id=${tutorial.id}`;
                tutorialLink.textContent = tutorial.title;
                tutorialList.appendChild(tutorialLink);
            });
        });
    });
});

