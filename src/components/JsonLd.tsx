/**
 * Injeta um bloco JSON-LD (Schema.org) na página.
 * Server component — renderiza um <script type="application/ld+json">.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
