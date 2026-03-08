import { FaUsers } from 'react-icons/fa';
import { LuUserRoundCheck } from 'react-icons/lu';
import { BsPalette2 } from 'react-icons/bs';
import { BiCheckShield } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const data = [
  { id: 1, head: '985,000', text: 'Served Clients' },
  { id: 2, head: '27,000', text: 'Trading Instruments' },
  { id: 3, head: '20', text: 'Destinations Worldwide' },
  { id: 4, head: '$135 Billion', text: 'Monthly Trades' },
];

function Gtcfx() {
  const [counts, setCounts] = useState(data.map((item) => ({ id: item.id, value: 0 })));
  const duration = 2000;

  const parseValue = (str) => {
    if (str.includes('Billion')) {
      const num = parseFloat(str.replace('$', '').replace(' Billion', ''));
      return { target: num * 1_000_000_000, suffix: 'Billion' };
    }
    const num = parseInt(str.replace(/,/g, ''), 10);
    return { target: num, suffix: '' };
  };

  useEffect(() => {
    const startTimestamps = {};
    const animationFrame = (timestamp) => {
      if (!startTimestamps.hasOwnProperty(1)) {
        data.forEach((item) => {
          startTimestamps[item.id] = timestamp;
        });
      }

      const newCounts = data.map((item) => {
        const { target, suffix } = parseValue(item.head);
        const elapsed = timestamp - startTimestamps[item.id];
        const progress = Math.min(elapsed / duration, 1);
        let currentValue = Math.floor(progress * target);

        if (suffix === 'Billion') {
          currentValue = `$${Math.round(currentValue / 1_000_000_000)} Billion`;
        } else {
          currentValue = currentValue.toLocaleString();
        }

        return { id: item.id, value: currentValue };
      });

      setCounts(newCounts);

      const allDone = newCounts.every((c) => {
        const target = parseValue(data.find((d) => d.id === c.id).head).target;
        const currentNum = typeof c.value === 'string' ? parseInt(c.value.replace(/\D/g, '')) : c.value;
        return currentNum >= target;
      });

      if (!allDone) requestAnimationFrame(animationFrame);
    };

    requestAnimationFrame(animationFrame);
  }, []);

  const featureData = [
    { icon: <FaUsers className="text-3xl lg:text-4xl text-[rgb(182,135,86)]" />, title: 'Professional', desc: 'GTCFX is a global leader in financial derivatives, established in 2012. Serving over 985,000 clients across more than 100 countries, recognized for excellence and innovation.' },
    { icon: <LuUserRoundCheck className="text-3xl lg:text-4xl text-[rgb(2,0,47)]" />, title: 'Regulated', desc: 'GTC Global Ltd and GTC Global Trade Capital Co. Limited operate under strict regulatory oversight, adhering to AML & KYC standards in Mauritius and Vanuatu.' },
    { icon: <BsPalette2 className="text-3xl lg:text-4xl text-[rgb(182,135,86)]" />, title: 'Experienced', desc: 'We’ve been trailblazers in shaping the financial services industry, innovating products, services, and platforms that set new standards.' },
    { icon: <BiCheckShield className="text-3xl lg:text-4xl text-[rgb(2,0,47)]" />, title: 'Trusted', desc: 'Our continuous growth and focus on customer satisfaction make us a trusted partner for top-notch financial derivatives solutions worldwide.' },
  ];

  return (
    <section className="bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold "><span className="text-[rgb(2,0,47)]">Register With</span> <span className="text-[rgb(182,135,86)]">Our Broker</span></h2>
        <p className="mt-2 text-lg sm:text-xl lg:text-2xl font-bold ">
          <span className="text-[rgb(182,135,86)]">GTCFX Globally Trusted </span> & Multi-Regulated Broker
        </p>

        {/* Counters */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {counts.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[whitesmoke] hover:bg-white shadow-md hover:shadow-xl transition-all duration-150 p-6 sm:p-8 rounded-lg flex flex-col items-center"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(2,0,47)] to-[rgb(247,172,93)]">
                {item.value}
              </h3>
              <p className="mt-2 text-sm sm:text-base lg:text-lg text-[rgb(2,0,47)]">
                {data.find((d) => d.id === item.id).text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hover:shadow-xl hover:bg-[whitesmoke] transition-all duration-150 p-4 sm:p-6 rounded-lg"
            >
              <h2 className="pb-2 flex items-center gap-3 sm:gap-4 text-[rgb(2,0,47)]">
                {feature.icon}
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[rgb(182,135,86)]">{feature.title}</span>
              </h2>
              <p className="text-sm sm:text-base text-[rgb(2,0,47)]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-[4em]">
         <button
      
                  
                    className="relative px-8 md:px-20 py-3 text-white rounded-full 
                    bg-gradient-to-r from-blue-950 to-[rgb(184,136,82)] 
                    overflow-hidden transition-transform duration-300 
                    hover:scale-110 hover:rotate-1"
                  >
                    <span className="relative z-10"><a href="https://www.gtcfx.com/" className="font-semibold">Register With Gtcfx Now</a></span>
                    <span className="glow-slide"></span>
                  </button>
      </div>
      </div>
    </section>
  );
}

export default Gtcfx;