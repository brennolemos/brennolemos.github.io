// Menu Mobile
const menuButton = document.querySelector('.menu-mobile-btn');
const menuList = document.querySelector('.itens-paginas.mobile');

const openMenu = (event) => {
    menuButton.classList.toggle('active');
    menuList.classList.toggle('active');
}

menuButton.addEventListener('click', openMenu);



// new Glide('.glide').mount()
// if (document.querySelector(".glide")) {
//     new Glide(".glide", {
//         type: "carousel",
//         startAt: 0,
//         autoplay: 3000,
//         breakpoints: {
//             // 1200: { perView: 2 },
//             991: { perView: 2 },
//             768: { perView: 1, gap: 0 }
//         },
//         perView: 6
//     }).mount();
// }


const slide = new Slide('.slide', '.slide-wrapper')
slide.init()




    // Navegação SPA Ajax
    (function () {
        function marcarLinkComoSelecionado(hash) {
            const links = document.querySelectorAll(`[wm-link]`)
            links.forEach(link => link.classList.remove('selecionado'))

            const link = document.querySelector(`[wm-link='${hash}']`)
            link.classList.add('selecionado')
        }

        function navegarViaAjax(hash) {
            if (!hash) return

            const link = document.querySelector(`[wm-link='${hash}']`)
            const destino = document.querySelector('[wm-link-destino]')

            const url = hash.substring(1)
            fetch(url)
                .then(resp => resp.text())
                .then(html => {
                    destino.innerHTML = html
                    marcarLinkComoSelecionado(hash)
                })
        }

        function configurarLinks() {
            document.querySelectorAll('[wm-link]')
                .forEach(link => {
                    link.href = link.attributes['wm-link'].value
                })
        }

        function navegacaoInicial() {
            if (location.hash) {
                navegarViaAjax(location.hash)
            } else {
                const primeiroLink = document.querySelector('[wm-link]')
                navegarViaAjax(primeiroLink.hash)
            }
        }

        window.onhashchange = e => navegarViaAjax(location.hash)

        configurarLinks()
        navegacaoInicial()
    })()