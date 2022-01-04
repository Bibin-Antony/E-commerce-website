const productContainer = [...document.querySelectorAll('.productCardHolder')];
const nxtbtn = [...document.querySelectorAll('.nxtBtn')];
const prebtn = [...document.querySelectorAll('.preBtn')];

productContainer.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtbtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prebtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        console.log("clicked")
    })
})