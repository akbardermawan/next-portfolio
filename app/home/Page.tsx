import Footer from "../footer/Footer";
import Contact from "./components/contacts/Contact";
import Intro from "./components/intros/Intro";
import Profile from "./components/profiles/Profile";
import Projects from "./components/Projects";

const Page = () => {
  return (
    <div className="bg-black">
      <section id="home" className="w-full">
        <Intro />
        <Profile />
      </section>
      <section id="projects" className="h-screen w-full">
        <Projects />
      </section>
      <section id="contact" className=" w-full">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Page;
