import { useState } from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  MinusSmallIcon,
  PlusSmallIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  CheckIcon,
  FireIcon,
  SparklesIcon,
  CheckBadgeIcon,
} from "@heroicons/react/20/solid";
import { FaLinkedin, FaDiscord } from "react-icons/fa";

const navigation = [
  { name: "For Skill Builders", href: "/" },
  { name: "For Recruiters", href: "/recruiters" },
];
const features = [
  {
    name: "Gather ideas.",
    description:
      "Gathering ideas from global talents with diverse backgrounds, find innovative solutions to your problems.",
    icon: SparklesIcon,
  },
  {
    name: "Attract talents efficiently.",
    description:
      "Publish day-to-day problems as quests to let talents proove their problem-solving skills.",
    icon: FireIcon,
  },
  {
    name: "One-click verification.",
    description:
      "Skills built through us can be verified with a simple click, save your time and money on skills-first hiring.",
    icon: CheckBadgeIcon,
  },
];
const tiers = [
  {
    name: "Essential",
    id: "tier-essential",
    href: "#",
    priceMonthly: "$0",
    description: "The plan that meets the basic needs.",
    features: [
      "2 published quests per month",
      "Up to 10 claimers per quest",
      "Manual quest publishing",
    ],
    featured: false,
  },
  {
    name: "Advanced",
    id: "tier-advanced",
    href: "#",
    priceMonthly: "$29",
    description: "Accelerate your hiring process.",
    features: [
      "Unlimited published quests per month",
      "Unlimited claimers per quest",
      "AI-powered smooth quest publishing",
      "Dedicated support team to help you with quest creation",
    ],
    featured: true,
  },
];
const faqs = [
  {
    question: "Do I need to learn about blockchain to use Commit?",
    answer:
      "No, you don't need to learn about blockchain to use Commit. We are doing our best to abstract away the blockchain part for you, the only thing you need is a web3 wallet which we will help you set it up.",
  },
  {
    question: "What happens after I accepted a submission?",
    answer:
      "We have a three-tier quest system, for first tier quests, badges predefined by you will be issued to the talents. For second tier (internship-level) quests, an interview invitation will be automatically sent to the talents. For third tier (competition) quests, the prize will be automatically sent to the talents.",
  },
  {
    question: "Why use blockchain?",
    answer:
      "By leveraging blockchain technology, we can ensure that all of your experiences are verifiable and immutable. You can use your experiences to apply for jobs, internships, or even college applications.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function scrollToContacts(event) {
  event.preventDefault();
  const roadmapSection = document.getElementById("contacts");
  roadmapSection.scrollIntoView({ behavior: "smooth" });
}

export default function Recruiters() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-32 w-auto" src="/logo_white.png" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white"
            ></a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="/logo_white.png" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main>
        {/* Hero section */}
        <div
          className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20"
          style={{
            background: "radial-gradient(circle, #004396 10%, #A3E4DB 90%)",
          }}
        >
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                  Join our discord community while waiting for the launch.{" "}
                  <a onClick={() =>
                      window.open(
                        "https://discord.gg/NBhzyRbJFz",
                        "_blank"
                      )
                    }  className="font-semibold text-white">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Join <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                  Skills-first hiring made easier.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Verify talents skills in your own term before hiring them. No
                  more guessing.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    onClick={() =>
                      window.open("https://discord.gg/NBhzyRbJFz", "_blank")
                    }
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-custom-dark_blue shadow-sm hover:bg-custom-secondary_dark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Join community
                  </a>
                  <a
                    href="#contacts"
                    onClick={scrollToContacts}
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Contact us <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-custom-ternary_dark">
                Hire with confidence
              </h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-custom-dark_blue sm:text-3xl">
                Verify skills through quests, you set the rules.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                You can outsource problems through small quests to issue skill
                badges to talents, or we can help you create an internship-level
                quest for your hiring needs to reach global talents with diverse
                backgrounds.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                src="/recruiter_homepage.png"
                alt="App screenshot"
                className="mb-[-12%] shadow-2xl"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Roadmap section */}
        <div id="roadmap" className="mx-auto max-w-4xl text-center mt-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-custom-ternary_dark">
              Roadmap to alpha version
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-custom-dark_blue sm:text-4xl">
              Our first version will be released in 3 months.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div
              style={{ height: "433px", width: "674px" }}
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Oct.1 - Oct.31 (Current)
                </h3>
                <img
                  src="/logo.png"
                  alt="Example image"
                  className="mt-4 mx-auto max-w-full"
                />
                <ul className="mt-1 max-w-2xl text-left text-sm text-gray-500 list-disc list-inside">
                  Development
                  <li>Account management system</li>
                  <li>Quest system</li>
                  <li>Badge minting system</li>
                  <li>Decentralized storage</li>
                  <br></br>
                  Research
                  <li>Web3 reputation management </li>
                </ul>
              </div>
            </div>
            <div
              style={{ height: "433px", width: "674px" }}
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Nov.1 - Nov.30
                </h3>
                <img
                  src="/logo.png"
                  alt="Example image"
                  className="mt-4 mx-auto max-w-full"
                />
                <ul className="mt-1 max-w-2xl text-left text-sm text-gray-500 list-disc list-inside">
                  Development
                  <li>Reputation system</li>
                  <li>Notification system</li>
                  <li>Gamified UX design</li>
                  <br></br>
                  <br></br>
                  Research
                  <li>Gamification in web3</li>
                </ul>
              </div>
            </div>
            <div
              style={{ height: "433px", width: "674px" }}
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Dec.1 - Dec.31
                </h3>
                <img
                  src="/logo.png"
                  alt="Example image"
                  className="mt-4 mx-auto max-w-full"
                />
                <ul className="mt-1 max-w-2xl text-left text-sm text-gray-500 list-disc list-inside">
                  Development
                  <li>Messaging system</li>
                  <li>Documentation & tutorials</li>
                  <br></br>
                  <br></br>
                  <br></br>
                  Research
                  <li>Web3 reputation governance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing section */}
        <div className="relative isolate mt-32 bg-white px-6 sm:mt-56 lg:px-8">
          <div
            className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
            aria-hidden="true"
          >
            <div
              className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-base font-semibold leading-7 text-custom-ternary_dark">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-custom-dark_blue sm:text-5xl">
              Hiring in your own pace and style.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "relative bg-gray-900 shadow-2xl"
                    : "bg-white/60 sm:mx-8 lg:mx-0",
                  tier.featured
                    ? ""
                    : tierIdx === 0
                    ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                    : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
                  "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.featured
                      ? "text-custom-ternary_dark"
                      : "text-custom-dark_blue",
                    "text-base font-semibold leading-7"
                  )}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span
                    className={classNames(
                      tier.featured ? "text-white" : "text-gray-900",
                      "text-5xl font-bold tracking-tight"
                    )}
                  >
                    {tier.priceMonthly}
                  </span>
                  <span
                    className={classNames(
                      tier.featured ? "text-gray-400" : "text-gray-500",
                      "text-base"
                    )}
                  >
                    /month
                  </span>
                </p>
                <p
                  className={classNames(
                    tier.featured ? "text-gray-300" : "text-gray-600",
                    "mt-6 text-base leading-7"
                  )}
                >
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className={classNames(
                    tier.featured ? "text-gray-300" : "text-gray-600",
                    "mt-8 space-y-3 text-sm leading-6 sm:mt-10"
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className={classNames(
                          tier.featured
                            ? "text-custom-ternary_dark"
                            : "text-custom-dark_blue",
                          "h-6 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.featured
                      ? "bg-custom-ternary_dark text-custom-dark_blue shadow-sm hover:bg-white focus-visible:outline-indigo-500"
                      : "text-custom-dark_blue ring-1 ring-inset ring-indigo-200 hover:bg-custom-dark_blue hover:text-white focus-visible:outline-indigo-600",
                    "mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                  )}
                >
                  Coming soon...
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-custom-dark_blue">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div id="contacts" className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <footer
          aria-labelledby="footer-heading"
          className="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="xl:flex xl:items-center">
            <img className="h-20" src="/logo.png" alt="Commit Labs Inc." />
            <div>
              <ul role="list" className="flex space-x-8">
                <li>
                  <button
                    type="button"
                    className="text-gray-600 hover:text-gray-900"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/96362250",
                        "_blank"
                      )
                    }
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin className="h-6 w-6" />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-gray-600 hover:text-gray-900"
                    onClick={() =>
                      window.open("https://discord.gg/NBhzyRbJFz", "_blank")
                    }
                  >
                    <span className="sr-only">Discord</span>
                    <FaDiscord className="h-6 w-6" />
                  </button>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}
