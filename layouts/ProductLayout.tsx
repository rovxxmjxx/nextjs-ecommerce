import React from 'react';

type ProductProps = {
  frontMatter: any;
  children: React.ReactNode;
};
export default function ProductLayout({ frontMatter, children }: ProductProps) {
  return <div>{children}</div>;
}
