import React from 'react'

function LoadingSpinner() {
  return (
    <article className="mx-auto max-w-xs my-48 p-3">
      <div className="ml-4 flex lg:ml-0 mx-4 my-6 items-center">
        <img
            className="h-28 w-auto loadingSpinner"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
            alt=""
          />
        <span className="block mx-1 font-extrabold text-2xl loadingAppName">
          FakeStore
        </span>
      </div>
    </article>
  )
}

export default LoadingSpinner
