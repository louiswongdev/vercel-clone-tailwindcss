import Link from 'next/link';
import SelectorIcon from 'heroicons/solid/selector.svg';
import DotsHorizontalIcon from 'heroicons/solid/dots-horizontal.svg';

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

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <header>
          <nav className="max-w-5xl mx-auto pt-5">
            <div>
              <VercelLogo className="h-6" />
              <span>
                <svg
                  viewBox="0 0 32 32"
                  stroke="currentColor"
                  className="h-8 w-8 text-black"
                >
                  <line x1="8" y1="28" x2="24" y2="4" />
                </svg>
              </span>
              <span>
                <span>
                  <img
                    className="h-7 w-7 rounded-full border border-gray-200"
                    src="https://pbs.twimg.com/profile_images/1105911738061340672/ZFvs2o-d_400x400.png"
                    alt="Louis Wong"
                  />
                </span>
                <span>Louis Wong</span>
                <span>
                  <SelectorIcon />
                </span>
              </span>
            </div>
            <div>
              <button type="button">Feedback</button>
              <Link href="#">
                <a>Blog</a>
              </Link>
              <Link href="#">
                <a>Changelog</a>
              </Link>
              <Link href="#">
                <a>Support</a>
              </Link>
              <Link href="#">
                <a>Docs</a>
              </Link>
              <button type="button">
                <DotsHorizontalIcon />
              </button>
              <span>
                <button type="button">
                  <img
                    src="https://pbs.twimg.com/profile_images/1105911738061340672/ZFvs2o-d_400x400.png"
                    alt="Louis Wong"
                  />
                </button>
              </span>
            </div>
          </nav>
          <nav></nav>
        </header>
      </div>
    </div>
  );
}
