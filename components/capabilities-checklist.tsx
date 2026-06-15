type Capability = { label: string; body: string };

export function CapabilitiesChecklist({
  items,
}: {
  items: Capability[];
}) {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="flex gap-3">
          <span
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-accent-alt/15 text-xs font-bold text-accent-alt"
            aria-hidden
          >
            ✓
          </span>
          <div>
            <p className="font-medium text-fg">{item.label}</p>
            <p className="text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
