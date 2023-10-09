import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  FingerPrintIcon,
  XMarkIcon,
  TrophyIcon,
  LockOpenIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";
import { FaLinkedin, FaDiscord } from "react-icons/fa";

const navigation = [
  { name: "For Skill Builders", href: "/" },
  { name: "For Recruiters", href: "/recruiters" },
];
const features = [
  {
    name: "Earn skill badges",
    description:
      "Proof your skills by completing small real-world quests. Earn skill badges to claim internship-level quests.",
    icon: TrophyIcon,
  },
  {
    name: "Permissionless internships",
    description:
      "No more resume. No more cover letters. Just complete quests and get the interview.",
    icon: LockOpenIcon,
  },
  {
    name: "Verifiable experiences",
    description:
      "All your experiences are easily verifiable on the blockchain. Give employers the confidence to hire you.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Tell your own story",
    description:
      "Your experiences are yours. You can choose to share them with the world in any ways you like or keep them private.",
    icon: FingerPrintIcon,
  },
];
const tiers = [
  {
    name: "Essential",
    id: "tier-essential",
    href: "#",
    priceMonthly: "$0",
    description: "The essentials for you to build up your portfolio with us.",
    features: [
      "Unlimited claimable quests",
      "1 quest at a time",
      "3 resume generations",
      "1 free entry to weekly challenges",
    ],
    mostPopular: false,
  },
  {
    name: "Accelerated",
    id: "tier-accelerated",
    href: "#",
    priceMonthly: "$16",
    description: "A plan that let you go fast.",
    features: [
      "Unlimited claimable quests",
      "Unlimited parallel quests",
      "Unlimited resume generations",
      "Free entries to all weekly challenges",
    ],
    mostPopular: true,
  },
  {
    name: "Classroom",
    id: "tier-classroom",
    href: "#",
    priceMonthly: "$200",
    description: "Give all of your students the best learning opportunities.",
    features: [
      "Accelerated plan for all of your students",
      "Dedicated support",
    ],
    mostPopular: false,
  },
];
const faqs = [
  {
    id: 1,
    question: "Why use blockchain?",
    answer:
      "By leveraging blockchain technology, we can ensure that all of your experiences are verifiable and immutable. You can use your experiences to apply for jobs, internships, or even college applications.",
  },
  {
    id: 2,
    question: "Can I claim quests without any experiences?",
    answer:
      "Yes! We have a three-tier quest system where you can start with the first tier quests and work your way up.",
  },
  {
    id: 3,
    question: "Are all my activities publicly available for others to see?",
    answer:
      "No. You can choose to keep your activities private or share them with the world.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function scrollToRoadmap(event) {
  event.preventDefault();
  const roadmapSection = document.getElementById("roadmap");
  roadmapSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToContacts(event) {
  event.preventDefault();
  const roadmapSection = document.getElementById("contacts");
  roadmapSection.scrollIntoView({ behavior: "smooth" });
}

export default function SkillBuilders() {
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
            <img className="h-32 w-auto" src="/logo.png" alt="" />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
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
                <img
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt=""
                />
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
                  
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#A3E4DB] to-[#004396] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  <span className="text-custom-dark_blue">Opportunities, </span>
                  <span className="bg-custom-secondary_dark text-white rounded-md px-2">
                    barrier-free.
                  </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Scientific research and software engineering opportunities
                  without interview, transform your skills into experiences
                  easily.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#roadmap"
                    onClick={scrollToRoadmap}
                    className="rounded-md bg-custom-dark_blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-custom-secondary_dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    See our roadmap
                  </a>
                  <a
                    href="#contacts"
                    onClick={scrollToContacts}
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Contact us <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-blue-200/50 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    src="/seeker_homepage.png"
                    alt="Seeker homepage screenshot"
                    width={2432}
                    height={1442}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#004396] to-[#31B09F] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-16 flex justify-center">
            <p className="relative rounded-full px-4 py-1.5 text-lg leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
              <span className="hidden md:inline">
                While waiting for the launch |{" "}
              </span>
              <a
                href="#contacts"
                onClick={scrollToContacts}
                className="font-semibold text-custom-ternary_dark"
              >
                <span className="absolute inset-0" aria-hidden="true" /> Join
                our discord to have fun<span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-custom-ternary_dark">
              Build up your portfolio easily
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-custom-dark_blue sm:text-3xl">
              World's first permissionless internship platform
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Leveraging blockchain technology, our platform ensures a
              transparent, verifiable, and equitable internship platform for
              both interns and organizations.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Revolutionizing the traditional internship model.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-custom-dark_blue">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-custom-dark_blue">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
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
                  alt=""
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
                  alt=""
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
                  alt=""
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
        <div className="py-24 sm:pt-48">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-semibold leading-7 text-custom-ternary_dark">
                Pricing
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-custom-dark_blue sm:text-5xl">
                You don't need to pay to complete quests
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
              All essential functionalities are free for you to explore. You can
              choose to pay to get additional features.
            </p>
            <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {tiers.map((tier, tierIdx) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                    tierIdx === 0 ? "lg:rounded-r-none" : "",
                    tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                    "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-x-4">
                      <h3
                        id={tier.id}
                        className={classNames(
                          tier.mostPopular
                            ? "text-custom-ternary_dark"
                            : "text-gray-900",
                          "text-lg font-semibold leading-8"
                        )}
                      >
                        {tier.name}
                      </h3>
                      {tier.mostPopular ? (
                        <p className="rounded-full bg-custom-ternary_dark/10 px-2.5 py-1 text-xs font-semibold leading-5 text-custom-ternary_dark">
                          Popular
                        </p>
                      ) : null}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      {tier.description}
                    </p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        {tier.priceMonthly}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        /month
                      </span>
                    </p>
                    <ul
                      className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            className="h-6 w-5 flex-none text-custom-dark_blue"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? "bg-custom-ternary_dark text-white shadow-sm hover:bg-custom-dark_blue"
                        : "text-custom-dark_blue ring-1 ring-inset ring-custom-dark_blue/10 hover:ring-custom-dark_blue",
                      "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    )}
                  >
                    Coming soon...
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-custom-dark_blue">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
        <div className="relative -z-10 mt-32 px-6 lg:px-8">
          <div
            className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#FB92D8] to-[#FABC91] opacity-25"
              style={{
                clipPath:
                  "polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-custom-dark_blue sm:text-4xl">
              Build up your portfolio easily.
              <br />
              Revolutionizing internship with us.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              We will open our waiting list soon. In the meantime you can join
              our discord to provide suggestions or just have fun.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://discord.gg/NBhzyRbJFz"
                className="rounded-md bg-custom-ternary_dark px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-custom-dark_blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join discord
              </a>
            </div>
          </div>
          <div
            className="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
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
              <ul className="flex space-x-8">
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
