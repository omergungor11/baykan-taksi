import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

/** MDX içinde kullanılacak stillendirilmiş elemanlar (Tailwind typography eklentisi olmadan) */
const components = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="mt-8 text-2xl font-extrabold text-ink" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="mt-6 text-xl font-bold text-ink" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="mt-4 leading-relaxed text-ink-soft" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mt-4 list-disc space-y-1 pl-6 text-ink-soft" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="mt-4 list-decimal space-y-1 pl-6 text-ink-soft" {...props} />
  ),
  a: ({ href = "#", ...props }: React.ComponentProps<"a">) => (
    <Link href={href} className="font-semibold text-ink underline decoration-brand underline-offset-2" {...props} />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="font-semibold text-ink" {...props} />
  ),
};

export function MdxContent({ source }: { source: string }) {
  return (
    <div className="max-w-3xl">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
