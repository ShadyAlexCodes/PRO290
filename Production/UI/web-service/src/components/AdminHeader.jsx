// // import { Fragment } from 'react'
import Link from "next/link";
// import { Popover, Transition } from '@headlessui/react'
// import clsx from 'clsx'

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";

export function AdminHeader() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <h2 className="text-white">
                <b>Order Management System</b>
              </h2>
            </Link>
            <div className="text-white-600 hidden md:flex md:gap-x-6">
              <NavLink href="#features">Customers</NavLink>
              <NavLink href="#testimonials">Inventory</NavLink>
              <NavLink href="#pricing">Logs</NavLink>
            </div>
          </div>

          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/login">Account</NavLink>
            </div>
          </div>
        </nav>
      </Container>

      <Container className="py-12">
        <div className="relative z-50 flex justify-between">
          <div className="items-center md:gap-x-12">
                <p className="text-2xl text-white font-bold">Hello $User</p>
                <p className="text-white"> Have a nice day!</p>
          </div>

          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/login">Account</NavLink>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
