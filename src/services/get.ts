const URL_ = "https://app.ftoyd.com/fronttemp-service"

interface IData {
  url: string
}

interface IReturn<R = any> {
  data: R
  error: any
}

export const get = async <R = any>({ url }: IData) => {
  try {
    const response = await fetch(`${URL_}${url}`)

    const data: R = await response.json()

    return {
      data: data,
      error: null,
    } as IReturn<R>
  } catch (e) {
    return {
      data: null,
      error: e as any,
    } as IReturn<R>
  }
}
