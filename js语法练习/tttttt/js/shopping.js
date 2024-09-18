
(function () {
    // 获取电梯元素
    const elevator = document.querySelector('.xtx-elevator')
    // 监听滚动事件
    window.addEventListener('scroll', function () {
        // 获取滚动距离
        const n = document.documentElement.scrollTop
        // 如果滚动距离大于等于300，则电梯的透明度为1
        // 否则，电梯的透明度为0
        n >= 300 ? elevator.style.opacity = 1 : elevator.style.opacity = 0
    })
    // 获取返回顶部元素
    const backtop = document.querySelector('#backTop')
    // 监听点击事件
    backtop.addEventListener('click', function () {
        // 返回到滚动距离为0
        document.documentElement.scrollTop = 0
    })
})();



//点击页面可以直接跳转
(function () {
    const list = document.querySelector('.xtx-elevator-list')
    list.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && e.target.dataset.name) {
            //获取对应的li a 的active对象
            const old = document.querySelector('.xtx-elevator-list .active')
            //如果原来有active对象，就直接移除，没有不做处理
            if (old) {
                old.classList.remove('active')
            }
            //对没有的添加active类
            e.target.classList.add('active')

            //获取每个li对应的自定义尾缀
            //e.target.dataset.name
            //获取每个li对应的自定义尾缀
            //const name = e.target.dataset.name
            //获取每个大模块顶部到屏幕顶部的距离
            const top = document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop
            //滚动到对应的位置
            document.documentElement.scrollTop = top
        }
    })


    window.addEventListener('scroll', function (e) {
        const old = document.querySelector('.xtx-elevator-list .active')
        if (old) {
            old.classList.remove('active')
        }
        //新鲜好物
        const news = document.querySelector('.xtx_goods_new')
        //人气推荐
        const popular = document.querySelector('.xtx_goods_popular')
        //热门商品
        const brand = document.querySelector('.xtx_goods_brand')
        //分类商品
        const category = document.querySelector('.xtx_goods_category')
        //最新主题
        const topic = document.querySelector('.xtx_goods_topic')

        const n = document.documentElement.scrollTop

        if (n >= news.offsetTop && n < popular.offsetTop) {
            document.querySelector('[data-name=new]').classList.add('active')
        } else if (n >= popular.offsetTop && n < brand.offsetTop) {
            document.querySelector('[data-name=popular]').classList.add('active')
        } else if (n >= brand.offsetTop && n < category.offsetTop) {
            document.querySelector('[data-name=brand]').classList.add('active')
        } else if (n >= topic.offsetTop) {
            document.querySelector('[data-name=topic]').classList.add('active')
        }

        // const ss = document.querySelectorAll('xtx-elevator-list')
        // const dd = document.querySelectorAll('.xtx-elevator-list')
        // //获取滚动距离
        // const n = document.documentElement.scrollTop
        // //遍历ss
        // for (let i = 0; i < ss.length; i++) {
        //   if (n >= ss[i].offsetTop && n < ss[i + 1].offsetTop)
        //     document.querySelector('[data-name="' + ss[i].dataset.name + '"]').classList.add('active')
        // }
        // //遍历ss
        // ss.forEach(function (item) {
        //   console.log(item);
        //   //   //获取到ss中的每个元素
        //   //   if (n >= item[0].offsetTop && n < item[1].offsetTop) {
        //   //     document.querySelector('[data-name="' + item[0].dataset.name + '"]').classList.add('active')
        //   //   }
        // })

    })
})();
const ss = document.querySelectorAll('xtx-elevator-list')
ss.forEach(function (item) {
    console.log(item);
})
