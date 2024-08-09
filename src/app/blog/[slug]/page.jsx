import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import BlogUser from "@/components/blogUser/BlogUser";
import { getPost } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
  };
};

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`
//   );

//   if (!response.ok) {
//     throw new error("Something went wrong!");
//   } else {
//     return response.json();
//   }
// };

const BlogPost = async ({ params }) => {
  const { slug } = params;
  // const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      {post.img && (
        <Image
          className={styles.thumbnail}
          src={post.img}
          width={500}
          height={500}
          layout="responsive"
        />
      )}
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.date}>
        {post.createdAt.toString().slice(0, 16)} By{" "}
        <BlogUser userId={post.userId} />
      </div>
      <p>{post.desc}</p>
    </div>
  );
};

export default BlogPost;
