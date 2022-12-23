import React, { useState, useEffect } from 'react';

import Editor from '@/components/Editor';
import { useRouter } from 'next/router';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { images } from './index';
import ProductLayout from '@/layouts/ProductLayout';

export default function ProductDetailEdit() {
  const router = useRouter();
  const { id } = router.query;
  const [editorState, setEditorState] = useState<EditorState | undefined>();
  const [isReadOnly, setIsReadOnly] = useState(false);
  const onSave = async () => {
    const res = await fetch(`/api/products/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ contents: JSON.stringify(convertToRaw(editorState.getCurrentContent())) }),
    });

    console.log(res.json());
    setIsReadOnly(true);
  };

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
    <ProductLayout
      frontMatter={{
        images,
        brandDetail: { name: 'nike', imageUrl: 'https://picsum.photos/id/1018/1000/600/', siteUrl: 'https://nike.com' },
      }}
    >
      <div>ProductDetailEdit</div>
      {/* <ImageCarousel images={images} /> */}
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        readOnly={isReadOnly}
        onReadOnlyChange={setIsReadOnly}
      />
      {editorState !== null && (
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          readOnly={isReadOnly}
          onReadOnlyChange={setIsReadOnly}
          onSave={onSave}
        />
      )}

      <button
        onClick={() => {
          onSave();
          router.push(`/products/${id}`);
        }}
      >
        완료
      </button>
    </ProductLayout>
  );
}
