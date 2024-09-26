import { useEffect, useState } from "react";
import Navigation from "../components/navigation/Navigation";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Post from "../components/post/Post";
import { TPost } from "../types";

const Main = styled.main`
  width: 600px;
  position: absolute;
  left: 50%;
  transform: translate(-40%);
`;

const PostSection = styled.section``;

const MainPage = () => {
  const { isLoggedIn } = useUserStore();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Array<TPost>>([]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    setPosts([
      {
        id: 1,
        user: {
          id: 1,
          username: "test",
          imageData: "https://picsum.photos/200",
          name: "test",
        },
        imageData: "https://picsum.photos/200",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veniam\n" +
          "          doloremque aut rerum laboriosam, iste voluptate deleniti sunt\n" +
          "          temporibus. Quae eligendi, error voluptatem ad suscipit commodi\n" +
          "          explicabo maxime sapiente quasi.",
        likeCount: 0,
        isLike: false,
        createdAt: "test",
      },
      {
        id: 2,
        user: {
          id: 2,
          username: "test2",
          imageData: "https://picsum.photos/200",
          name: "test",
        },
        imageData: "https://picsum.photos/200",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veniam\n" +
          "          doloremque aut rerum laboriosam, iste voluptate deleniti sunt\n" +
          "          temporibus. Quae eligendi, error voluptatem ad suscipit commodi\n" +
          "          explicabo maxime sapiente quasi.",
        likeCount: 0,
        isLike: true,
        createdAt: "test",
      },
      {
        id: 3,
        user: {
          id: 3,
          username: "test3",
          imageData: "https://picsum.photos/200",
          name: "test",
        },
        imageData: "https://picsum.photos/200",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veniam\n" +
          "          doloremque aut rerum laboriosam, iste voluptate deleniti sunt\n" +
          "          temporibus. Quae eligendi, error voluptatem ad suscipit commodi\n" +
          "          explicabo maxime sapiente quasi.",
        likeCount: 0,
        isLike: false,
        createdAt: "test",
      },
      {
        id: 4,
        user: {
          id: 4,
          username: "test4",
          imageData: "https://picsum.photos/200",
          name: "test",
        },
        imageData: "https://picsum.photos/200",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veniam\n" +
          "          doloremque aut rerum laboriosam, iste voluptate deleniti sunt\n" +
          "          temporibus. Quae eligendi, error voluptatem ad suscipit commodi\n" +
          "          explicabo maxime sapiente quasi.",
        likeCount: 0,
        isLike: true,
        createdAt: "test",
      },
      {
        id: 5,
        user: {
          id: 5,
          username: "test5",
          imageData: "https://picsum.photos/200",
          name: "test",
        },
        imageData: "https://picsum.photos/200",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veniam\n" +
          "          doloremque aut rerum laboriosam, iste voluptate deleniti sunt\n" +
          "          temporibus. Quae eligendi, error voluptatem ad suscipit commodi\n" +
          "          explicabo maxime sapiente quasi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veniam\n" +
          "          doloremque aut rerum laboriosam, iste voluptate deleniti sunt\n" +
          "          temporibus. Quae eligendi, error voluptatem ad suscipit commodi\n" +
          "          explicabo maxime sapiente quasi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veniam\n" +
          "          doloremque aut rerum laboriosam, iste voluptate deleniti sunt\n" +
          "          temporibus. Quae eligendi, error voluptatem ad suscipit commodi\n" +
          "          explicabo maxime sapiente quasi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veniam\n" +
          "          doloremque aut rerum laboriosam, iste voluptate deleniti sunt\n" +
          "          temporibus. Quae eligendi, error voluptatem ad suscipit commodi\n" +
          "          explicabo maxime sapiente quasi.",
        likeCount: 0,
        isLike: true,
        createdAt: "test",
      },
      {
        id: 5,
        user: {
          id: 4,
          username: "test4",
          imageData: "https://picsum.photos/200",
          name: "test",
        },
        imageData: "https://picsum.photos/200",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veniam\n" +
          "          doloremque aut rerum laboriosam, iste voluptate deleniti sunt\n" +
          "          temporibus. Quae eligendi, error voluptatem ad suscipit commodi\n" +
          "          explicabo maxime sapiente quasi.",
        likeCount: 0,
        isLike: true,
        createdAt: "test",
      },
    ]);
  }, []);

  return (
    <>
      <Navigation />
      <Main>
        <PostSection>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              user={post.user}
              imageData={post.imageData}
              content={post.content}
              likeCount={post.likeCount}
              isLike={post.isLike}
              createdAt={post.createdAt}
            />
          ))}
        </PostSection>
      </Main>
    </>
  );
};

export default MainPage;
