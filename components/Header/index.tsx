import Image from 'next/image';
import Link from 'next/link';
import Nav from '../Nav';

type HeaderProps = {
  home: boolean;
  name: string;
}

export const Header = ({home, name}: HeaderProps):JSX.Element => (
  <>
    <Nav />
    <header className="container py-10 text-center max-w-sm">
      {home ? (
        <>
          <Image
            priority
            src="/images/profile.jpeg"
            className="rounded-full h-auto"
            height={144}
            width={144}
            alt={name}
          />
          <h1 className="text-4xl font-black mb-1 mt-5">{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/profile.jpeg"
                className="rounded-full h-auto"
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <h2 className="text-1xl font-bold my-3">
            <Link href="/">
              <a className="text-black">{name}</a>
            </Link>
          </h2>
        </>
      )}
    </header>
  </>
);
