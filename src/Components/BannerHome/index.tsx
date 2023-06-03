import "./index.css";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function BannerHome() {
  return (
    <section className="main-banner">
      <div className="banner-content">
        <div className="left">
          <h5>Welcome to my Website</h5>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
          >
            Jamesson Seren
          </motion.h1>
          <h4>Software Engineer</h4>
          <Link to="/projects">
            <motion.p
              initial={{ opacity: 0}}
              animate={{
                opacity: 1,
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]

              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              See Projects
            </motion.p>
          </Link>
        </div>
      </div>
    </section>
  );
}
