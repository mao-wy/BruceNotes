import React from 'react'

const index = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
      user page
      </h1>
      <hr />
      <p>我是传递过来的{props.match.params.id}</p>
    </div>
  )
}

export default index
