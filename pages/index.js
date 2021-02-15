import { useState } from 'react';
import Link from 'next/link';
import SelectorIcon from 'heroicons/outline/selector.svg';
import CogIcon from 'heroicons/outline/cog.svg';
import DotsHorizontalIcon from 'heroicons/solid/dots-horizontal.svg';
import PlusIcon from 'heroicons/solid/plus.svg';
import Transition from '../components/Transition';

function VercelLogo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 116 100"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M57.5 0L115 100H0L57.5 0z"
      />
    </svg>
  );
}

function GitHubLogo({ className }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 250"
    >
      <g>
        <path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"></path>
      </g>
    </svg>
  );
}

function Avatar({ src, alt = '', size = 'md' }) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
  }[size];

  return (
    <img
      className={`${sizeClasses} rounded-full border border-gray-200`}
      src={src}
      alt={alt}
    />
  );
}

function ProjectCard() {
  return (
    <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg overflow-hidden">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">nxt-dev</h3>
          {/* <a href="#">Visit</a> */}
          <a
            type="button"
            className="border border-gray-200 rounded px-5 py-1.5 text-sm leading-5 font-medium text-gray-600 hover:border-black transition ease-in-out duration-150"
          >
            Visit
          </a>
        </div>
        <div className="space-y-3">
          <div
            aria-label="Production deployment"
            className="flex items-center space-x-3"
          >
            <Link href="#">
              <a className="inline-flex items-center space-x-2 text-sm leading-5 font-medium">
                <span
                  aria-hidden
                  className="mt-px inline-block h-2.5 w-2.5 rounded-full bg-green-400"
                ></span>
                <span>nxt-dev.app</span>
              </a>
            </Link>
            <span className="inline-flex rounded-full bg-gray-50 border border-gray-200 px-1.5 py-px text-xs leading-4 font-medium">
              Production
            </span>
            <span className="text-sm leading-5 text-gray-500">
              <time dateTime="2021-02-12">3d</time>
            </span>
          </div>
          <div
            aria-label="Latest deployment"
            className="flex items-center space-x-3"
          >
            <Link href="#">
              <a className="inline-flex items-center space-x-2 text-sm leading-5 font-medium">
                <span
                  aria-hidden
                  className="mt-px inline-block h-2.5 w-2.5 rounded-full bg-green-400"
                ></span>
                <span>nxt-dev-mu.vercel.app</span>
              </a>
            </Link>
            <span className="inline-flex rounded-full bg-gray-50 border border-gray-200 px-1.5 py-px text-xs leading-4 font-medium">
              Latest
            </span>
            <span className="text-sm leading-5 text-gray-500">
              <time dateTime="2021-02-14">1d</time>
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center px-6 py-3">
        <a
          href="#"
          className="inline-flex items-center space-x-2 text-sm leading-5 font-medium"
        >
          <GitHubLogo className="h-4 w-4" />
          <span>louiswongdev/next-dev</span>
        </a>
      </div>
    </div>
  );
}

function ActivityFeedItem() {
  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4 text-sm leading-5">
        <Avatar
          src="https://pbs.twimg.com/profile_images/1105911738061340672/ZFvs2o-d_400x400.png"
          alt="Louis Wong"
        />
        <span className="text-gray-600">
          <Link href="#">
            <a className="text-black font-medium hover:underline">You</a>
          </Link>{' '}
          logged in via GitHub
        </span>
      </div>
      <div className="text-sm leading-5 text-gray-500">
        <time dateTime="2021-02-12">2d</time>
      </div>
    </div>
  );
}

function AccountSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <span className="relative inline-flex items-center space-x-2 text-sm leading-5 font-medium">
        <Link href="#">
          <a className="inline-flex items-center space-x-2">
            <span>
              <Avatar
                src="https://pbs.twimg.com/profile_images/1105911738061340672/ZFvs2o-d_400x400.png"
                alt="Louis Wong"
              />
            </span>
            <span>Louis Wong</span>
          </a>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`inline-flex items-center border ${
            isOpen
              ? 'border-gray-200 text-black'
              : 'border-transparent text-gray-400'
          } rounded p-0.5 hover:border-gray-200 hover:bg-gray-50 focus:outline-none focus:text-black focus:border-gray-200 focus:bg-gray-50 transition ease-in-out duration-150`}
        >
          <SelectorIcon className="h-5 w-5" />
        </button>
      </span>
      <Transition
        show={isOpen}
        // enter="transition ease-out duration-100 transform"
        // enterFrom="opacity-0 scale-95"
        // enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div className="absolute w-56 rounded-md bg-white divide-y divide-gray-200 shadow-lg overflow-hidden">
          <div className="py-2">
            <div className="pt-3 px-4 pb-2 text-xs leading-5 uppercase tracking-wide text-gray-500">
              Personal Account
            </div>
            <ul>
              <li className="px-4 py-3 bg-gray-50">
                <div className="flex items-center justify-between space-x-4">
                  <Link href="#">
                    <a className="flex items-center space-x-4 text-sm leading-5 text-gray-500 hover:text-black">
                      <Avatar
                        size="sm"
                        src="https://pbs.twimg.com/profile_images/1105911738061340672/ZFvs2o-d_400x400.png"
                        alt="Louis Wong"
                      />
                      <span>Louis Wong</span>
                    </a>
                  </Link>
                  <div>
                    <Link href="#">
                      <a className="text-gray-300 hover:text-black">
                        <CogIcon className="h-5 w-5 text-gray-400" />
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="py-2">
            <Link href="#">
              <a className="px-4 py-3 flex items-center justify-between text-sm leading-5 text-gray-500 hover:text-black">
                <span>Create a Team</span>
                <PlusIcon className="h-5 w-5" />
              </a>
            </Link>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <header className="border-b border-gray-200 space-y-2">
          <nav className="max-w-5xl px-6 mx-auto pt-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="#">
                <a>
                  <VercelLogo className="h-6" />
                </a>
              </Link>
              <span>
                <svg
                  viewBox="0 0 32 32"
                  stroke="currentColor"
                  className="h-8 w-8 text-gray-300"
                >
                  <line x1="10" y1="28" x2="22" y2="4" />
                </svg>
              </span>
              <AccountSwitcher />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-5">
                <button
                  type="button"
                  className="border border-gray-200 rounded px-3 py-1.5 text-sm leading-5 text-gray-600 hover:border-black transition ease-in-out duration-150"
                >
                  Feedback
                </button>

                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150">
                    Changelog
                  </a>
                </Link>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150">
                    Support
                  </a>
                </Link>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150">
                    Docs
                  </a>
                </Link>
              </div>
              <button type="button">
                <DotsHorizontalIcon className="h-5 w-5 text-gray-400" />
              </button>
              <button type="button">
                <Avatar
                  src="https://pbs.twimg.com/profile_images/1105911738061340672/ZFvs2o-d_400x400.png"
                  alt="Louis Wong"
                />
              </button>
            </div>
          </nav>
          <div className="max-w-5xl mx-auto px-6">
            <nav className="-mb-px flex space-x-5 text-sm leading-5">
              <Link href="/">
                <a className="border-b-2 border-black px-0.5 py-3">Overview</a>
              </Link>
              <Link href="/">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">
                  Projects
                </a>
              </Link>
              <Link href="/">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">
                  Integrations
                </a>
              </Link>
              <Link href="/">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">
                  Activity
                </a>
              </Link>
              <Link href="/">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">
                  Domains
                </a>
              </Link>
              <Link href="/">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">
                  Usage
                </a>
              </Link>
              <Link href="/">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150">
                  Settings
                </a>
              </Link>
            </nav>
          </div>
        </header>
        <div className=" max-w-5xl mx-auto flex items-start justify-between px-6 pt-14 pb-28">
          <div className="flex space-x-8">
            <div>
              <img
                className="h-24 w-24 rounded-full"
                src="https://pbs.twimg.com/profile_images/1105911738061340672/ZFvs2o-d_400x400.png"
                alt="Louis Wong"
              />
            </div>
            <div className="flex flex-col justify-between space-y-4">
              <div className="flex items-center space-x-3">
                <h1 className="text-4xl leading-10 font-bold">Louis Wong</h1>
                <span className="mt-1 inline-flex rounded-full bg-gray-50 border border-gray-200 px-2 text-xs leading-5 font-medium text-black uppercase tracking-wide">
                  Hobby
                </span>
              </div>
              <div>
                <dl>
                  <dt className="text-xs leading-5 font-medium text-gray-500 uppercase tracking-wide">
                    Git integration
                  </dt>
                  <dd className="flex items-center space-x-2 text-sm leading-5 font-medium">
                    <GitHubLogo className="h-4 w-4" />
                    <span>louiswongdev</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6">
            <Link href="#">
              <a className="inline-flex justify-center rounded border border-gray-200 bg-white px-6 py-2 text-sm leading-5 font-medium text-gray-500 hover:border-black hover:text-black transition ease-in-out duration-150">
                Invite Team
              </a>
            </Link>
            <Link href="#">
              <a className="inline-flex justify-center rounded border border-transparent bg-black hover:bg-white px-6 py-2 text-sm leading-5 font-medium text-white hover:border-black hover:text-black transition ease-in-out duration-150">
                Import Project
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 pb-10">
        <main className="-mt-9 max-w-5xl mx-auto px-6 grid grid-cols-12 gap-x-20">
          <div className="col-span-7 ">
            <h2 className="sr-only">Recent projects</h2>
            <div className="space-y-12">
              <ul className="space-y-12">
                <li>
                  <ProjectCard />
                </li>
                <li>
                  <ProjectCard />
                </li>
                <li>
                  <ProjectCard />
                </li>
                <li>
                  <ProjectCard />
                </li>
              </ul>
              <div>
                <Link href="#">
                  <a className="text-sm leading-5 font-bold text-blue-500 hover:underline">
                    View All Projects
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-9 col-span-5 pt-1">
            <h2 className="text-sm leading-5 font-bold">Recent Activity</h2>
            <ul className="border-b border-gray-200 divide-y divide-gray-200">
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
              <li className="py-3">
                <ActivityFeedItem />
              </li>
            </ul>
            <div>
              <Link href="#">
                <a className="text-sm leading-5 font-bold text-blue-500 hover:underline">
                  View All Activity
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
