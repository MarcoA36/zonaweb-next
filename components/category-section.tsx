import Link from "next/link";
type CategorySectionProps = {
  title: string;
  description: string;
  image: string;
  slug: string;
  cta: string;
  reverse?: boolean; // opcional
};


export function CategorySection({
  title,
  description,
  image,
  slug,
  cta,
  reverse = false,
}: CategorySectionProps) {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

        {/* Imagen */}
        <div className={`mx-auto w-full max-w-lg md:max-w-none ${reverse ? "md:order-2" : ""}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[min(48vh,380px)] md:max-h-none rounded-2xl shadow-lg object-contain object-center"
          />
        </div>

        {/* Texto */}
        <div className={reverse ? "md:order-1" : ""}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            {description}
          </p>

          <Link
            href={`/demos/${slug}`}
            className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            {cta}
          </Link>
        </div>

      </div>
    </section>
  );
}