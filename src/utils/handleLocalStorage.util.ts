enum keys {
  REASONS_TO_LOVE = "@100-motivos-para-amar-a-meizinha:reasonsToLove",
}

class HandleLocalStorage {
  updateReasonsToLove(reasonsToLove: string[]) {
    localStorage.setItem(keys.REASONS_TO_LOVE, reasonsToLove.join(";"));
  }

  getReasonsToLove() {
    const reasonsToLoveStr = localStorage.getItem(keys.REASONS_TO_LOVE);

    if (!reasonsToLoveStr || reasonsToLoveStr.length === 0) return [];

    const reasonsToLove = reasonsToLoveStr.split(";");

    return reasonsToLove;
  }
}

export default new HandleLocalStorage();
