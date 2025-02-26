import { cx } from "../../helpers/cx"

interface IProps {
  id: string
  className?: string
}

function IconSprite({ id, className }: IProps) {
  return (
    <svg className={cx("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", className)}>
      <use id={`#${id}`} />
    </svg>
  )
}

IconSprite.displayName = "IconSprite"
export default IconSprite
