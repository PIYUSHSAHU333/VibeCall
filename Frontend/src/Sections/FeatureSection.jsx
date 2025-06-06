import React from "react";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import HistoryIcon from "@mui/icons-material/History";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import MessageIcon from "@mui/icons-material/Message";
function FeatureSection() {
  return (
    <div className="FeatureSection flex-col w-full md:w-8/10 mx-auto items-center justify-center flex min-h-screen px-4 md:px-0" id="FeatureSection">
      <div className="flex flex-col items-center">
        <div className="feature-glow"></div>
        <p className="text-[#F083E7] text-xl md:text-2xl font-bold z-20">Connect Faster</p>
        <h1 className="text-3xl md:text-6xl text-amber-100 z-20 font-bold w-full md:w-[650px] text-center">
          Your complete solution for virtual meetings.
        </h1>
        <p className="text-lg md:text-2xl w-full md:w-[670px] font-medium text-center mt-4 md:mt-8 text-gray-200">
          Everything you'd expect from a modern video meeting app—only faster,
          simpler, and better.
        </p>
      </div>
      <div className="grid gap-y-8 md:gap-y-16 gap-x-4 md:gap-x-6 text-amber-100 grid-cols-1 md:grid-cols-2 mt-12 md:mt-24 features">
        <div className="flex gap-3.5">
          <PrivacyTipIcon className="text-amber-100 !size-8 md:!size-10" />

          <div>
            <h1 className="text-lg md:text-xl font-semibold">Privacy</h1>
            <p className="text-base md:text-2xl text-gray-200">
              We don't listen, we don't store, and we don't sell your
              data—because your conversations are none of our business.
            </p>
          </div>
        </div>
        <div className="flex gap-3.5 border-2 h-auto md:h-[200px] rounded-xl p-3.5 border-[#AB1B9E]">
          <HistoryIcon className="text-amber-100 !size-8 md:!size-10" />

          <div>
            <h1 className="text-lg md:text-xl font-semibold">History</h1>
            <p className="text-base md:text-2xl text-gray-200">
              Never lose a conversation. Your full meeting history is securely
              stored and easy to access whenever you need it.
            </p>
          </div>
        </div>
        <div className="flex gap-3.5 border-2 rounded-xl p-3.5 border-[#AB1B9E] ">
          <ScreenShareIcon className="text-amber-100 !size-8 md:!size-10" />

          <div>
            <h1 className="text-lg md:text-xl font-semibold">Present Like a Pro</h1>
            <p className="text-base md:text-2xl text-gray-200">
              Share your screen in real-time to present, teach, or
              collaborate—no lag, no confusion, just clarity.
            </p>
          </div>
        </div>
        <div className="flex gap-3.5">
          <MessageIcon className="text-amber-100 !size-8 md:!size-10" />

          <div>
            <h1 className="text-lg md:text-xl font-semibold">Message in the Moment</h1>
            <p className="text-base md:text-2xl text-gray-200">
              Send instant messages during calls to share notes, links, or quick
              thoughts without interrupting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
