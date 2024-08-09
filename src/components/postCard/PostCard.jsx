import React from "react";
import styles from "./postCard.module.css";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.thumbnail}>
          <Link href={`/blog/${post.slug}`}>
            <Image
              src={post.img}
              width={500}
              height={500}
              layout="responsive"
            />
          </Link>
        </div>
      )}
      <div className={styles.post_info}>
        <div className={styles.date}>
          {post.createdAt.toString().slice(0, 16)}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h1>{post.title}</h1>
        </Link>
        <p>{post.desc}</p>
      </div>
    </div>
  );
};

export default PostCard;
