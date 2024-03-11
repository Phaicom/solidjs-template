import type { Component } from 'solid-js'
import { useLocation } from '@solidjs/router'

const App: Component = (props: any) => {
  const location = useLocation()

  return (
    <>
      <nav bg-gray-200 px-4 text-gray-900>
        <ul flex="~ items-center">
          <li p="x-4 y-2">
            <a href="/" class="no-underline hover:underline">
              Home
            </a>
          </li>
          <li p="x-4 y-2">
            <a href="/about" class="no-underline hover:underline">
              About
            </a>
          </li>
          <li p="x-4 y-2">
            <a href="/error" class="no-underline hover:underline">
              Error
            </a>
          </li>

          <li ml-auto text-sm flex="~ items-center space-x-1">
            <span>URL:</span>
            <input
              w-75px
              rounded-lg
              bg-white
              p-1
              text-sm
              type="text"
              readOnly
              value={location.pathname}
            />
          </li>
        </ul>
      </nav>

      <main>
        {props.children}
      </main>
    </>
  )
}

export default App
