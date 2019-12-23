import React from "react";
import courseraScreenshot from "src/assets/coursera.png";
import course1Badge from "src/assets/course-badge-1.svg";
import course2Badge from "src/assets/course-badge-2.svg";

export default function Learning() {
  return (
    <div className="Learning">
      <header>
        <h3>Continuing Education</h3>
        <div className="badges">
          <img src={course1Badge} alt="creative writing" />
          <img src={course2Badge} alt="computation investing" />
        </div>
      </header>

      <section>
        <a href="https://www.coursera.org/user/aaf77bd17bce77956b0d0de706cf8524">
          <img
            className="screenshot float-left"
            src={courseraScreenshot}
            alt=""
          />
        </a>

        <div className="description">
          <p>
            I genuinely enjoy learning new things, whether about software or a
            completely unrelated field. I'll read non-fiction books, articles,
            or listen to audiobooks and podcasts on topics that I find
            interesting as well as keeping an eye out for courses offered by
            Coursera or Masterclass that allow me to take a deeper dive into new
            subjects.
          </p>
          <p>
            One of my most rewarding experiences was a 5-part specialization in
            Creative Writing offered by Wesleyan University. I wrote several
            short stories throughout the courses that I'm proud of and hope to
            self-publish my first Science Fiction novel soon.
          </p>
        </div>

        <ul className="links">
          <li>
            <a href="https://www.coursera.org/user/aaf77bd17bce77956b0d0de706cf8524">
              Check out me out on Coursera
            </a>
          </li>
          <li>
            <a href="https://www.goodreads.com/user/show/60388407-jonathan-munz">
              Check out me out on Goodreads
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
