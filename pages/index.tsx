import React, { useRef, useState, useEffect } from 'react';

import Button from '@nextui-org/react/button';

export default function Home() {
  useEffect(() => {
    (async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      console.log(data);
    })();
  }, []);
  return (
    <div>
      <h1>홈</h1>
      <Button>Click me</Button>
    </div>
  );
}
