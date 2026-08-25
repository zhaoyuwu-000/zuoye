const imgTrack = document.querySelector('.splider .img-track');
let index = 0;

function splidshow(){
    imgTrack.style.transform = `translateX(${index * 400 * -1}px)`;
    index++;
    if(index > 2){
        index = 0;
    }
}
let timer = setInterval(splidshow, 3000);

const darkBtn = document.querySelector('.dev .w button');
darkBtn.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    darkBtn.textContent = document.body.dataset.theme === 'dark' ? '浅色模式' : '深色模式';
});