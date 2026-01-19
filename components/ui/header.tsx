"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

type MenuKey = "talent" | "equipment" | "why" | null;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<MenuKey>(null);

  const isActive = (path: string) =>
    pathname === path
      ? "text-slate-900 font-semibold"
      : "text-slate-600 hover:text-slate-900";

  const toggleMenu = (key: Exclude<MenuKey, null>) => {
    setOpen((prev) => (prev === key ? null : key));
  };

  const desktopItems: { key: "talent" | "equipment" | "why"; label: string }[] =
    [
      { key: "talent", label: "Find Talent" },
      { key: "equipment", label: "Find Equipment" },
      { key: "why", label: "Why Luso" },
    ];

  const toggleMobile = (key: Exclude<MenuKey, null>) => {
    setMobileOpen((prev) => (prev === key ? null : key));
  };

  return (
    <div className="relative" onMouseLeave={() => setOpen(null)}>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Luso logo" width={100} height={100} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {desktopItems.map((item) => (
              <div
                key={item.key}
                className="flex items-center gap-1 cursor-pointer select-none"
                onMouseEnter={() => setOpen(item.key)}
                onClick={() => toggleMenu(item.key)}
              >
                <span className={isActive(`/${item.key}`)}>{item.label}</span>
                {open === item.key ? (
                  <ChevronUp className="w-4 h-4 text-slate-600" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-600" />
                )}
              </div>
            ))}

            <Link href="/pricing" className={isActive("/pricing")}>
              Pricing
            </Link>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className={`${isActive("/login")} px-4 py-2`}>
              Log in
            </Link>
            <Link href="/signup">
              <Button className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">
                Sign up
              </Button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-6 py-4 space-y-3">
              {/* Find Talent */}
              <button
                onClick={() => toggleMobile("talent")}
                className="w-full flex justify-between items-center py-2 font-medium text-slate-800"
              >
                Find Talent{" "}
                {mobileOpen === "talent" ? <ChevronUp /> : <ChevronDown />}
              </button>
              {mobileOpen === "talent" && (
                <div className="pl-4 space-y-2 text-slate-600">
                  <Link href="/marketplace" className="block">
                    Talent Marketplace
                  </Link>
                  <Link href="/catalog" className="block">
                    Project Catalog
                  </Link>
                  <Link href="/consultations" className="block">
                    Consultations
                  </Link>
                </div>
              )}

              {/* Find Equipment */}
              <button
                onClick={() => toggleMobile("equipment")}
                className="w-full flex justify-between items-center py-2 font-medium text-slate-800"
              >
                Find Equipment{" "}
                {mobileOpen === "equipment" ? <ChevronUp /> : <ChevronDown />}
              </button>
              {mobileOpen === "equipment" && (
                <div className="pl-4 space-y-2 text-slate-600">
                  <Link href="/equipment/excavators" className="block">
                    Excavators
                  </Link>
                  <Link href="/equipment/trucks" className="block">
                    Trucks
                  </Link>
                  <Link
                    href="/equipment/browse"
                    className="block font-medium text-indigo-600"
                  >
                    Browse all equipment →
                  </Link>
                </div>
              )}

              {/* Why Luso */}
              <button
                onClick={() => toggleMobile("why")}
                className="w-full flex justify-between items-center py-2 font-medium text-slate-800"
              >
                Why Luso{" "}
                {mobileOpen === "why" ? <ChevronUp /> : <ChevronDown />}
              </button>
              {mobileOpen === "why" && (
                <div className="pl-4 space-y-2 text-slate-600">
                  <Link href="/success-stories" className="block">
                    Success stories
                  </Link>
                  <Link href="/how-to-hire" className="block">
                    How to hire
                  </Link>
                  <Link href="/resources" className="block">
                    Resources
                  </Link>
                </div>
              )}

              <Link
                href="/pricing"
                className="block py-2 font-medium text-slate-800"
              >
                Pricing
              </Link>

              <div className="pt-4 border-t space-y-3">
                <Link href="/login">
                  <Button variant="outline" className="w-full">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {open === "talent" && <TalentMenu />}
      {open === "equipment" && <EquipmentMenu />}
      {open === "why" && <WhyMenu />}
    </div>
  );
}

/* ---------- MENUS ---------- */

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-0 right-0 top-full bg-white border-t border-slate-200 shadow-2xl z-40">
      {children}
    </div>
  );
}

function TalentMenu() {
  return (
    <Wrapper>
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-3 gap-16">
        <div className="space-y-6">
          <MenuLink
            href="/marketplace"
            title="Post a job and hire a pro"
            sub="Talent Marketplace →"
          />
          <MenuLink
            href="/catalog"
            title="Browse and buy projects"
            sub="Project Catalog →"
          />
          <MenuLink
            href="/consultations"
            title="Get advice from an expert"
            sub="Consultations →"
          />
        </div>
        <CategoryList />
        <MenuCTA
          title="Talent Marketplace"
          desc="Explore hiring needs."
          btn="Hire freelancers"
          href="/hire"
        />
      </div>
    </Wrapper>
  );
}

function EquipmentMenu() {
  return (
    <Wrapper>
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-4 gap-12">
        <SimpleList
          title="Heavy Equipment"
          items={["Excavators", "Bulldozers", "Cranes", "Loaders"]}
        />
        <SimpleList
          title="Transport"
          items={["Trucks", "Vans", "Trailers", "Pickups"]}
        />
        <SimpleList
          title="Tools & Machinery"
          items={["Generators", "Welding", "Compressors", "Power Tools"]}
        />
        <MenuCTA
          title="Need equipment?"
          desc="Browse listings."
          btn="Browse all equipment"
          href="/equipment/browse"
        />
      </div>
    </Wrapper>
  );
}

function WhyMenu() {
  return (
    <Wrapper>
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-4 gap-12">
        <div className="space-y-6">
          <MenuLink
            href="/success-stories"
            title="Success stories"
            sub="Teams growing together"
          />
          <MenuLink href="/reviews" title="Reviews" sub="What users say" />
        </div>
        <div className="space-y-6">
          <MenuLink
            href="/how-to-hire"
            title="How to hire"
            sub="Get work done"
          />
          <MenuLink
            href="/how-to-find-work"
            title="How to find work"
            sub="Grow your career"
          />
        </div>
        <div>
          <p className="font-semibold mb-3">Resources</p>
          <Link href="/resources" className="hover:text-indigo-600">
            Browse all →
          </Link>
        </div>
        <MenuCTA
          title="Ready?"
          desc="Start building."
          btn="Get started"
          href="/signup"
        />
      </div>
    </Wrapper>
  );
}

/* ---------- HELPERS ---------- */

function MenuLink({ href, title, sub }: any) {
  return (
    <Link href={href} className="block">
      <p className="font-semibold text-slate-900 hover:text-indigo-600">
        {title}
      </p>
      <p className="text-sm text-indigo-600">{sub}</p>
    </Link>
  );
}

function CategoryList() {
  const items = [
    "Development & IT",
    "Design & Creative",
    "Sales & Marketing",
    "Writing & Translation",
    "Admin & Support",
    "Finance & Accounting",
    "HR & Training",
    "Legal",
    "Engineering",
  ];
  return (
    <div>
      <p className="font-semibold mb-4">Categories</p>
      {items.map((i) => (
        <Link
          key={i}
          href={`/categories/${i.toLowerCase().replace(/ /g, "-")}`}
          className="block text-slate-600 hover:text-indigo-600"
        >
          {i}
        </Link>
      ))}
    </div>
  );
}

function SimpleList({ title, items }: any) {
  return (
    <div>
      <p className="font-semibold mb-3">{title}</p>
      {items.map((i: string) => (
        <Link
          key={i}
          href="#"
          className="block text-slate-600 hover:text-indigo-600"
        >
          {i}
        </Link>
      ))}
    </div>
  );
}

function MenuCTA({ title, desc, btn, href }: any) {
  return (
    <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-between">
      <div>
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-slate-600 mt-2">{desc}</p>
      </div>
      <Link href={href} className="mt-4">
        <Button className="w-full bg-slate-900 text-white">{btn}</Button>
      </Link>
    </div>
  );
}
