import { menulists } from "./Menulists";

const MenuItems = () => {
  return (
    <div className="flex flex-row gap-8">
      {menulists.map((menulist) => (
        <span
          key={menulist.title}
          className="
            cursor-pointer 
            hover:font-semibold 
            duration-300 
            hover:underline
          ">
            {menulist.title}
          </span>
      ))}
    </div>
  );
}
export default MenuItems;