$('[data-open-block').on('click', function () {
    const activeCls = 'is-active';

    $('[data-content]').removeClass(activeCls);
    $(`[data-content="${$(this).data('open-block')}"`).addClass(activeCls);
});


$('.mask-phone').mask('9 (999) 999-99-99');



$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        // more then one submenu open?
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click', { el: this.el, multiple: this.multiple },
            this.dropdown);
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el,
            $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');
    }

    var accordion = new Accordion($('.accordion-menu'), false);
})



$("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});

$(".overlay a").click(function () {
    $("#navToggle").toggleClass("active");
    $(".overlay").toggleClass("open");
    $("body").toggleClass("locked");
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }
});


var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


$('.advantage__slider').slick({
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    nextArrow: document.querySelector('#my-arrow-next'),
    prevArrow: document.querySelector('#my-arrow-prev'),
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});

$('.cases__slider').slick({
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: document.querySelector('#my-arr-next'),
    prevArrow: document.querySelector('#my-arr-prev'),
});


//test
const startBtn = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const frontPage = document.getElementById('front')
const questionContainerElement = document.getElementById('answs')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
function startGame() {
    frontPage.classList.add('hide')
    shuffledQuestions = questions
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        nextButton.classList.remove('hide')
        questionElement.classList.add('hide')
    }
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



const questions = [
    {
        question: 'Выберите правильное утверждение',
        answers: [
            { text: 'VMware Horizon позволяет организовать только физическое цифровое рабочее место', correct: false },
            { text: 'VMware Horizon позволяет организовать и физическое и виртуальное цифровое рабочее место', correct: false },
            { text: 'VMware Horizon позволяет организовать только виртуальное цифровое рабочее место', correct: true },
            { text: 'VMware Horizon позволяет организовать только и физическое и виртуальное цифровое рабочее место', correct: false },
        ]
    },
    {
        question: 'Что позволяет VMware Horizon поддерживать одновременно различные устройства, платформы и ОС, оставаясь при этом простым и безопасным решением?',
        answers: [
            { text: 'Управляемость', correct: false },
            { text: 'Масштабируемость', correct: false },
            { text: 'Простая внедряемость', correct: false },
            { text: 'Всё выше перечисленное', correct: true },
        ]
    },
    {
        question: 'Одним из важнейших преимуществ цифровых рабочих столов относительно физических компьютеров является:',
        answers: [
            { text: 'Управляемость', correct: false },
            { text: 'Масштабируемость', correct: false },
            { text: 'Простая внедряемость', correct: false },
            { text: 'Гибкость', correct: true },
        ]
    }
    ,
    {
        question: 'За счёт каких возможностей технология JMP позволяет заказчику одновременно снижать стоимость и сложность решения? (выберите несколько ответов)',
        answers: [
            { text: 'Контейнеризация', correct: false },
            { text: 'Ультра-быстрая доставка рабочих столов', correct: true },
            { text: 'Доставка приложений в реальном времени', correct: true },
            { text: 'Управление на основе контекстных политик', correct: true },
        ]
    }
    ,
    {
        question: 'Какой из данных сервисов позволяет беспрепятственно ознакомиться с решением Horizon?',
        answers: [
            { text: 'ExploreIT', correct: false },
            { text: 'DemoMe', correct: false },
            { text: 'Simtest', correct: false },
            { text: 'Testdrive', correct: true },
        ]
    }
    ,
    {
        question: 'Можно ли размещать посторонние нагрузки в кластере Horizon?',
        answers: [
            { text: 'Можно без ограничений', correct: false },
            { text: 'Можно, но есть ограничения по типу нагрузки', correct: false },
            { text: 'Можно, но требуется докупить лицензию vSphere и vCenter', correct: true },
            { text: 'Нельзя ни при каких обстоятельствах', correct: false },
        ]
    },
    {
        question: 'Какой протокол, использующийся в VMware Horizon позволяет получить максимальную производительность в условиях ограниченной сети?',
        answers: [
            { text: 'Blast Extreme', correct: true },
            { text: 'PC over IP', correct: false },
            { text: 'vRDP', correct: false },
            { text: 'vDDS', correct: false },
        ]
    }
    ,
    {
        question: 'Как лицензируется VMware Horizon? (выберите 2 варианта)',
        answers: [
            { text: 'По пользователям', correct: true },
            { text: 'По подключениям', correct: true },
            { text: 'По сокетам', correct: false },
            { text: 'По ядрам', correct: false },
        ]
    }
    ,
    {
        question: 'Можно ли использовать Horizon в дополнение к Windows RDS?',
        answers: [
            { text: 'Да', correct: false },
            { text: 'Нет', correct: false },
        ]
    }
    ,
    {
        question: 'Какая технология помогает Horizon поддерживать предоставление ресурсов по запросу?',
        answers: [
            { text: 'Dynamic Environment Manager', correct: false },
            { text: 'ThinApp', correct: false },
            { text: 'Instant clones', correct: true },
            { text: 'vSAN', correct: false },
        ]
    }
]