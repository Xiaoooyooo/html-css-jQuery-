$(()=>{
    /**
     * 定义钟面半径r，每一度的弧度值p
     */
    var r = 210,p = Math.PI / 180
    /**
     * 1、2、4、5、7、8、10、11时刻位置
     */
    $('#one').css({
        transform:'rotate(300deg)',
        left:`${r * Math.cos(300 * p)}px`,
        top:`${r * Math.sin(300 * p)}px`
    })
    $('#two').css({
        transform:'rotate(330deg)',
        left:`${r * Math.cos(330 * p)}px`,
        top:`${r * Math.sin(330 * p)}px`
    })
    $('#four').css({
        transform:'rotate(30deg)',
        left:`${r * Math.cos(30 * p)}px`,
        top:`${r * Math.sin(30 * p)}px`
    })
    $('#five').css({
        transform:'rotate(60deg)',
        left:`${r * Math.cos(60 * p)}px`,
        top:`${r * Math.sin(60 * p)}px`
    })
    $('#seven').css({
        transform:'rotate(120deg)',
        left:`${r * Math.cos(120 * p)}px`,
        top:`${r * Math.sin(120 * p)}px`
    })
    $('#eight').css({
        transform:'rotate(150deg)',
        left:`${r * Math.cos(150 * p)}px`,
        top:`${r * Math.sin(150 * p)}px`
    })
    $('#ten').css({
        transform:'rotate(210deg)',
        left:`${r * Math.cos(210 * p)}px`,
        top:`${r * Math.sin(210 * p)}px`
    })
    $('#el').css({
        transform:'rotate(240deg)',
        left:`${r * Math.cos(240 * p)}px`,
        top:`${r * Math.sin(240 * p)}px`
    })

    /**
     * 指针悬停显示数字时间动画
     */
    $('.time_to_string').hover(()=>{
        $('.timeString').stop().css('display', 'block').animate({
            top:'50%',
            opacity:1
        },300,function(){
            console.log('show')
        })
    },()=>{
        $('.timeString').stop().animate({
            top:'60%',
            opacity:0
        },300,function(){
            console.log('hide')
            $(this).css('display','none')
        })
    })

    /**
     * 初始化时间
     */
    function init(){
        let time = new Date
        /**
         * 当前时间
         */
        let h = time.getHours()
        let m = time.getMinutes()
        let s = time.getSeconds()
        let mis = time.getMilliseconds()

        /**
         * 时、分、秒针分别应该旋转的角度
         */
        let h_deg = h % 24 * 30 + m / 60 * 30 - 90
        let m_deg = m % 60 * 6 + s / 60 * 6 - 90
        let s_deg = s % 60 * 6 + mis / 1000 * 6 - 90

        var now = {
            h,
            m,
            s,
            H:h_deg,
            M:m_deg,
            S:s_deg,
        }

        return now
    }


    /**
     * 绘制时针、分针、秒针
     */
    var H = $('#hour'),M = $('#min'),S = $('#sec'),timetoString = $('.timeString')
    function update(){
        let now = init()
        H.css('transform',`rotate(${now.H}deg)`)
        M.css('transform',`rotate(${now.M}deg)`)
        S.css('transform',`rotate(${now.S}deg)`)

        /**
         * 数字时间
         */
        if(timetoString.css('display') == 'block')
            timetoString.text(`${now.h < 10 ? '0' + now.h : now.h} : ${now.m < 10 ? '0' + now.m : now.m} : ${now.s < 10 ? '0' + now.s : now.s}`)
        // requestAnimationFrame(update);    //使用requestAnimationFrame函数需解开这里的注释
    }

    /**
     * 开始
     */
    update()


    /**
     * 无尽的循环，二者选其一
     * 方式一：使用setInterval函数
     * 方式二：使用requestAnimationFrame函数，需解开update函数里的注释
     * 
     * 二者区别：前者自定义刷新频率（这里自定义为10ms一次），后者固定刷新频率60hz（约16.7ms执行一次）
     */
    setInterval(update, 10);

    
    /**
     * 之前代码执行（初始化）完毕后再将结果显示出来，优化视觉效果
     */
    $('.content>*').css('display','block')


    /**
     * 其他代码
     */
    $('body').on('contextmenu',e=>{
        e.preventDefault()
    })
})