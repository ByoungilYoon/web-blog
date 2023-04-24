import Logo from "./Logo";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <div className="w-full py-3.5 shadow-sm">
      <div
        className="
          w-[840px]
          mx-auto
          flex
          items-center
          justify-between
        "
      >
        <Logo />
        <MenuItems />
      </div>
      
    </div>
  );
}
export default Navbar;