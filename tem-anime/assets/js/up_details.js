// 选择渲染的容器
const container = document.getElementsByClassName('containerC')[0];

// 函数：生成卡片的 HTML 结构
function generateCard(data) {
    return `
        <div class="card">
			<div class="left">
				<a href="#" class="image fit"><img src="${data.imageUrl}" alt="" /></a>
			</div>
			<div class="right">
				<h4>${data.title}</h4>
				<div class="tags">
                    ${data.cv.map(cv => `<span> ${cv}</span>`).join('')}
                </div>
		    </div>
            

        </div>
    `;
}

// 使用 fetch 动态加载 JSON 数据
fetch('assets/data/current_detail.json')
    .then(response => response.json()) // 将响应解析为 JSON
    .then(data => {
        data.forEach(item => {
            container.innerHTML += generateCard(item); // 生成并插入每个卡片
        });
        container.innerHTML += res
    })
