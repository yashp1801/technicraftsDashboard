export const updateSiteSummaryId = (currentSlideSiteId) => {
  return {
    type: "NEW_SITE_ID",
    payload: currentSlideSiteId,
  };
};
