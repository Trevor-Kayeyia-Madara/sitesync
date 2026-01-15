export const mockApi = {
  submitDailyLog: async (data) => {
    console.log("Daily log submitted", data);
    return { logId: "LOG-001" };
  },

  uploadPhoto: async (photoData) => {
    console.log("Photo uploaded", photoData);
    return { verified: true };
  },

  getDashboard: async () => {
    return {
      status: "Report Submitted",
      progress: {
        foundation: 90,
        walls: 45,
        roofing: 0
      },
      budget: {
        total: 3000000,
        spent: 1250000,
        committed: 1800000
      }
    };
  }
};
