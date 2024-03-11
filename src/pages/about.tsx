import { Suspense, createSignal } from 'solid-js'

export default function About() {
  const [name] = createSignal('About')

  return (
    <section bg-pink-100 p-8 text-gray-700>
      <h1 text-2xl font-bold>About</h1>

      <p mt-4>A page all about this website.</p>

      <p>
        <span>We love</span>
        <Suspense fallback={<span>...</span>}>
          <span>
            &nbsp;
            {name()}
          </span>
        </Suspense>
      </p>
    </section>
  )
}
