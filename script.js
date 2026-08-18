/* ==========================================================
   IA no E-commerce — interações compartilhadas
   Tema, navegação ativa, cópia e filtro de prompts.
   ========================================================== */

(function () {
  "use strict";

  const root = document.documentElement;
  const themeButton = document.querySelector("[data-theme-toggle]");

  // Aplica e persiste o tema escolhido. Se não houver escolha, respeita o sistema.
  function preferredTheme() {
    const saved = localStorage.getItem("ia-ecommerce-theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (themeButton) {
      const dark = theme === "dark";
      themeButton.textContent = dark ? "☀️" : "🌙";
      themeButton.setAttribute("aria-label", dark ? "Ativar tema claro" : "Ativar tema escuro");
      themeButton.setAttribute("title", dark ? "Ativar tema claro" : "Ativar tema escuro");
    }
  }

  applyTheme(preferredTheme());

  themeButton?.addEventListener("click", function () {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("ia-ecommerce-theme", next);
    applyTheme(next);
  });

  // Destaca automaticamente a página atual na navbar.
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav [data-page]").forEach(function (link) {
    const isCurrent = link.dataset.page === currentPage;
    link.classList.toggle("active", isCurrent);
    if (isCurrent) link.setAttribute("aria-current", "page");
  });

  // Fecha a navbar mobile depois que um link é acionado.
  document.querySelectorAll(".navbar-collapse .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      const collapse = document.querySelector(".navbar-collapse.show");
      if (collapse && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(collapse).hide();
    });
  });

  // Faz a rolagem suave em links internos sem interferir na troca de páginas.
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const selector = link.getAttribute("href");
      if (!selector || selector === "#") return;
      const target = document.querySelector(selector);
      if (!target) return;
      event.preventDefault();
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      history.pushState(null, "", selector);
    });
  });

  const toast = document.querySelector("[data-copy-toast]");
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2000);
  }

  // Usa Clipboard API e oferece fallback para navegadores mais antigos.
  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }

  document.addEventListener("click", async function (event) {
    const button = event.target.closest("[data-copy-target]");
    if (!button) return;
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;
    const original = button.textContent;
    try {
      await copyText(target.textContent.trim());
      button.textContent = "✅ Copiado!";
      showToast("✅ Texto copiado para a área de transferência!");
      setTimeout(function () { button.textContent = original; }, 2000);
    } catch (error) {
      showToast("Não foi possível copiar. Selecione o texto manualmente.");
    }
  });

  // Filtra todos os cards pelo conteúdo completo: título, chips e prompt.
  const search = document.querySelector("[data-prompt-search]");
  if (search) {
    const cards = Array.from(document.querySelectorAll("[data-prompt-card]"));
    const sections = Array.from(document.querySelectorAll("[data-prompt-section]"));
    const emptyState = document.querySelector("[data-no-results]");

    search.addEventListener("input", function () {
      const query = search.value.trim().toLocaleLowerCase("pt-BR");
      let visibleTotal = 0;

      cards.forEach(function (card) {
        const matches = card.textContent.toLocaleLowerCase("pt-BR").includes(query);
        card.classList.toggle("is-hidden", !matches);
        if (matches) visibleTotal += 1;
      });

      sections.forEach(function (section) {
        const hasVisibleCard = section.querySelector("[data-prompt-card]:not(.is-hidden)");
        section.classList.toggle("is-hidden", !hasVisibleCard);
      });

      if (emptyState) emptyState.style.display = visibleTotal ? "none" : "block";
    });
  }

  // Restaura e salva o checklist da página GIMP neste navegador.
  const progressChecks = Array.from(document.querySelectorAll("[data-progress-check]"));
  if (progressChecks.length) {
    const progressKey = "ia-ecommerce-gimp-progress";
    const progressText = document.querySelector("[data-progress-count]");
    let savedProgress = {};

    try {
      savedProgress = JSON.parse(localStorage.getItem(progressKey) || "{}");
    } catch (error) {
      savedProgress = {};
    }

    progressChecks.forEach(function (checkbox) {
      checkbox.checked = savedProgress[checkbox.id] === true;
    });

    function updateProgress() {
      const progress = {};
      let completed = 0;

      progressChecks.forEach(function (checkbox) {
        progress[checkbox.id] = checkbox.checked;
        if (checkbox.checked) completed += 1;
      });

      try {
        localStorage.setItem(progressKey, JSON.stringify(progress));
      } catch (error) {
        // O checklist continua funcionando na sessão caso o armazenamento esteja bloqueado.
      }

      if (progressText) {
        progressText.textContent = completed + " de " + progressChecks.length + " concluídos";
        progressText.setAttribute("role", "status");
        progressText.setAttribute("aria-live", "polite");
      }
    }

    progressChecks.forEach(function (checkbox) {
      checkbox.addEventListener("change", updateProgress);
    });
    updateProgress();
  }
})();
