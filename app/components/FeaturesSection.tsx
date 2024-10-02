import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Real-time Inventory Tracking',
    description:
      'Monitor your stock levels in real-time to avoid shortages and overstock situations. Stay updated on your inventory status effortlessly.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Secure Data Protection',
    description:
      'Your data is safe with us. We implement SSL certificates to ensure secure connections and protect your sensitive information.',
    icon: LockClosedIcon,
  },
  {
    name: 'Intuitive User Interface',
    description:
      'Navigate through your inventory with ease. Our user-friendly interface allows you to manage products efficiently without any hassle.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced Reporting',
    description:
      'Generate comprehensive reports to analyze stock trends, sales performance, and inventory health for informed decision-making.',
    icon: FingerPrintIcon,
  },
]

export default function FeaturesSection() {
  return (
    <section className="bg-white py-24 sm:py-32" id='features-section'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Manage Your Stock Seamlessly</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to keep your inventory in check
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stocku helps you optimize your stock management with real-time tracking, secure data handling, and advanced reporting features.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
