function App() {
  return (
    <div className="max-w-[1440px] tablet:max-w-[768px] mobile:w-[375px] w-full h-[960px] tablet:h-[1024px] mobile:h-[812px] bg-[#141414] flex">
      <div className="w-[384px] tablet:w-[456px] mobile:w-[327px] h-[611px] mobile:h-[579px] rounded-[12px] bg-[#1f1f1f] mx-auto mt-[174.5px] tablet:mt-[206.5px] mobile:mt-[116.5px] flex flex-col items-center">
        <img
          className="w-[88px] h-[88px] rounded-full mt-[40px] mobile:mt-[24px] mx-auto"
          src="/avatar-jessica.jpeg"
          alt="Avatar"
        />
        <h1 className="font-inter font-semibold text-[24px] leading-[150%] text-white text-center mt-[24px]">
          Jessica Randall
        </h1>
        <h3 className="font-inter font-bold text-[14px] leading-[150%] text-[#c4f82a] text-center mt-[4px]">
          London, United Kingdom
        </h3>
        <p className="font-inter text-[14px] leading-[150%] text-white text-center mt-[24px]">
          &quot;Front-end developer and avid reader.&quot;
        </p>
        <button className="w-[304px] tablet:w-[376px] mobile:w-[279px] h-[45px] bg-[#333333] text-white font-bold text-[14px] leading-[150%] mt-[24px] rounded-[8px] hover:bg-[#C4F82A] hover:text-black">
          Github
        </button>
        <button className="w-[304px] tablet:w-[376px] mobile:w-[279px] h-[45px] bg-[#333333] text-white font-bold text-[14px] leading-[150%] mt-[16px] rounded-[8px] hover:bg-[#C4F82A] hover:text-black">
          Frontend Mentor
        </button>
        <button className="w-[304px] tablet:w-[376px] mobile:w-[279px] h-[45px] bg-[#333333] text-white font-bold text-[14px] leading-[150%] mt-[16px] rounded-[8px] hover:bg-[#C4F82A] hover:text-black">
          LinkedIn
        </button>
        <button className="w-[304px] tablet:w-[376px] mobile:w-[279px] h-[45px] bg-[#333333] text-white font-bold text-[14px] leading-[150%] mt-[16px] rounded-[8px] hover:bg-[#C4F82A] hover:text-black">
          Twitter
        </button>
        <button className="w-[304px] tablet:w-[376px] mobile:w-[279px] h-[45px] bg-[#333333] text-white font-bold text-[14px] leading-[150%] mt-[16px] rounded-[8px] hover:bg-[#C4F82A] hover:text-black">
          Instagram
        </button>
      </div>
    </div>
  );
}

export default App;
