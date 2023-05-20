// redirect.js 文件中的代码
// 检测设备类型
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// 如果是手机设备，进行跳转
if (isMobile) {
  window.location.href = "https://la-croquette.github.io/CercleJasmin/ning.html";
}

window.onload = function() {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      let headerContainer = document.getElementById('header-container');
      headerContainer.innerHTML = data;
    });

  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      let footerContainer = document.getElementById('footer-container');
      footerContainer.innerHTML = data;
    });
};
