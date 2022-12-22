import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { EditorState, convertFromRaw } from 'draft-js';

import Editor from '@/components/Editor';
import ProductLayout from '@/layouts/ProductLayout';
import ImageCarousel from '@/components/ImageCarousel';

export const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [editorState, setEditorState] = useState<EditorState | undefined>();
  const [isReadOnly, setIsReadOnly] = useState(true);

  useEffect(() => {
    (async () => {
      if (!id) return;

      const res = await fetch(`/api/products/${id}`);
      const json = await res.json();

      const contents = json.data?.contents;

      const state = contents
        ? EditorState.createWithContent(convertFromRaw(JSON.parse(contents)))
        : EditorState.createEmpty();

      setEditorState(state);
    })();
  }, [id]);
  return (
    <ProductLayout frontMatter={{}}>
      <div>ProductDetail</div>
      <ImageCarousel images={images} />
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        readOnly={isReadOnly}
        onReadOnlyChange={setIsReadOnly}
      />

      <button onClick={() => router.push(`/products/${id}/edit`)}>편집하기</button>
    </ProductLayout>
  );
}
