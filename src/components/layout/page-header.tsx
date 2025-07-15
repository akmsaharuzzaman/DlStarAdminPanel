export function PageHeader({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: { label: string; active: boolean }[];
}) {
  return (
    <div className="bg-gray-100 border-b border-gray-300 px-6 py-4 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="flex items-center space-x-2 text-sm text-gray-400">
        {breadcrumbs.map((crumb, idx) => (
          <span key={idx} className={crumb.active ? "text-pink-400" : ""}>
            {crumb.label}
            {idx < breadcrumbs.length - 1 && <span className="mx-1">/</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
