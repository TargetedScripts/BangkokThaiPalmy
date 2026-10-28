// /assets/js/modules/store-status.js

export const StoreStatusEngine = {
  /**
   * Mengubah string waktu (misal: "4:30 PM") menjadi total menit dalam sehari.
   */
  parseTimeString(timeStr) {
    if (!timeStr) return null;
    const clean = String(timeStr).trim().toUpperCase();
    const match = clean.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return null;

    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const ampm = match[3];

    if (ampm === 'PM' && hours < 12) hours += 12;
    if (ampm === 'AM' && hours === 12) hours = 0;

    return (hours * 60) + minutes;
  },

  /**
   * Mendapatkan string jam operasional berdasarkan indeks hari (0 = Minggu, 1 = Senin, dst).
   */
  getDayHours(operatingHours, dayIndex) {
    if (!operatingHours) return "Closed";
    const shortKeys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const longKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return operatingHours[shortKeys[dayIndex]] || operatingHours[longKeys[dayIndex]] || "Closed";
  },

  /**
   * Memeriksa apakah toko sedang buka berdasarkan konfigurasi jam operasional dan zona waktu NZ.
   */
  checkStatus(operatingHours) {
    if (!operatingHours) return { isOpen: false, todayHoursStr: "Closed" };

    if (operatingHours.isTotallyClosed === true || operatingHours.isTotallyClosed === 'true') {
      return { 
        isOpen: false, 
        isTotallyClosed: true,
        title: operatingHours.closureTitle || "Store Temporarily Closed",
        message: operatingHours.closureMessage || "We are currently away on holidays."
      };
    }

    const nzDateStr = new Date().toLocaleString("en-US", { timeZone: "Pacific/Auckland" });
    const now = new Date(nzDateStr);
    const dayIndex = now.getDay();
    const todayHoursStr = this.getDayHours(operatingHours, dayIndex);

    if (!todayHoursStr || String(todayHoursStr).toLowerCase().includes('closed')) {
      return { isOpen: false, todayHoursStr: "Closed Today" };
    }

    const parts = String(todayHoursStr).split(/[-–—]/);
    if (parts.length !== 2) return { isOpen: true, todayHoursStr };

    const openMin = this.parseTimeString(parts[0]);
    const closeMin = this.parseTimeString(parts[1]);

    if (openMin === null || closeMin === null) return { isOpen: true, todayHoursStr };

    const currentMin = (now.getHours() * 60) + now.getMinutes();
    const isOpen = (currentMin >= openMin && currentMin < closeMin);

    return { isOpen, todayHoursStr };
  }
};