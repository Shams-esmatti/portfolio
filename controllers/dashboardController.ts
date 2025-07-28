import { Request, Response } from "express";

const dashboardData = {
  totalPayments: 1240,
  totalAmount: 354000,
  averageValue: 285.48,
  uniqueUsers: 312,
  creditIssued: 198000,
  failureRate: 3.4,
  platformDistribution: {
    Web: 53,
    Android: 31,
    iso: 16,
  },
};

export const getDashboardMetrics = (req: Request, res: Response) => {
  try {
    res.status(200).json({ success: true, data: dashboardData });
  } catch (error) {
    console.log("Dashboard fetch error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch metrics" });
  }
};
