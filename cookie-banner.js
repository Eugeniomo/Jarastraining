(function () {
  if (localStorage.getItem('jt_cookie_ack') === '1') return;
  var css = 'position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#111827;color:#f3f4f6;' +
    'padding:14px 18px;font:14px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;' +
    'display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:12px;box-shadow:0 -2px 12px rgba(0,0,0,.25);';
  var div = document.createElement('div');
  div.id = 'jt-cookie-banner';
  div.setAttribute('style', css);
  div.innerHTML =
    '<span style="max-width:640px;">Usamos cookies propias y de Google Ads para medir el rendimiento de nuestras campañas. ' +
    'Al continuar navegando aceptas su uso. Más información en nuestra ' +
    '<a href="politica-privacidad.html" style="color:#10b981;font-weight:600;text-decoration:underline;">Política de Privacidad</a>.</span>' +
    '<button id="jt-cookie-ok" style="background:#10b981;color:#fff;border:0;padding:8px 18px;border-radius:6px;font-weight:600;font-size:13px;cursor:pointer;white-space:nowrap;">Entendido</button>';
  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(div);
    document.getElementById('jt-cookie-ok').addEventListener('click', function () {
      localStorage.setItem('jt_cookie_ack', '1');
      div.remove();
    });
  });
})();
