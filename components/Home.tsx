"use client";

import { motion } from "framer-motion";
import { Search, Briefcase, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { FaSearch, FaComments, FaHandshake, FaBullhorn } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Header />
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -top-40 -left-40 h-96 w-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Hire equipment. <br /> Discover specialised skills. <br />
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                Do business smarter.
              </span>
            </h1>
            <p className="mt-6 text-slate-600 text-lg">
              Luso connects equipment owners, skilled professionals, and
              businesses into one powerful digital marketplace.
            </p>
            <div className="mt-8 flex gap-4">
              <Button
                size="lg"
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white cursor-pointer"
              >
                Find Equipment/Skill
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-indigo-400 text-indigo-600 hover:bg-indigo-50 cursor-pointer"
              >
                Advertise Equipment/Skill
              </Button>
            </div>
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-4">Start your search</h3>
            <div className="flex items-center bg-white border border-indigo-300 focus-within:border-indigo-500 rounded-xl px-4 py-3 gap-2">
              <Search className="w-5 h-5 text-indigo-400" />
              <input
                placeholder="Search equipment or skills"
                className="bg-transparent outline-none flex-1 text-slate-700 placeholder:text-slate-400"
              />
            </div>
            <Button className="w-full mt-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white cursor-pointer">
              Search
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Truck, label: "Construction Equipment" },
            { icon: Briefcase, label: "Professional Services" },
            { icon: Star, label: "Specialised Skills" },
            { icon: Truck, label: "Logistics & Transport" },
          ].map((item, i) => (
            <Card
              key={i}
              className="bg-white border border-slate-200 hover:shadow-lg transition cursor-pointer"
            >
              <CardContent className="flex flex-col items-center justify-center py-10 gap-4">
                <item.icon className="w-8 h-8 text-cyan-500" />
                <span className="text-slate-700 font-medium">{item.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            How Luso Works
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl">
            Whether you’re hiring or offering services and equipment, Luso makes
            it simple.
          </p>

          {/* Two main paths */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Hire / Advertise */}
            <Link
              href="/how-it-works/hire"
              className="group bg-slate-50 border border-slate-200 rounded-2xl p-8 flex gap-6 items-start hover:shadow-lg transition cursor-pointer"
            >
              <div className="p-4 bg-indigo-100 rounded-xl text-indigo-600">
                <FaBullhorn size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-indigo-600 transition">
                  I want to hire or advertise
                </h3>
                <p className="text-slate-600 mt-2">
                  Post a job or list your equipment, receive enquiries, agree on
                  terms, and get work done.
                </p>
              </div>
            </Link>

            {/* Find Skills / Equipment */}
            <Link
              href="/how-it-works/find"
              className="group bg-slate-50 border border-slate-200 rounded-2xl p-8 flex gap-6 items-start hover:shadow-lg transition cursor-pointer"
            >
              <div className="p-4 bg-cyan-100 rounded-xl text-cyan-600">
                <FaSearch size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-cyan-600 transition">
                  I’m looking for skills or equipment
                </h3>
                <p className="text-slate-600 mt-2">
                  Search what you need, contact providers, agree on price and
                  timeline, and get started.
                </p>
              </div>
            </Link>
          </div>

          {/* Simple 3-step overview */}
          <div className="relative max-w-6xl mx-auto mt-16">
            <div className="grid md:grid-cols-3 gap-10 items-center relative z-10">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-indigo-50 to-cyan-50 border border-indigo-200 rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-indigo-600 text-white mb-4">
                  <FaSearch size={22} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Post or Search
                </h3>
                <p className="text-slate-600">
                  List your service or equipment, or search what you need.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8 text-center shadow-lg"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-purple-600 text-white mb-4"
                >
                  <FaComments size={22} />
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Connect
                </h3>
                <p className="text-slate-600">
                  Chat, agree on price, duration, and terms.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-cyan-50 to-green-50 border border-cyan-200 rounded-2xl p-8 text-center shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-cyan-600 text-white mb-4"
                >
                  <FaHandshake size={22} />
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Work & Deliver
                </h3>
                <p className="text-slate-600">
                  Complete the job and grow your business.
                </p>
              </motion.div>
            </div>

            {/* Futuristic arrows */}
            <div className="hidden md:block absolute inset-0 z-0">
              {/* Arrow 1 */}
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute left-1/3 top-1/2 w-32 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-400"
              />
              {/* Arrow head */}
              <div className="absolute left-[calc(33%+7.5rem)] top-[calc(50%-4px)] border-t-4 border-b-4 border-l-8 border-transparent border-l-purple-400" />

              {/* Arrow 2 */}
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                className="absolute left-2/3 top-1/2 w-32 h-[2px] bg-gradient-to-r from-purple-400 to-cyan-400"
              />
              <div className="absolute left-[calc(66%+7.5rem)] top-[calc(50%-4px)] border-t-4 border-b-4 border-l-8 border-transparent border-l-cyan-400" />
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Ready to get started?</h2>
        <p className="text-slate-600 mb-8">
          Join Luso and start connecting today.
        </p>
        <Button
          size="lg"
          className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white cursor-pointer"
        >
          Create an Account
        </Button>
      </section>
      <Footer />
    </main>
  );
}
