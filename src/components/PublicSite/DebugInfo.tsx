
import { useSiteData } from "@/hooks/useSiteData";

interface DebugInfoProps {
  slug: string | undefined;
}

const DebugInfo = ({ slug }: DebugInfoProps) => {
  const { siteData, loading, notFound } = useSiteData(slug);

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded text-xs max-w-md z-50">
      <h3 className="font-bold mb-2">Debug Info (PublicSite)</h3>
      <div className="space-y-1">
        <div>Slug da URL: <code>{slug}</code></div>
        <div>Loading: <code>{String(loading)}</code></div>
        <div>NotFound: <code>{String(notFound)}</code></div>
        <div>HasSiteData: <code>{String(!!siteData)}</code></div>
        {siteData && (
          <>
            <div>Site ID: <code>{siteData.id}</code></div>
            <div>Slug do DB: <code>{siteData.slug}</code></div>
            <div>Publicado: <code>{String(siteData.is_published)}</code></div>
            <div>Casal: <code>{siteData.couple_names}</code></div>
          </>
        )}
      </div>
    </div>
  );
};

export default DebugInfo;
