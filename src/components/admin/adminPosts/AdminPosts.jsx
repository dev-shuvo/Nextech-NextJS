import React from "react";
import styles from "./adminPosts.module.css";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import { deletePost } from "@/lib/actions";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h3>All Posts</h3>
      {posts.map((post) => {
        return (
          <>
            <div className={styles.post} key={post.id}>
              <Image
                src={post.img || "/no-image.png"}
                width={200}
                height={200}
              />
              <div className={styles.post_info}>
                <h4>{post.title}</h4>
                <h5>{post.createdAt.toString().slice(0, 16)}</h5>
              </div>
              <form action={deletePost}>
                <input type="hidden" name="id" value={post.id} />
                <button className={styles.delete_btn}>Delete</button>
              </form>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AdminPosts;
