import styles from "./page.module.scss";
import family from "./images/Family.JPG";
import Image from "next/image";
import quoteOne from "./images/Flyer Quote 2.PNG";
import quoteTwo from "./images/Flyer Quote.PNG";
import Headshot from "./images/Headshot.jpg";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      <h1>Breanne Dedrickson</h1>
      <h2>
        Candidate for Wastach County School Board - Seat G. County South Seat
        January 2025 Term
      </h2>
      <div className={styles.imagesWrapper}>
        <Image src={quoteTwo} className={styles.mainImages} />
        <Image
          src={Headshot}
          className={`${styles.mainImages} ${styles.headshot}`}
        />
        <Image src={quoteOne} className={styles.mainImages} />
      </div>
      <div className={styles.infoWrapper}>
        <h3>Why</h3>
        <p>
          I am running for school board because I am passionate about high
          quality, comprehensive education and academic achievement – both for
          my own four children and all children in this valley. I have been
          involved in education as an educator and parent. Now, I want to be
          involved as a policymaker to ensure Wasatch County School District has
          the policies, resources, and supports in place to provide the best
          educational experience for all kids in a fiscally responsible and
          transparent way. Teacher retention and compensation,
          research-based/job- embedded professional development,
          interactive/engaging curriculum, open communication, and
          safe/appropriate school facilities are my priorities. I have a proven
          track record in this district. I have vision and the courage to do
          what is best for students, educators, and the community. I want to
          represent YOU. I’d love your vote and support.
        </p>
      </div>
      <div className={styles.infoWrapper}>
        <h3>Experience</h3>
        <ul>
          <li>Liahona Preparatory Academy Principal</li>
          <li>Timpanogos Intermediate School Vice Principal</li>
          <li>Wasatch High School (WHS) English Teacher</li>
          <li>WHS English Department Chair</li>
          <li>WHS Faculty Council Vice President</li>
          <li>
            Daniel’s Canyon Elementary School/Community Council
            President/Vice-President/Member
          </li>
          <li>Wasatch Parent Network Volunteer, Classroom Volunteer</li>
          <li>
            Wasatch County School District (WCSD) Future Schools Committee
            Member
          </li>
          <li>WCSD Safe Schools Committee Member</li>
          <li>Cognia Accreditation Evaluation Team Member</li>
        </ul>
      </div>
      <Image src={family} className={styles.familypic} />
      <div className={styles.infoWrapper}>
        <h3>Education</h3>
        <ul>
          <li>
            Master of Education in Educational Leadership and Policy with
            Administrative License
          </li>
          <li>
            Bachelor of Science with English Teaching Emphasis (English Major
            &amp; ESL Minor)
          </li>
          <li>Reading Level 1 Endorsement</li>
          <li>Study Abroad: Cuernavaca, Mexico</li>
        </ul>
      </div>
      <div className={styles.contact}>
        <h3 className={styles.contactHeader}>Contact</h3>
        <p>
          <span>Phone</span>: 801-369-4248
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
