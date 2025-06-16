export default function Home() {
  return (
    <div className="h-dvh">
      <div
        id="top-row-landing"
        className="flex flex-row h-1/2 border-2 border-slate-700 m-2"
      >
        <div className="basis-1/3 border-2 border-slate-700 m-2 p-3">
          {' '}
          My Image Goes Here
        </div>
        <div className="basis-2/3 border-2 border-slate-700 m-2 p-3">
          {' '}
          My Basic Information Goes Here
        </div>
      </div>
      <div
        id="bottom-row-landing"
        className="h-1/2 border-2 border-slate-700 m-2 p-3"
      >
        My Other Things Go Here
      </div>
    </div>
  );
}
