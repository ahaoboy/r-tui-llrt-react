import React, { useEffect, useState } from "react"
import { Box, render } from "@r-tui/react"

const kHome = '\x1b[1;1H';
const kClearScreenDown = '\x1b[0J';

// @ts-ignore
process.stdout = {
  columns: 10,
  rows: 10
}

export default function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setCount((c) => ++c)
    }, 1000)
  }, [])
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box color="red" text={"count"} />
      <Box color="green" text={":"} />
      <Box color="blue" text={`${count}`} />
    </Box>
  )
}
render(<App />, {
  fps: 30,
  write: s => {
    console.log(kHome + kClearScreenDown + s.trim())
    // console.clear()
    // process.stdout.write(s.trim())
  }
})