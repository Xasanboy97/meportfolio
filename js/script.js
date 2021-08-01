
$(document).ready(function () {
    window.addEventListener('scroll', function () {
        var Fixed = document.querySelector('.menu');
        Fixed.classList.toggle('fixed', window.scrollY > 0);
    })

});
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader_hidden');

    var text = document.querySelector('.print');
    var str = text.innerHTML;
    text.innerHTML = '';

    var i = 0;
    function print() {
        text.innerHTML += str.charAt(i);
        i++;
    }

    print()
    setInterval(print, 25);

    // Smart switcher Starting
    const dayNight = document.querySelector(".day-night");

    dayNight.addEventListener('click', () => {
        dayNight.querySelector("i").classList.toggle("fa-toggle-on");

        if (document.body.classList.contains("dark")) {
            dayNight.querySelector("i").classList.add("fa-toggle-on");
        }
        else {
            dayNight.querySelector("i").classList.add("fa-toggle-off");
        }
    })

    let darkMode = localStorage.getItem('darkMode');
    const darkmodetoggle = document.querySelector('.day-night');

    const enableDarkMode = () => {
        document.body.classList.add("darkmode");
        localStorage.setItem("darkMode", "enabled");
    }
    const disabledDarkMode = () => {
        document.body.classList.remove("darkmode");
        localStorage.setItem("darkMode", null);
    }

    if (darkMode === "enabled") {
        disabledDarkMode();
    }

    darkmodetoggle.addEventListener('click', () => {
        darkMode = localStorage.getItem("darkMode");
        if (darkMode !== "enabled") {
            enableDarkMode();
        }
        else {
            disabledDarkMode();
        }

    })
})

$(document).ready(function () {
    $('.round').tilt({
        maxTilt: 10,
        perspective: 500
    })
})

// navigation menu
$('.header__nav-button').click(function () {
    $(this).toggleClass("menu--active");
    $(".navigation-menuu").toggleClass("active");

});


$(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
        $('#top').fadeIn(500);
    }
    else {
        $('#top').fadeOut(500);
    }
})
$('#top').click(function () {
    $('html, body').animate({
        scrollTop: 0,
    }, 1500)
})

$(document).ready(function () {
    //  Skill Present

    $('.skill-value').each(function () {
        thisVal = $(this).text();
        $(this).parent('.skill-percent').animate({ width: thisVal }, 2000)
    });
    // navigation menu
    let $links = $('.navigation-menuu a');

    $links.click(function (e) {
        e.preventDefault();
        $links.removeClass('active')
        let $id = $(this).addClass('active').attr('href');
        let $target = $($id).offset().top - 90;

        $('html, body').animate({
            scrollTop: $target,
        }, 800)
    })

    $(window).scroll(function () {
        let $scroll = $(this).scrollTop();

        $links.each(function () {
            let $id = $(this).attr('href');
            let $target = $($id).offset().top - 120;

            if ($scroll >= $target) {
                $links.removeClass('active');
                $(this).addClass('active')
            }
        })

    })
})

window.onload = () => {

    const progress = () => {

        const line = document.createElement('div')
        line.className = 'progress'
        line.style.cssText = `
        height: 6px;
        background-image: linear-gradient(to right, #feb633 0%, gold 50%, #feb633 100%);
        position: fixed;
        top: 0;
        left: 0;
        transition: 0.8s;
        z-index: 99999;
      `
        document.body.prepend(line)

        const progressWidth = () => {
            return line.style.width = Math.floor(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight) * 100) + '%'
        }

        progressWidth()

        document.addEventListener('scroll', progressWidth)
        window.addEventListener('resize', progressWidth)

    }
    progress()
};
