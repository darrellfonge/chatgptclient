import React from 'react'

const ErrorFallback = (props) => {
  const { error, resetErrorBoundary } = props
  return (
    <div className="flex flex-col space-md justify-center items-center w-full h-full">
      <div>there was an error:</div>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>try again</button>
    </div>
  )
}

export default ErrorFallback