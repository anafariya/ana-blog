import { NextStudioHead } from 'next-sanity/studio/head'

export function CustomStudioHead() {
  return (
    <>
      <NextStudioHead favicons={false} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://www.sanity.io/static/images/favicons/favicon-32x32.png"
      />
    </>
  )
}
