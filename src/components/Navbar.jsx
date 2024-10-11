import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  const navArray = ["Phones", "Macbooks", "Tablets"];

  return (
    <header>
      <nav>
        <img src={appleImg} alt="apple" width={14} height={18} />
        <div>
          {navArray.map((res, idx) => {
            return <div key={idx}>{res}</div>;
          })}
        </div>
        <div>
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
