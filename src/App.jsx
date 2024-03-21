import { useEffect, useState } from "react";
import "./App.css";
import "../src/assets/css/animate.css";
import "../src/assets/css/mobile.css";
import "../src/assets/css/style.css";
import "../src/assets/css/super-classes.css";
import MainLogo from "./assets/image/logo-img.png";
import FooterLogo from "./assets/image/footer-logo.png";
import CupImage from "./assets/image/cup-img.png";
import BannerRightImage from "./assets/image/banner-right-img.png";
import AdminIcon from "./assets/image/admin-icon.png";
import UiUx from "./assets/image/service-icon1.png";
import TastimonialsImage from "./assets/image/tastimonials-img.png";
import CommaIcon from "./assets/image/comma-icon.png";
import LocationIcon from "./assets/image/location-icon.png";
import MessageIcon from "./assets/image/message-icon.png";
import PhoneIcon from "./assets/image/phone-icon.png";
import axios from "axios";

function App() {
  const [services, setServies] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [testimonials, setTastimonials] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);
  const [userDetail, setUserDetail] = useState({});
  const [email, setEmail] = useState("");

  function downloadImage() {
    source = "assets/image/cv-img.png";
    const fileName = "test-image.png";
    var el = document.createElement("a");
    el.setAttribute("href", source);
    el.setAttribute("download", fileName);
    document.body.appendChild(el);
    el.click();
    el.remove();
  }

  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }

  useEffect(() => {
    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }

    document.querySelectorAll(".nav-item a").forEach(function (link, index) {
      link.addEventListener("click", function () {
        if (this.classList.contains("is-active")) {
          this.classList.remove("is-active");
        } else {
          const activeLink = document.querySelector("a.is-active"); // **

          if (activeLink) {
            // **

            activeLink.classList.remove("is-active"); // **
          } // **

          this.classList.add("is-active");
        }
      });
    });

    document
      .querySelectorAll("#myBtnContainer button")
      .forEach(function (link, index) {
        link.addEventListener("click", function () {
          if (this.classList.contains("active_button")) {
            this.classList.remove("active_button");
          } else {
            const activeLink = document.querySelector(
              "#myBtnContainer button.active_button"
            ); // **

            if (activeLink) {
              // **

              activeLink.classList.remove("active_button"); // **
            } // **

            this.classList.add("active_button");
          }
        });
      });
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 113) {
        $("header").addClass("fixed-header");
        $(".banner-main-con").addClass("banner-main-con2");
      } else {
        $("header").removeClass("fixed-header");
        $(".banner-main-con").removeClass("banner-main-con2");
      }
    });

    var btn = $("#button");

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
    });

    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      )
      .then((response) => {
        setUserDetail(response.data.user.about);
        setServies(response.data.user.services);
        setProjects(response.data.user.projects);
        setSkills(response.data.user.skills);
        setTastimonials(response.data.user.testimonials);
        setSocialMedia(response.data.user.social_handles);
        setTimeLine(response.data.user.timeline);
        setEmail(response.data.user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { name, description, address, phoneNumber } = userDetail;

  return (
    <>
      <div className="header-and-banner-con w-100 float-left position-relative">
        <div className="header-and-banner-inner-con">
          <header className="main-header">
            <div className="container pl-0 pr-0">
              <div className="header-con">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                  <a className="navbar-brand p-0" href="index.html">
                    <img src={MainLogo} alt="logo-img" className="img-fluid" />
                  </a>
                  <button
                    className="navbar-toggler p-0 collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active pl-0">
                        <a className="nav-link p-0 is-active" href="index.html">
                          Home<span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="#service-con">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="#about-con">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="#Portfolio">
                          Portfolio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="#testimonials">
                          Testimonials
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="#blog">
                          Blog
                        </a>
                      </li>
                    </ul>
                    <div className="d-inline-block contact">
                      <a href="#Contact">Contact</a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </header>
          <section className="banner-main-con" id="home">
            <div className="container pl-0 pr-0">
              <div className="footer-social-icon banner-social-icon mb-0">
                <ul className="mb-0 list-unstyled">
                  {socialMedia.map((social) => {
                    return (
                      <li key={social._id} className="">
                        <a href={social.url}>
                          <i className="fab fa-behance d-flex align-items-center justify-content-center mt-2">
                            <img
                              src={social.image.url}
                              alt=""
                              style={{ height: "20px" }}
                            />
                          </i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="banner-con text-lg-left text-center">
                <div className="row">
                  <div className="col-lg-7 col-sm-12 d-flex justify-content-center flex-column">
                    <div className="banner-left-con wow slideInLeft">
                      <div className="banner-heading">
                        <h2>Hello, I Am</h2>
                        <ul className="dynamic-txts">
                          <li>
                            <h1>{name}</h1>
                          </li>
                        </ul>
                        <p>{description}</p>
                      </div>
                      <div className="banner-btn generic-btn d-inline-block">
                        <a href="#Contact">Hire Me</a>
                      </div>
                      <a href="#Portfolio" className="See-btn">
                        See My Work
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-12">
                    <div
                      className="banner-right-con position-relative wow slideInRight"
                      id="banner-right-con"
                    >
                      <figure className="mb-0">
                        <img
                          src={BannerRightImage}
                          alt="banner-right-img"
                          id="banner-right-img"
                        />
                      </figure>
                      <div
                        className="best-award-con d-inline-block wow bounceInUp"
                        data-wow-duration="1s"
                        data-wow-delay="1s"
                      >
                        <div className="best-award-inner-con">
                          <figure className="mb-0">
                            <img
                              src={CupImage}
                              alt="cup-img"
                              className="img-fluid"
                            />
                          </figure>
                          <div className="best-award-title">
                            <p className="mb-0">
                              Best Design
                              <br />
                              Award.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-award-con d-inline-block happy-con wow bounceInUp "
                        data-wow-duration="1s"
                        data-wow-delay="1s"
                      >
                        <div className="best-award-inner-con text-center">
                          <figure>
                            <img
                              src={AdminIcon}
                              alt="admin-icon"
                              className="img-fluid"
                            />
                          </figure>
                          <div className="best-award-title d-inline-block ml-0">
                            <p className="mb-0 d-inline-block count">4</p>
                            <p className="mb-0 d-inline-block">k+</p>
                            <span className="d-block">
                              Happy
                              <br />
                              Customers
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="cursor"></div>
                      <div className="cursor2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <!---header-and-banner-section-->
      <!-- service section --> */}
      <section
        className="w-100 float-left service-con padding-top padding-bottom position-relative"
        id="service-con"
      >
        <div className="container">
          <div className="service-inner-con position-relative">
            <div className="generic-title text-center">
              <h6>My Expertise</h6>
              <h2 className="mb-0">
                Provide Wide Range of
                <br />
                Digital Services
              </h2>
            </div>
            <div className="service-box wow fadeInUp">
              <div className="row">
                {services.map((item) => {
                  return (
                    <div key={item._id} className="col-lg-6 col-md-6">
                      <div className="service-box-item">
                        <figure className="mb-0">
                          <img
                            src={item.image.url}
                            alt="service-icon"
                            className="img-fluid"
                          />
                        </figure>
                        <div className="service-box-item-content">
                          <h4>{item.name}</h4>
                          <p>{item.desc}</p>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#Ui-Design"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- service section -->
      <!-- skill section --> */}
      <section
        className="w-100 float-left skill-con padding-top padding-bottom position-relative"
        id="about-con"
      >
        <div className="container">
          <div className="skill-inner-con position-relative">
            <div className="row">
              <div className="col-lg-6 order-lg-0 order-2">
                <div className="skill-left-con text-center wow slideInLeft">
                  <div className="row service-skill-sttaf-con">
                    {skills.map((skill) => {
                      return (
                        <div
                          key={skill._id}
                          className="col-lg-6 col-md-6 col-sm-6 col-12"
                        >
                          <div className="skill-left-item-con">
                            <div className="circle-wrap firstPercentage">
                              <div className="circle">
                                <div className="mask full">
                                  <div className="fill"></div>
                                </div>
                                <div className="mask half">
                                  <div className="fill"></div>
                                </div>
                                <div className="inside-circle">
                                  <div className="service-skill-sttaf-item-con">
                                    <div className="service-skill-sttaf-item-title service-skill-sttaf-item1-con d-flex align-items-center justify-content-center">
                                      <h4 className="d-table-cell align-middle mb-0 text-center count">
                                        {skill.percentage}
                                      </h4>
                                      <span className="static-txt2">%</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="service-skill-sttaf-item-heading">
                              <p className="mb-0">{skill.name}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="skill-right-con wow slideInRight">
                  <h6>My Skills</h6>
                  <h2>Beautiful & Unique Digital Experiences</h2>
                  <p>
                    Nostrum exercitationem ullam corporis suscipit laborioa nisi
                    ut aliquid exrea commodi consequatur magni dolores aos qui
                    ratione voluptatem nesciunt.
                  </p>
                  <p>
                    Quia voluptas sit aspernatur aut odit aut fugit, sed ruiano
                    consequntar magni dolores.
                  </p>
                  <div className="generic-btn download-bnt">
                    <a href="#" id="downloadImg" onClick={downloadImage}>
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- skill section -->
      <!-- portfolio section --> */}
      <section
        className="w-100 float-left portfolio-con padding-top"
        id="Portfolio"
      >
        <div className="container">
          <div className="generic-title text-center">
            <h6 className="text-white">Creative Works</h6>
            <h2 className="mb-0 text-white">Check My Portfolio</h2>
          </div>
          <div id="myBtnContainer" className="text-center">
            <button
              className=" active active_button"
              onClick={filterSelection("all")}
            >
              {" "}
              All{" "}
            </button>
            <button className="" onClick={filterSelection("cars")}>
              Products{" "}
            </button>
            <button className="" onClick={filterSelection("animals")}>
              Web App
            </button>
            <button className="" onClick={filterSelection("fruits")}>
              {" "}
              Inetraction{" "}
            </button>
            <button className="" onClick={filterSelection("colors")}>
              Brand Identity
            </button>
          </div>
        </div>
      </section>
      {/* <!-- portfolio section -->
      <!-- portfolio section --> */}
      <section className="w-100 float-left portfolio-body-con">
        <div className="container">
          <div className="portfolio-img-con position-relative w-100 float-left wow fadeInUp">
            {projects.map((project) => {
              return (
                <div
                  key={project._id}
                  className="filterDiv cars position-relative"
                >
                  <a href="#" data-toggle="modal" data-target="#modalWPWAF">
                    <div className="portfolio-img position-relative">
                      <figure>
                        <img
                          src={project.image.url}
                          alt="portfolio-img1"
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                  </a>
                  <div className="portfolio-img-content text-left">
                    <div className="portfolio-img-title d-inline-block">
                      <h4>Application UI Design</h4>
                      <p>Dolar repellendus temporibus...</p>
                    </div>
                    <a
                      href="#"
                      className="float-lg-right"
                      data-toggle="modal"
                      data-target="#modalWPWAF-icon"
                    >
                      <i className="fas fa-arrow-right d-flex align-items-center justify-content-center"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <!-- portfolio section -->
      <!-- tastimonials section --> */}
      <section
        className="w-100 float-left padding-top padding-bottom tastimonials-con position-relative text-lg-left text-center"
        id="testimonials"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="tastimonials-left-con wow slideInLeft">
                <figure className="mb-0">
                  <img
                    src={TastimonialsImage}
                    alt="tastimonials-img"
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                id="carouselExampleControls"
                className="carousel slide wow slideInRight"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="testimonials-content">
                      <h6>Testimonials</h6>
                      <h2>Happy Clients Feedback</h2>
                      <figure className="mb-0">
                        <img
                          src={CommaIcon}
                          alt="comma-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="testimonials-inner-content">
                        <p>
                          Quisruam est, qui dolorem ipsum quia dolor sit amet,
                          consecteaur aeci velit, sed quia non numquam eius modi
                          tempora incidunt ut lao magnam aliquam quaerat
                          voluptatem reprehenderit in voluptate cillum dolore eu
                          fugiat nulla pariatur maxime...
                        </p>
                        <span className="d-block auther-name">
                          Kevin Andrew
                        </span>
                        <span className="d-block">CEO of the company</span>
                      </div>
                    </div>
                  </div>
                  {testimonials.map((test) => {
                    return (
                      <div key={test._id} className="carousel-item">
                        <div className="testimonials-content">
                          <h6>Testimonials</h6>
                          <h2>Happy Clients Feedback</h2>
                          <figure className="mb-0">
                            <img
                              src={CommaIcon}
                              alt="comma-icon"
                              className="img-fluid"
                            />
                          </figure>
                          <div className="testimonials-inner-content">
                            <p>{test.review}</p>
                            <span className="d-block auther-name">
                              {test.name}
                            </span>
                            <span className="d-block">{test.position}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fas fa-arrow-left d-flex align-items-center justify-content-center"></i>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <i className="fas fa-arrow-right d-flex align-items-center justify-content-center"></i>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- tastimonials section -->
      <!-- blog section --> */}
      <section
        className="w-100 float-left blog-con padding-top padding-bottom position-relative"
        id="blog"
      >
        <div className="container">
          <div className="blog-inner-con position-relative">
            <div className="generic-title text-center">
              <h6>Latest News</h6>
              <h2 className="mb-0">Blog & Articles</h2>
            </div>
            <div className="blog-box wow fadeInUp">
              <div className="row">
                <div className="col-lg-4">
                  <div className="blog-box-item">
                    <div className="blog-img">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#blog-model-1"
                      >
                        <figure className="mb-0">
                          <img
                            src="assets/image/blog-img-1.png"
                            alt="blog-img"
                            className="img-fluid"
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-auteher-title">
                        <span>By David William</span>
                        <span className="float-lg-right">Mar 8, 2022</span>
                      </div>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#blog-model-1"
                      >
                        <h4>Quis autem vea eum iure reprehenderit</h4>
                      </a>
                      <p>
                        Dolor repellendus temporibus autem quibusdam officiis
                        debitis rerum nece aibus minima veniam.
                      </p>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#blog-model-1"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog-box-item">
                    <div className="blog-img">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#blog-model-2"
                      >
                        <figure className="mb-0">
                          <img
                            src="assets/image/blog-img-2.png"
                            alt="blog-img"
                            className="img-fluid"
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-auteher-title">
                        <span>By John Doe</span>
                        <span className="float-lg-right">Mar 9, 2022</span>
                      </div>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#blog-model-2"
                      >
                        <h4>Reprehenderit in vouta velit esse cillum</h4>
                      </a>
                      <p>
                        Dolor repellendus temporibus autem quibusdam officiis
                        debitis rerum nece aibus minima veniam.
                      </p>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#blog-model-2"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog-box-item mb-0">
                    <div className="blog-img">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#blog-model-3"
                      >
                        <figure className="mb-0">
                          <img
                            src="assets/image/blog-img-3.png"
                            alt="blog-img"
                            className="img-fluid"
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-auteher-title">
                        <span>By Elina Parker</span>
                        <span className="float-lg-right">Mar 10, 2022</span>
                      </div>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#blog-model-3"
                      >
                        <h4>Soluta nobis ose aligen optio cumue</h4>
                      </a>
                      <p>
                        Dolor repellendus temporibus autem quibusdam officiis
                        debitis rerum nece aibus minima veniam.
                      </p>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#blog-model-3"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- blog section -->
      <!-- form section --> */}
      <section
        className="w-100 float-left form-main-con padding-top padding-bottom"
        id="Contact"
      >
        <div className="container">
          <div className="form-main-inner-con position-relative">
            <div className="generic-title text-center">
              <h6>Get in Touch</h6>
              <h2 className="mb-0">
                Any Questions? Feel Free
                <br />
                to Contact
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 order-lg-0 order-2">
                <div className="contact-information position-relative wow slideInLeft">
                  <ul className="list-unstyled">
                    <li>
                      <figure className="mb-0 d-flex align-items-center justify-content-center">
                        <img
                          src={LocationIcon}
                          alt="location-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="contact-information-content">
                        <h5>Address:</h5>
                        <p className="mb-0">{address}</p>
                      </div>
                    </li>
                    <li>
                      <figure className="mb-0 d-flex align-items-center justify-content-center">
                        <img
                          src={MessageIcon}
                          alt="message-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="contact-information-content">
                        <h5>Email:</h5>
                        <p className="mb-0">{email}</p>
                      </div>
                    </li>
                    <li className="mb-0">
                      <figure className="mb-0 d-flex align-items-center justify-content-center">
                        <img
                          src={PhoneIcon}
                          alt="phone-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <div className="contact-information-content">
                        <h5>Phone:</h5>
                        <p className="mb-0">{phoneNumber}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <div id="form_result"></div>

                <form
                  id="contactpage"
                  method="POST"
                  className="contact-form wow slideInRight text-lg-left text-center"
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group mb-0">
                        <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          id="name"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group mb-0">
                        <input
                          type="email"
                          id="emailHelp"
                          name="emailHelp"
                          placeholder="Email"
                          autoComplete="off"
                          required
                        />
                        <small className="form-text text-muted"></small>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group mb-0">
                        <input
                          type="tel"
                          placeholder="Phone"
                          name="phone"
                          id="phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group mb-0">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          id="subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className=" form-group mb-0">
                        <textarea
                          placeholder="Message"
                          rows="3"
                          name="comments"
                          id="comments"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" id="submit" className="appointment-btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- form section -->
      <!-- weight footer section --> */}
      <div className="w-100 float-left weight-footer-con position-relative">
        <div className="container">
          <div className="weight-footer-content text-center wow fadeInUp">
            <figure className="">
              <img src={FooterLogo} alt="footer-logo" className="img-fluid" />
            </figure>
            <div className="footer-navbar">
              <ul className="list-unstyled">
                <li className="d-inline-block border-left-0 pl-0">
                  <a href="#home">Home</a>
                </li>
                <li className="d-inline-block">
                  <a href="#about-con">About</a>
                </li>
                <li className="d-inline-block">
                  <a href="#service-con">Services</a>
                </li>
                <li className="d-inline-block">
                  <a href="#Portfolio">Portfolio</a>
                </li>
                <li className="d-inline-block">
                  <a href="#testimonials">Blog</a>
                </li>
                <li className="d-inline-block pr-0">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-social-icon">
              <ul className="mb-0">
                <li className="d-inline-block">
                  <a href="https://www.behance.net/">
                    <i className="fab fa-behance d-flex align-items-center justify-content-center"></i>
                  </a>
                </li>
                <li className="d-inline-block">
                  <a href="https://dribbble.com/">
                    <i className="fab fa-dribbble d-flex align-items-center justify-content-center"></i>
                  </a>
                </li>
                <li className="d-inline-block">
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in d-flex align-items-center justify-content-center"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copy-right-content text-center">
            <p className="mb-0">
              Copyright 2022 FolioFlix.com | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <a id="button"></a>
      <div
        id="modalWPWAF"
        className="modal fade"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body service-model-content">
              <figure className="mb-0">
                <img
                  src="assets/image/portfolio-model-img1.jfif"
                  alt="portfolio-model-img1"
                  className="img-fluid"
                />
              </figure>
              <h4>Application UI Design</h4>
              <p className="mb-md-4 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release .
              </p>
              <ul className="list-unstyled model-list mb-md-3 mb-2">
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
              </ul>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="modalWPWAF-icon"
        className="modal fade"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body service-model-content">
              <figure className="mb-0">
                <img
                  src="assets/image/portfolio-model-img1.jfif"
                  alt="portfolio-model-img1"
                  className="img-fluid"
                />
              </figure>
              <h4>Application UI Design</h4>
              <p className="mb-md-4 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release .
              </p>
              <ul className="list-unstyled model-list mb-md-3 mb-2">
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
              </ul>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="modalporfolio2"
        className="modal fade"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body service-model-content">
              <figure className="mb-0">
                <img
                  src="assets/image/portfolio-model-img2.jfif"
                  alt="portfolio-model-img1"
                  className="img-fluid"
                />
              </figure>
              <h4>Furni furniture UI Design</h4>
              <p className="mb-md-4 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release .
              </p>
              <ul className="list-unstyled model-list mb-md-3 mb-2">
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
              </ul>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="modalporfolio2-icon"
        className="modal fade"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body service-model-content">
              <figure className="mb-0">
                <img
                  src="assets/image/portfolio-model-img2.jfif"
                  alt="portfolio-model-img1"
                  className="img-fluid"
                />
              </figure>
              <h4>Furni furniture UI Design</h4>
              <p className="mb-md-4 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release .
              </p>
              <ul className="list-unstyled model-list mb-md-3 mb-2">
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
              </ul>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="modalporfolio3"
        className="modal fade"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body service-model-content">
              <figure className="mb-0">
                <img
                  src="assets/image/portfolio-model-img3.jfif"
                  alt="portfolio-model-img1"
                  className="img-fluid"
                />
              </figure>
              <h4>Mobile UI Design</h4>
              <p className="mb-md-4 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release .
              </p>
              <ul className="list-unstyled model-list mb-md-3 mb-2">
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
              </ul>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="modalporfolio3-icon"
        className="modal fade"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body service-model-content">
              <figure className="mb-0">
                <img
                  src="assets/image/portfolio-model-img3.jfif"
                  alt="portfolio-model-img1"
                  className="img-fluid"
                />
              </figure>
              <h4>Mobile UI Design</h4>
              <p className="mb-md-4 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release .
              </p>
              <ul className="list-unstyled model-list mb-md-3 mb-2">
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
              </ul>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="modalporfolio4"
        className="modal fade"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body service-model-content">
              <figure className="mb-0">
                <img
                  src="assets/image/portfolio-model-img4.jfif"
                  alt="portfolio-model-img1"
                  className="img-fluid"
                />
              </figure>
              <h4>Businesscard UI Design</h4>
              <p className="mb-md-4 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release .
              </p>
              <ul className="list-unstyled model-list mb-md-3 mb-2">
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
              </ul>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="modalporfolio4-icon"
        className="modal fade"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body service-model-content">
              <figure className="mb-0">
                <img
                  src="assets/image/portfolio-model-img4.jfif"
                  alt="portfolio-model-img1"
                  className="img-fluid"
                />
              </figure>
              <h4>Businesscard UI Design</h4>
              <p className="mb-md-4 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release .
              </p>
              <ul className="list-unstyled model-list mb-md-3 mb-2">
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
              </ul>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="modalporfolio5"
        className="modal fade"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body service-model-content">
              <figure className="mb-0">
                <img
                  src="assets/image/portfolio-model-img5.png"
                  alt="portfolio-model-img1"
                  className="img-fluid"
                />
              </figure>
              <h4>Real estate UI Design</h4>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release .
              </p>
              <ul className="list-unstyled model-list mb-md-3 mb-2">
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
              </ul>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="modalporfolio5-icon"
        className="modal fade"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body service-model-content">
              <figure className="mb-0">
                <img
                  src="assets/image/portfolio-model-img5.jfif"
                  alt="portfolio-model-img1"
                  className="img-fluid"
                />
              </figure>
              <h4>Real estate UI Design</h4>
              <p className="mb-md-4 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release .
              </p>
              <ul className="list-unstyled model-list mb-md-3 mb-2">
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
              </ul>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Ui-Design"
        className="modal fade"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body service-model-content">
              <figure className="mb-0">
                <img
                  src="assets/image/ui-ux-model-img.jpg"
                  alt="ui-ux-model-img"
                  className="img-fluid"
                />
              </figure>
              <h4>Ui/Ux Design</h4>
              <p className="mb-md-4 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <ul className="list-unstyled model-list mb-md-3 mb-2">
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
              </ul>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="web-design"
        className="modal fade"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body service-model-content">
              <figure className="mb-0">
                <img
                  src="assets/image/web-designer-model-img.jpg"
                  alt="web-designer-model-img"
                  className="img-fluid"
                />
              </figure>
              <h4>Web Design</h4>
              <p className="mb-md-4 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <ul className="list-unstyled model-list mb-md-3 mb-2">
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
              </ul>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="web-development"
        className="modal fade"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body service-model-content">
              <figure className="mb-0">
                <img
                  src="assets/image/web-development-model-img.jpg"
                  alt="web-development-model-img"
                  className="img-fluid"
                />
              </figure>
              <h4>Web Development</h4>
              <p className="mb-md-4 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <ul className="list-unstyled model-list mb-md-3 mb-2">
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
              </ul>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="app-development"
        className="modal fade"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body service-model-content">
              <figure className="mb-0">
                <img
                  src="assets/image/App-development-model-img.JPG"
                  alt="App-development-model-img"
                  className="img-fluid"
                />
              </figure>
              <h4>App Development</h4>
              <p className="mb-md-4 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <ul className="list-unstyled model-list mb-md-3 mb-2">
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry
                </li>
              </ul>
              <p className="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="blog-model-1"
        className="modal fade blog-model-con"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="blog-box-item mb-0">
                <div className="blog-img">
                  <figure className="mb-0">
                    <img
                      src="assets/image/blog-model-img1.png"
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="blog-content pl-0 pr-0">
                  <div className="blog-auteher-title">
                    <span>By Elina Parker</span>
                    <span className="float-lg-right">Mar 8, 2022</span>
                  </div>
                  <h4>Quis autem vea eum iure reprehenderit</h4>
                  <div className="footer-social-icon mb-0">
                    <ul>
                      <li className="d-inline-block">
                        <a href="https://www.behance.net/">
                          <i className="fab fa-behance d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="https://dribbble.com/">
                          <i className="fab fa-dribbble d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="https://www.linkedin.com/">
                          <i className="fab fa-linkedin-in d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-md-4 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tempor eros a tellus auctor, nec suscipit nunc
                    dignissim. Ut suscipit gravida augue sed elementum. Sed sed
                    luctus nisl. Donec scelerisque nisi in sodales mattis.
                    Vestibulum suscipit odio ac enim blandit sollicitudin.
                    Aliquam ultrices sem quis urna placerat interdum. Etiam
                    rutrum, quam sagittis tristique mollis, libero arcu
                    scelerisque erat, eget tincidunt eros diam quis nunc.
                  </p>
                  <h4 className="comment-title">LEAVE A COMMENT</h4>
                  <form className="contact-form blog-model-form">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="text" placeholder="Name" name="name" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="email" placeholder="Email" />
                          <small className="form-text text-muted"></small>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="tel" placeholder="Phone" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="text" placeholder="Subject" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className=" form-group mb-0">
                          <textarea
                            placeholder="Message"
                            rows="3"
                            name="comments"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="appointment-btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="blog-model-2"
        className="modal fade blog-model-con"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="blog-box-item mb-0">
                <div className="blog-img">
                  <figure className="mb-0">
                    <img
                      src="assets/image/blog-model-img2.png"
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="blog-content pl-0 pr-0">
                  <div className="blog-auteher-title">
                    <span>By Elina Parker</span>
                    <span className="float-lg-right">Mar 9, 2022</span>
                  </div>
                  <h4>Reprehenderit in vouta velit esse cillum</h4>
                  <div className="footer-social-icon mb-0">
                    <ul>
                      <li className="d-inline-block">
                        <a href="https://www.behance.net/">
                          <i className="fab fa-behance d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="https://dribbble.com/">
                          <i className="fab fa-dribbble d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="https://www.linkedin.com/">
                          <i className="fab fa-linkedin-in d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-md-4 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tempor eros a tellus auctor, nec suscipit nunc
                    dignissim. Ut suscipit gravida augue sed elementum. Sed sed
                    luctus nisl. Donec scelerisque nisi in sodales mattis.
                    Vestibulum suscipit odio ac enim blandit sollicitudin.
                    Aliquam ultrices sem quis urna placerat interdum. Etiam
                    rutrum, quam sagittis tristique mollis, libero arcu
                    scelerisque erat, eget tincidunt eros diam quis nunc.
                  </p>
                  <h4 className="comment-title">LEAVE A COMMENT</h4>
                  <form className="contact-form blog-model-form">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="text" placeholder="Name" name="name" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="email" placeholder="Email" />
                          <small className="form-text text-muted"></small>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="tel" placeholder="Phone" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="text" placeholder="Subject" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className=" form-group mb-0">
                          <textarea
                            placeholder="Message"
                            rows="3"
                            name="comments"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="appointment-btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="blog-model-3"
        className="modal fade blog-model-con"
        tabIndex="-1"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="far fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="blog-box-item mb-0">
                <div className="blog-img">
                  <figure className="mb-0">
                    <img
                      src="assets/image/blog-model-img1.png"
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="blog-content pl-0 pr-0">
                  <div className="blog-auteher-title">
                    <span>By Elina Parker</span>
                    <span className="float-lg-right">Mar 10, 2022</span>
                  </div>
                  <h4>Soluta nobis ose aligen optio cumue</h4>
                  <div className="footer-social-icon mb-0">
                    <ul>
                      <li className="d-inline-block">
                        <a href="https://www.behance.net/">
                          <i className="fab fa-behance d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="https://dribbble.com/">
                          <i className="fab fa-dribbble d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="https://www.linkedin.com/">
                          <i className="fab fa-linkedin-in d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-md-4 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tempor eros a tellus auctor, nec suscipit nunc
                    dignissim. Ut suscipit gravida augue sed elementum. Sed sed
                    luctus nisl. Donec scelerisque nisi in sodales mattis.
                    Vestibulum suscipit odio ac enim blandit sollicitudin.
                    Aliquam ultrices sem quis urna placerat interdum. Etiam
                    rutrum, quam sagittis tristique mollis, libero arcu
                    scelerisque erat, eget tincidunt eros diam quis nunc.
                  </p>
                  <h4 className="comment-title">LEAVE A COMMENT</h4>
                  <form className="contact-form blog-model-form">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="text" placeholder="Name" name="name" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="email" placeholder="Email" />
                          <small className="form-text text-muted"></small>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="tel" placeholder="Phone" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input type="text" placeholder="Subject" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className=" form-group mb-0">
                          <textarea
                            placeholder="Message"
                            rows="3"
                            name="comments"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="appointment-btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
