import { type DispatchWithoutAction } from "react"

import IconRefetch from "../icons/IconRefetch"

import { cx } from "../../helpers/cx"

interface IProps {
  label: string
  className?: string
  loading?: boolean
  onClick: DispatchWithoutAction
}

function RedButtonRefetch({ onClick, label, className, loading }: IProps) {
  return (
    <button
      type="button"
      className={cx(
        "bg-red-500 h-14 rounded-[0.25rem] flex flex-row items-center px-10 gap-2.5 hover:bg-red-700 disabled:bg-red-950",
        className,
      )}
      onClick={(event) => {
        event.stopPropagation()
        onClick()
      }}
      disabled={loading}
    >
      <span className="text-[#fff] text-lg font-semibold">{label}</span>
      <div className={cx("relative w-[1.625rem] h-auto aspect-square", loading && "animate-spin")}>
        <IconRefetch className="w-full h-auto aspect-square" />
      </div>
    </button>
  )
}

RedButtonRefetch.displayName = "RedButtonRefetch"
export default RedButtonRefetch
