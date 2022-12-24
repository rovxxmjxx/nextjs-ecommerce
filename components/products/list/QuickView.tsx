import React from 'react';

type QuickViewProps = {
  product: {
    id: number;
    name: string;
    image_url: string;
    contents: string;
    price: number;
    category_id: number;
  };
  onSubmit: () => void;
};
export default function QuickView({ product, onSubmit }: QuickViewProps) {
  return (
    <div className="w-full h-1/2 sm:w-full md:w-400 xl:w-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="xl:m-4 bg-white h-full rounded-md">QuickView</div>
    </div>
  );
}
