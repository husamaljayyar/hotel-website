export const LoadingPage = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-items-center bg-slate-700"
        style={{ height: "100vh" }}
      >
        <div className="min-h-screen flex justify-center items-center ">
          <div className="loader p-5 rounded-full flex space-x-3">
            <div className="w-4 h-4 bg-white rounded-full animate-bounce me-1"></div>
            <div className="w-4 h-4 bg-amber-600 rounded-full animate-bounce me-1"></div>
            <div className="w-4 h-4 bg-accent rounded-full animate-bounce "></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoadingPage;
