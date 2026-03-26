const menu = document.getElementById("menu");

// icono SOLO para extras
function getIcon() {
  return '<i class="fa-solid fa-utensils text-orange-400 text-xl"></i>';
}

// render por categorias
function renderProductos() {

  menu.innerHTML = "";

  const categorias = {};

  CONFIG.productos.forEach(p => {
    if (!categorias[p.categoria]) {
      categorias[p.categoria] = [];
    }
    categorias[p.categoria].push(p);
  });

  for (let categoria in categorias) {

    menu.innerHTML += `
      <div class="col-span-full mt-6 mb-2">
        <h2 class="text-xl font-bold text-orange-400">
          ${categoria}
        </h2>
      </div>
    `;

    categorias[categoria].forEach(p => {

      menu.innerHTML += `
        <div class="bg-[#141414] rounded-2xl p-3 
                    flex items-center gap-4
                    shadow-lg border border-white/5
                    hover:scale-[1.02] transition">

          <!-- IZQUIERDA -->
          <div class="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 
                      flex items-center justify-center">

            ${
              categoria === "Extras"
                ? `<div class="w-full h-full flex items-center justify-center 
                              bg-orange-500/10">
                      ${getIcon()}
                   </div>`
                : `<img src="${p.imagen || 'img/default.jpg'}" 
                        class="w-full h-full object-cover">`
            }

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

              <a href="https://wa.me/${CONFIG.whatsapp}?text=Hola quiero ${p.nombre}"
                 target="_blank"
                 class="text-green-400 text-sm font-semibold">
                Pedir
              </a>

            </div>

          </div>

        </div>
      `;
    });

  }
}

// init
function init() {
  const wsp = `https://wa.me/${CONFIG.whatsapp}`;

  document.getElementById("btnHero").href = wsp;
  document.getElementById("btnWsp").href = wsp;

  renderProductos();
}

init();