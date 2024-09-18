



// 判断用户名是否符合邮箱或手机号格式
const username = document.querySelector('#login-wrap .bgc .total .middle .two input')
//判断username是否符合邮箱或手机号格式
const isValidUsername = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^1[3-9]\d{9}$/.test(username);

// 判断密码长度是否符合要求
var password = document.getElementById("cesi");

console.log(password);
const minPasswordLength = 6;
const isValidPasswordLength = password.length >= minPasswordLength;
const clicks = document.querySelector('#login-wrap .bgc .total .middle .five a');
clicks.addEventListener('click', function () {
    console.log("wobeidiaole");
    window.location.href = 'shopping.html';
    // if (isValidUsername && isValidPasswordLength) {
    //     //跳转到同一级目录下的shopping.html页面
    //     window.location.href = 'shopping.html';
    // } else {
    //     // 显示错误提示
    //     const errorMessage = document.createElement('div');
    // }
})


