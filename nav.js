/* =============================================
   nav.js — Script compartilhado entre todas as páginas
   Responsável por:
   1. Menu hamburguer (mobile)
   2. Alternância de tema claro/escuro
   3. Marcação do link ativo no menu
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* --- 1. MENU HAMBURGUER (mobile) ---
     Ao clicar no botão hamburguer, a lista de links
     recebe/perde a classe "open" para aparecer/sumir. */
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // Fecha o menu ao clicar em qualquer link
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  /* --- 2. TEMA CLARO / ESCURO ---
     Verifica se o usuário já escolheu um tema (salvo em localStorage).
     O botão alterna a classe "dark" no <body>. */
  const themeBtn = document.getElementById('theme-toggle');

  // Aplica o tema salvo ao carregar a página
  if (localStorage.getItem('tema') === 'escuro') {
    document.body.classList.add('dark');
    if (themeBtn) themeBtn.textContent = '☀ Claro';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      const isDark = document.body.classList.toggle('dark');
      // Salva preferência do usuário no navegador
      localStorage.setItem('tema', isDark ? 'escuro' : 'claro');
      themeBtn.textContent = isDark ? '☀ Claro' : '☾ Escuro';
    });
  }

  /* --- 3. LINK ATIVO NO MENU ---
     Compara o href de cada link com a página atual
     e adiciona a classe "active" ao link correspondente. */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

});
