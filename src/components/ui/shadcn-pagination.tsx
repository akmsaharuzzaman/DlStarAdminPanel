interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxButtons?: number;
}

export function ShadcnPagination({
  page,
  totalPages,
  onPageChange,
  maxButtons = 5,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | string)[] = [];
  // const showEllipsis = totalPages > maxButtons;
  const half = Math.floor(maxButtons / 2);

  let start = Math.max(1, page - half);
  let end = Math.min(totalPages, page + half);

  if (start === 1) {
    end = Math.min(totalPages, maxButtons);
  }
  if (end === totalPages) {
    start = Math.max(1, totalPages - maxButtons + 1);
  }

  // Always show first page
  if (start > 1) {
    pages.push(1);
    if (start > 2) pages.push("...");
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Always show last page
  if (end < totalPages) {
    if (end < totalPages - 1) pages.push("...");
    pages.push(totalPages);
  }

  return (
    <nav className="flex items-center justify-center gap-2 mt-6">
      <button
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        Previous
      </button>
      {pages.map((p, idx) =>
        typeof p === "number" ? (
          <button
            key={p}
            className={`px-3 py-1 rounded ${
              p === page
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ) : (
          <span key={"ellipsis-" + idx} className="px-2">
            ...
          </span>
        )
      )}
      <button
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </nav>
  );
}
