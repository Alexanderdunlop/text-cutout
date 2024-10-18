const ImageFillText = ({ text, imageUrls, fontSize, className = '' }: {
  text: string;
  imageUrls: string[];
  fontSize: string;
  className?: string;
}) => {
  const safeImageUrls = imageUrls.slice(0, 3);
  while (safeImageUrls.length < 3) {
    safeImageUrls.push(safeImageUrls[safeImageUrls.length - 1] ?? '');
  }
  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      <div 
        className="font-bold text-transparent bg-clip-text whitespace-nowrap"
        style={{
          fontSize,
          backgroundImage: `url(${imageUrls[0]}), url(${imageUrls[1]}), url(${imageUrls[2]})`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          backgroundSize: '300% 100%',
          backgroundRepeat: 'repeat-x',
          animation: `scrollBackground 100s linear infinite`,
        }}
      >
        {text}
      </div>
      <div className="sr-only">{text}</div>
    </div>
  );
};

export default function HomePage() {
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <ImageFillText text="HOPE" imageUrls={[
        '/1.avif',
        '/2.avif',
        '/3.avif',
      ]} fontSize="30rem" />
    </main>
  );
}
