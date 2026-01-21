const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<header class="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex items-center h-20 md:h-24">

      <div class="flex items-center flex-1">
        <a href="index.html">
          <img src="/docs/assets/logo.png" class="h-10" alt="Logo">
        </a>
      </div>

      <nav class="hidden lg:flex items-center justify-center gap-10 font-semibold text-[#4c1569] flex-1">

        <a href="index.html" class="hover:text-[#3a0f52] transition">Home</a>
        <a href="about.html" class="hover:text-[#3a0f52] transition">About</a>

        <div class="relative">
          <button id="partsBtn" class="flex items-center gap-2 hover:text-[#3a0f52] transition">
            Parts
            <i class="fa-solid fa-layer-group text-sm"></i>
          </button>

          <div id="partsDropdown"
            class="absolute left-1/2 top-full mt-6 -translate-x-1/2 w-[520px] opacity-0 pointer-events-none scale-95 transition-all duration-300">

            <div class="bg-white border border-gray-200 rounded-3xl p-6 shadow-2xl">
              <div class="grid grid-cols-3 gap-5">

                <a href="washer-parts.html" class="group rounded-2xl p-4 bg-gray-50 hover:bg-[#4c1569]/5 transition">
                  <i class="fa-solid fa-soap text-[#4c1569] text-xl"></i>
                  <h4 class="mt-3 font-semibold group-hover:text-[#4c1569]">Washer</h4>
                </a>

                <a href="dryer-parts.html" class="group rounded-2xl p-4 bg-gray-50 hover:bg-[#4c1569]/5 transition">
                  <i class="fa-solid fa-wind text-[#4c1569] text-xl"></i>
                  <h4 class="mt-3 font-semibold group-hover:text-[#4c1569]">Dryer</h4>
                </a>

                <a href="refrigerator-parts.html" class="group rounded-2xl p-4 bg-gray-50 hover:bg-[#4c1569]/5 transition">
                  <i class="fa-solid fa-temperature-low text-[#4c1569] text-xl"></i>
                  <h4 class="mt-3 font-semibold group-hover:text-[#4c1569]">Refrigerator</h4>
                </a>

                <a href="stove-parts.html" class="group rounded-2xl p-4 bg-gray-50 hover:bg-[#4c1569]/5 transition">
                  <i class="fa-solid fa-fire-burner text-[#4c1569] text-xl"></i>
                  <h4 class="mt-3 font-semibold group-hover:text-[#4c1569]">Stove</h4>
                </a>

                <a href="oven-parts.html" class="group rounded-2xl p-4 bg-gray-50 hover:bg-[#4c1569]/5 transition">
                  <i class="fa-solid fa-teeth-open text-[#4c1569] text-xl"></i>
                  <h4 class="mt-3 font-semibold group-hover:text-[#4c1569]">Oven</h4>
                </a>

                <a href="dishwasher-parts.html" class="group rounded-2xl p-4 bg-gray-50 hover:bg-[#4c1569]/5 transition">
                  <i class="fa-solid fa-sink text-[#4c1569] text-xl"></i>
                  <h4 class="mt-3 font-semibold group-hover:text-[#4c1569]">Dishwasher</h4>
                </a>

              </div>
            </div>
          </div>
        </div>

        <a href="contact.html" class="hover:text-[#3a0f52] transition">Contact</a>
      </nav>

      <div class="hidden lg:flex justify-end flex-1">
        <a href="contact.html"
          class="bg-[#4c1569] hover:bg-[#3a0f52] text-white font-semibold px-6 py-3 rounded-full transition">
          Get Help
        </a>
      </div>

      <button id="menuBtn" class="lg:hidden ml-auto text-[#4c1569] text-2xl">
        <i class="fa-solid fa-bars"></i>
      </button>

    </div>
  </div>
</header>

<div class="h-20 md:h-24"></div>

<div id="mobileMenu"
  class="fixed inset-0 z-50 bg-white text-[#4c1569] transform translate-x-full transition-transform duration-500 ease-in-out">

  <div class="flex items-center justify-between px-6 h-20 border-b border-gray-200">
    <span class="text-xl font-bold">Menu</span>
    <button id="closeMenu" class="text-2xl">
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>

  <nav class="flex flex-col px-6 pt-10 text-lg font-semibold">
    <a href="index.html" class="py-3 hover:text-[#3a0f52] transition">Home</a>
    <a href="about.html" class="py-3 hover:text-[#3a0f52] transition">About</a>

    <a href="washer-parts.html" class="py-3 hover:text-[#3a0f52] transition">Washer Parts</a>
    <a href="dryer-parts.html" class="py-3 hover:text-[#3a0f52] transition">Dryer Parts</a>
    <a href="refrigerator-parts.html" class="py-3 hover:text-[#3a0f52] transition">Refrigerator Parts</a>
    <a href="stove-parts.html" class="py-3 hover:text-[#3a0f52] transition">Stove Parts</a>
    <a href="oven-parts.html" class="py-3 hover:text-[#3a0f52] transition">Oven Parts</a>
    <a href="dishwasher-parts.html" class="py-3 hover:text-[#3a0f52] transition">Dishwasher Parts</a>

    <a href="contact.html"
      class="mt-6 inline-flex items-center justify-center bg-[#4c1569] text-white font-bold py-4 rounded-full">
      Contact Us
    </a>
  </nav>
</div>
`;

/* JS LOGIC (unchanged) */
const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
});

const partsBtn = document.getElementById("partsBtn");
const partsDropdown = document.getElementById("partsDropdown");

partsBtn.addEventListener("mouseenter", () => {
  partsDropdown.classList.remove("opacity-0", "pointer-events-none", "scale-95");
  partsDropdown.classList.add("opacity-100", "scale-100");
});

partsBtn.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!partsDropdown.matches(":hover")) closeDropdown();
  }, 120);
});

partsDropdown.addEventListener("mouseleave", closeDropdown);

function closeDropdown() {
  partsDropdown.classList.add("opacity-0", "pointer-events-none", "scale-95");
  partsDropdown.classList.remove("opacity-100", "scale-100");
}
