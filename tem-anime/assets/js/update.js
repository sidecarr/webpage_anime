// 选择渲染的容器
const container = document.getElementsByClassName('reel')[0];

// 函数：生成卡片的 HTML 结构
function generateCard(data) {
    return `
        <article>
			<a href="#" class="image featured">
				<div class="image-container"><img src="${data.imageUrl}" /></div>
			</a>
			<div>
				<p><a href="#">${data.title}</a></p>
			</div>
			<p>${data.jp_name}</p>
			<button id="increment-btn">${data.ep}</button>
		</article>
    `;
}

// 使用 fetch 动态加载 JSON 数据
fetch('assets/data/current.json')
    .then(response => response.json()) // 将响应解析为 JSON
    .then(data => {
        data.forEach(item => {
            container.innerHTML += generateCard(item); // 生成并插入每个卡片
        });
        container.innerHTML += res
    })

    
