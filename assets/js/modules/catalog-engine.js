// /assets/js/modules/catalog-engine.js
import { AppState } from '../core/state.js';

export const CatalogEngine = {
  /**
   * Mengambil daftar item menu/produk yang sudah difilter sesuai kategori aktif di AppState.
   */
  getFilteredItems() {
    const items = AppState.config.menuItems || [];
    return items.filter(item => {
      if (item.isAvailable === false || item.isAvailable === 'false') return false;
      const isFav = (item.isFavorite === true || item.isFavorite === 'true');
      const hasPromo = item.promoPrice && Number(item.promoPrice) < Number(item.price);

      if (AppState.currentCategory === 'ALL') return true;
      if (AppState.currentCategory === 'FILTER_PROMO') return hasPromo;
      if (AppState.currentCategory === 'FILTER_FAVORITES') return isFav;
      return item.category === AppState.currentCategory;
    });
  },

  /**
   * Merender tombol kategori ke dalam kontainer HTML yang disediakan.
   */
  renderCategories(containerEl) {
    if (!containerEl) return;
    const items = AppState.config.menuItems || [];
    const visible = items.filter(i => i.isAvailable !== false);
    const categories = [...new Set(visible.map(i => i.category))];

    let html = `
      <button onclick="window.filterCat('ALL')" class="px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition border ${AppState.currentCategory === 'ALL' ? 'bg-amber-500 text-zinc-950 font-bold shadow-md' : 'bg-zinc-800 text-stone-300 border-zinc-700'}">ALL</button>
      <button onclick="window.filterCat('FILTER_PROMO')" class="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition border flex items-center space-x-1.5 ${AppState.currentCategory === 'FILTER_PROMO' ? 'bg-amber-500 text-zinc-950 shadow-md' : 'bg-red-900 text-amber-200 border-zinc-700'}"><i class="fa-solid fa-fire"></i><span>PROMO & OFFERS</span></button>
      <button onclick="window.filterCat('FILTER_FAVORITES')" class="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition border flex items-center space-x-1.5 ${AppState.currentCategory === 'FILTER_FAVORITES' ? 'bg-amber-500 text-zinc-950 shadow-md' : 'bg-zinc-800 text-amber-400 border-zinc-700'}"><i class="fa-solid fa-star"></i><span>FAVORITES</span></button>
    `;

    categories.forEach(cat => {
      html += `<button onclick="window.filterCat('${cat}')" class="px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition border ${cat === AppState.currentCategory ? 'bg-amber-500 text-zinc-950 font-bold shadow-md' : 'bg-zinc-800 text-stone-300 border-zinc-700'}">${cat}</button>`;
    });

    containerEl.innerHTML = html;
  }
};