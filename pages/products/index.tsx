import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetaData';
// import { getAllFilesFrontMatter } from '@/lib/mdx';
import ListLayout from '@/layouts/ProductListLayout';
// import { POSTS_PER_PAGE } from '../../blog';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// export async function getStaticPaths() {
//   // const totalPosts = await getAllFilesFrontMatter('blog');

//   const res = await fetch('/api/products');
//   const totalPosts = await res.json();
//   const totalPages = Math.ceil(totalPosts.length / PRODUCTS_PER_PAGE);
//   const paths = Array.from({ length: totalPages }, (_, i) => ({
//     params: { page: (i + 1).toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const {
//     params: { page, per = 10 },
//   } = context;

//   // const posts = await getAllFilesFrontMatter('blog');
//   const res = await fetch(`/api/products`);
//   const posts = await res.json();
//   const pageNumber = parseInt(page);
//   const initialDisplayPosts = posts.slice(per * (pageNumber - 1), per * pageNumber);
//   const pagination = {
//     currentPage: pageNumber,
//     totalPages: Math.ceil(posts.length / per),
//   };

//   return {
//     props: {
//       posts,
//       initialDisplayPosts,
//       pagination,
//     },
//   };
// }

// export default function ProductPage({ posts, initialDisplayPosts, pagination }) {
export default function ProductPage() {
  const router = useRouter();
  const { page, per } = router.query;

  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({ currentPage: 0, totalPages: null });
  // const pagination = {
  //   currentPage: Number(page),
  //   totalPages: Math.ceil(posts.length / Number(per)),
  // };

  useEffect(() => {
    (async () => {
      if (page && per) {
        const res = await fetch(`/api/products?page=${page}&per=${per}`);
        const json = await res.json();

        setPosts(json.data);
        setPagination(json.pagination);
      }
    })();
  }, [page, per]);

  return (
    <>
      {/* <PageSEO title={siteMetadata.title} description={siteMetadata.description} /> */}
      <ListLayout posts={posts} pagination={pagination} title="모든 상품" />
    </>
  );
}
