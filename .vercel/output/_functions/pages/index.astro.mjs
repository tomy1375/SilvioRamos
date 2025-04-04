/* empty css                                         */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_dC-6T-Kg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Bx8XhnyU.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden"> <!-- Video de fondo --> <div class="absolute inset-0 w-full h-full z-0"> <video class="absolute inset-0 min-w-full min-h-full object-cover" autoplay loop muted playsinline> <source src="contruccion.mp4" type="video/mp4"> <!-- Puedes añadir más formatos de video como respaldo --> <!-- <source src="/ruta-a-tu-video.webm" type="video/webm" /> -->
Tu navegador no soporta videos HTML5.
</video> <!-- Overlay para mejorar la legibilidad del texto --> <div class="absolute inset-0 bg-black/40"></div> </div> <!-- Contenido (ahora con z-index para que aparezca sobre el video) --> <div class="container px-4 md:px-6 relative z-10"> <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"> <div class="flex flex-col justify-center space-y-4"> <div class="space-y-2"> <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white mt-16 md:mt-0">
Soluciones de Ingeniería Civil de Excelencia
</h1> <p class="max-w-[600px] text-white/90 md:text-xl">
Ofrecemos servicios profesionales de ingeniería civil con un enfoque en calidad, 
              innovación y satisfacción del cliente.
</p> </div> <div class="flex flex-col gap-2 min-[400px]:flex-row"> <a href="/proyectos" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
Ver Proyectos
</a> <a href="/contacto" class="inline-flex h-10 items-center justify-center rounded-md border border-white bg-white/10 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
Contactar
</a> </div> </div> <img src="monumentoo.webp" alt="Imagen de proyecto de ingeniería" class="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:max-w-[300px] md:max-w-[400px] lg:max-w-[400px] xl:max-w-[570px]"> </div> </div> </section> <section class="w-full py-12 md:py-24 lg:py-32 bg-muted"> <div class="container px-4 md:px-6"> <div class="flex flex-col items-center justify-center space-y-4 text-center"> <div class="space-y-2"> <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestros Servicios</h2> <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
Ofrecemos una amplia gama de servicios de ingeniería civil para satisfacer todas sus necesidades.
</p> </div> </div> <div class="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"> <div class="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm"> <div class="rounded-full bg-primary/10 p-4"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"> <rect width="18" height="18" x="3" y="3" rx="2"></rect> <path d="M3 9h18"></path> <path d="M9 21V9"></path> </svg> </div> <h3 class="text-xl font-bold">Diseño Estructural</h3> <p class="text-center text-muted-foreground">
Diseño de estructuras seguras y eficientes para todo tipo de proyectos.
</p> </div> <div class="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm"> <div class="rounded-full bg-primary/10 p-4"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"> <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path> <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path> </svg> </div> <h3 class="text-xl font-bold">Gestión de Proyectos</h3> <p class="text-center text-muted-foreground">
Supervisión y gestión integral de proyectos de construcción.
</p> </div> <div class="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm"> <div class="rounded-full bg-primary/10 p-4"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"> <path d="M2 22v-5l5-5 5 5-5 5z"></path> <path d="M9.5 14.5 16 8"></path> <path d="m17 2 5 5-5 5-5-5z"></path> </svg> </div> <h3 class="text-xl font-bold">Topografía</h3> <p class="text-center text-muted-foreground">
Levantamientos topográficos precisos y detallados para sus proyectos.
</p> </div> </div> </div> </section> <section class="w-full py-12 md:py-24 lg:py-32"> <div class="container px-4 md:px-6"> <div class="grid gap-10 px-10 md:gap-16 lg:grid-cols-2"> <div class="space-y-4"> <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">
Proyectos Destacados
</h2> <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
Explore algunos de nuestros proyectos más recientes y destacados.
</p> <a href="/proyectos" class="inline-flex items-center gap-1 text-primary hover:underline">
Ver todos los proyectos
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"> <path d="M5 12h14"></path> <path d="m12 5 7 7-7 7"></path> </svg> </a> </div> <div class="grid gap-6 sm:grid-cols-2"> <div class="group relative overflow-hidden rounded-lg border"> <img src="monumento.webp" width="400" height="300" alt="Proyecto 1" class="aspect-auto object-cover transition-transform group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div> <div class="absolute bottom-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100"> <h3 class="font-bold">Monumento del Bicentenario</h3> <p class="text-sm">Diseño y construcción</p> </div> </div> <div class="group relative overflow-hidden rounded-lg border"> <img src="shop.webp" width="400" height="300" alt="Proyecto 2" class="aspect-auto object-cover transition-transform group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div> <div class="absolute bottom-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100"> <h3 class="font-bold">Shopping "Annuar"</h3> <p class="text-sm">Diseño estructural</p> </div> </div> </div> </div> </div> </section> <section class="w-full py-12 md:py-24 lg:py-32 bg-muted"> <div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6"> <div class="space-y-3"> <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">
¿Listo para comenzar su proyecto?
</h2> <p class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
Contáctenos hoy mismo para discutir cómo podemos ayudarle con sus necesidades de ingeniería civil.
</p> </div> <div class="mx-auto flex flex-col gap-2 min-[400px]:flex-row"> <a href="/contacto" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
Contactar Ahora
</a> <a href="/login" class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
Acceso Clientes
</a> </div> </div> </section> ` })}`;
}, "E:/TrabajosProgramador/Silvio Ramos/ingecivil-website/src/pages/index.astro", void 0);

const $$file = "E:/TrabajosProgramador/Silvio Ramos/ingecivil-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
