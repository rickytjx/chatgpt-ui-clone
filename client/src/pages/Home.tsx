export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white flex">
      {/* Sidebar */}
      <aside className="w-[280px] h-screen bg-[#f9f9fa] px-2 py-4 flex flex-col gap-4 flex-shrink-0">
        {/* Top buttons */}
        <div className="px-1 flex justify-between items-center">
          <button className="w-7 h-7 p-1 rounded-lg flex justify-center items-center hover:bg-black/[0.05] transition-colors">
            <img src="/I27642-26662;387056-422079;76255-2852;12401-5067;11022-10698;10412-2199;1-22834.svg" alt="ChatGPT" className="w-6 h-6" />
          </button>
          <button className="w-7 h-7 p-1 rounded-lg flex justify-center items-center hover:bg-black/[0.05] transition-colors">
            <img src="/I27642-26662;387056-422079;76255-2852;12401-5066;11022-10698;10412-2209;1-12126.svg" alt="Sidebar" className="w-4 h-4" />
          </button>
        </div>

        {/* Main actions */}
        <div className="flex flex-col gap-1">
          <button className="w-full px-2 py-2 rounded-lg flex items-center gap-2 hover:bg-black/[0.05] transition-colors">
            <img src="/I27642-26662;387056-422079;76921-27986;30832-173136;10412-2204;1-12420.svg" alt="New chat" className="w-5 h-5 flex-shrink-0" />
            <span className="text-[#0d0d0d] text-sm font-normal font-['Inter'] flex-1 text-left">New chat</span>
          </button>
          <button className="w-full px-2 py-2 rounded-lg flex items-center gap-2 hover:bg-black/[0.05] transition-colors">
            <img src="/I27642-26662;387056-422079;76921-27988;30832-173136;10412-2204;1-18710.svg" alt="Search" className="w-5 h-5 flex-shrink-0" />
            <span className="text-[#0d0d0d] text-sm font-normal font-['Inter'] flex-1 text-left">Search chats</span>
          </button>
          <button className="w-full px-2 py-2 rounded-lg flex items-center gap-2 hover:bg-black/[0.05] transition-colors">
            <div className="flex items-center gap-2 flex-1">
              <img src="/I27642-26662;387056-422079;76255-2857;30832-173133;11048-14274;10412-2204;1-15268.svg" alt="Library" className="w-5 h-5 flex-shrink-0" />
              <span className="text-[#0d0d0d] text-sm font-normal font-['Inter']">Library</span>
            </div>
            <span className="text-[#0d0d0d] text-sm font-normal font-['Inter']">11</span>
          </button>
        </div>

        {/* Features section */}
        <div className="flex flex-col gap-1">
          <button className="w-full px-2 py-2 rounded-lg flex items-center gap-2 hover:bg-black/[0.05] transition-colors">
            <img src="/I27642-26662;387056-422079;76921-27958;30832-173136;10412-2204;1-15030.svg" alt="Sora" className="w-5 h-5 flex-shrink-0" />
            <span className="text-[#0d0d0d] text-sm font-normal font-['Inter'] flex-1 text-left">Sora</span>
          </button>
          <button className="w-full px-2 py-2 rounded-lg flex items-center gap-2 hover:bg-black/[0.05] transition-colors">
            <img src="/I27642-26662;387056-422079;76921-27964;30832-173136;10412-2204;1-13134.svg" alt="GPTs" className="w-5 h-5 flex-shrink-0" />
            <span className="text-[#0d0d0d] text-sm font-normal font-['Inter'] flex-1 text-left">GPTs</span>
          </button>
          <button className="w-full px-2 py-2 rounded-lg flex items-center gap-2 hover:bg-black/[0.05] transition-colors">
            <div className="w-5 h-5 bg-black/[0.05] rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
              <img src="/I27642-26662;387056-422079;76921-27960;30832-173136;10412-2204;1-21197.webp" alt="DALL·E" className="w-full h-full object-cover" />
            </div>
            <span className="text-[#0d0d0d] text-sm font-normal font-['Inter'] flex-1 text-left">DALL·E</span>
          </button>
          <button className="w-full px-2 py-2 rounded-lg flex items-center gap-2 hover:bg-black/[0.05] transition-colors">
            <div className="w-5 h-5 bg-black/[0.05] rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
              <img src="/I27642-26662;387056-422079;76921-27962;30832-173136;10412-2204;1-21192.webp" alt="Canva" className="w-full h-full object-cover" />
            </div>
            <span className="text-[#0d0d0d] text-sm font-normal font-['Inter'] flex-1 text-left">Canva</span>
          </button>
        </div>

        {/* Chat history section */}
        <div className="flex-1 overflow-y-auto scrollbar-thin">
          <div className="flex flex-col gap-0">
            <div className="px-2 py-2">
              <span className="text-[#8e8ea0] text-xs font-medium font-['Inter'] uppercase tracking-wider">Chats</span>
            </div>
            <button className="w-full px-2 py-2 rounded-lg hover:bg-black/[0.05] transition-colors text-left">
              <span className="text-[#0d0d0d] text-sm font-normal font-['Inter']">Typo Assistance Request</span>
            </button>
            <button className="w-full px-2 py-2 rounded-lg hover:bg-black/[0.05] transition-colors text-left">
              <span className="text-[#0d0d0d] text-sm font-normal font-['Inter']">Quadratic Function Plot</span>
            </button>
            <button className="w-full px-2 py-2 rounded-lg hover:bg-black/[0.05] transition-colors text-left">
              <span className="text-[#0d0d0d] text-sm font-normal font-['Inter']">Toyota Names Poetry</span>
            </button>
            <button className="w-full px-2 py-2 rounded-lg hover:bg-black/[0.05] transition-colors text-left">
              <span className="text-[#0d0d0d] text-sm font-normal font-['Inter']">Urban Green Spaces</span>
            </button>
            <button className="w-full px-2 py-2 rounded-lg hover:bg-black/[0.05] transition-colors text-left">
              <span className="text-[#0d0d0d] text-sm font-normal font-['Inter']">Historical Landmarks Guide</span>
            </button>
            <button className="w-full px-2 py-2 rounded-lg hover:bg-black/[0.05] transition-colors text-left">
              <span className="text-[#0d0d0d] text-sm font-normal font-['Inter']">Gourmet Food Truck Trends</span>
            </button>
            <button className="w-full px-2 py-2 rounded-lg hover:bg-black/[0.05] transition-colors text-left">
              <span className="text-[#0d0d0d] text-sm font-normal font-['Inter']">Digital Art Techniques</span>
            </button>
            <button className="w-full px-2 py-2 rounded-lg hover:bg-black/[0.05] transition-colors text-left">
              <span className="text-[#0d0d0d] text-sm font-normal font-['Inter']">Virtual Reality Experiences</span>
            </button>
            <button className="w-full px-2 py-2 rounded-lg hover:bg-black/[0.05] transition-colors text-left">
              <span className="text-[#0d0d0d] text-sm font-normal font-['Inter']">Local Music Scene Highlights</span>
            </button>
            <button className="w-full px-2 py-2 rounded-lg hover:bg-black/[0.05] transition-colors text-left">
              <span className="text-[#0d0d0d] text-sm font-normal font-['Inter']">Culinary Heritage Preservation</span>
            </button>
            <button className="w-full px-2 py-2 rounded-lg hover:bg-black/[0.05] transition-colors text-left">
              <span className="text-[#0d0d0d] text-sm font-normal font-['Inter']">Sustainable Fashion Innovations</span>
            </button>
            <button className="w-full px-2 py-2 rounded-lg hover:bg-black/[0.05] transition-colors text-left">
              <span className="text-[#0d0d0d] text-sm font-normal font-['Inter']">Community Gardening Initiatives</span>
            </button>
          </div>
        </div>

        {/* User profile */}
        <div className="mt-auto pt-2">
          <button className="w-full px-2 py-2 rounded-lg flex items-center gap-3 hover:bg-black/[0.05] transition-colors">
            <div className="w-8 h-8 bg-black/[0.05] rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
              <img src="/I27642-26662;387056-422079;76921-27872;11048-14274;10861-5520;1-21107.webp" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[#0d0d0d] text-sm font-medium font-['Inter']">ByeWind</div>
              <div className="text-[#6e6e80] text-xs font-normal font-['Inter']">Free</div>
            </div>
          </button>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 flex flex-col items-center justify-center relative">
        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 h-14 flex items-center justify-between px-4 border-b border-[#ececec]">
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-black/[0.05] transition-colors">
              <span className="text-[#0d0d0d] text-sm font-medium font-['Inter']">ChatGPT</span>
              <img src="/I27642-26662;387056-422080;76248-1779;11022-10698;10412-2204;6690-479.svg" alt="Dropdown" className="w-4 h-4" />
            </button>
          </div>
          <button className="px-4 py-2 rounded-lg flex items-center gap-2 bg-white border border-[#d1d5db] hover:bg-gray-50 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1.5L9.5 6.5H14.5L10.5 9.5L12 14.5L8 11.5L4 14.5L5.5 9.5L1.5 6.5H6.5L8 1.5Z" fill="#8B5CF6" stroke="#8B5CF6" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-medium font-['Inter'] text-[#0d0d0d]">Upgrade your plan</span>
          </button>
          <button className="w-9 h-9 rounded-lg hover:bg-black/[0.05] transition-colors flex items-center justify-center">
            <img src="/I27642-26662;387056-422080;76248-1777;11022-8264;10412-2209;1-17861.svg" alt="Settings" className="w-5 h-5" />
          </button>
        </div>

        {/* Center content */}
        <div className="flex flex-col items-center justify-center gap-12 px-4">
          <h1 className="text-[#202123] text-[2rem] font-medium font-['Inter'] text-center leading-tight">
            Where should we begin?
          </h1>

          {/* Input area */}
          <div className="w-full max-w-3xl">
            <div className="relative">
              <div className="w-full bg-white border border-[#d1d5db] rounded-[32px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center gap-2 px-4 py-3 hover:shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-shadow">
                <button className="w-8 h-8 hover:bg-black/[0.05] rounded-lg transition-colors flex items-center justify-center flex-shrink-0">
                  <img src="/I27642-26662;387056-422083;77154-43191;10922-14518;11022-10734;10412-2204;1-18616.svg" alt="Add" className="w-5 h-5" />
                </button>
                <input 
                  type="text" 
                  placeholder="Ask anything"
                  className="flex-1 bg-transparent border-none outline-none text-[#0d0d0d] placeholder:text-[#8e8ea0] text-base font-normal font-['Inter']"
                />
                <button className="w-8 h-8 hover:bg-black/[0.05] rounded-lg transition-colors flex items-center justify-center flex-shrink-0">
                  <img src="/I27642-26662;387056-422083;77154-43192;10922-14518;11022-10734;10412-2204;1-15240.svg" alt="Voice" className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 hover:bg-black/[0.05] rounded-lg transition-colors flex items-center justify-center flex-shrink-0">
                  <img src="/I27642-26662;387056-422083;77154-43192;10922-14519;11022-10743;10412-2204;1-14425.svg" alt="Audio" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
