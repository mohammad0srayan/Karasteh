import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import parse from "html-react-parser";
import { getBlogPostDetail } from "../api/homeApi";
import { type BlogPostDetail as BlogPostDetailType } from "../api/types";
import { BASE_URL } from "../api/axiosConfig";

const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostDetailType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getBlogPostDetail(slug!);
        setPost(data);
      } catch (error: any) {
        setError("مشکلی در بارگذاری مقاله رخ داده است");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="text-center text-blue-900 text-xl animate-pulse">در حال بارگذاری...</div>;
  }

  if (error || !post) {
    return <div className="text-center text-red-500 text-xl">{error || "مقاله یافت نشد"}</div>;
  }

  return (
    <div className="w-full my-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
        <h1 className="text-blue-900 text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center">{post.title}</h1>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <p className="text-gray-600 text-sm sm:text-base flex items-center">
              <i className="fa fa-calendar mx-2 text-blue-900"></i>
              {post.jalali_created}
            </p>
            <p className="text-gray-600 text-sm sm:text-base flex items-center">
              <i className="fa fa-clock-o mx-2 text-blue-900"></i>
              {post.reading_time}
            </p>
          </div>
          {post.category && (
            <p className="text-gray-600 text-sm sm:text-base flex items-center">
              <i className="fa fa-tag mx-2 text-blue-900"></i>
              {post.category.title}
            </p>
          )}
        </div>
        {post.thumbnail && (
          <div className="relative mb-6 overflow-hidden rounded-lg">
            <img
              src={post.thumbnail.startsWith("http") ? post.thumbnail : `${BASE_URL}${post.thumbnail}`}
              alt={post.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        {post.introduction && (
          <div className="mb-6 bg-gray-100 p-4 sm:p-6 rounded-lg border-l-4 border-blue-900">
            <h2 className="text-blue-900 text-lg sm:text-xl font-bold mb-2">مقدمه</h2>
            <p className="text-gray-700 text-base sm:text-lg leading-7">{post.introduction}</p>
          </div>
        )}
        <div className="text-gray-700 prose prose-sm sm:prose-base lg:prose-lg max-w-none mb-6">
          {parse(post.content)}
        </div>
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-900 font-bold text-sm sm:text-base hover:text-blue-950 transition-colors duration-300"
        >
          <i className="fa fa-arrow-right mx-2"></i>
          بازگشت به لیست مقالات
        </Link>
      </div>
    </div>
  );
};

export default BlogPostDetail;