import HeadButtons from "./components/HeadButtons"
import ListMatches from "./components/ListMatches"

function App() {
  return (
    <section className="w-full flex flex-col px-11 py-11 gap-5 overflow-hidden overflow-y-auto">
      <div className="w-full flex flex-row items-center justify-between">
        <h1 className="text-[#fff] text-4xl font-bold">Match Tracker</h1>
        <HeadButtons />
      </div>
      <ListMatches />
    </section>
  )
}

App.displayName = "App"
export default App
