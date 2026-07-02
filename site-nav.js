/* Jaras Training — barra de navegación compartida.
   Se incluye en TODAS las páginas: elimina cualquier header propio y
   monta un menú único e idéntico en todo el sitio. */
(function () {
    var MENU = [
        { txt: 'Inicio', href: 'index.html', file: 'index.html' },
        { txt: 'Nosotros', href: 'nosotros.html', file: 'nosotros.html' },
        { txt: 'Cursos', href: 'cursos.html', file: 'cursos.html' },
        { txt: 'Certificación Clarke Fire', href: 'certificacion-clarke-fire.html', file: 'certificacion-clarke-fire.html' },
        { txt: 'Instalaciones', href: 'index.html#instalaciones' },
        { txt: 'Credenciales', href: 'index.html#credenciales' },
        { txt: 'Contacto', href: 'contacto.html', file: 'contacto.html' },
        { txt: 'Consultas/Reclamos', href: 'https://forms.office.com/Pages/ResponsePage.aspx?id=EUw9Id8rYE6qLqlQ-XJjaF7Fh-vb-iRCqi7KIdtVL5BUNklQTkMwRUZLMUY1VkY5MEpaRUVHREY3WS4u', ext: true },
        { txt: 'Política/Certificaciones', href: 'politica-certificaciones.html', file: 'politica-certificaciones.html' },
        { txt: 'Aula Virtual', href: 'https://www.clases.grupoabante.com/aulavirtual/', ext: true, accent: true }
    ];

    var CSS = ''
        + '.jt-nav{background:#fff;box-shadow:0 2px 20px rgba(16,185,129,.1);position:sticky;top:0;z-index:2000;text-align:left!important;}'
        + '.jt-nav *{box-sizing:border-box;}'
        + '.jt-nav .jt-wrap{max-width:1400px;margin:0 auto;padding:.7rem 20px;display:flex;align-items:center;justify-content:space-between;gap:1.2rem;flex-wrap:wrap;}'
        + '.jt-nav .jt-logo img{height:44px;width:auto;display:block;}'
        + '.jt-nav .jt-menu{list-style:none;margin:0;padding:0;display:flex;flex:1;justify-content:center;align-items:center;gap:.35rem;flex-wrap:wrap;}'
        + '.jt-nav .jt-menu a{text-decoration:none;color:#374151;font-weight:500;font-size:.88rem;padding:.45rem .6rem;border-radius:8px;white-space:nowrap;transition:all .25s ease;display:block;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;}'
        + '.jt-nav .jt-menu a:hover{color:#10b981;background:rgba(16,185,129,.1);}'
        + '.jt-nav .jt-menu a.active{color:#10b981;background:rgba(16,185,129,.12);font-weight:600;}'
        + '.jt-nav .jt-menu a.accent{color:#f59e0b;}'
        + '.jt-nav .jt-diesel{height:42px;width:auto;display:block;}'
        + '.jt-nav .jt-toggle{display:none;background:linear-gradient(135deg,#10b981,#3b82f6);border:none;color:#fff;padding:.45rem .7rem;border-radius:8px;font-size:1.2rem;cursor:pointer;line-height:1;}'
        + '@media(max-width:1024px){.jt-nav .jt-menu{gap:.15rem;}.jt-nav .jt-menu a{font-size:.8rem;padding:.4rem .45rem;}}'
        + '@media(max-width:860px){'
        +   '.jt-nav .jt-toggle{display:block;order:3;}'
        +   '.jt-nav .jt-diesel{display:none;}'
        +   '.jt-nav .jt-menu{display:none;flex-basis:100%;width:100%;order:4;flex-direction:column;align-items:stretch;justify-content:flex-start;padding:.5rem 0 .25rem;}'
        +   '.jt-nav .jt-menu.open{display:flex;}'
        +   '.jt-nav .jt-menu a{padding:.7rem .5rem;border-radius:6px;font-size:.95rem;}'
        + '}';

    function currentFile() {
        var p = location.pathname.split('/').pop();
        return p && p.length ? p : 'index.html';
    }

    function build() {
        // 1) Quitar cualquier header propio de la página (evita duplicados)
        var olds = document.querySelectorAll('header.header, header.page-header, header.jt-nav');
        for (var i = 0; i < olds.length; i++) olds[i].parentNode.removeChild(olds[i]);

        // 2) Inyectar estilos una sola vez
        if (!document.getElementById('jt-nav-css')) {
            var st = document.createElement('style');
            st.id = 'jt-nav-css';
            st.textContent = CSS;
            document.head.appendChild(st);
        }

        // 3) Construir el header
        var cur = currentFile();
        var links = MENU.map(function (m) {
            var cls = (m.accent ? ' accent' : '') + (m.file && m.file === cur ? ' active' : '');
            var tgt = m.ext ? ' target="_blank" rel="noopener"' : '';
            return '<li><a href="' + m.href + '"' + tgt + ' class="' + cls.trim() + '">' + m.txt + '</a></li>';
        }).join('');

        var header = document.createElement('header');
        header.className = 'jt-nav';
        header.innerHTML =
            '<div class="jt-wrap">'
            + '<a href="index.html" class="jt-logo" aria-label="Inicio"><img src="logo-jdt.png" alt="Jaras Training"></a>'
            + '<button class="jt-toggle" aria-label="Abrir menú">☰</button>'
            + '<ul class="jt-menu">' + links + '</ul>'
            + '<a href="https://jarasdiesel.cl" target="_blank" rel="noopener" aria-label="Jaras Diesel"><img src="logo-jaras-diesel.png" alt="Jaras Diesel" class="jt-diesel"></a>'
            + '</div>';

        document.body.insertBefore(header, document.body.firstChild);

        // 4) Toggle móvil
        var btn = header.querySelector('.jt-toggle');
        var menu = header.querySelector('.jt-menu');
        btn.addEventListener('click', function () { menu.classList.toggle('open'); });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', build);
    } else {
        build();
    }
})();
