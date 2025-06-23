import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-500 light:bg-slate-100 text-white light:text-black">
      Dark by default, but light when the theme is light.
    </div>
  );
}
