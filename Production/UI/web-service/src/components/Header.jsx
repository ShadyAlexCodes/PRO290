// // import { Fragment } from 'react'
import Link from "next/link";
// import { Popover, Transition } from '@headlessui/react'
// import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from '@/components/NavLink'

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/login">Sign in</NavLink>
            </div>
            <Button href="/register" color="blue">
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
