import { NextResponse } from "next/server";

const mockPolicies = [
  {
    id: "POL-2024-001",
    protocol: "Aave",
    coverage: 25000,
    premium: 125,
    status: "active",
    createdAt: "2026-03-15T00:00:00Z",
    expiresAt: "2026-12-15T00:00:00Z",
  },
  {
    id: "POL-2024-002",
    protocol: "Compound",
    coverage: 10000,
    premium: 80,
    status: "active",
    createdAt: "2026-04-01T00:00:00Z",
    expiresAt: "2026-11-30T00:00:00Z",
  },
];

export async function GET() {
  return NextResponse.json({ policies: mockPolicies });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { protocol, coverage, duration } = body;

    if (!protocol || !coverage || !duration) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newPolicy = {
      id: `POL-2026-${Math.floor(Math.random() * 1000)}`,
      protocol,
      coverage,
      premium: Math.round(coverage * 0.005),
      status: "pending",
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + duration * 86400000).toISOString(),
    };

    return NextResponse.json({ policy: newPolicy }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
