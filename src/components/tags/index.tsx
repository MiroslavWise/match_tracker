import { cx } from "../../helpers/cx"
import { EStatus } from "../../types/fronttemp"

const obj = {
  [EStatus.FINISHED]: "Finished",
  [EStatus.ONGOING]: "Live",
  [EStatus.SCHEDULED]: "Match preparing",
} as const

function ComponentTag({ status }: { status: EStatus }) {
  if (!Object.values(EStatus).includes(status)) return null

  return (
    <article
      className={cx(
        "min-w-24 w-fit h-7 flex items-center justify-center text-[#fff] text-xs font-semibold px-2 whitespace-nowrap rounded-[0.25rem]",
        status === EStatus.FINISHED && "bg-[var(--red-500)]",
        status === EStatus.ONGOING && "bg-[var(--green)]",
        status === EStatus.SCHEDULED && "bg-[var(--yellow)]",
      )}
    >
      {obj[status]}
    </article>
  )
}

ComponentTag.displayName = "ComponentTag"
export default ComponentTag
