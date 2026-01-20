const footer = document.getElementById('footer')
footer.innerHTML = `
<!-- FOOTER -->
<footer class="relative bg-[#0a0a0a] text-white pt-24 overflow-hidden">

  <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,180,0,0.08),_transparent_60%)]"></div>

  <div class="relative max-w-7xl mx-auto px-6">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 pb-20">

      <div class="space-y-6">
        <img src="/docs/assets/logo.png" alt="Logo" class="md:h-12 h-8">
        <p class="text-gray-400 leading-relaxed">
          Your trusted source for premium appliance replacement parts.
          Serving homeowners and professionals with reliability and expertise.
        </p>
        <div class="flex gap-4">
          <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ffb400] hover:text-black transition">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ffb400] hover:text-black transition">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ffb400] hover:text-black transition">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div class="space-y-5">
        <h4 class="text-xl font-semibold">Quick Links</h4>
        <ul class="space-y-3 text-gray-400">
          <li><a href="index.html" class="hover:text-[#ffb400] transition">Home</a></li>
          <li><a href="about.html" class="hover:text-[#ffb400] transition">About Us</a></li>
          <li><a href="contact.html" class="hover:text-[#ffb400] transition">Contact</a></li>
        </ul>
      </div>

      <div class="space-y-5">
        <h4 class="text-xl font-semibold">Parts Categories</h4>
        <ul class="space-y-3 text-gray-400">
          <li><a href="washer-parts.html" class="hover:text-[#ffb400] transition">Washer Parts</a></li>
          <li><a href="dryer-parts.html" class="hover:text-[#ffb400] transition">Dryer Parts</a></li>
          <li><a href="refrigerator-parts.html" class="hover:text-[#ffb400] transition">Refrigerator Parts</a></li>
          <li><a href="stove-parts.html" class="hover:text-[#ffb400] transition">Stove Parts</a></li>
          <li><a href="oven-parts.html" class="hover:text-[#ffb400] transition">Oven Parts</a></li>
          <li><a href="dishwasher-parts.html" class="hover:text-[#ffb400] transition">Dishwasher Parts</a></li>
        </ul>
      </div>

      <div class="space-y-5">
        <h4 class="text-xl font-semibold">Contact Info</h4>
        <ul class="space-y-4 text-gray-400">
          <li class="flex gap-3">
            <i class="fa-solid fa-location-dot text-[#ffb400] mt-1"></i>
            <span>Los Angeles, CA</span>
          </li>
          <li class="flex gap-3">
            <i class="fa-solid fa-phone text-[#ffb400] mt-1"></i>
            <span>(000) 123-4567</span>
          </li>
          <li class="flex gap-3">
            <i class="fa-solid fa-envelope text-[#ffb400] mt-1"></i>
            <span>support@applianceparts.com</span>
          </li>
        </ul>
      </div>

    </div>

    <div class="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
      © 2026 Appliance Parts. All rights reserved.
    </div>

  </div>
</footer>

`