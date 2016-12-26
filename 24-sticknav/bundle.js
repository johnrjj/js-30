window.addEventListener('scroll', () => {
    const { offsetTop } = document.querySelector('#main');
    console.log(offsetTop, window.scrollY);
    return window.scrollY > offsetTop
        ? document.body.classList.add('fixed-nav')
        : document.body.classList.remove('fixed-nav');
});
