export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto text-white flex justify-between">
        {/* Logo */}
        <a className="pt-1" href="/">
          <div className="flex flex-row">
            <img className="w-[40px]  h-[40px] " src={"/logo.png"} />
            <p className="text-xl   uppercase ml-2 font-light pt-2">hotel</p>
          </div>
        </a>
        <p className="pt-3"> Copyright &copy; 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};
