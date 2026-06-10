import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Announcement } from "../types/Announcement";

export default function Admin() {
  const [posts, setPosts] = useState<Announcement[]>([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    const data = localStorage.getItem("announcements");
    if (data) {
      setPosts(JSON.parse(data));
    }
  }, []);
  const savePosts = (newPosts: Announcement[]) => {
    setPosts(newPosts);
    localStorage.setItem(
      "announcements",
      JSON.stringify(newPosts)
    );
  };
  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  const addPost = () => {
    if (!title || !date || !content) {
      alert("Lengkapi data");
      return;
    }
    const newPost: Announcement = {
      id: Date.now(),
      title,
      date,
      content,
      image,
    };
    const updated = [newPost, ...posts];
    savePosts(updated);
    setTitle("");
    setDate("");
    setContent("");
    setImage("");
  };
  const deletePost = (id: number) => {
    const updated = posts.filter(
      (post) => post.id !== id
    );
    savePosts(updated);
  };
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        CMS Pengumuman
      </h1>
      <div className="bg-white shadow rounded-xl p-6 mb-10">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Judul Pengumuman"
            className="w-full border rounded p-3"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />
          <input
            type="date"
            className="w-full border rounded p-3"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
          />
          <textarea
            rows={5}
            placeholder="Isi Pengumuman"
            className="w-full border rounded p-3"
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />
          <button
            onClick={addPost}
            className="
              bg-green-700
              hover:bg-green-800
              text-white
              px-6
              py-3
              rounded-lg
            "
          >
            Posting
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-5">
        Pengumuman Tersimpan
      </h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="
              bg-white
              shadow
              rounded-xl
              overflow-hidden
            "
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="
                  w-full
                  h-60
                  object-cover
                "
              />
            )}
            <div className="p-6">
              <p className="text-sm text-green-700">
                {post.date}
              </p>
              <h3 className="text-xl font-bold mt-2">
                {post.title}
              </h3>
              <p className="mt-3 text-gray-600">
                {post.content}
              </p>
              <button
                onClick={() =>
                  deletePost(post.id)
                }
                className="
                  mt-4
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  px-4
                  py-2
                  rounded
                "
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
