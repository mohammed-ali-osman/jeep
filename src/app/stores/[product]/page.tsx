type Props = {
  params: Promise<{
    product: string;
  }>;
};

export default async function Product({ params }: Props) {
  const { product } = await params;

  return (
    <div>
      <p>Slug: {product}</p>
    </div>
  );
}