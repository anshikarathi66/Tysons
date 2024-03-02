

import React from 'react';
import './CSS/about.css'; // Import your custom CSS file

function About() {
  return (
    // <div className="about-container">
    //   <div className="about-description">
    //     <p className="about-heading">About Us</p>
    //     <p className="about-welcome">Welcome To Tysons Legal Allies</p>
    //     <p className="about-paragraph">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, vel? Labore quod veniam magni quas minus ducimus, ex tempore asperiores debitis officiis tempora atque illo repellat architecto qui reiciendis perferendis ad, modi voluptatibus doloribus repellendus placeat dolor! Deleniti consequuntur praesentium iusto dolorum quas eos, suscipit odit. Dolorem omnis in, iusto at, dignissimos veritatis voluptate tempora aspernatur itaque blanditiis voluptas quae, cumque pariatur numquam adipisci? Quibusdam a porro corporis modi dolorem saepe veniam ea aperiam minima. Sit voluptatibus reprehenderit magnam architecto, labore ullam. Vitae nisi praesentium, cum sint optio officia beatae, labore aut iusto quis eius reiciendis minima quasi exercitationem alias? mattis ac neque.
    //     </p>
    //     <p className="about-heading">CEO & Founder of Tyson</p>
    //   </div>
    //   <div className="about-image">
    //     <img
    //       src="https://picsum.photos/400"
    //       alt="CEO"
    //       className="img-fluid"
    //     />
    //     <button className="know-more-button">Know More</button>
    //   </div>
    // </div>

    <section className="about-section">
  <div className="container">
    <div className="row clearfix">
      {/*Content Column*/}
      <div className="content-column col-md-6 col-sm-12 col-xs-12">
        <div className="inner-column">
          <div className="sec-title">
            <div className="title">About Us</div>
            <h2>
            Welcome To <br /> Tysons Legal Allies
            </h2>
          </div>
          <div className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </div>
          <div className="email">
            Request Quote:{" "}
            <span className="theme_color">freequote@gmail.com</span>
          </div>
          <a href="about.html" className="theme-btn btn-style-three">
            Read More
          </a>
        </div>
      </div>
      {/*Image Column*/}
      <div className="image-column col-md-6 col-sm-12 col-xs-12">
        <div
          className="inner-column "
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <div className="image">
            <img src="https://i.ibb.co/vQbkKj7/about.jpg" alt="" />
            <div className="overlay-box">
              <div className="year-box">
                <span className="number">5</span>Years <br /> Experience <br />{" "}
                Working
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default About;


