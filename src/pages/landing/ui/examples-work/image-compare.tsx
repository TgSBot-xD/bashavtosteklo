import Image from 'next/image';
import { examplesData } from 'pages/landing/config/examples-data';

export function ImageCompare({ activeId }: { activeId: number }) {
  return (
    <div>
      <div className="hidden">
        <Image src={examplesData[activeId].image.src} alt={examplesData[activeId].image.alt} fill />
      </div>
    </div>
  );
}
