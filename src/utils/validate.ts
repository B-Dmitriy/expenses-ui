export const isEmail = (email: string): boolean => {
  const matchArr: RegExpMatchArray | null = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )

  return matchArr !== null && matchArr.length > 0
}

export const longerThan = (str: string, len: number): boolean => {
  if (len < 0) return str.length > 0

  return str.length > len
}

export const shorterThan = (str: string, len: number): boolean => {
  if (len <= 0) return false

  return str.length < len
}