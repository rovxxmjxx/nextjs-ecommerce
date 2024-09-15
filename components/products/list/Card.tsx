import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import siteMetaData from '@/data/siteMetaData';
import Button from '@/components/products/Button';
import Modal from '@/components/Modal';
import QuickView from './QuickView';
type ProductCardProps = {
  product: {
    id: number;
    name: string;
    image_url: string;
    contents: string;
    price: number;
    category_id: number;
  };
};

const CATEGORY = {
  1: '의류',
};

export default function ProductCard({ product }: ProductCardProps) {
  const { id, name, image_url, contents, price } = product;
  const [isOpenQuickView, setIsQuickView] = useState(true);

  const addToBag = () => {};

  return (
    <li key={id} className="p-4 border-2 ">
      <article className="space-y-2 xl:grid xl:grid-rows-2 xl:items-baseline xl:space-y-0 grid grid-rows-2 ">
        <Image src={image_url} width={200} height={300} alt={name} className="rounded-md" />
        <button onClick={() => setIsQuickView(true)}>Quick view</button>
        <div className="space-y-3 xl:col-span-3">
          <div className="flex flex-col">
            <Link href={`/products/${id}`}>
              <h3 className="text-2xl font-bold leading-8 tracking-tight  md:block">{name}</h3>
            </Link>

            <span className="text-zinc-400">{CATEGORY[product.category_id]}</span>
            {/* <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div> */}
            <Button title={'Add to Bag'} original_price={product.price} onClick={addToBag} />
          </div>

          {/* <div className="prose max-w-none text-gray-500 dark:text-gray-400">{contents}</div> */}
        </div>
      </article>
      <Modal isOpen={isOpenQuickView} onClose={() => setIsQuickView(false)}>
        <QuickView product={product} onSubmit={() => {}} />
      </Modal>
    </li>
  );
}
