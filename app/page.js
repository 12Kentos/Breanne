import styles from "./page.module.scss";
import family from "./images/Family.JPG";
import Image from "next/image";
import quoteOne from "./images/Flyer Quote 2.PNG";
import quoteTwo from "./images/Flyer Quote.PNG";
// import quoteThree from "./images/Flyer Quote 3.PNG";
import testingTwo from "./images/Flyer Quote 3.PNG";
// import quoteFour from "./images/Flyer Quote 4.PNG";
import testing from "./images/Flyer Quote 4.PNG";
import Headshot from "./images/Headshot.jpg";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      <header className={styles.header}>
        <div className={styles.headerInside}>
          <h1 className={styles.firstName}>Breanne</h1>
          <h1 className={styles.lastName}>Dedrickson</h1>
          <div className={styles.position}>
            <p className={styles.wasatch}>Wasatch County School Board</p>
            <p className={styles.seat}>Seat G County South</p>
          </div>
        </div>
      </header>
      {/* <header className={styles.header}>
        <div className={styles.headerInside}>
          <h1>Breanne Dedrickson</h1>
          <h2>Candidate for Wasatch County School Board</h2>
        </div>
      </header> */}
      {/* <div className={styles.imagesWrapper}>
        <Image
          src={Headshot}
          className={`${styles.mainImages} ${styles.headshot}`}
        />
      </div> */}

      <h1 className={styles.mainHeading}>Who is Breanne?</h1>

      <div className={styles.familyPicWrapper}>
        <Image src={family} className={styles.familyPic} alt="Family Photo" />
      </div>

      <p className={styles.breanneInfo}>
        Breanne grew up in Pleasant Grove and Holden, Utah. She loved playing
        "school" as a child and always aspired to be a teacher. An avid reader,
        Breanne combined her two great loves and chose to study English Teaching
        at Snow College and then Utah State University. Post a study abroad
        experience to Cuernavaca, Mexico and student teaching at Logan High
        School, Breanne was hired to teach 9-10th grade English, ACT Prep, and
        English Language Learner classes at Wasatch High School. After spending
        three years teaching as Ms. Davis, Breanne went on a blind date and
        found the true love of her life, Andrew Dedrickson. Ms. Davis became
        Mrs. Dedrickson. Fast forward 14 years, Andrew and Breanne Dedrickson
        now have four kids, two lambs, one dog, one pony, and lots of goldfish!
        Breanne loves mint Oreo ice cream, four-wheeling, pedicures, traveling
        with her family, and learning new things - which is why she attended the
        University of Utah and earned a Masters of Education degree in
        Educational Leadership and Policy.
      </p>

      <p className={styles.breanneInfo}>
        Breanne was the assistant principal at Timpanogos Intermediate School
        for two years and has been the principal at Liahona Preparatory Academy
        for the last nine years. Breanne is an involved parent who has served in
        her children's school as a school community Council member and Wasatch
        Parent Network volunteer. She's served at the district level as a
        committee member on the Safe Schools and Future Schools committees. She
        was also active in coordinating community efforts to support the first
        bond for the new high school. Breanne is a passionate educator and
        parent with a proven track record. She now wants to be involved as a
        policymaker to influence Wasatch County schools for good. Breanne would
        love your vote of support in November!
      </p>

      <div className={styles.contentWrapper}>
        <h2 className={styles.whyTitle}>
          Why is Breanne running for school board?
        </h2>
        <div className={styles.whyExperience}>
          <div>
            <Image
              src={quoteTwo}
              className={styles.firstImage}
              alt="Learning Quote: Learning is not attained by chance, it must be sought for with ardor and attended to with diligence. -Abigail Adams"
            />
          </div>
          {/* <p className={styles.whyInfo}>
            Breanne is running for school board because she is passionate about
            high quality, comprehensive education and academic achievement –
            both for her own four children and all children in this valley.
            Breanne has been involved in education as an educator and parent.
            Now, she want's to be involved as a policymaker to ensure Wasatch
            County School District has the policies, resources, and supports in
            place to provide the best educational experience for all kids in a
            fiscally responsible and transparent way. Teacher retention and
            compensation, research-based/job- embedded professional development,
            interactive/engaging curriculum, open communication, and
            safe/appropriate school facilities are her priorities. She has a
            proven track record in this district. Breanne has vision and the
            courage to do what is best for students, educators, and the
            community.
            <br />
            <br />
            "I want to represent YOU. I’d love your vote and support." - Breanne
          </p> */}
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
        </div>
        {/* <a href="/files/Valley.pdf" download={false} target="_blank">
          Testing Link
        </a> */}
      </div>
      <div className={styles.contentWrapper}>
        <h3>Breanne's Experience</h3>
        <div
          className={`${styles.whyExperience} ${styles.whyExperienceReverse}`}
        >
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
          <div className={styles.quoteWrapper}>
            <Image
              src={testingTwo}
              className={styles.firstImage}
              alt="Education Quote: Education is the most powerful weapon which you can use to change the world. -Nelson Mandela"
            />
          </div>
        </div>
      </div>
      {/* <div className={styles.valleyLifeMag}>
        <h2>Breanne's answers for Valley Life Magazine Fall Issue</h2>
        <ul className={styles.valleyLifeMagUl}>
          <li>
            <p className={styles.question}>
              Tell us about yourself, background, education and teaching
              experiences, and career path.
            </p>
            <p className={styles.answer}>
              I am a former Wasatch High School English teacher, Timpanogos
              Intermediate School assistant principal and current Liahona
              Preparatory Academy principal. I earned a Bachelor of Science in
              English Teaching from Utah State University and a Master of
              Education in Educational Leadership and Policy from the University
              of Utah. I am the mother of four wonderful children, and I love
              volunteering in their classrooms. I am active in the Wasatch
              Parent Network and serve on the Daniel Canyon Elementary School
              Community Council. I also served on the Wasatch County School
              District’s Safe Schools Committee and Future Schools Committee. I
              am running for school board because I am passionate about high
              quality, comprehensive education and academic achievement. I want
              to ensure Wasatch County School District has the policies and
              resources in place to provide the best educational experience for
              all children in a fiscally responsible and transparent way.
            </p>
          </li>
          <li>
            <p className={styles.question}>
              What is the most important issue facing Wasatch County School
              District and what can you do as a board member about it?
            </p>
            <p className={styles.answer}>
              Two important issues facing Wasatch County School District are
              growth and attracting and retaining high quality educators. First,
              to address growth, I will have the courage and creativity to
              provide safe, appropriate, up-to-date, educationally conducive
              spaces for students to learn in. I will use data and open
              communication to evaluate needs, build community consensus, and
              make decisions that are best for students, educators, and the
              community. I would like to implement policies, so the long-term
              plan to accommodate growth is transparent and expected.
              Collaboration with community leaders is also important. Second,
              for attracting and retaining high quality educators, I will be a
              proponent for fair compensation and benefits to ensure we can hire
              and keep top-notch employees. This means I will support and vote
              for a budget that allocates the majority of its money to salaries
              and benefits. Continuing to fully fund benefits and staying
              competitive in the salary market is a priority for me because high
              quality teachers directly impact student achievement.
            </p>
          </li>
          <li>
            <p className={styles.question}>
              What is one of your strengths when working with a group?
            </p>
            <p className={styles.answer}>
              I am an excellent communicator. I have learned the value of
              listening to all perspectives to ensure I am fully informed. I
              listen with respect, value the contributions of others, and have
              empathy. I ask questions for clarity and accountability. I have
              the courage to speak up, contribute, and engage in critical
              conversations. With honest, clear, responsive, and respectful
              dialogue, I have found groups function more effectively and
              efficiently.
            </p>
          </li>
          <li>
            <p className={styles.question}>
              What is the purpose of a school board in a community?
            </p>
            <p className={styles.answer}>
              “A local school board shall make and enforce policies necessary
              for the control and management of the district schools” (Utah Code
              Section 53G-4-402). U.S. News &amp; World Report (2023) further
              explains, “school boards have three major responsibilities:
              developing the annual budget to run the school system; setting
              school policies; and hiring and evaluating the superintendent.” It
              is also the role of the board to ask questions, assess progress,
              listen to all sides, represent the community, and do what is best
              for students.
            </p>
          </li>
        </ul>
      </div> */}

      <div className={styles.eduNews}>
        <div className={`${styles.quoteWrapper} ${styles.lastImg}`}>
          <Image
            src={quoteOne}
            className={styles.firstImage}
            alt="Education Quote: An Investment in knowledge pays the best interest. -Benjamin Franklin"
          />
        </div>
        <div>
          <div className={styles.infoWrapper}>
            <h2>Education</h2>
            <ul>
              <li>
                Master of Education in Educational Leadership and Policy with
                Administrative License
              </li>
              <li>
                Bachelor of Science with English Teaching Emphasis (English
                Major &amp; ESL Minor)
              </li>
              <li>Reading Level 1 Endorsement</li>
              <li>Study Abroad: Cuernavaca, Mexico</li>
            </ul>
          </div>
          <div className={styles.news}>
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
          </div>
          <div className={styles.questionnaires}>
            <h2>Breanne's Questionnaires</h2>
            <a
              href="/files/Valley.pdf"
              download={false}
              target="_blank"
              className={styles.questionnairesLinks}
            >
              Heber Valley Life
            </a>
            <a
              href="/files/School Board.pdf"
              download={false}
              target="_blank"
              className={styles.questionnairesLinks}
            >
              School Board
            </a>
          </div>
        </div>
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
