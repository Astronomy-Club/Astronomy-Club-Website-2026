
import blogs_data from '../components/Blogs/data';
import { BlogCard } from '../components/Blogs/BlogCard.tsx'; 




const BlogPage = () => {
  return (
    <> 
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl p-2 md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 mt-4">
              Our Blogs
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BlogCards */}
            {blogs_data.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
