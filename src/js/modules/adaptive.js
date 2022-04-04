export const adaptiveFunc = () => {
    let textBlock = document.querySelector('.info-text-container');
    const mainContainer = document.querySelector('.main-container');
    const infoBlockColumn = document.querySelector('.info-block');
    const adaptiveTxt = () => {
        let pageWidth = document.body.clientWidth;
        if (pageWidth < 1200) {
            textBlock.classList.add('info-text-container_text-in-adaptive')
            mainContainer.prepend(textBlock)
        }
        else {
            textBlock.classList.remove('info-text-container_text-in-adaptive')
            infoBlockColumn.prepend(textBlock)
        }
    };
    window.onload = adaptiveTxt;
    window.onresize = adaptiveTxt;
}