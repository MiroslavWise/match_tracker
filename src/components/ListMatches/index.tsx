import { useQuery } from "@tanstack/react-query"

import { type IFrontTemp } from "../../types/fronttemp"

import IconRefetch from "../icons/IconRefetch"

import { cx } from "../../helpers/cx"
import { get } from "../../services/get"
import ItemList from "./ItemList"

function ListMatches() {
  const { data, isFetching } = useQuery({
    queryFn: () => get<IFrontTemp>({ url: "/fronttemp" }),
    queryKey: ["matches"],
  })

  const list = data?.data?.data?.matches ?? []

  console.log(isFetching)
  console.log(list)

  if (isFetching)
    return (
      <section className="w-full min-h-96 flex items-center justify-center">
        <div className={cx("h-10 w-10 relative", isFetching && "animate-spin")}>
          <IconRefetch className="w-10 h-10" />
        </div>
      </section>
    )

  return (
    <ul className="w-full flex flex-col gap-3">
      {
        //почему нет ID в списке??? и приходится использовать index
        list.map((item, index) => (
          <ItemList key={`ds-et-${index}`} {...item} />
        ))
      }
    </ul>
  )
}

ListMatches.displayName = "ListMatches"
export default ListMatches
