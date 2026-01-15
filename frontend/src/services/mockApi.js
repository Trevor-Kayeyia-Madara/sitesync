/* eslint-disable no-unused-vars */
export const mockApi = {
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
  },
  login: async (phone) => {
    return { user: "Foreman", project: "Meru Residential Build" };
  },

  submitDailyLog: async (data) => {
    console.log("Daily log:", data);
    return { logId: "LOG-001" };
  },

  uploadPhoto: async (photo) => {
    console.log("Photo uploaded:", photo.type);
    return { verified: true };
  }
};
