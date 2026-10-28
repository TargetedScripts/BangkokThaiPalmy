// /assets/js/core/tenant-loader.js
import { db, DEFAULT_TENANT_ID } from './firebase-init.js';
import { AppState } from './state.js';

export const TenantLoader = {
  /**
   * Mendapatkan TENANT_ID dari parameter URL (?tenant=xyz) atau domain,
   * dengan fallback ke default tenant.
   */
  resolveTenantId() {
    const urlParams = new URLSearchParams(window.location.search);
    const tenantParam = urlParams.get('tenant');
    if (tenantParam) {
      return tenantParam.trim().toLowerCase();
    }
    return DEFAULT_TENANT_ID;
  },

  /**
   * Memuat dan mendengarkan perubahan data tenant secara real-time dari Firestore.
   * @param {Function} onDataUpdated - Callback yang dipicu setiap kali data diperbarui.
   */
  initTenantListener(onDataUpdated) {
    const tenantId = this.resolveTenantId();
    AppState.tenantId = tenantId;

    const docRef = db.collection('tenants').doc(tenantId);

    // Menggunakan onSnapshot untuk zero-flicker real-time sync
    docRef.onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();
        // Simpan konfigurasi ke dalam State Global
        AppState.updateConfig(data.config || {});
        
        if (typeof onDataUpdated === 'function') {
          onDataUpdated(data);
        }
      } else {
        console.error(`Tenant configuration for "${tenantId}" not found in Firestore.`);
        alert(`Maaf, data untuk tenant "${tenantId}" tidak ditemukan.`);
      }
    }, (error) => {
      console.error("Error fetching tenant real-time data:", error);
    });
  }
};
