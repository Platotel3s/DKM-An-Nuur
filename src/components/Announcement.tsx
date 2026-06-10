import { useEffect, useState } from "react";
import { Announcement as AnnouncementType } from "../types/Announcement";

export default function Announcement() {
  const [posts, setPosts] = useState<
    AnnouncementType[]
  >([]);

  useEffect(() => {
    const data =
      localStorage.getItem("announcements");

    if (data) {
      setPosts(JSON.parse(data));
    }
  }, []);

  return (
    <section className="py-16 bg-green-50">

      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold mb-8">
          Pengumuman
        </h2>

        {posts.length === 0 && (
          <p>
            Belum ada pengumuman.
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-6">

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
                    h-52
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
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
