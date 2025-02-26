import { type IMatches } from "../../types/fronttemp"
import IconTeam from "../icons/IconTeam"

import ComponentTag from "../tags"

function ItemList(props: IMatches) {
  const { status, homeScore, awayScore, homeTeam, awayTeam } = props ?? {}

  return (
    <a className="w-full grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-9 gap-4 h-[5.375rem] bg-[var(--second-bg)] rounded-[0.25rem]">
      <div className="w-full flex items-center justify-start gap-3.5">
        <div className="relative w-12 *:w-12 h-12 *:h-12 aspect-square *:aspect-square">
          <IconTeam />
        </div>
        <span className="text-[#fff] text-base font-semibold">{homeTeam?.name}</span>
      </div>
      <div className="flex flex-col items-center gap-1 justify-center">
        <span className="whitespace-nowrap text-center text-[#fff] text-xl font-semibold">
          {homeScore}&nbsp;:&nbsp;{awayScore}
        </span>
        <ComponentTag status={status} />
      </div>
      <div className="w-full flex items-center justify-end gap-3.5">
        <span className="text-[#fff] text-base font-semibold">{awayTeam?.name}</span>
        <div className="relative w-12 *:w-12 h-12 *:h-12 aspect-square *:aspect-square">
          <IconTeam />
        </div>
      </div>
    </a>
  )
}

ItemList.displayName = "ItemList"
export default ItemList
