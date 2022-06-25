import { useState, useEffect } from "react"

const useMediaQuery = (query: string) => {
  
  const [matches, setMatches] = useState<Boolean>(false)
  const [status] = useState<Boolean>(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [matches, query, status])

  return matches
}

export default useMediaQuery