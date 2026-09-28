import { NextResponse } from "next/server";

const mockClaims = [
  {
    id: "CLM-2026-001",
    policyId: "POL-2024-001",
    amount: 25000,
    reason: "Smart contract exploit",
    status: "under_review",
    createdAt: "2026-09-20T00:00:00Z",
  },
];

export async function GET() {
  return NextResponse.json({ claims: mockClaims });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { policyId, amount, reason, description } = body;

    if (!policyId || !amount || !reason) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newClaim = {
      id: `CLM-2026-${Math.floor(Math.random() * 1000)}`,
      policyId,
      amount,
      reason,
      description,
      status: "submitted",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ claim: newClaim }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
