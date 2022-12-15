const api = 'https://islomapi.uz/api/present/';

const alertContent = document.querySelector(".alert-container")

document.getElementById('btn').addEventListener("click", function () {
    alertTemp("Iltimos kutib turing ...", "info");

    const inpForm = document.getElementById('inp').value;

    fetch(`${api}day?region=${inpForm}`)
        .then((response) => {
            return response.json()
        })
        .then(data => {
            natijalar(data);
            alertTemp("Hudud muvoffaqiyatli topildi!", "success")
        })

        .catch(error => alertTemp("Hudud topilmadi :)", "success"))
})

function natijalar(response) {
    console.log(response)

    let city = document.querySelector('.result #region')
    city.innerHTML = `Kiritilgan hudud:  ${response.region}`;

    let tong = document.querySelector('.result #tong-time');
    tong.innerHTML = `${response.times.tong_saharlik}`;

    let quyosh = document.querySelector('.result #quyoshtime');
    quyosh.innerHTML = `${response.times.quyosh}`;

    let peshinTime = document.querySelector('.result #peshin')
    peshinTime.innerHTML = `${response.times.peshin}`;

    let asrTime = document.querySelector('.result #asr')
    asrTime.innerHTML = `${response.times.asr}`;

    let shomTime = document.querySelector('.result #shom')
    shomTime.innerHTML = `${response.times.shom_iftor}`;

    let xuftonTime = document.querySelector('.result #xufton')
    xuftonTime.innerHTML = `${response.times.hufton}`

    let weakDay = document.querySelector('#weekday');
    weakDay.innerHTML = `${response.weekday} kuni  uchun namoz vaqtlari`;

    let date = document.querySelector('#date');
    date.innerHTML = `Bugungi sana:  ${response.date}`
}

function alertTemp(text = "", status = ""){
    alertContent.innerHTML = `
        <div class="alert-${status}">
            <h1>${text}</h1>
        </div>
    `
}
