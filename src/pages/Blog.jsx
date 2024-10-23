import BlogArticles from "../components/BlogArticles";
import Newsletter from "../components/newsletter";
import Pagination from "../components/Pagination";

import "../styles/blog.css";

const BlogPage = () => {
  return (
    <div>
      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
      </section>

      <BlogArticles />
      
      <Pagination />
      <Newsletter />
    </div>
  );
};

export default BlogPage;
