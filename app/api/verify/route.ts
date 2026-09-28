import { NextResponse } from "next/server";

// Mock verification endpoint - will be replaced by real on-chain verification
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { address, balance } = body;

    if (!address) {
      return NextResponse.json(
        { error: "Wallet address is required" },
        { status: 400 }
      );
    }

    // Simulate verification logic
    const requiredCollateral = 15000; // $15K for a $10K loan
    const isVerified = Number(balance) >= requiredCollateral;

    return NextResponse.json({
      verified: isVerified,
      address,
      balance: Number(balance) || 0,
      requiredCollateral,
      ratio: isVerified ? 100 : Math.round((Number(balance) / requiredCollateral) * 100),
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
