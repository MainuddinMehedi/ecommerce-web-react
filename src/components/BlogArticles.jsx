import { blog1, blog2, blog3, blog4, blog5 } from "../utils/img-imports"; 

const BlogArticles = () => {
  return (
    <div>
      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog1} />
          </div>
          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              sefies yr wold chartreuse hexagon irony, godard
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog2} />
          </div>
          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              sefies yr wold chartreuse hexagon irony, godard
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog3} />
          </div>
          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              sefies yr wold chartreuse hexagon irony, godard
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog4} />
          </div>
          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              sefies yr wold chartreuse hexagon irony, godard
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog5} />
          </div>
          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              sefies yr wold chartreuse hexagon irony, godard
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
      </section>
    </div>
  );
};

export default BlogArticles;
