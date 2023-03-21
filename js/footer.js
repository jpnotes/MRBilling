
document.addEventListener("DOMContentLoaded", (event) => {
    const opt = { day: 'numeric', month: 'short', year: 'numeric' };
    const dstr = new Intl.DateTimeFormat('en-AU', opt).format(new Date());

    const el = document.createElement('div');
    el.setAttribute('id', 'footer');
    el.innerText = dstr;
    document.getElementsByTagName('body')[0].getElementsByTagName('div')[0].appendChild(el);
});
