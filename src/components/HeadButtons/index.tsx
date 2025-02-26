import { useQuery } from "@tanstack/react-query"

import { type IFrontTemp } from "../../types/fronttemp"

import RedButtonRefetch from "../buttons/RedButtonRefetch"
import IconAlertTriangle from "../icons/IconAlertTriangle"

import { cx } from "../../helpers/cx"
import { get } from "../../services/get"

function HeadButtons() {
  const { data, isFetching, refetch } = useQuery({
    queryFn: () => get<IFrontTemp>({ url: "/fronttemp" }),
    queryKey: ["matches"],
  })

  return (
    <div className="flex items-center justify-end gap-3">
      <article
        className={cx(
          !isFetching && !!data?.error
            ? "flex flex-row items-center h-14 bg-[var(--disabled-bg)] rounded-[0.25rem] px-6 gap-2.5"
            : "hidden",
        )}
      >
        <div className="w-7 h-7 relative">
          <IconAlertTriangle />
        </div>
        <span className="text-[#fff] text-lg font-medium whitespace-nowrap">Ошибка: не удалось загрузить информацию</span>
      </article>
      <RedButtonRefetch label="Обновить" onClick={refetch} loading={isFetching} />
    </div>
  )
}

HeadButtons.displayName = "HeadButtons"
export default HeadButtons
