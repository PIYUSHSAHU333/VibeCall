import React, { useContext, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "../App.css";
import HeroSection from "../Sections/HeroSection";
import FeatureSection from "../Sections/FeatureSection";
import Testimony from "../Sections/Testimonial";
import { AuthContext } from "../context/AuthContext";
import PriceSection from "../Sections/PriceSection";
import FAQ from "../Sections/FAQ";
import { HoverButton } from "../ui/LogInBtn";
import RevealOnScroll from "../ui/RevealOnScroll";
import BeamsBackground from "../ui/BackgroundBeams";
function LandingPage() {
  const router = useNavigate();
  const { isLoggedIn, userData } = useContext(AuthContext);
  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log("token from landing page:", token);
    isLoggedIn();
  }, []);

  return (
    <div className=" min-h-screen ">
      <div className="fixed inset-0 -z-10">
        <BeamsBackground />
      </div>
      <div className="landingPageContainer relative z-10 ">
        <div className="navbar pt-3 p-2 flex items-center justify-between text-amber-50">
          <div className="div text-4xl cursor-pointer pl-14 font-bold">
            Linkify
          </div>
          <div className="navLink cursor-pointer font-semibold text-xl flex items-center gap-11 justify-between">
            <Link>Join as guest</Link>
            <Link to="FeatureSection" smooth={true} duration={500}>
              Features
            </Link>
            <Link to="FAQ" smooth={true} duration={700}>
              FAQ
            </Link>
            <Link to="Footer" smooth={true} duration={800}>
              Contact
            </Link>
          </div>
          <div className="login font-semibold text-xl pr-14">
            {userData ? (
              <HoverButton
                onClick={() => {
                  localStorage.removeItem("token");
                  router("/");
                }}
              >
                Logout
              </HoverButton>
            ) : (
              <RouterLink to="/auth">
                <HoverButton>Login</HoverButton>
              </RouterLink>
            )}
          </div>
        </div>
        <RevealOnScroll>
          <HeroSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <FeatureSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <Testimony />
        </RevealOnScroll>
        <RevealOnScroll>
          <PriceSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <FAQ />
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default LandingPage;
