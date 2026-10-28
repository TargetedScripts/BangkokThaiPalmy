// /assets/js/core/state.js

export const AppState = {
  tenantId: "bangkokthaipalmy",
  config: {},
  cart: [],
  currentCategory: "ALL",
  activeLayoutMode: "grid",
  isStoreOpen: false,

  /**
   * Memperbarui konfigurasi aplikasi dan menyesuaikan layout default jika ada.
   * @param {Object} newConfig 
   */
  updateConfig(newConfig) {
    this.config = newConfig || {};
    if (this.config.store?.defaultLayout) {
      this.activeLayoutMode = this.config.store.defaultLayout;
    }
  },

  /**
   * Menambahkan item ke keranjang atau menambah kuantitas jika sudah ada.
   * @param {Object} item 
   * @param {Number} effectivePrice 
   */
  addToCart(item, effectivePrice) {
    const existing = this.cart.find(c => c.id === item.id);
    if (existing) {
      existing.qty++;
    } else {
      this.cart.push({ 
        ...item, 
        price: effectivePrice, 
        qty: 1 
      });
    }
  },

  /**
   * Memperbarui kuantitas item di keranjang (+1 atau -1).
   * @param {String} itemId 
   * @param {Number} delta 
   */
  updateCartQty(itemId, delta) {
    const idx = this.cart.findIndex(c => c.id === itemId);
    if (idx !== -1) {
      this.cart[idx].qty += delta;
      if (this.cart[idx].qty <= 0) {
        this.cart.splice(idx, 1);
      }
    }
  },

  /**
   * Menghitung subtotal harga keseluruhan di dalam keranjang.
   */
  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  },

  /**
   * Menghitung total jumlah item (kuantitas) di dalam keranjang.
   */
  getCartItemCount() {
    return this.cart.reduce((sum, item) => sum + item.qty, 0);
  },

  /**
   * Mengosongkan keranjang belanja.
   */
  clearCart() {
    this.cart = [];
  }
};
