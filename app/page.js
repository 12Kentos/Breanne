"use client";

import styles from "./page.module.scss";
import Image from "next/image";
import newQuote from "../public/images/Quote 3.webp";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineScience } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import testing from "../public/images/Dedrickson-50.webp";
import { useEffect, useState } from "react";

export default function Home() {
  const [windowSmall, setWindowsmall] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 900) {
      setWindowsmall(true);
    }
  }, []);

  return (
    <main className={styles.mainWrapper}>
      {/* <header className={styles.header}>
        <div className={styles.headerInside}>
          <h1 className={styles.firstName}>Breanne</h1>
          <h1 className={styles.lastName}>Dedrickson</h1>
          <div className={styles.position}>
            <p className={styles.wasatch}>Wasatch County School Board</p>
            <p className={styles.seat}>Seat G County South</p>
          </div>
        </div>
      </header> */}
      <header className={styles.header}>
        <div className={styles.headerInside}>
          <h1 className={styles.name}>Breanne Dedrickson</h1>
          <h2>Candidate for Wasatch County School Board</h2>
        </div>
      </header>
      {/* <div className={styles.imagesWrapper}>
        <Image
          src={Headshot}
          className={`${styles.mainImages} ${styles.headshot}`}
        />
      </div> */}

      <h1 className={styles.mainHeading}>Meet Breanne</h1>

      <div className={styles.whoIsWrapper}>
        <div className={styles.familyPicWrapper}>
          <Image
            src={testing}
            className={styles.familyPic}
            alt="Family Photo"
          />
        </div>
        <div>
          <p className={styles.breanneInfo}>
            Breanne grew up in Pleasant Grove and Holden, Utah. She loved
            playing "school" as a child and always aspired to be a teacher. An
            avid reader, Breanne combined her two great loves and chose to study
            English Teaching at Snow College and then Utah State University.
            Post a study abroad experience to Cuernavaca, Mexico and student
            teaching at Logan High School, Breanne was hired to teach 9-10th
            grade English, ACT Prep, and English Language Learner classes at
            Wasatch High School. After spending three years teaching as Ms.
            Davis, Breanne went on a blind date and found the true love of her
            life, Andrew Dedrickson. Ms. Davis became Mrs. Dedrickson. Fast
            forward 14 years, Andrew and Breanne Dedrickson now have four kids,
            two lambs, one dog, one pony, and lots of goldfish! Breanne attended
            the University of Utah and earned a Master of Education degree in
            Educational Leadership and Policy.
          </p>

          <br></br>
          <br></br>

          <p className={styles.breanneInfo}>
            Breanne was the assistant principal at Timpanogos Intermediate
            School for two years and has been the principal at Liahona
            Preparatory Academy for the last nine years. Breanne is an involved
            parent who has served in her children's school as a School Community
            Council member and Wasatch Parent Network volunteer. She's served at
            the district level as a committee member on the Safe Schools and
            Future Schools committees. She was also active in coordinating
            community efforts to support the first bond for the new high school.
            Breanne is a passionate educator and parent with a proven track
            record. She now wants to be involved as a policymaker to influence
            Wasatch County schools for good.{" "}
            <b> Breanne would love your vote of support in November!</b>
          </p>
        </div>
      </div>

      <h1 className={styles.testingEducationHeader}>Breanne's Education</h1>
      <div className={styles.testing}>
        <div className={styles.testingEducationWrapper}>
          <div className={styles.TestingiconWrapper}>
            <FaGraduationCap className={styles.testingIcons} />
          </div>
          <p className={styles.testingEducation}>
            Master of Education in Educational Leadership and Policy with
            Administrative License
          </p>
        </div>
        <div
          className={`${styles.testingEducationWrapper} ${styles.educationWrapperEven}`}
        >
          <div className={styles.TestingiconWrapper}>
            <MdOutlineScience className={styles.testingIcons} />
          </div>
          <p className={styles.testingEducation}>
            Bachelor of Science with English Teaching Emphasis (English Major &
            ESL Minor)
          </p>
        </div>
        <div className={styles.testingEducationWrapper}>
          <div className={styles.TestingiconWrapper}>
            <FaBook className={styles.testingIcons} />
          </div>
          <p className={styles.testingEducation}>Reading Level 1 Endorsement</p>
        </div>
        <div
          className={`${styles.testingEducationWrapper} ${styles.educationWrapperEven}`}
        >
          <div className={styles.TestingiconWrapper}>
            <BiWorld className={styles.testingIcons} />
          </div>
          <p className={styles.testingEducation}>
            Study Abroad: Cuernavaca, Mexico
          </p>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <h2 className={styles.whyTitle}>
          Why is Breanne running for school board?
        </h2>
        <div className={styles.whyExperience}>
          <p className={styles.whyInfo}>
            Breanne is running for school board because she is passionate about
            high quality, comprehensive education and academic achievement –
            both for her own four children and all children in this valley. She
            has been deeply involved in education as both an educator and a
            parent. Now, Breanne aims to contribute as a policymaker to ensure
            Wasatch County School District implements policies, allocates
            resources, and provides necessary supports to deliver the best
            educational experience for every child in a financially responsible
            and transparent manner. Her priorities include teacher retention and
            compensation, research-based and job-embedded professional
            development, interactive and engaging curriculum, open
            communication, and ensuring safe and appropriate school facilities.
            With a proven track record in the district, Breanne possesses the
            vision and courage to advocate for what benefits students,
            educators, and the community. She seeks to represent the
            constituents effectively and welcomes their vote and support.
          </p>
          <div className={styles.quoteWrapper}>
            <Image
              src={newQuote}
              className={styles.firstImage}
              alt="Learning Quote: Learning is not attained by chance, it must be sought for with ardor and attended to with diligence. -Abigail Adams"
            />
          </div>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <h2>Breanne's Experience</h2>
        <div className={`${styles.whyExperience} ${styles.experience}`}>
          <ul className={styles.experienceUl}>
            <li className={styles.experienceLi}>
              Daniel’s Canyon Elementary School Community Council
              President/Vice-President/Member
            </li>
            <li className={styles.experienceLi}>
              {/* Wasatch Parent Network Volunteer, Classroom Volunteer */}
              Timpanogos Intermediate School Vice Principal
            </li>
            {windowSmall ? (
              <li className={`${styles.experienceLi}`}>
                {/* Wasatch County School District (WCSD) Future Schools Committee
              Member */}
                Liahona Preparatory Academy Principal
              </li>
            ) : (
              <li className={styles.experienceLi}>
                {/* Wasatch County School District (WCSD) Future Schools Committee
              Member */}
                Wasatch Parent Network Volunteer, Classroom Volunteer
                {/* Liahona Preparatory Academy Principal */}
              </li>
            )}

            {windowSmall ? (
              <li className={`${styles.experienceLi}`}>
                {/* Timpanogos Intermediate School Vice Principal */}
                Wasatch High School (WHS) English Teacher
                {/* Wasatch County School District (WCSD) Future Schools Committee
              Member */}
                {/* Wasatch Parent Network Volunteer, Classroom Volunteer */}
              </li>
            ) : (
              <li className={styles.experienceLi}>
                WCSD Safe Schools Committee Member
              </li>
            )}

            <li className={styles.experienceLi}>
              Cognia Accreditation Evaluation Team Member
            </li>
          </ul>
          <ul className={styles.experienceUl}>
            {windowSmall ? (
              <li
                className={`${styles.experienceLi} ${styles.experienceLiRight}`}
              >
                {/* Wasatch County School District (WCSD) Future Schools Committee
              Member */}
                Wasatch Parent Network Volunteer, Classroom Volunteer
              </li>
            ) : (
              <li
                className={`${styles.experienceLi} ${styles.experienceLiRight}`}
              >
                {/* Wasatch County School District (WCSD) Future Schools Committee
              Member */}
                Liahona Preparatory Academy Principal
              </li>
            )}

            {windowSmall ? (
              <li
                className={`${styles.experienceLi} ${styles.experienceLiRight}`}
              >
                WCSD Safe Schools Committee Member
              </li>
            ) : (
              <li
                className={`${styles.experienceLi} ${styles.experienceLiRight}`}
              >
                {/* Timpanogos Intermediate School Vice Principal */}
                Wasatch High School (WHS) English Teacher
                {/* Wasatch County School District (WCSD) Future Schools Committee
              Member */}
                {/* Wasatch Parent Network Volunteer, Classroom Volunteer */}
              </li>
            )}

            <li
              className={`${styles.experienceLi} ${styles.experienceLiRight}`}
            >
              {/* Wasatch High School (WHS) English Teacher */}
              Wasatch County School District (WCSD) Future Schools Committee
              Member
            </li>
            <li
              className={`${styles.experienceLi} ${styles.experienceLiRight}`}
            >
              WHS English Department Chair
            </li>
            <li
              className={`${styles.experienceLi} ${styles.experienceLiRight}`}
            >
              WHS Faculty Council Vice President
            </li>
          </ul>
          {/* <div className={styles.quoteWrapper}>
            <Image
              src={headshot}
              className={styles.firstImage}
              alt="Education Quote: Education is the most powerful weapon which you can use to change the world. -Nelson Mandela"
            />
          </div> */}
        </div>
      </div>

      <div className={styles.eduNews}>
        {/* <div className={`${styles.quoteWrapper} ${styles.lastImg}`}>
          <Image
            src={quoteOne}
            className={styles.firstImage}
            alt="Education Quote: An Investment in knowledge pays the best interest. -Benjamin Franklin"
          />
        </div> */}
        <div className={styles.news}>
          <h2>Breanne in the News</h2>
          <ul className={styles.newsUl}>
            <li>
              <a
                href="https://www.kpcw.org/wasatch-county/2024-01-31/six-candidates-run-for-three-wasatch-county-school-board-seats"
                target="_blank"
              >
                https://www.kpcw.org/wasatch-county/2024-01-31/six-candidates-run-for-three-wasatch-county-school-board-seats
              </a>
            </li>
            <li>
              <a
                href="https://www.parkrecord.com/news/former-wasatch-county-teacher-running-for-school-board/"
                target="_blank"
              >
                https://www.parkrecord.com/news/former-wasatch-county-teacher-running-for-school-board/
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.rightInfo}>
          {/* <div className={styles.news}>
            <h2>Breanne in the News</h2>
            <ul>
              <li>
                <a
                  href="https://www.kpcw.org/wasatch-county/2024-01-31/six-candidates-run-for-three-wasatch-county-school-board-seats"
                  target="_blank"
                >
                  https://www.kpcw.org/wasatch-county/2024-01-31/six-candidates-run-for-three-wasatch-county-school-board-seats
                </a>
              </li>
              <li>
                <a
                  href="https://www.parkrecord.com/news/former-wasatch-county-teacher-running-for-school-board/"
                  target="_blank"
                >
                  https://www.parkrecord.com/news/former-wasatch-county-teacher-running-for-school-board/
                </a>
              </li>
            </ul>
          </div> */}
          <div className={styles.questionnaires}>
            <h2>Breanne's Questionnaires</h2>
            <ul className={styles.questionnairesUl}>
              <li>
                <a
                  href="/files/Valley.pdf"
                  download={false}
                  target="_blank"
                  className={styles.questionnairesLinks}
                >
                  Heber Valley Life
                </a>
              </li>
              <li>
                <a
                  href="/files/School Board.pdf"
                  download={false}
                  target="_blank"
                  className={styles.questionnairesLinks}
                >
                  Wasatch Teachers' Association
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <h2 className={styles.contactHeader}>Contact</h2>
        <p>
          <span>Phone</span>: <Link href={`tel:8013694248`}>801-369-4248</Link>
        </p>
        <p>
          <span>Email</span>:{" "}
          <Link href={`mailto:votebreannededrickson@gmail.com`}>
            votebreannededrickson@gmail.com
          </Link>
        </p>
        <div className={styles.socialMedia}>
          <p>Social Media:</p>
          <Link
            href={
              "https://www.facebook.com/breanne.dedrickson.for.wasatch.county.sc/"
            }
            target="_blank"
          >
            <FaFacebookSquare className={styles.facebook} />
          </Link>
        </div>
      </div>
    </main>
  );
}
