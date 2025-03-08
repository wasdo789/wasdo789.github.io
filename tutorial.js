let sketchInstance;

const tutorials = {
    'basic1': {
        title: '初级教程 1 - 绘制矩形',
        file: 'js/simple1.js'  // 指向外部JS文件
    },
    'intermediate1': {
        title: '中级教程 1 - 绘制圆形',
        file: 'js/simple2.js'  // 指向外部JS文件
    },
    'advanced1': {
        title: '高级教程 1 - 动态动画',
        file: 'js/simple3.js'  // 指向外部JS文件
    }
};

function loadTutorial() {
    const urlParams = new URLSearchParams(window.location.search);
    const tutorialId = urlParams.get('id');
    const tutorial = tutorials[tutorialId];

    if (tutorial) {
        document.title = tutorial.title;
        document.getElementById('tutorialTitle').textContent = tutorial.title;

        // 使用fetch API从本地文件加载代码
        fetch(tutorial.file)
            .then(response => response.text())
            .then(code => {
                document.getElementById('codeEditor').value = code;
            })
            .catch(error => {
                console.error('Error loading the script: ', error);
                document.getElementById('codeEditor').value = '// 无法加载指定的教程代码';
            });
    } else {
        document.title = '教程 - P5.js 示例';
        document.getElementById('tutorialTitle').textContent = '教程 - P5.js 示例';
        document.getElementById('codeEditor').value = '// 请选择一个有效的教程';
    }
}



document.getElementById('runButton').addEventListener('click', function() {
    window.open('p5_sketch.html', 'SketchWindow', 'width=800,height=600');
});

window.onload = loadTutorial;
