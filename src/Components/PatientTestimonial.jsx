'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  { id: 1, name: 'Yamin Islam', role: "Claire's Dad", image: 'https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc10.png', review: 'Staff and doctors are very cooperative and work tirelessly towards a healthy outcome.' },
  { id: 2, name: 'Ayman Sdik', role: "Joshua's Dad", image: 'https://i.ibb.co.com/Y4ynNPqB/f2da77ef712e3706644e85eb16d9b5a0.jpg', review: 'We have been impressed by the hospitality and patient care given by doctors and nurses.' },
  { id: 3, name: 'Tashfia Begum', role: "John's Mom", image: 'https://i.ibb.co.com/VYRSygW1/8ab48ee24a4e058c56ac63aa0d163273.jpg', review: 'My heartfelt appreciation to all the doctors and nurses who have done the best.' },
  { id: 4, name: 'Tasrif Khan', role: 'Patient', image: 'https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc11.png', review: 'Amazing support and care from the entire hospital team and staff members.' },
  { id: 5, name: 'Sadi Sheikh', role: 'Patient', image: 'https://img.magnific.com/free-photo/happy-man-standing-beach_107420-9868.jpg?semt=ais_hybrid&w=740&q=80', review: 'Doctors were very friendly and treatment quality was outstanding.' },
  { id: 6, name: 'John Doe', role: 'Patient', image: 'https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_640.jpg', review: 'Great facility with professional staff. Highly recommended for families.' },
];

const PatientTestimonial = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleCards = testimonials.slice(current, current + 3);

  return (
    <section className="w-full py-10 overflow-hidden"
    style={{
    background: `
      radial-gradient(circle at 20% 20%, rgba(96,165,250,0.28), transparent 32%),
      radial-gradient(circle at 80% 10%, rgba(192,132,252,0.25), transparent 32%),
      radial-gradient(circle at 50% 100%, rgba(103,232,249,0.22), transparent 38%),
      linear-gradient(135deg, #eef6ff 0%, #f3f0ff 45%, #f0fdff 100%)
    `,
  }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="lg:text-4xl md:text-2xl text-xl font-black text-black leading-none">
            Testimonials
          </h2>
          <p className="text-gray-500">Patient experience with our services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[350px]">
          <AnimatePresence mode="sync">
            {visibleCards.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-white border border-gray-200 rounded-[26px] px-6 py-7 text-center h-[320px] flex flex-col items-center shadow-sm"
              >
                <Image src={item.image} alt={item.name} className="w-[58px] h-[58px] rounded-full object-cover mb-3" />
                <h3 className="text-[17px] font-bold text-[#1b1b1b]">{item.name}</h3>
                <p className="text-[13px] text-[#444] mt-1">{item.role}</p>
                <div className="w-[150px] h-[1px] bg-gray-200 my-4"></div>
                <div className="text-blue-500 text-[42px] font-bold leading-none">”</div>
                <p className="text-[13px] leading-[26px] text-[#333] max-w-[220px] mt-1">{item.review}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index * 3)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index * 3 ? 'bg-blue-500 scale-125' : 'bg-blue-500/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonial;