import React from "react";
import { Link } from "react-router";
const menuItems = [
  { path: "/", label: "홈" },
  { path: "/about", label: "회사 정보" },
  { path: "/leadership", label: "임원 소개" },
  { path: "/board", label: "업무 게시판" },
  { path: "/our-services", label: "제공 기술" },
  { path: "/contact", label: "문의하기" },
];

//이게 하나의 컴포넌트
const menuItem = ({ path, label, onClick }) => {
  <li>
    <Link
      to={path}
      onClick={onClick}
      className="hover:text-blue-600 transition-colors duration-300"
    >
    
    </Link>
  </li>;
};

const NaviBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold" lg:ml-12 lg:mr-12>
          <a href="/"> Ark Company </a>
        </h1>
      </div>

      <div className="mt-4 space-x-4 hidden lg:flex flex-1:flex justify-center">
        <ul className=" flex gap-8 text-lg">
          {menuItems.map((item) => (
            <MenuItem key={item.path} {...item} /> 
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NaviBar;
