const data = [
    {
        id: 0,
        url: './img/lamps/lamp-1-2.png',
        info: {
            material: 'Copper',
            dimension: 'H 33 x W 15 x D 15',
            weight: '2,5 kg',
            electro: 'LED 10W | G9 | 220-240V | 50 Hz',
        }
    },
    {
        id: 1,
        url: './img/lamps/lamp-2-2.png',
        info: {
            material: 'Steel',
            dimension: 'H 40 x W 20 x D 35',
            weight: '5.5 kg',
            electro: 'LED 30W | G9 | 220-240V | 80 Hz',
        }
    },
];
const lightData = [
    {
        id: 0,
        lightMode: true,
        url: './img/sample-image/lamp_sample_light_on.png'
    },
    {
        id: 1,
        lightMode: false,
        url: './img/sample-image/lamp_sample_3_light_off.png'
    },
];
export const events = () => {
    const lampButtons = document.querySelectorAll('.lamp-switcher__item');
    lampButtons.forEach((elem, index, arr) => {
        elem.addEventListener('click', () => {
            document.querySelector('.lamp-param--img img').src = `${data[index].url}`;
            document.querySelectorAll('.lamp-param__tech-description p').forEach((el, i, arr) => {
                let infoKey = Object.keys(data[index].info)[i];
                el.children[0].nextSibling.outerHTML == '<br>' ? el.children[0].nextSibling.nextSibling.textContent = data[index].info[infoKey] :
                    el.children[0].nextSibling.textContent = data[index].info[infoKey];
            })
        })
    })
    const lightSwitchers = document.querySelectorAll('.lamp-switcher__button');
    console.log(lightSwitchers);
    lightSwitchers.forEach((el,i)=>{
        el.addEventListener('click', ()=>{
            console.log(el);
            el.classList.contains('lamp-switcher__button--on')? document.getElementById('img-prev').parentElement.style.backgroundImage = `url('${lightData[0].url}')`:
                document.getElementById('img-prev').parentElement.style.backgroundImage = `url('${lightData[1].url}')`;
        })
    })
}