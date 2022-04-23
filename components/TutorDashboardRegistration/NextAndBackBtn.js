import React from 'react'
import Link from 'next/link'
function NextAndBackBtn({ nextLink, backLink }) {
  return (
    <>
      <div className="flex flex-col gap-4  md:flex-row">
        <Link href={nextLink}>
          <a className="tutor-dashboard-btn   md:flex-line md:order-2">next</a>
        </Link>
        <Link href={backLink}>
          <a className="tutor-dashboard-back-btn md:flex-line  ">back</a>
        </Link>
      </div>
    </>
  )
}

export default NextAndBackBtn
