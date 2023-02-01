import React from 'react'

function page({params}) {
return (
    <section className="main-content">
      {params.category}
      </section>
  )
}

export default page