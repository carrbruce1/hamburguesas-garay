const menu = document.getElementById("menu");

// render productos
function renderProductos() {
  menu.innerHTML = "";

  CONFIG.productos.forEach(p => {
    menu.innerHTML += `
      <div class="bg-[#141414] rounded-2xl p-3 
                  flex items-center gap-4
                  shadow-lg border border-white/5
                  hover:scale-[1.02] transition">

        <!-- IMAGEN -->
        <div class="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
          <img src="${p.imagen || 'img/default.jpg'}" 
               class="w-full h-full object-cover">
        </div>

        <!-- INFO -->
        <div class="flex-1">

          <h3 class="font-semibold text-base">
            ${p.nombre}
          </h3>

          <p class="text-xs text-gray-400 mt-1">
            ${p.descripcion || ""}
          </p>

          <div class="flex items-center justify-between mt-3">

            <span class="text-orange-400 font-bold">
              ${p.precio}
            </span>

            

          </div>

        </div>

      </div>
    `;
  });
}

// init
function init() {
  document.getElementById("nombre").textContent = CONFIG.nombre;

  const wsp = `https://wa.me/${CONFIG.whatsapp}`;
  document.getElementById("btnHero").href = wsp;
  document.getElementById("btnWsp").href = wsp;

  renderProductos();
}

init();