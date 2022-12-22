import { useRef, useState, useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    (async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      console.log(data);
    })();
  }, []);
  return <div>홈</div>;
}
