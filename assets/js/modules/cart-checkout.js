// /assets/js/modules/cart-checkout.js
import { AppState } from '../core/state.js';

export const CartCheckoutEngine = {
  /**
   * Menghitung rincian total belanja termasuk subtotal, pajak GST (15%), dan total akhir.
   */
  calculateTotals() {
    const subtotal = AppState.getCartSubtotal();
    // Standar GST New Zealand 15% (dapat disesuaikan jika diperlukan)
    const gstRate = 0.15; 
    const tax = subtotal * gstRate;
    const total = subtotal; // Atau subtotal + tax jika harga belum termasuk GST

    return {
      subtotal,
      tax,
      total,
      itemCount: AppState.getCartItemCount()
    };
  },

  /**
   * Menghasilkan format ringkasan pesanan untuk keperluan checkout (misal: WhatsApp / API order).
   */
  generateOrderPayload(customerDetails = {}) {
    return {
      tenantId: AppState.tenantId,
      items: AppState.cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        qty: item.qty,
        total: item.price * item.qty
      })),
      summary: this.calculateTotals(),
      customer: customerDetails,
      createdAt: new Date().toISOString()
    };
  }
};