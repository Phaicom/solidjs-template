import { createSignal } from 'solid-js'

export default function Home() {
  const [count, setCount] = createSignal(0)

  return (
    <section bg-gray-100 p-8 text-gray-700>
      <h1 text-2xl font-bold>Home</h1>
      <p mt-4>This is the home page.</p>

      <div flex="~ items-center space-x-2">
        <button
          border="~ gray-900"
          rounded-lg
          px-2
          onClick={() => setCount(count() - 1)}
        >
          -
        </button>

        <output p-10px>
          Count:
          {count()}
        </output>

        <button
          border="~ gray-900"
          rounded-lg
          px-2
          onClick={() => setCount(count() + 1)}
        >
          +
        </button>
      </div>
    </section>
  )
}
