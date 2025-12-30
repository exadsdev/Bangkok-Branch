export async function GET() {
  return Response.json({
    ok: true,
    service: "myad-dev-seo-next15",
    ts: new Date().toISOString(),
  });
}
