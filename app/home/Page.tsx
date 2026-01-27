import Footer from "../footer/Footer";
import Contact from "./components/contact/ContactPage";
import Intro from "./components/intro/IntroPage";
import Profile from "./components/profile/ProfilePage";
import Project from "./components/project/ProjectPage";

const Page = () => {
  return (
    <div className="bg-black">
      <section id="home" className="w-full">
        <Intro />
        <Profile />
      </section>
      <section id="projects" className=" w-full">
        <Project />
      </section>
      <section id="contact" className=" w-full">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Page;
